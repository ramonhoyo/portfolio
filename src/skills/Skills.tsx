import React from 'react'
import Image from 'next/image'

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>


      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Image src="/in_development.jpg" alt="In Development" width={800} height={500} />
        <h3>Under Development</h3>
      </div>
    </section>
  )
}
