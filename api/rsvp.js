// Vercel Serverless Function — receives RSVP submissions and forwards
// them to a Google Apps Script web app that appends rows to a Sheet.
//
// Required env vars (set in Vercel project settings):
//   RSVP_SHEET_URL         Google Apps Script /exec URL
//   RSVP_SHARED_SECRET     Optional. If set, must match the Apps Script SHARED_SECRET.
//
// Local dev: create a .env file and run `vercel dev`, OR test the form against
// the deployed preview. Plain `npm run dev` (Vite) won't run this function.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, side, attending, guests, message, submittedAt } = req.body || {};

  if (!name || typeof name !== 'string' || name.length > 120) {
    return res.status(400).json({ error: 'Invalid name' });
  }
  if (!['groom', 'bride'].includes(side)) {
    return res.status(400).json({ error: 'Invalid side' });
  }
  if (!['yes', 'no'].includes(attending)) {
    return res.status(400).json({ error: 'Invalid attending value' });
  }

  const url = process.env.RSVP_SHEET_URL;
  if (!url) {
    console.error('RSVP_SHEET_URL is not set');
    return res.status(500).json({ error: 'Server not configured' });
  }

  const payload = {
    name: name.trim(),
    side, // 'groom' (Nhà Trai) | 'bride' (Nhà Gái)
    attending,
    guests: Number(guests) || 1,
    message: (message || '').toString().slice(0, 1000),
    submittedAt: submittedAt || new Date().toISOString(),
    secret: process.env.RSVP_SHARED_SECRET || '',
    userAgent: req.headers['user-agent'] || '',
  };

  try {
    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });
    if (!upstream.ok) {
      const text = await upstream.text();
      console.error('Upstream error', upstream.status, text);
      return res.status(502).json({ error: 'Upstream error' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('RSVP forward failed', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
