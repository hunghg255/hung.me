import localFont from 'next/font/local';

// export const iaWriter = localFont({
//   src: [
//     {
//       path: './iAWriterQuattroV.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './iAWriterQuattroV-Italic.ttf',
//       weight: '400',
//       style: 'italic',
//     },
//   ],
//   variable: '--fontIAWriter',
// });

export const fontGeist = localFont({
  src: [
    {
      path: './geist/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--fontGeist',
});

// export const firaCode = localFont({
//   src: [
//     {
//       path: './fira-code-v9-latin-regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './fira-code-v9-latin-500.woff2',
//       weight: '500',
//       style: 'italic',
//     },
//   ],
//   variable: '--fontFiraCode',
// });
