import { green, pink, red } from '@mui/material/colors';

export const SkillsData = [
  {
    title: 'Backend',
    subtitle: 'Backend Development',
    label: 'backend',
    description: `
## NestJS Framework

I have pleny of expertice working with NestJS, In my opinion is the best NodeJS framework. It is a progressive Node.js framework for building efficient, reliable and scalable server-side applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

But What I love most of it is its archirecture and flexibility to work basically with any thing, from RESTful APIs to GraphQL, Websockets, Queues, etc. not to mention the microservices package that has a default integration with most of the popular message brokers like RabbitMQ, Kafka, Redis, etc.

In the projects sections you can find some of the projects I have worked with NestJS.
<br />
<br />


## NodeJS

As Node developer, I not only work with NestJS, Express or any other backend framework, In the past I used NodeJS to build a cross-platform desktop application, using ElectronJS including a C++ Node Addon loaded in runtime as a shared library.
<br />
<br />

## API integrations

A long my career I got the oportunity to work in differents project that requeries some external interactions, like:
<br />
<br />

  - **Payment gateways** (Stripe).
  - **Email services** (Mailchimp).
  - **OAuth2** (Google, Azure, etc).
  - **Web3 integrations** (Ethereum, Binance Smart Chain, Bitcoin).
  - **Cloud services** (AWS, Azure, Google Cloud).
  - **and many more...**

<br />
<br />
    `,
    imgs: [
      "https://cdn.simpleicons.org/swagger",
      "https://cdn.simpleicons.org/redis",
      "https://cdn.simpleicons.org/mongodb",
      "https://cdn.simpleicons.org/nestjs",
      "https://cdn.simpleicons.org/graphql",
      "https://cdn.simpleicons.org/typescript",
      "https://cdn.simpleicons.org/typeorm",
    ],
    chart: {
      strokeColor: green[200],
      fillColor: green[500],
      data: [
        { subject: 'TypeORM (MySQL, Postgres)', A: 80 },
        { subject: 'Mongoose', A: 85 },
        { subject: 'Swagger', A: 90 },
        { subject: 'GraphQL', A: 75 },
        { subject: 'Redis', A: 80 },
        { subject: 'BullMQ', A: 80 },
      ]
    }
  },
  {
    title: 'Frontend',
    subtitle: 'Frontend development',
    label: 'frontend',
    description: `
## NextJS & React

I have pleny of expertice working with NestJS, In my opinion is the best NodeJS framework. It is a progressive Node.js framework for building efficient, reliable and scalable server-side applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

But What I love most of it is its archirecture and flexibility to work basically with any thing, from RESTful APIs to GraphQL, Websockets, Queues, etc. not to mention the microservices package that has a default integration with most of the popular message brokers like RabbitMQ, Kafka, Redis, etc.

In the projects sections you can find some of the projects I have worked with NestJS.
<br />
<br />


## NodeJS

As Node developer, I not only work with NestJS, Express or any other backend framework, In the past I used NodeJS to build a cross-platform desktop application, using ElectronJS including a C++ Node Addon loaded in runtime as a shared library.
<br />
<br />

## API integrations

A long my career I got the oportunity to work in differents project that requeries some external interactions, like:
<br />
<br />

  - **Payment gateways** (Stripe).
  - **Email services** (Mailchimp).
  - **OAuth2** (Google, Azure, etc).
  - **Web3 integrations** (Ethereum, Binance Smart Chain, Bitcoin).
  - **Cloud services** (AWS, Azure, Google Cloud).
  - **and many more...**

<br />
<br />
`,
    imgs: [
      "https://cdn.simpleicons.org/formik",
      "https://cdn.simpleicons.org/reactquery",
      "https://cdn.simpleicons.org/mui",
      "https://cdn.simpleicons.org/react",
      "https://cdn.simpleicons.org/graphql",
      "https://cdn.simpleicons.org/typescript",
      "https://cdn.simpleicons.org/redux",
    ],
    chart: {
      strokeColor: pink[200],
      fillColor: pink[500],
      data: [
        { subject: 'React, RN', A: 145 },
        { subject: 'Formik', A: 130 },
        { subject: 'GraphQL (Apollo)', A: 86 },
        { subject: 'redux, redux-toolkit', A: 110 },
        { subject: 'react-query', A: 145 },
        { subject: '@mui', A: 120 },
      ]
    }
  },
  {
    title: 'Devops',
    subtitle: 'Devops',
    label: 'devops',
    description: `
## Devops


As software developer, I have been working with Devops tools and practices for a while, I have experience working with:

- **CI/CD**: I have experience working with Gitlab CI/CD, Github Actions, etc.
- **Cloud Services**: I have experience working with AWS, Azure, Google Cloud.
- **Containers**: I have experience working with Docker, Docker Compose, Kubernetes, etc.
- **Infrastructure as Code**: I have experience working with Terraform, CloudFormation, etc.
- **AWS**: I have experience working with AWS, EC2, S3, RDS, etc.
- **Linux**: I have experience working with Linux, I have been using it as my main OS for a while.
<br />
<br />
`,
    imgs: [
      "https://cdn.simpleicons.org/github",
      "https://cdn.simpleicons.org/kubernetes",
      "https://cdn.simpleicons.org/amazonwebservices",
      "https://cdn.simpleicons.org/docker",
      "https://cdn.simpleicons.org/googlecloud",
      "https://cdn.simpleicons.org/terraform",
      "https://cdn.simpleicons.org/linux",
    ],
    chart: {
      strokeColor: red[200],
      fillColor: red[500],
      data: [
        { subject: 'AWS', A: 100 },
        { subject: 'Firestore', A: 100 },
        { subject: 'Docker, k8s', A: 70 },
        { subject: 'Github Actions', A: 90 },
        { subject: 'Terraform', A: 70 },
        { subject: 'Linux', A: 70 },
      ],
    },
  },
];
