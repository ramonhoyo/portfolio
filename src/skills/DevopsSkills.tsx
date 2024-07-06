"use client";
import React from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Box, Button } from '@mui/material';
import DevopsRadarComponent from './DevopsRadarComponent';
import DevopsDetailsDialog from './DevopsDetailsDialog';

export default function DevopsSkills() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{
        bgcolor: 'background.default',
        left: '50%',
        transform: 'translate(-50%)',
        borderRadius: '50%',
        height: 400,
        width: 400,
        position: 'absolute'
      }}>
      </Box>

      <Box sx={{ pt: 4 }}>
        <DevopsRadarComponent />
        <Box sx={{ zIndex: 100, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            endIcon={<OpenInFullIcon />}
            onClick={() => setOpen(true)}
          >
            Devops
          </Button>
        </Box>
      </Box>


      <DevopsDetailsDialog open={open} setOpen={setOpen} />
    </Box>
  );
}
