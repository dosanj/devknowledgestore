const admin = require('firebase-admin');
let db: any = null;
export function getFireStoreDB() {
  if (!db) {
    admin.initializeApp();
    db = admin.firestore();
    db.settings({
      ignoreUndefinedProperties: true,
    });
  }
  return db;
}
