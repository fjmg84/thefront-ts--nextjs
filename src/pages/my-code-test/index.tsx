import React from 'react';
import { Container } from '@mui/material';
import LayoutMyCodeTest from 'layouts/MyCodeTest';
import { Menu, HomePage } from 'types/my-code-test/type';
import MyCodeTestHomeView from 'views/MyCodeTest';
import data from '../../mock/data.json';

interface Props {
  menuDefault: Menu[],
  homePage: HomePage,
}

export default function MyCodeTestHome(props:Props){

  const {menuDefault, homePage} = props;
  
  return <LayoutMyCodeTest menu={menuDefault} menuPage={homePage.menu}>
    
    <Container style={{
      padding:0
    }}
   
    >
      <MyCodeTestHomeView {...homePage}/>
    </Container>

  </LayoutMyCodeTest>;
}



export async function getStaticProps() {
  return {
    props: {
      menuDefault: data.menu,
      homePage: data.homePage
    }
  };
}