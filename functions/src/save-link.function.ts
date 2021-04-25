//
import * as functions from 'firebase-functions';
import { getFireStoreDB } from './firestore';
const db = getFireStoreDB();

export const saveLink = functions.https.onCall(async (data, context) => {
  // Grab the text parameter.
  let link = data.link;
  let timestamp = data.timestamp;
  let previewData = data.previewData;

  if (!link) {
    functions.logger.error('No Link Provided for saving');
    return null;
  }
  const uid = context?.auth?.uid;
  const name = context?.auth?.token?.name;
  const picture = context?.auth?.token?.picture;
  const email = context?.auth?.token.email;
  let updatedLinkData: any = {
    link,
    email,
    uid,
    timestamp,
  };
  if (previewData) {
    const { description, images, url, title, siteName } = previewData;
    updatedLinkData = { ...updatedLinkData, description, image: images?.[0], url, title, siteName };
  } else {
    const { host } = new URL(link);
    updatedLinkData = {
      siteName: host,
      url: link,
    };
  }
  await db.collection('users').doc(email).collection('links').add(updatedLinkData);
  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  // Send back a message that we've succesfully written the message
  return updatedLinkData;
});
