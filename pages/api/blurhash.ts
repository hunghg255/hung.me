const fs = require('fs');
import { getPlaiceholder } from 'plaiceholder';

export default async function handler(req: any, res: any) {
  const base64Data = JSON.parse(req.body)?.split('base64,')?.[1];
  const buff = Buffer.from(base64Data, 'base64');

  fs.writeFileSync('public/copy_img.png', buff, 'base64', function (err) {
    console.log(err);
  });

  const blurhash = await getPlaiceholder('/copy_img.png');

  res.status(200).json({ blurhash: blurhash });
}
