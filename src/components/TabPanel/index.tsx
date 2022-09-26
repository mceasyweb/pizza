import React from 'react';
import { Box } from '@mui/material';

const TabPanel: React.FC<TabPanelProps> = ({ children, index, value, sx, ...other }) => {
  return (
    <Box hidden={value !== index} {...other} sx={sx}>
      {value === index && <Box p={3}>{children}</Box>}
    </Box>
  );
};

export default TabPanel;
