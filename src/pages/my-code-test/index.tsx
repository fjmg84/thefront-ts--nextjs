import React from 'react';
import LayoutMyCodeTest from 'layouts/MyCodeTest';
import { Container, Typography } from '@mui/material';
import { Menu } from 'types/my-code-test/type';

interface Props {
  menuDefault: Menu[],
  menuHomePage: Menu[],
}

export default function MyCodeTestHome(props:Props){

  const {menuDefault, menuHomePage} = props;
  
  return <LayoutMyCodeTest menu={menuDefault} menuPage={menuHomePage}>
    
 

    <Container>
      <Typography component={'h1'} >
        Conoce nuestros Fondos
      </Typography>
    </Container>

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