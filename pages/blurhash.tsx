import React, { useRef, useState } from 'react';
import { getPlaiceholder } from 'plaiceholder';

export const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const BlurHash = () => {
  const refInput: any = useRef();
  const [blurhash, setBlurhash] = useState<any>('');

  const onSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('file', refInput.current?.files?.[0]);
      const base64 = await toBase64(refInput.current?.files?.[0]);

      const r = await fetch(
        'https://hunghg-portfolio.vercel.app/api/blurhash',
        {
          body: JSON.stringify(base64),
          method: 'post',
        },
      ).then((r) => r.json());
      setBlurhash(r);
    } catch (error) {}
  };

  return (
    <>
      <h1>Get BlurHash Image</h1>
      <input type={'file'} ref={refInput} />
      <button onClick={onSubmit}>Submit</button>

      <div>
        {blurhash?.blurhash?.base64 && (
          <textarea value={blurhash?.blurhash?.base64} />
        )}
      </div>
    </>
  );
};

export default BlurHash;
