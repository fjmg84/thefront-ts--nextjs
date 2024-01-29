

import React from 'react';


import LayoutMyCodeTest from 'layouts/MyCodeTest';
import { Grid } from '@mui/material';
import MenuWithOutImageComponent from 'components/my-code-test/Menu/MenuWithOutImage';


const MENU_PRINCIPAL = [{
  name: 'Nosotros',
  href: '#'
}, {
  name: 'Contáctanos',
  href: '#'
}, {
  name: 'Conoce más',
  href: '#'
}];

const MENU_HOME = [{
  name: 'Tramites en linea',
  href: '#'
}, {
  name: 'Ahorro e inversion',
  href: '#'
}, {
  name: 'Empresa',
  href: '#'
},
{
  name: 'Pension',
  href: '#'
}, {
  name: 'Descuento',
  href: '#'
}, {
  name: 'Eventos',
  href: '#'
}];

export default function MyCodeTestHome(){
  
  return <LayoutMyCodeTest menu={MENU_PRINCIPAL} menuPage={MENU_HOME}>
    
    <Grid container sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
      <MenuWithOutImageComponent menu={MENU_HOME} />
      {/* 
    
    
    

      <MenuWithImageComponent menu={DATA_MENU_ONE} />
    */}
    </Grid> 
  </LayoutMyCodeTest>;
}