import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default class SpreadsheetConection {
  spreadsheet_ID = "";
  private_key = "";
  email = "";
  scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file"
  ];
  doc;
  constructor({ _spreadsheet_ID, _private_key, _email }) {
    this.spreadsheet_ID = _spreadsheet_ID;
    this.email = _email;
    this.private_key = _private_key;
  }

  async init_connection() {
    const jwt = new JWT({
      email: this.email,
      key: this.private_key,
      scopes: this.scopes
    });

    let _doc = new GoogleSpreadsheet(this.spreadsheet_ID, jwt);

    await _doc.loadInfo();

    this.doc = _doc;

    return _doc;
  }

  getSpreadsheet() {
    return this.doc;
  }

  getSheetByName(_name) {
    const sheet = this.doc.getSheetByName(_name);
    return sheet;
  }
}
