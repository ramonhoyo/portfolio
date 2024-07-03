"use client";
import { Box, Button } from '@mui/material';
import React from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import BackendDetailsDialog from './BackendDetailsDialog';
import BackendChartComponent from './BackendChartComponent';

export default function BackendChart() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <BackendChartComponent />

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          endIcon={<OpenInFullIcon />}
          onClick={() => setOpen(true)}
        >
          Backend
        </Button>
      </Box>

      <BackendDetailsDialog open={open} setOpen={setOpen} />
    </div>
  );
}
