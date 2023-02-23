import { getCookie } from 'cookies-next';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

interface Props {
  theme: boolean;
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    let theme: string = 'light';

    if (ctx.req) {
      theme = getCookie('data-theme', {
        req: ctx.req,
        res: ctx.res,
      }) as string;
    }

    return { ...initialProps, theme };
  }

  render() {
    return (
      <Html lang='vi' data-theme={this.props.theme}>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap'
            rel='stylesheet'
          />
          {/* <Script
            id='gtag-base'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGLG29S');
          `,
            }}
          />

          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-KGLG29S'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript> */}

          <Script
            strategy='lazyOnload'
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-WZW3J8S7EF`}
          ></Script>
          <Script id='google-analytics' strategy='lazyOnload'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WZW3J8S7EF');
            `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
