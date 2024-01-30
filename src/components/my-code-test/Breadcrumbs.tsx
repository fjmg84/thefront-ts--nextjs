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
          breadcrumb.map(({name, href}, index)  => {
            return  <Link
              key={href}
              underline='none'
              color={breadcrumb.length -1  !== index ? 'inherit' : '#d9272e'}
              style={{
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
              }}
              href={href}
            >
              {name === 'Home' ?  <HomeIcon /> : name}
            </Link>;
          })
        }
        
      </Breadcrumbs>
    </div>
  );
}