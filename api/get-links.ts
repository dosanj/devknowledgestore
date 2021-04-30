import { VercelRequest, VercelResponse } from '@vercel/node';
import { getFireStoreDB } from './firestore';
const firestore = getFireStoreDB();
export default async (req: VercelRequest, res: VercelResponse) => {
  const body = JSON.parse(req.body);
  const email = body?.email;
  if (!email) {
    res.statusCode = 400;
    res.json({ message: 'please provide a email address in the body' });
  }
  const snapshot = await firestore.collection('users').doc(email).collection('links').get();
  const documents: any[] = [];
  snapshot.forEach((doc: any) => {
    const { description, image, link, siteName, title, url, timestamp } = doc.data();
    documents.push({ description, image, link, siteName, title, url, timestamp });
  });
  res.statusCode = 200;
  res.json(documents.sort((a, b) => b?.timestamp - a?.timestamp));
};
