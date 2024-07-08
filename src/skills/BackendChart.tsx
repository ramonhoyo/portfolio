"use client";
import { Box, Button, Card } from '@mui/material';
import React from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import BackendDetailsDialog from './BackendDetailsDialog';
import BackendChartComponent from './BackendChartComponent';

export default function BackendChart() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ position: 'relative', p: 2 }}>
      <Card
        sx={{
          left: '50%',
          transform: 'translate(-50%)',
          borderRadius: '50%',
          elevation: 3,
          height: '25rem',
          width: '25rem',
          position: 'absolute',
        }}>
      </Card>

      <Box sx={{ pt: 4 }}>
        <BackendChartComponent />
        <Box sx={{ zIndex: 100, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            endIcon={<OpenInFullIcon />}
            onClick={() => setOpen(true)}
          >
            Backend
          </Button>
        </Box>
      </Box>


      <BackendDetailsDialog open={open} setOpen={setOpen} />
    </Box>
  );
}
