import React from 'react';
import { Grid, SxProps, Theme, Typography } from '@mui/material';
import { Project } from 'types/my-code-test/type';

interface Props {
  project: Project;
  customStyles?: SxProps<Theme>
}

export default function CardComponent({project, customStyles}:Props){
  return <Grid item style={{
    border: 'solid 1px gray',
    color: 'gray',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 20,
  }}
  sx={customStyles}
  >
    <Typography component={'h2'} style={{
      fontWeight: 'bolder',
    }}>{project.name}</Typography>
    <Typography>{project.texts}</Typography>
              
    <Typography component='p' style={{
      fontWeight: 'bolder',
    }}>
      {project.name}
      <Typography component='span' style={{
        paddingInlineStart: 3
      }}>{project.description}</Typography>
    </Typography>
              
              
              
  </Grid>;
}