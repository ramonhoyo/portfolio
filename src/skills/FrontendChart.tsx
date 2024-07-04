"use client";
import React from 'react';
import { Box, Button } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FrontendRadarComponent from './FrontendRadarComponent';
import FrontendDetailsDialog from './FrontendDetailsDialog';


export default function FrontendChart() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <FrontendRadarComponent />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          endIcon={<OpenInFullIcon />}
          onClick={() => setOpen(true)}
        >
          Frontend
        </Button>
      </Box>

      <FrontendDetailsDialog open={open} setOpen={setOpen} />
    </Box>
  );
}
