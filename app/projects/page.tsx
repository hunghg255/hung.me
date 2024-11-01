import React, { Suspense } from 'react';

import Projects from 'src/components/Projects/Projects';
import { getProjects } from 'src/utils/projetcts';

const ProjectsPage = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects projects={await getProjects()} />
    </Suspense>
  );
};

export default ProjectsPage;
