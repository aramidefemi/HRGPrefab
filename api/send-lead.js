export const config = { runtime: 'edge' };

const LABELS = {
  full_name: 'Full Name',
  email: 'Email',
  phone: 'Phone',
  zip_code: 'ZIP Code',
  project_type: 'Project Type',
  company: 'Company',
  message: 'Message',
};

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const buildEmailHtml = (source, fields) => {
  const rows = Object.entries(fields)
    .filter(([key, value]) => key !== 'source' && value != null && String(value).trim())
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top">${LABELS[key] || key}</td><td style="padding:8px 12px">${escapeHtml(String(value))}</td></tr>`
    )
    .join('');

  return `<h2 style="margin:0 0 16px">New ${escapeHtml(source)} submission</h2><table style="border-collapse:collapse">${rows}</table>`;
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async function handler(request) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_EMAIL_FROM;
  const to = process.env.LEAD_EMAIL_TO;

  if (!apiKey || !from || !to) {
    return json({ error: 'Email service is not configured' }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const { source = 'Lead', full_name, email, ...rest } = body;

  if (!full_name?.trim() || !email?.trim()) {
    return json({ error: 'Full name and email are required' }, 400);
  }

  if (!isValidEmail(email.trim())) {
    return json({ error: 'Invalid email address' }, 400);
  }

  const fields = { full_name: full_name.trim(), email: email.trim(), ...rest };
  const subject = `[HRG Prefab] New ${source} from ${full_name.trim()}`;
  const html = buildEmailHtml(source, fields);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: to.split(',').map((addr) => addr.trim()),
      reply_to: email.trim(),
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error('Resend error:', err);
    return json({ error: 'Failed to send email' }, 502);
  }

  return json({ ok: true });
}
