'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: { xs: 2, sm: 3 },
        mt: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(4px)',
        color: 'text.secondary',
      }}
    >
      <Divider sx={{ my: 2, borderColor: 'primary.main', borderWidth: '1px' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} JRM Montero. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="https://www.linkedin.com/in/jrmmontero" target="_blank" rel="noopener" color="inherit">
            <LinkedInIcon sx={{ '&:hover': { color: 'primary.main' } }} />
          </Link>
          <Link href="mailto:jose142578@gmail.com" color="inherit">
            <EmailIcon sx={{ '&:hover': { color: 'primary.main' } }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}