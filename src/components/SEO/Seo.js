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
        <link rel='icon' href={ImgFavicon} />

        <meta name='title' content='Front-end Developer' />
        <meta name='description' content="I'm Hung an Front-end Developer" />

        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://hunghg255.github.io/portfolio'
        />

        <meta property='og:title' content='Front-end Developer' />
        <meta
          property='og:description'
          content="I'm Hung an Front-end Developer"
        />
        <meta property='og:image' content={ImgSeo} />
      </Helmet>
    </div>
  );
}
