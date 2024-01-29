import React from 'react';
import { Button, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from 'types/my-code-test/type';
import MenuMobileComponent from './components/MenuMobil';
import BasicBreadcrumbs from 'components/my-code-test/Breadcrumbs';
import MenuWithOutImageComponent from 'components/my-code-test/Menu/Menu';
import { usePathname } from 'next/navigation';



interface Props {
  menu: Menu[];
  menuPage?: Menu[],
  children: JSX.Element
}


export default function LayoutMyCodeTest({menu, menuPage, children}: Props){
  const pathname = usePathname();
 

  const breadcrumb = pathname?.split('/').map((item, index) => {
  
    const name = item.replaceAll('-', ' ') ;
 
    return {
      name,
      href: item,
      active: index === pathname?.split('/').length - 1,
    };
  });
 
  
  return <Grid container>

    <MenuMobileComponent menu={menu}>
      <List>
        {menuPage?.map(({name}) => (
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
      <MenuWithOutImageComponent menu={menuPage} />
    </Grid> 
    


    <Container>
      <BasicBreadcrumbs breadcrumb={breadcrumb}/>    
    </Container>

    {children}
    
  
  </Grid>;
}