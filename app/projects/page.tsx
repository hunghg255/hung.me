import React from 'react';

// import Head from 'next/head';

import Projects from 'src/components/Projects/Projects';
import { getProjects } from 'src/utils/projetcts';

const ProjectsPage = async () => {
  const data = await getProjects();

  return (
    <>
      {/* <Head>
        <title>Projects</title>
        <link rel='canonical' href='https://hung.thedev.id/projects'></link>
        <meta property='og:url' content='https://hung.thedev.id/projects' />
      </Head> */}
      <Projects projects={data as any} />
    </>
  );
};

export default ProjectsPage;
