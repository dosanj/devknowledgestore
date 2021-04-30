// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { VercelRequest, VercelResponse } from '@vercel/node';
import { getLinkPreview } from 'link-preview-js';
export default async (req: VercelRequest, res: VercelResponse) => {
  const data = JSON.parse(req.body);
  let response = null;
  const link = data?.link;
  if (!link) {
    res.statusCode = 400;
    res.json({ message: 'No Link Provided for saving' });
  }
  response = await getLinkPreview(link, {
    headers: { 'user-agent': 'googlebot', 'Accept-Language': 'en-US' },
  });
  res.statusCode = 200;
  res.json(response);
};
