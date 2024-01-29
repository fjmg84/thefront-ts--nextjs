import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ImageNotFound from '../../assets/image.png';

const DATA_NEWS = [{
  title: 'Titulo de Noticia',
  subtitle: 'Subtitulo',
  date: '23/Ene/2024'
},{
  title: 'Titulo de Noticia',
  subtitle: 'Subtitulo',
  date: '23/Ene/2024'
},{
  title: 'Titulo de Noticia',
  subtitle: 'Subtitulo',
  date: '23/Ene/2024'
}];

export default function NewsComponent(){
  return <Grid item columnSpacing={2}>
    <Typography component='h1'style={{
      color: '#808083',
      fontWeight: 900
    }} >Noticias</Typography>
    <Grid container style={{
      flexDirection:'column',
      gap: 10
    }}>

      {
        DATA_NEWS.map(({title, subtitle, date}, index) => {
          return (
            <Grid container key={index} gap={2} justifyContent={'flex-start'} alignItems={'center'} >
              <Grid item style={{
                borderRadius: '5px',
                overflow: 'hidden',
                display: 'flex'
                        
              }}>
                <Image src={ImageNotFound} alt='Image Not Found' width={100} height={100}/>
              </Grid>
              <Grid item>
                <Typography style={{
                  color: '#808083',
                }}>{title}</Typography>
                <Typography style={{
                  color: '#808083',
                  fontSize: 'small'
                }}>{subtitle}</Typography>
                <Typography style={{
                  color: '#808083',
                  fontSize: 'small'
                }}>{date}</Typography>
              </Grid>
            </Grid>
          );
        })
      }
    </Grid>
  </Grid>;
}