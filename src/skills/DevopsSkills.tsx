"use client";
import React from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Box, Button } from '@mui/material';
import DevopsRadarComponent from './DevopsRadarComponent';
import DevopsDetailsDialog from './DevopsDetailsDialog';

export default function DevopsSkills() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box>
      <DevopsRadarComponent />

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button endIcon={<OpenInFullIcon />} onClick={() => setOpen(true)}>Devops</Button>
      </Box>

      <DevopsDetailsDialog open={open} setOpen={setOpen} />
    </Box>
  );
}
