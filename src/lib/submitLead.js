const NETWORK_ERROR =
  'We could not send your request right now. Please try again in a moment or email us at jason@hrgprefab.com.';

export async function submitLead(source, data) {
  let res;
  try {
    res = await fetch('/api/send-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source, ...data }),
    });
  } catch {
    throw new Error(NETWORK_ERROR);
  }

  const payload = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(payload.error || 'Something went wrong. Please try again.');
  }
  return payload;
}
