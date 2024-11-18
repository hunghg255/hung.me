import '../styles/tailwind.css';
import '../styles/globals.scss';

import { fontGeist } from 'src/components/UI/font/font';
import ClientComponent from 'app/ClientComponent';

export default function RootLayout({ children }: any) {
  return (
    <html className={fontGeist.variable} suppressHydrationWarning>
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
        <meta property='og:url' content='https://hunghg.me/' />
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
        <meta property='twitter:url' content='https://hunghg.me/' />
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
          content='rqkQvaV705ZKW_sDtCtBkos8BtnWhSEwXZXS6YlhSEI'
        />

        <script src='https://cursor-party.hunghg255.partykit.dev/cursors.js' defer></script>
      </head>
      <body>
        <ClientComponent>
          <main>{children}</main>
        </ClientComponent>
      </body>
    </html>
  );
}
