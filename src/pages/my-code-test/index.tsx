import React from 'react';
import LayoutMyCodeTest from 'layouts/MyCodeTest';
import { Grid } from '@mui/material';
import MenuWithOutImageComponent from 'components/my-code-test/Menu/Menu';
import { Menu } from 'types/my-code-test/type';

interface Props {
  menuDefault: Menu[],
  menuHomePage: Menu[],
}

export default function MyCodeTestHome(props:Props){

  const {menuDefault, menuHomePage} = props;
  
  return <LayoutMyCodeTest menu={menuDefault} menuPage={menuHomePage}>
    
    <Grid container sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
      <MenuWithOutImageComponent menu={menuHomePage} />
    </Grid> 


  </LayoutMyCodeTest>;
}

import data from '../../mock/data.json';

export async function getStaticProps() {
  return {
    props: {
      menuDefault: data.menu,
      menuHomePage: data.menuHomePage
    }
  };
}