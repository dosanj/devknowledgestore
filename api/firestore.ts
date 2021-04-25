const { Firestore } = require('@google-cloud/firestore');

let firestore = null;
export function getFireStoreDB() {
  if (!firestore) {
    firestore = new Firestore();
    firestore.settings({
      ignoreUndefinedProperties: true,
    });
  }
  return firestore;
}
