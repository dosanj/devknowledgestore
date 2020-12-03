import * as functions from 'firebase-functions';
import { getFireStoreDB } from './firestore';
const db = getFireStoreDB();
export const deleteLink = functions.https.onCall(async (data, context) => {
  // Grab the text parameter.
  const link = data.link;

  if (!link) {
    functions.logger.error('No Link Provided for deleting');
    return null;
  }
  const email = context?.auth?.token.email;
  const items = await db.collection('users').doc(email).collection('links').where('link', '==', link).get();
  items.forEach((doc: any) => {
    doc.ref.delete();
  });
  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  // Send back a message that we've succesfully written the message
  return { result: 'success' };
});
