import { Stack } from '@mui/material';
import React from 'react';

interface Props {
    activeIndex: number;
    listIndexs: string[]
}

export default function ListIndex({activeIndex, listIndexs}: Props){
  return <Stack style={{
    marginTop: '20%',
    gap: 10,
    fontWeight: 'bolder'
  }}>

    {
      listIndexs.map((item, index) => {
        return <div key={index} style={{
          display: 'flex',
          gap: 10,
          color: `${activeIndex === index ? '#d9272e' : 'gray'}`
        }}>
          {item}
          {
            activeIndex === index &&  <span style={{
              background: '#d9272e',
              borderRadius: '10px',
              width: '10px',
              height: 'auto',
              display: 'flex'
            }}/>
          }
        </div>;
      })
    }
         
          
  </Stack>; 
}