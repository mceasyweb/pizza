import { AppBar, Tab, Tabs, Container } from '@mui/material';
import { SwitchModeButton } from 'mui-theme-provaider';
import React, { useState } from 'react';
import Pizza from '../Pizza';
import TabPanel from '../TabPanel/index';
import Licoli from '../Licoli/index';
import Impostazioni from '../Impostazioni/index';

const FullWidthTabs = () => {
  const [value, setValue] = useState(0);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={'xs'} sx={{ backgroundColor: 'background.paper' }} disableGutters>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChangeTabs}
          indicatorColor='secondary'
          variant='fullWidth'
          textColor='inherit'
        >
          <Tab label='Pizza' id='tab-1' />
          <Tab label='Licoli' id='tab-2' />
          <Tab label='Impostazioni' id='tab-2' />

          <SwitchModeButton />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Pizza />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Licoli />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Impostazioni />
      </TabPanel>
    </Container>
  );
};

export default FullWidthTabs;
