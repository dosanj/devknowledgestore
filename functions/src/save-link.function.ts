//
import * as functions from 'firebase-functions';
import { getLinkPreview } from 'link-preview-js';
import { getFireStoreDB } from './firestore';
const db = getFireStoreDB();

export const saveLink = functions.https.onCall(async (data, context) => {
  // Grab the text parameter.
  const link = data.link;

  if (!link) {
    functions.logger.error('No Link Provided for saving');
    return null;
  }
  const uid = context?.auth?.uid;
  const name = context?.auth?.token?.name;
  const picture = context?.auth?.token?.picture;
  const email = context?.auth?.token.email;
  const linkPreviewData = await linkPreview(link);
  let updatedLinkData: any = {
    link,
    email,
    uid,
  };
  if (linkPreviewData) {
    const { description, images, url, title, siteName } = linkPreviewData;
    updatedLinkData = { ...updatedLinkData, description, image: images?.[0], url, title, siteName };
  }
  await db.collection('links').add(updatedLinkData);
  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  // Send back a message that we've succesfully written the message
  return updatedLinkData;
});

async function linkPreview(link: string) {
  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    link = `http://${link}`;
  }
  let response = null;
  try {
    response = await getLinkPreview(link, { headers: { 'user-agent': 'googlebot', 'Accept-Language': 'en-US' } });
  } catch (e) {
    functions.logger.error(e);
  }
  return (response as unknown) as { description: string; images: string; url: string; title: string; siteName: string };
}
