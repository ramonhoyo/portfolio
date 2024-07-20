import React from 'react'
import { SkillsData } from '@/data/skills';
import SkillDetails from '@/skills/SkillDetails';

export async function generateStaticParams() {
  return SkillsData.map(({ label }) => ({
    label
  }))
}

export default function page({ params }: { params: { label: string } }) {
  const data = SkillsData.find((project) => project.label === params.label);

  if (!data) {
    return (
      <main>
        <h1>Not found</h1>
      </main>
    )
  }

  return <SkillDetails skill={data} />
}
