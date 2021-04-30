const { Firestore } = require('@google-cloud/firestore');

let firestore = null;
export function getFireStoreDB() {
  if (!firestore) {
    let buff = Buffer.from(process.env.GCLOUD_CREDENTIALS, 'base64');
    let { client_email, private_key, project_id: projectId } = JSON.parse(buff.toString('ascii'));
    firestore = new Firestore({
      projectId,
      credentials: { client_email, private_key },
      ignoreUndefinedProperties: true,
    });
  }
  return firestore;
}
