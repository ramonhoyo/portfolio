"use client";
import React from 'react';
import { Box, Button, Card } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FrontendRadarComponent from './FrontendRadarComponent';
import FrontendDetailsDialog from './FrontendDetailsDialog';


export default function FrontendChart() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ position: 'relative', p: 2 }}>
      <Card sx={{
        left: '50%',
        transform: 'translate(-50%)',
        borderRadius: '50%',
        height: '25rem',
        width: '25rem',
        position: 'absolute'
      }}>
      </Card>

      <Box sx={{ pt: 4 }}>
        <FrontendRadarComponent />
        <Box sx={{ zIndex: 100, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            endIcon={<OpenInFullIcon />}
            onClick={() => setOpen(true)}
          >
            Frontend
          </Button>
        </Box>
      </Box>


      <FrontendDetailsDialog open={open} setOpen={setOpen} />
    </Box>
  );
}
