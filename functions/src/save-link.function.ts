//
import * as functions from 'firebase-functions';
import { getFireStoreDB } from './firestore';
const db = getFireStoreDB();

export const saveLink = functions.https.onCall(async (data, context) => {
  // Grab the text parameter.
  const link = data.link;
  const uid = context?.auth?.uid;
  const name = context?.auth?.token?.name;
  const picture = context?.auth?.token?.picture;
  const email = context?.auth?.token.email;
  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  await db.collection('links').add({ link, email, uid });
  // Send back a message that we've succesfully written the message
  return { link, email, uid };
});
