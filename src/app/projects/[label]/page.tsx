import React from 'react'
import { ProjectsData } from '../../../data/projects';
import ProjectDetails from '@/projects/ProjectDetails';

export async function generateStaticParams() {
  return ProjectsData.map(({ label }) => ({
    label
  }))
}

export default function page({ params }: { params: { label: string } }) {
  console.log(params);
  const data = ProjectsData.find((project) => project.label === params.label);

  if (!data) {
    return (
      <main>
        <h1>Project not found</h1>
      </main>
    )
  }

  return <ProjectDetails data={data} />
}
