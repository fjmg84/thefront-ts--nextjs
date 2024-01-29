import { Button, Divider, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const DATA_MENU = [{
  name: 'Nosotros',
  href: '#'
}, {
  name: 'Contáctanos',
  href: '#'
}, {
  name: 'Conoce más',
  href: '#'
}];

export default function MyCodeTestHome(){

  return <Grid container bgcolor='gray' justifyContent={'flex-end'} paddingX={9}>
    {
      DATA_MENU.map(({name,href}, index) => {
        return <Grid item key={index} 
          style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
    
          }}
        >
          <Button  style={{
            color: 'white',
            fontWeight: 900,
          }}  href={href} >{name}</Button>
          
          <Divider orientation='vertical' style={{
            borderColor: 'white',
            borderRightWidth: 2,
            height: '50%',
            width: '2px',
            marginInline: 20,
      
          }}  /> 
       
        </Grid>;
      
      })}

    <Grid item  
      style={{
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    
      }}
    >
      <SearchIcon style={{
        color: 'white'
        
      }}/>
    </Grid>

  </Grid>;
}