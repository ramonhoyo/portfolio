import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BackendChartComponent from './BackendChartComponent';
import { Box } from '@mui/material';
import MarkdownPreview from '@uiw/react-markdown-preview';
import FrontendRadarComponent from './FrontendRadarComponent';

const icons = [
  "formik",
  "reactquery",
  "mui",
  "react",
  "graphql",
  "typescript",
  "redux",
];

const markdown = `
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
`;

export type BackendDetailsDialogProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function BackendDetailsDialog(props: BackendDetailsDialogProps) {
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        maxWidth='lg'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Backend Development</DialogTitle>
        <DialogContent dividers>

          <FrontendRadarComponent />

          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
            {icons.map((icon) => (
              <img
                key={icon}
                alt={icon}
                height="64"
                width="64"
                src={`https://cdn.simpleicons.org/${icon}/`}
              />
            ))}
          </Box>

          <Box sx={{ p: 2 }}>
            <MarkdownPreview source={markdown} />
          </Box>

          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
