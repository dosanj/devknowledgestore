import { VercelRequest, VercelResponse } from '@vercel/node';
import { getLinkPreview } from 'link-preview-js';
import { getFireStoreDB } from './firestore';
const firestore = getFireStoreDB();
export default async (req: VercelRequest, res: VercelResponse) => {
  const data = JSON.parse(req.body);
  let link = data.link;
  let timestamp = data.timestamp;
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
  const linkPreviewData = await linkPreview(link);
  let updatedLinkData: any = {
    link,
    email,
    timestamp,
  };
  if (linkPreviewData) {
    const { description, images, url, title, siteName } = linkPreviewData;
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

async function linkPreview(link: string) {
  let response = null;
  try {
    response = await getLinkPreview(link, { headers: { 'user-agent': 'googlebot', 'Accept-Language': 'en-US' } });
  } catch (e) {
    console.log(e);
  }
  return (response as unknown) as { description: string; images: string; url: string; title: string; siteName: string };
}
