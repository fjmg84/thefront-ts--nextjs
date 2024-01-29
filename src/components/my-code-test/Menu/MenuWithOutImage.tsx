import React from 'react';
import { Button, Divider, Grid } from '@mui/material';
import { Menu } from 'types/my-code-test/type';


interface Props {
    menu: Menu[];
}

export default function MenuWithOutImageComponent({menu}: Props){
  return <Grid container bgcolor='white' justifyContent={'flex-end'} paddingX={9} paddingY={1}
    style={{
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
    }}
  >
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
            color: 'gray',
            fontWeight: 900,
          }}  href={href} >{name}</Button>
          
          {
            index !== menu.length - 1 && <Divider orientation='vertical' style={{
              borderColor: 'gray',
              borderRightWidth: 3,
              height: '50%',
              width: '2px',
              marginInline: 20,
              borderRadius: '50px'
      
            }}  /> 
          }
       
        </Grid>;
      
      })}



  </Grid>;
}