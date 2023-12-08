import React, { Suspense } from 'react';

import Projects, { ProjectSkeleton } from 'src/components/Projects/Projects';

const ProjectsPage = async () => {
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      {/* @ts-ignore */}
      <Projects />
    </Suspense>
  );
};

export default ProjectsPage;
