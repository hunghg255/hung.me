/* eslint-disable react/no-unknown-property */
import dynamic from 'next/dynamic';

import HeaderContainer from 'src/components/HeaderContainer/HeaderContainer';
import { fontGeist } from 'src/components/UI/font/font';
import { cookies } from 'next/headers';
import '../styles/globals.scss';

const Cursor = dynamic(() => import('src/components/UI/Cursor/Cursor'), {
  ssr: false,
});
const ScrollSmooth = dynamic(() => import('src/components/ScrollSmooth/ScrollSmooth'), {
  ssr: false,
});
const AosComponent = dynamic(() => import('src/components/AosComponent/AosComponent'), {
  ssr: false,
});
const Plum = dynamic(() => import('src/components/Plum/Plum'), {
  ssr: false,
});
const Progressbar = dynamic(() => import('src/components/Progessbar/Progessbar'), {
  ssr: false,
});
const LogArt = dynamic(() => import('src/components/LogArt/LogArt'), {
  ssr: false,
});
const ButtonScrollTop = dynamic(() => import('src/components/ButtonScrollTop'), {
  ssr: false,
});

export default function RootLayout({ children }: any) {
  const cookieStore = cookies();
  const dataTheme = cookieStore.get('data-theme');

  return (
    <html className={fontGeist.variable} data-theme={dataTheme?.value ? dataTheme.value : 'dark'}>
      <head>
        <meta charSet='utf-8' />
        <title>Hunghg | Front-end Developer</title>
        <meta property='og:site_name' content='Hunghg | Front-end Developer' />
        <meta property='og:type' content='website' />

        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='title' content='Hunghg | Front-end Developer' />
        <meta
          name='description'
          content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"
        />
        <meta property='og:locale' content='vi_VN' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://hung.thedev.id/' />
        <meta property='og:title' content='Hunghg | Front-end Developer' />
        <meta
          property='og:description'
          content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"
        />
        <meta
          property='og:image'
          content='https://cdn.jsdelivr.net/gh/hunghg255/static/og-img.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://hung.thedev.id/' />
        <meta property='twitter:title' content='Hunghg | Front-end Developer' />
        <meta
          property='twitter:description'
          content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"
        />
        <meta
          property='twitter:image'
          content='https://cdn.jsdelivr.net/gh/hunghg255/static/og-img.png'
        />

        <meta property='og:image:type' content='image/jpeg' />
        <meta name='robots' content='index, follow' />
        <meta
          name='googlebot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <meta
          name='bingbot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />

        <meta
          name='google-site-verification'
          content='fQuFJdHbSiH8czBosKz0oVZDXIDJRCEHcYIrzOoMNn4'
        />
      </head>
      <body>
        <HeaderContainer dataTheme={dataTheme?.value ? dataTheme.value : 'dark'} />

        <main>{children}</main>

        <Cursor />
        <ScrollSmooth />
        <AosComponent />
        <Plum />
        <Progressbar />
        <LogArt />
        <ButtonScrollTop />
      </body>
    </html>
  );
}
