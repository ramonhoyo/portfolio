"use client";
import React, { useState } from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import TempleteProjectCard from './TempleteProjectCard'
import ProjectDetailsDialog from './ProjectDetailsDialog';
import { Sacramento } from 'next/font/google';

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

const data = [
  {
    title: 'UPIITA Parking',
    icon: 'https://github.com/ramonhoyo/parking-android/blob/main/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png?raw=true',
    subtitle: 'This is parking application for a final degree project at UPIITA-IPN, Mexico',
    tags: ['git', 'react', 'javascript', 'stripe', 'firebase', 'googlemaps', 'github'],
    description: `
**Showcase react-native application**, that allow users parking operation such as

- Register vehicules.
- Get into a parking.
- Select a parking slot.
- Confirm slot.
- Compute payment based on entry date and hourly rate price.
- Perform a payment (Testing) using Stripe platform.
- Documentation: In spanish (requested by client).
`,
    cover: 'https://picsum.photos/seed/project-1/300/200',
    imgs: [
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/1.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/2.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/3.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/4.jpg?raw=true',
    ]
  },
  {
    title: 'Ciphertop Desktop (Windows, MacOS)',
    icon: 'https://i0.wp.com/cyphertop.com/wp-content/uploads/2021/03/cypher.png?resize=150%2C150&ssl=1',
    subtitle: 'Encryption application build with ElectronJS',
    tags: ['react', 'redux', 'electron', 'typescript', 'c++', 'webrtc', 'gitlab'],
    description: `
Security application allow users to:

- Add other users as friends
- Create groups.
- Send/Receive messages (text, audio, attach files from camera, gallery, internal vault etc)
- Secure audio/video calls with custom algorimth and a WebRTC implementation.
- Store encrypted files on "Virtual Units".
- Steganography operations. aslo encrypted.
- Dark/Ligth support.
- Multi-language.
- And more.

Tecnical details:

- Crossplatform web based application with Electron.
- React, Redux, redux-toolkiit, react-query, apollo-client.

https://cyphertop.com/
`,
    cover: 'https://picsum.photos/seed/project-2/300/200',
    imgs: [
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/desktop/01.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/desktop/02.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/desktop/03.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/desktop/04.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/desktop/05.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/desktop/06.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/desktop/07.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/desktop/08.png?raw=true',
    ]
  },
  {
    title: 'Cyphertop Android',
    icon: 'https://i0.wp.com/cyphertop.com/wp-content/uploads/2021/03/cypher.png?resize=150%2C150&ssl=1',
    subtitle: 'Encryption application for Android with custom encryption algorithm.',
    tags: ['android', 'androidstudio', 'gitlab', 'kotlin', 'c++', 'webrtc'],
    description: `
This is the Android version of Cyphertop application, a security application allow users to:

- Add other users as friends.
- Create groups.
- Send/Receive messages (text, audio, attach files from camera, gallery, internal vault etc)
- Secure audio/video calls with custom algorimth.
- Internal vault to store files encrypted with own custom encryption algorimth.
- Steganography operations. aslo encrypted.
- Dark/Ligth support.
- Multi-language.
- And more.

Tecnical details:

- Native Android application (Kotkin)
- Flows android archirecture guidelines. Conserns separation by data, domain and ui Layers, also separted by feature.
- Navigation graph and NavArgs.
- Dependency Injection with Hilt and Dagger.
- WebRTC for audio/video callings, with custom encryption algorithm implemented with the InsertableStreams API.
- Room
- Graphql API and REST API.
- Material Animation Library

`,
    cover: 'https://picsum.photos/seed/project-2/300/200',
    imgs: [

      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/mobile/01.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/mobile/02.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/mobile/03.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/mobile/04.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/mobile/05.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/mobile/06.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/mobile/07.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/mobile/08.png?raw=true',
      'https://github.com/ramonhoyo/cyphertop-screenshots/blob/main/mobile/09.png?raw=true',
    ]
  },
  {
    title: 'CDMX Feminicidios APP',
    subtitle: 'Project to show stats related to crimes against women at CDMX, México',
    tags: ['react', 'chartdotjs', 'googlesheets', 'mapbox', 'typescript', 'github', 'vercel'],
    description: `
Application to show feminicides and other crimes against women at México City.

Users can move over the map to see cases of:

- Feminicide
- Sexual abuse
- Sexual harassment
- Rape
- Family violence

Also users can filter results by years.

This application uses two data sources to retrive information.

1 - Official goverment open data: A excel is submited to a Goolge Sheet and consumed from our API.
2 - IA twitter detector. Internally a IA grab tweets and analize them to extract data. (I don't develop or mantain that IA).

With the information getted from data source a several stats are created and displayed to the user.

Implementation:

- Implemented in React with Next.js framework
- API routes to peform operations based on user filters selections
- Full responsive design
- Use of recharts for generate charts
- googleapis for get information from Google Sheet
- Mapbox, clustering for large data sets
- PDF export


[Open Project](https://app-delitos-upiita-ipn.vercel.app/)
`,
    cover: 'https://picsum.photos/seed/project-2/300/200',
    imgs: [
      '/screenshots/feminicides/00.png',
      '/screenshots/feminicides/01.png',
      '/screenshots/feminicides/02.png',
      '/screenshots/feminicides/03.png',
      '/screenshots/feminicides/04.png',
      '/screenshots/feminicides/05.png',
      '/screenshots/feminicides/06.png',
      '/screenshots/feminicides/07.png',
    ]
  },
  {
    title: 'MERN Stack Showcase (repo)',
    subtitle: 'Showcase that demostrate how I can build a backend and frontend',
    tags: ['nestjs', 'nextdotjs', 'mongodb', 'typescript', 'github', 'railway'],
    description: `
**MERN media challenge**

This proyect is a proposed solution for the challenge of the company "Disruptive Studios" for the position of "MERN Fullstack".

The challenge:

please refer to the file ["Challenge.pdf"](https://github.com/ramonhoyo/disructive-mern-test/blob/main/Challenge.pdf) for the full description of the challenge.


**Backend:** I implemented the solution node: 
 - nestjs
 - express
 - mongo
 - swagger

**Frondent:** I implemented this solution with a nextjs proyect with next tegnologies:

- React
- mui v5
- formik
- react-query.

[Github repo](https://github.com/ramonhoyo/disructive-mern-test)
[Live Demo](https://mellow-acceptance-production.up.railway.app/)
`,
    cover: 'https://picsum.photos/seed/project-2/300/200',
    icon: '/screenshots/media/disruptive.png',
    imgs: [
      '/screenshots/media/01.png',
      '/screenshots/media/02.png',
      '/screenshots/media/03.png',
      '/screenshots/media/04.png',
      '/screenshots/media/05.png',
      '/screenshots/media/06.png',
      '/screenshots/media/07.png',
    ]
  },
  {
    title: 'BSPay',
    subtitle: 'Centralized exchange for cryptocurrencies',
    tags: ['react', 'graphql', 'android', 'ios', 'github'],
    description: `
**BSPay: a centralized exchange**

BSPay Wallet is your ally to boost your operations safely and reliably, offering an intuitive experience and detailed analysis. It is designed so that you can take full advantage of the benefits and achieve your financial goals with complete confidence.

The ultimate digital wallet:

1. Easy-to-use user interface, designed to give you an intuitive experience.
2. Top-level security to protect your transactions and personal data.
3. Get access to a wide variety of cryptocurrencies and quality services.

Manage your funds safely and reliably with BSPay Wallet, giving you the protection and safeguard that your assets deserve. Our main focus is to provide you with peace of mind and confidence when transacting on our platform. The custody system guarantees effective protection of your assets and ensures their optimal protection. Additionally, for greater transparency and security, we perform real-time reserve testing, updated hourly, to demonstrate the correspondence of the assets we custody.

[Google Play](https://play.google.com/store/apps/details?id=com.businessshop.bspay&hl=en)
`,
    cover: 'https://picsum.photos/seed/project-2/300/200',
    icon: 'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/playstore-icon.png?raw=true',
    imgs: [
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/1.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/2.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/3.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/4.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/5.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/6.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/7.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/8.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/9.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/10.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/11.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/12.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/13.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/14.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/15.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/16.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/17.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/18.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/19.jpg?raw=true',
      'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/20.jpg?raw=true',
    ]
  },

];

export default function Projects() {
  const [project, setProject] = useState<Record<string, any> | null>(null);



  return (
    <Container sx={{ my: 2, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h3'>Projects</Typography>
        </Grid>

        {data.map((item, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <TempleteProjectCard
              title={item.title}
              subtitle={item.subtitle}
              tags={item.tags}
              description={item.description}
              icon={item.icon}
              imgs={item.imgs}
              cover={item.cover}
              onSeeMore={() => setProject(item)}
              onLike={() => null}
            />
          </Grid>
        ))}

        <Grid component={Paper} item xs={12} sx={{ mt: 2, ml: 2, p: 2, justifyContent: 'center', display: 'flex', backgroundColor: 'primary' }}>
          <Typography variant='h3' color='primary' sx={{ ...sacramento.style }}>I&apos;m working on new things, they will appear soon here...</Typography>
        </Grid>
      </Grid>

      <ProjectDetailsDialog
        data={project}
        setData={setProject}
      />
    </Container>
  )
}
