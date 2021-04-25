import { VercelRequest, VercelResponse } from '@vercel/node';
import { getFireStoreDB } from './firestore';
const firestore = getFireStoreDB();
export default async (req: VercelRequest, res: VercelResponse) => {
  const data = JSON.parse(req.body);
  // Grab the text parameter.
  const link = data.link;
  const email = data.email;
  if (!email) {
    res.statusCode = 400;
    res.json({ message: 'please provide a email address in the body' });
  }

  if (!link) {
    res.statusCode = 400;
    res.json({ message: 'No Link Provided for deleting' });
    return null;
  }
  const items = await firestore.collection('users').doc(email).collection('links').where('link', '==', link).get();
  items.forEach((doc: any) => {
    doc.ref.delete();
  });
  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  // Send back a message that we've succesfully written the message
  res.statusCode = 200;
  res.json({ result: 'success' });
};
