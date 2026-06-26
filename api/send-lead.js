import { sendLead } from '../lib/sendLeadHandler.js';

export const config = { runtime: 'edge' };

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async function handler(request) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const result = await sendLead(body, process.env);

  if (!result.ok) {
    return json({ error: result.error }, result.status);
  }

  return json({ ok: true });
}
