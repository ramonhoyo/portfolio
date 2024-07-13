import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BackendChartComponent from './BackendChartComponent';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import MarkdownPreview from '@uiw/react-markdown-preview';
import FrontendRadarComponent from './FrontendRadarComponent';
import DevopsRadarComponent from './DevopsRadarComponent';

const icons = [
  "github",
  "kubernetes",
  "amazonwebservices",
  "docker",
  "googlecloud",
  "terraform",
  "linux",
];

const markdown = `
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
`;

export type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function DevopsDetailsDialog(props: Props) {
  const { open, setOpen } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
        fullScreen={fullScreen}
        scroll='paper'
        maxWidth='lg'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Devops</DialogTitle>
        <DialogContent dividers>

          <DevopsRadarComponent />

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
            <MarkdownPreview style={{ backgroundColor: 'white', color: 'black', }} source={markdown} />
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
