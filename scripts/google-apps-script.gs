/**
 * Google Apps Script — paste this into a script attached to your RSVP Google Sheet.
 *
 * Setup:
 *   1. Create a new Google Sheet. Rename Sheet1 to "RSVP" (or change SHEET_NAME below).
 *   2. Add header row in row 1:
 *        Submitted At | Name | Side | Attending | Guests | Message | User Agent
 *   3. Extensions → Apps Script → paste this entire file → Save.
 *   4. (Optional) Set a shared secret below AND in your Vercel env (RSVP_SHARED_SECRET).
 *   5. Deploy → New deployment → Type: Web app
 *        Execute as: Me
 *        Who has access: Anyone
 *      Copy the /exec URL → set as RSVP_SHEET_URL in Vercel env.
 */

const SHEET_NAME = 'RSVP';
const SHARED_SECRET = ''; // leave empty to disable check

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);

    if (SHARED_SECRET && body.secret !== SHARED_SECRET) {
      return jsonOut({ error: 'unauthorized' }, 401);
    }

    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    if (!sheet) return jsonOut({ error: 'sheet not found' }, 500);

    const sideLabel = body.side === 'bride' ? 'Nhà Gái' : body.side === 'groom' ? 'Nhà Trai' : '';
    sheet.appendRow([
      body.submittedAt || new Date().toISOString(),
      body.name || '',
      sideLabel,
      body.attending || '',
      body.guests || 1,
      body.message || '',
      body.userAgent || '',
    ]);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ error: String(err) }, 500);
  }
}

function jsonOut(obj, _status) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
