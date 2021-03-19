import React from 'react';
import { Helmet } from 'react-helmet';

export default function Seo() {
  return (
    <div className='application'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Hunghg | Front-end Developer</title>

        <meta property='og:type' content='website' />

        <link rel='icon' href={'https://raw.githubusercontent.com/hunghg255/my-portfolio/main/src/Image/favicon.png'} />

        <meta name='title' content='Hunghg | Front-end Developer' />
        <meta name='description' content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)" />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://portfolio-c0129.web.app/' />
        <meta property='og:title' content='Hunghg | Front-end Developer' />
        <meta property='og:description' content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)" />
        <meta property='og:image' content={'https://raw.githubusercontent.com/hunghg255/my-portfolio/main/src/Image/me.JPG'} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://portfolio-c0129.web.app/' />
        <meta property='twitter:title' content='Hunghg | Front-end Developer' />
        <meta property='twitter:description' content="I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)" />
        <meta property='twitter:image' content={'https://raw.githubusercontent.com/hunghg255/my-portfolio/main/src/Image/me.JPG'} />

        <meta property='og:image:type' content='image/jpeg' />
      </Helmet>
    </div>
  );
}
