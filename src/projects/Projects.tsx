"use client";
import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import TempleteProjectCard from './TempleteProjectCard'


const data = [
  {
    title: 'UPIITA Parking',
    icon: 'https://github.com/ramonhoyo/parking-android/blob/main/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png?raw=true',
    subtitle: 'This is parking application for a final degree project at UPIITA-IPN, Mexico',
    tags: ['git', 'react', 'javascript', 'stripe', 'firebase', 'googlemaps', 'github'],
    description: `
Showcase react-native application, for allowing parking operation such as

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
Application to show femenicides and other crimes against women at México City.

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


https://app-delitos-upiita-ipn.vercel.app/
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
];

export default function Projects() {
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
              onSeeMore={() => null}
              onLike={() => null}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
