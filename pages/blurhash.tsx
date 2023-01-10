/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

// const QuillC = dynamic(() => import('src/components/Quill/Quill'), {
//   ssr: false,
// });

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
  const [currentImage, setCurrentImage] = useState<any>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (loading) return;
    try {
      setLoading(true);
      let formData = new FormData();
      formData.append('file', refInput.current?.files?.[0]);
      const base64 = await toBase64(refInput.current?.files?.[0]);

      const r = await fetch('https://blurhash-image.onrender.com/blurhash', {
        method: 'post',
        body: formData,
      }).then((r) => r.json());
      setLoading(false);
      setBlurhash(r);
      setCurrentImage(base64);
    } catch (error) {}
  };

  return (
    <>
      <h1>Get BlurHash Image</h1>
      <br />

      <input type={'file'} ref={refInput} />
      <button onClick={onSubmit}>{loading ? 'Loading...' : 'Submit'}</button>
      <br />

      <div>
        <br />
        {blurhash?.blurhash?.base64 && (
          <>
            {blurhash?.blurhash?.base64 && <textarea value={blurhash?.blurhash?.base64} />}
            <br />

            <br />

            <div>
              <h2>
                <strong>Current Image</strong>
              </h2>

              <img
                src={currentImage}
                alt=''
                style={{
                  width: 300,
                  height: 300 / (blurhash.blurhash.img.width / blurhash.blurhash.img.height),
                }}
              />
              <br />
              <h2>
                <strong>Blurhash Image</strong>
              </h2>

              <img
                src={blurhash?.blurhash?.base64}
                alt=''
                style={{
                  width: 300,
                  height: 300 / (blurhash.blurhash.img.width / blurhash.blurhash.img.height),
                }}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BlurHash;
