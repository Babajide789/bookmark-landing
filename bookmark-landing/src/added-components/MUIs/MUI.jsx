import React, { useState } from 'react';
import "./MUI.css"

// import rightIMG from '../assets/images/illustration-hero.svg';
import { Box, Tabs, Tab, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ChromeSVG from "../../assets/images/logo-chrome.svg"
import FireFoxSVG from "../../assets/images/logo-firefox.svg"
import OperaSVG from "../../assets/images/logo-opera.svg"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel({ children, value, index }) {
  return value === index ? (
    <div role="tabpanel" id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
      <Box sx={{ p: 2 }}>{children}</Box>
    </div>
  ) : null;
}

const MUI = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (_e, newVal) => setTabValue(newVal);

  const faqItems = [
    { q: 'What is this?', a: 'This is a simple bookmark manager app.' },
    { q: 'How to install?', a: 'Use Chrome or Firefox buttons above.' },
    { q: 'Support?', a: 'Contact us via the email form below.' },
  ];

  return (
    <div className="home-panel">
      {/* MUI Tab Section */}
      <div className="MUI-tab smooth-fade">
        <Box>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Simple Bookmarking" {...a11yProps(0)} />
            <Tab label="Speedy Searching" {...a11yProps(1)} />
            <Tab label="Easy Sharing" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            Bookmarks in one click. Organize your bookmarks however you like.
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            Instant search across your saved sites.
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            Share bookmarks with your friends instantly.
          </TabPanel>
        </Box>
      </div>

      {/* Download Extension Panel */}
      <div className="download-extension-panel smooth-fade">
        {/* HEADER AND PARAGRAPH */}
        <div className="MUI-CARD">
          <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
            {[{ChromeSVG}, {FireFoxSVG}, {OperaSVG}].map((br, i) => (
              <Card key={i} sx={{ width: 200 }}>
                <CardContent>
                  <Typography variant="h6">{br} Extension</Typography>
                  <Typography variant="body2">Add to {br}</Typography>
                  <button className="btn-install">Install</button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="FAQ smooth-fade">
        <div className="MUI-FAQ">
          {faqItems.map((item, idx) => (
            <Accordion key={idx}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MUI;
