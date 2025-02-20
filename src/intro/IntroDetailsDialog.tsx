import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview';
import IntroAccordion from './IntroAccordion';


const markdown = `
**Who am I**

**What motivates me as a sowtware developer**

**What did I did until now**

**How do i see in a few years**


`;

export type IntroDetailsDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function IntroDetailsDialog(props: IntroDetailsDialogProps) {
  const { open, setOpen } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const descriptionElementRef = React.useRef<HTMLElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      scroll='paper'
      maxWidth='lg'
      fullWidth
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">About me</DialogTitle>
      <IntroAccordion />
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
