const { Firestore } = require('@google-cloud/firestore');
const fs = require('path');

let firestore = null;
let buff = Buffer.from(process.env.GCLOUD_CREDENTIALS, 'base64');
let credentials = buff.toString('ascii');
fs.writeFileSync('./credentials.json', credentials);
export async function getFireStoreDB() {
  if (!firestore) {
    const firestore = new Firestore({
      projectId: 'linkstore-821d8',
      keyFilename: './credentials.json',
    });
    firestore.settings({
      ignoreUndefinedProperties: true,
    });
  }
  return firestore;
}
