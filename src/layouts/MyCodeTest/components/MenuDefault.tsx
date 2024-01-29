import React from 'react';
import { Button, Divider, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from 'types/my-code-test/type';

interface Props {
  menu: Menu[];
}

export default function MenuWithImageComponent({menu}: Props){
  return <Grid container>
    <Grid container bgcolor='gray' justifyContent={'flex-end'} paddingX={9} paddingY={1} style={{zIndex: 10}}>
      {
        menu.map(({name,href}, index) => {
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
              borderRightWidth: 3,
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

    </Grid>
  </Grid>;
}