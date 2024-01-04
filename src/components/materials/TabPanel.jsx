import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';

const CustomTabPanel = (props) => {
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
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const allyProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const TabPanel = ({ content, theme }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Main navigation panel"
          >
            {Object.keys(content).map((key, i) => (
              <Tab
                key={key}
                label={key}
                {...allyProps(i)}
              />
            ))}
          </Tabs>
        </Box>
        {Object.keys(content).map((key, i) => (
          <CustomTabPanel value={value} index={i} key={key}>
            {content[key]}
          </CustomTabPanel>
        ))}
      </Box>
    </ThemeProvider>
  );
}

TabPanel.propTypes = {
  content: PropTypes.object,
  theme: PropTypes.object,
};

export default TabPanel;
