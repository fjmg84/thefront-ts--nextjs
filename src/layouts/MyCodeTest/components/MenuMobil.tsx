import React, { useState } from 'react';
import { Box, Button,  Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Menu } from 'types/my-code-test/type';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    menu: Menu[],
    children: JSX.Element
}

export default function MenuMobileComponent({menu, children}: Props){

  const [openMenu, setOpenMenu] = useState(false);

  const list = () => (
    <Box
      sx={{ width:  250 }}
      role="presentation"
      onClick={() => setOpenMenu(false)}
      onKeyDown={() => setOpenMenu(false)}
    >
      <List>
        {menu.map(({name}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {children}
    
     
    </Box>
  );


  return  <>
    <Grid container sx={{ display: { md: 'none', xs: 'flex' }, mr: 1 }} justifyContent={'flex-end'}>
      <Button 
        onClick={() => setOpenMenu(true)}
        
      >
        <MenuIcon style={{
          color: 'gray'
        }} />
      </Button>
    </Grid>
    <Drawer
      anchor={'right'}
      open={openMenu}
      onClose={() => setOpenMenu(false)}
    >
      {list()}
    </Drawer>
  </>;
  
}