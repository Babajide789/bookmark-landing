import React from 'react';
import "./Extensions.css"

import { Box, Tabs, Tab, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import ChromeSVG from "../../assets/images/logo-chrome.svg";
import FireFoxSVG from "../../assets/images/logo-firefox.svg";
import OperaSVG from "../../assets/images/logo-opera.svg";

import backDrop from "../../assets/images/bg-dots.svg"

const browserData = [
  {
    name: "Chrome",
    logo: ChromeSVG,
    version: "62"
  },
  {
    name: "Firefox",
    logo: FireFoxSVG,
    version: "55"
  },
  {
    name: "Opera",
    logo: OperaSVG,
    version: "46"
  }
];


const Extensions = () => {
  return (
    <div>
      {/* Download Extension Panel */}
      <div className="download-extension-panel smooth-fade">
        {/* … header and paragraph … */}
        <div className="MUI-CARD">
          <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap" flexDirection="row" alignItems="center">
              {browserData.map((browser, i) => (
            <Card
                key={i}
                sx={{
                  width: 220,
                  textAlign: "center",
                  padding: 2,
                  marginTop: "40px",
                  boxShadow: 6,
                }}
            >
              <CardContent>
                <img
                  src={browser.logo}
                  alt={`${browser.name} logo`}
                  style={{ width: "60px", height: "auto", marginBottom: "10px" }}
                />

                <Typography variant="h6" gutterBottom>{browser.name}</Typography>
                <Typography variant="body2">Add to {browser.name}</Typography>
                <Typography variant="caption" className="version-text">
                  Minimum version {browser.version}
                </Typography>

                {/* ✅ Backdrop image before button */}
                <img
                  src={backDrop}
                  alt="separator"
                  style={{
                    width: "100%",
                    margin: "16px 0",
                    objectFit: "contain",
                    marginTop:"35px"
                  }}
                />

                <button className="btn-install">Add & Install Extension</button>
              </CardContent>

            </Card>
            ))}
          </Box>


        </div>
      </div>
    </div>
  );
};

export default Extensions;



