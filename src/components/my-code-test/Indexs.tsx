import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function IndexsComponent(){
  return (
    <Grid item style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }}>
      <Typography component='h1' style={{
        color: '#808083',
        fontWeight: 900
      }}>
            Índice
      </Typography>
        
      <Typography component='p' style={{
        color: '#808083',
      }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, itaque!
      </Typography>
      <Typography component='p'
        style={{
          color: '#808083',
          
        }}
      >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, itaque!
      </Typography>
      <Typography component='p'
        style={{
          color: '#808083',
          
        }}
      >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eveniet numquam dignissimos consequatur voluptatem cum libero impedit quisquam in ratione ex ab voluptatibus ullam odit sapiente porro totam reiciendis ipsam?
      </Typography>
    </Grid>);
}