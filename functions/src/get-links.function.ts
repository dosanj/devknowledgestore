import * as functions from 'firebase-functions';
import { getFireStoreDB } from './firestore';
const db = getFireStoreDB();

export const getAllLinks = functions.https.onCall(async (data, context) => {
  const email = context?.auth?.token.email;
  const snapshot = await db.collection('users').doc(email).collection('links').get();
  const documents: any[] = [];
  snapshot.forEach((doc: any) => {
    const { description, image, link, siteName, title, url } = doc.data();
    documents.push({ description, image, link, siteName, title, url });
    return documents;
  });
});
