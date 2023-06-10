import Head from 'next/head';
import React from 'react';
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
