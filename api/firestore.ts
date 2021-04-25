const { Firestore } = require('@google-cloud/firestore');

let firestore = null;
console.log(process.env.GCLOUD_CREDENTIALS);
export function getFireStoreDB() {
  if (!firestore) {
    firestore = new Firestore();
    firestore.settings({
      ignoreUndefinedProperties: true,
    });
  }
  return firestore;
}
