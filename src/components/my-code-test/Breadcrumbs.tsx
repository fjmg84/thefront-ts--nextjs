import * as React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({breadcrumb}: any) {

  return (
    <div role="presentation" onClick={handleClick}>
      
      <Breadcrumbs aria-label="breadcrumb"  separator="›">

     
        {
          breadcrumb.map(({name, href})  => {
            return  <Link
              key={href}
              underline="hover"
              color="inherit"
              style={{
                textTransform: 'capitalize'
              }}
              href={href}
            >
              {name === '' ?  <HomeIcon fontSize="inherit" /> : name}
            </Link>;
          })
        }
        
      </Breadcrumbs>
    </div>
  );
}