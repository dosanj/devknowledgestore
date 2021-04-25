import { VercelRequest, VercelResponse } from '@vercel/node';
console.log(process.env.GCLOUD_CREDENTIALS);
export default async (req: VercelRequest, res: VercelResponse) => {
  let buff = Buffer.from(process.env.GCLOUD_CREDENTIALS, 'base64');
  let text = buff.toString('ascii');
  res.statusCode = 200;
  res.json(JSON.parse(text));
};
