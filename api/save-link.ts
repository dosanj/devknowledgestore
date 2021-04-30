import { VercelRequest, VercelResponse } from '@vercel/node';
import { getFireStoreDB } from './firestore';
const firestore = getFireStoreDB();
export default async (req: VercelRequest, res: VercelResponse) => {
  const data = JSON.parse(req.body);
  let link = data.link;
  let timestamp = data.timestamp;
  let previewData = data.previewData;
  let email = data.email;
  if (!email) {
    res.statusCode = 400;
    res.json({ message: 'please provide a email address in the body' });
  }
  if (!link) {
    res.statusCode = 400;
    res.json({ message: 'No Link Provided for saving' });
  }
  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    link = `http://${link}`;
  }
  let updatedLinkData: any = {
    link,
    email,
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
  await firestore.collection('users').doc(email).collection('links').add(updatedLinkData);
  res.statusCode = 200;
  res.json(updatedLinkData);
};
