import React from 'react';
import { Button, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Footer as FooterType, HomePage, Menu } from 'types/my-code-test/type';
import MenuMobileComponent from './components/MenuMobil';
import BasicBreadcrumbs from 'components/my-code-test/Breadcrumbs';
import NewsComponent from 'components/my-code-test/News';
import IndexsComponent from 'components/my-code-test/Indexs';
import MenuHomePageComponent from 'components/my-code-test/Menu/MenuHomePageComponent';

import Footer from './components/Footer';

interface Props {
  menu: Menu[];
  page:HomePage,
  footer: FooterType,
  children: JSX.Element
}

export default function LayoutMyCodeTest({menu, page, footer, children}: Props){
  const breadcrumb = [{
    name: 'Home',
    href: '/', 
  },{
    name: 'Ahorro e inversiones',
    href: '/ahorro-e-inversiones', 
  },{
    name: 'Ahorro voluntario',
    href: '/ahorro-e-inversiones/ahorro-voluntario', 
  },
  {
    name: 'Conoce nuestros Fondos',
    href: '', 
  }];
 
  console.log(footer);
 
  return <Grid container>

    <MenuMobileComponent menu={menu}>
      <List>
        {page.menu?.map(({name}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> 
    </MenuMobileComponent>

    <Grid container bgcolor='gray' justifyContent={'flex-end'} paddingX={9} paddingY={1} style={{zIndex: 10}}  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
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

    <Grid container sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
      <MenuHomePageComponent menu={page.menu} />
    </Grid> 
    
    <Container  maxWidth={'xl'}>
      <Grid container style={{
        display: 'flex',
        width: '100%',
        padding: 10
      }}
      sx={{ 
        flexDirection: { xs: 'column-reverse', lg: 'row'},
        gap: {xs: 20, md: 0},
      }}
      >
        <Grid item sx={{
          width: {xs: '100%', md: '70%'},
        }}>
          <BasicBreadcrumbs breadcrumb={breadcrumb}/>    
          {children}
        </Grid> 

        <Grid item  sx={{
          width: {xs: '100%', md: '30%'},
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          borderLeft: '1px solid gray',
          padding: '2%',
        }}
        >
          <IndexsComponent/>
          <NewsComponent/>
        </Grid>   
 
      </Grid>
    </Container>

    <Footer footer={footer}/>
    
  
  </Grid>;
}