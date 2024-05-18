import React, { Suspense } from 'react';

import Projects from 'src/components/Projects/Projects';
import { getProjects } from 'src/utils/projetcts';

export const revalidate = 3600;

const ProjectsPage = async () => {
  const projects = await getProjects();

  return <Projects projects={projects} />;
};

export default ProjectsPage;
