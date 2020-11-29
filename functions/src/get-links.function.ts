import * as functions from 'firebase-functions';
import { getFireStoreDB } from './firestore';
const db = getFireStoreDB();

export const getAllLinks = functions.https.onCall(async (data, context) => {
  const uid = context?.auth?.uid;
  const snapshot = await db.collection('links').where('uid', '==', uid).get();
  const documents: any = [];
  snapshot.forEach((doc: any) => {
    documents.push(doc.data());
  });
  return documents;
});
