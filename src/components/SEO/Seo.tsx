import React from 'react';
import { Helmet } from 'react-helmet';

import ImgFavicon from '../../Image/favicon.png';
import ImgSeo from '../../Image/seo.png';

export default function Seo() {
  return (
    <div className='application'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Hunghg | Front-end Developer</title>

        <meta property='og:type' content='website' />

        <link rel='icon' href={ImgFavicon} />

        <meta name='title' content='Hunghg | Front-end Developer' />
        <meta name='description' content="I'm Hung an Front-end Developer" />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://portfolio-c0129.web.app/' />
        <meta property='og:title' content='Hunghg | Front-end Developer' />
        <meta property='og:description' content="I'm Hung an Front-end Developer" />
        <meta property='og:image' content={ImgSeo} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://portfolio-c0129.web.app/' />
        <meta property='twitter:title' content='Hunghg | Front-end Developer' />
        <meta property='twitter:description' content="I'm Hung an Front-end Developer" />
        <meta property='twitter:image' content={ImgSeo} />

        <meta property='og:image:type' content='image/jpeg' />
      </Helmet>
    </div>
  );
}
