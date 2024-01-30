import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  id: string;
  title: string;
  details: string
}

export default function AccordionUsage({id, title, details}: Props) {
  return <Accordion style={{
    color: 'gray',
    backgroundColor: '#f5f5f5',
    padding: '10px',
  }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel${id}-content`}
      id={`panel${id}-header`}
      style={{
        fontWeight: 'bolder'
      }}
    >
      {title}
    </AccordionSummary>
    <AccordionDetails>
      {details}
    </AccordionDetails>
  </Accordion>;
      
     

  
}
