// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getLinkPreview } from "link-preview-js";
export default async (req, res) => {
  const { query } = req;
  let response = null;
  const link = query?.link ?? "https://github.com";
  response = await getLinkPreview(link, {
    headers: { "user-agent": "googlebot", "Accept-Language": "en-US" },
  });
  res.statusCode = 200;
  res.json(response);
};
