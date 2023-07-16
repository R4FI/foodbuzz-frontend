import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tabex.css';
import Products from '../AllProducts/Products';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Tabex(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs className='bgtab' value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab className='tabtext' label="Starter" {...a11yProps(0)} />
          <Tab className='tabtext' label="Main" {...a11yProps(1)} />
          <Tab className='tabtext' label="Soup" {...a11yProps(2)} />
          <Tab className='tabtext' label="Dessert" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Products categories="starter"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Products categories="main"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Products categories="soup"/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Products categories="Dessert"/>
      </TabPanel>
    </Box>
  );
}
