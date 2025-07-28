import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../FAQ-tab/FAQ.css";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const faqItems = [
    { q: 'What is this?', a: 'This is a simple bookmark manager app.' },
    {
      q: 'How can I request a new browser?',
      a: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Maurus augue massa, ultricies non ligula. Suspendisse imperdiet.'
    },
    { q: 'Is there a mobile app?', a: 'Contact us via the email form below.' },
    { q: 'What about Chromium browsers?', a: 'Contact us via the email form below.' }
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="FAQ-smooth-fade">
        <div className="MUI-FAQ">
          {faqItems.map((item, idx) => (
            <Accordion
              key={idx}
              expanded={expanded === `panel${idx}`}
              onChange={handleChange(`panel${idx}`)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <button className='infoButton'>More info</button>
      </div>
    </>
  );
};

export default FAQ;
