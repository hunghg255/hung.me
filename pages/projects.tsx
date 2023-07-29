import React from 'react';

import Head from 'next/head';

import Projects from 'src/components/Projects/Projects';
import { IProjects, getProjects } from 'src/utils/projetcts';

interface IPropsProjectsPage {
  projects: IProjects;
}

const ProjectsPage = (props: IPropsProjectsPage) => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel='canonical' href='https://hung.thedev.id/projects'></link>
        <meta property='og:url' content='https://hung.thedev.id/projects' />
      </Head>
      <Projects projects={props?.projects} />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getProjects();

  return {
    props: {
      projects: data,
    },
    revalidate: 30,
  };
};

export default ProjectsPage;
