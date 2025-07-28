import { Box, Tabs, Tab, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useState } from 'react';

import "../features-tab/Features.css"

import SimpleBookmark from "../../assets/images/illustration-features-tab-1.svg"
import SpeedySearching from "../../assets/images/illustration-features-tab-2.svg"
import EasySharing from "../../assets/images/illustration-features-tab-3.svg"


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

const Features = () => {
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (_e, newVal) => setTabValue(newVal);
  return (
    <>
      {/* MUI Tab Section */}
      <div className="MUI-tab smooth-fade">
        <Box>
            <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            TabIndicatorProps={{
              style: {
                backgroundColor: 'hsl(0, 94%, 66%)',
                height: '3px',
                borderRadius: '2px',
              }
            }}
          >
            <Tab
              label={<span className="tab-label">Simple Bookmarking</span>}
              {...a11yProps(0)}
              sx={{
                color: 'black',
                textTransform: 'none',
                fontWeight: '600'
              }}
            />
            <Tab
              label={<span className="tab-label">Speedy Searching</span>}
              {...a11yProps(1)}
              sx={{
                color: 'black',
                textTransform: 'none',
                fontWeight: '600'
              }}
            />
            <Tab
              label={<span className="tab-label">Easy Sharing</span>}
              {...a11yProps(2)}
              sx={{
                color: 'black',
                textTransform: 'none',
                fontWeight: '600'
              }}
            />


          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <div className="tab-content">
              <div className="tab-image">
                <img src={SimpleBookmark} alt="Simple Bookmarking" />
              </div>
              <div className="tab-text">
                <h4>Bookmark in one click</h4>
                <p>
                  Organize your bookmarks however you like. Our simple drag-and-drop
                  interface gives you complete control over how you manage your favorite sites.
                </p>
                <button>More Info</button>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <div className="tab-content">
              <div className="tab-image">
                <img src={SpeedySearching} alt="Speedy Searching" />
              </div>
              <div className="tab-text">
                <h4>Intelligent search</h4>
                <p>
                  Our powerful search feature will help you find saved sites in no time at all.
                  No need to trawl through all of your bookmarks.
                </p>
                <button>More Info</button>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <div className="tab-content">
              <div className="tab-image">
                <img src={EasySharing} alt="Easy Sharing" />
              </div>
              <div className="tab-text">
                <div className="tab-text-header">
                  <h4>Share your bookmarks</h4>
                </div>
                
                <div className="tab-text-para">
                  <p>
                    Easily share your bookmarks and collections with others. Create a shareable link
                    that you can send at the click of a button.
                  </p>
                  <button>More Info</button>
                </div>
              </div>
            </div>
          </TabPanel>

              
        </Box>
      </div>

    </>
  )
}

export default Features
