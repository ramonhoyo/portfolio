import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Tooltip, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image';
import React, { useEffect } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview';
import SwipeableTextMobileStepper from '@/components/SwipeableViews';
import InfiniteLooper from '@/components/InfiniteLooper';


export type Props = {
  data: Record<string, any> | null;
  setData: (value: Record<string, any> | null) => void;
}


export default function ProjectDetailsDialog(props: Props) {
  const { data, setData } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const open = !!data;
  const descriptionElementRef = React.useRef<HTMLElement>(null);

  const handleClose = () => {
    setData(null);
  }

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
      <DialogTitle id="scroll-dialog-title">{data?.title}</DialogTitle>
      <DialogContent dividers>

        <SwipeableTextMobileStepper imgs={data?.imgs || []} height={600} />

        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <InfiniteLooper speed={100} direction='right'>
            {data?.tags.map((tag: string) => (
              <Tooltip title={tag} key={tag}>
                <Image alt={tag} style={{ margin: 32, }} height={32} width={32} src={`https://cdn.simpleicons.org/${tag}`} />
              </Tooltip>
            ))}
          </InfiniteLooper>
        </Box>

        <Box sx={{ p: 2 }}>
          <MarkdownPreview style={{ backgroundColor: 'white', color: 'black', }} source={data?.description} />
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
  )
}
