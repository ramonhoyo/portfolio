import React from 'react'
import { Box, Typography } from '@mui/material'
import ContactBox from './ContactBox';

export default function Contact() {
  return (
    <Box id="contact" sx={{ my: 2, p: 2 }}>
      <Box sx={{ textAlign: 'center' }} hidden>
        <Typography variant='h5'>Thanks you for visiting this page</Typography>
      </Box>
      <ContactBox />
    </Box>
  )
}
