import { VercelRequest, VercelResponse } from '@vercel/node';
console.log(process.env.GCLOUD_CREDENTIALS);
export default async (req: VercelRequest, res: VercelResponse) => {
  res.statusCode = 200;
  res.json(process.env.GCLOUD_CREDENTIALS);
};
