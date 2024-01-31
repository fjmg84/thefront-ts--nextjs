import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import LogoFooter from '../../../assets/logo-footer.png';
import { Footer as FooterType } from 'types/my-code-test/type';
import { EpArrowUpBold, MdiWhatsapp } from './Icons';

export default function Footer({footer}: {footer: FooterType}){
  return <Grid container xs={12} style={{
    background: '#77777a',
    width: '100%',

  }}>
    <Grid item style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'relative',
      padding: '45px 0',
      width: '100%',
    }}>
      <Button variant="contained" style={{
        background: '#fff',
        color: 'gray',
        fontWeight: 900,
      }}>Servicio de Asistencia</Button>
      <Typography style={{
        color: 'white',
        fontWeight: 900,
        marginLeft: '2%',
      }}>Disponible las 24 horas llamando al 2216-0898 o *MÁS desde tu celular</Typography>
      <Image src={LogoFooter} alt='logo-footer' width={220} height={80} style={{
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        bottom: '-54.5px'
      }}/>

      <div style={{
        position: 'absolute',
        right: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}>
        <div style={{
          background: '#d9272e',
          borderRadius: '50%',
          padding:10
        }}>
          <div style={{
            background: 'white',
            borderRadius: '50px',
            padding: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <MdiWhatsapp width={'1.5rem'} height={'1.5rem'} fill='#d9272e'/>
          </div>
        </div>

        <div style={{
          background: '#d9272e',
          borderRadius: '50%',
          padding:10
        }}>
          <div style={{
            background: 'white',
            borderRadius: '50px',
            padding: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <EpArrowUpBold width={'1.5rem'} height={'1.5rem'} fill='#d9272e'/>
          </div>
        </div>
      </div>
    </Grid>

    <Grid item style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#c3c3c3',
      width: '100%',
    }}
    sx={{
      padding: {xs: '15% 3%', md: 10}
    }}
    >

      <Grid container style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }} 
        
      sx={{
        justifyContent: {xs: 'center', md: 'space-between'}
      }}
      >
        <Grid item style={{
          display: 'flex',
          flexDirection: 'column',
        }} sx={{
          alignItems: {xs: 'center', md: 'flex-start'},
        }}>
          <Typography style={{
            fontWeight: 900,
            color: '#777777a',
            textTransform: 'uppercase',
            fontSize: '20px'
          }}
            
          >Afiliados</Typography>
          {
            footer.affiliates.map((item, index) => {
              return <Typography key={index} style={{
                color: '#777777a',
                fontSize: '14px',
                margin: '5px 0px',         
              }}>{item}</Typography>; 
            })
          }
        </Grid>

        <Grid item style={{
          display: 'flex',
          flexDirection: 'column',
        }} sx={{
          alignItems: {xs: 'center', md: 'flex-start'},
        }}>
          <Typography style={{
            fontWeight: 900,
            color: '#777777a',
            textTransform: 'uppercase',
            fontSize: '20px',
              
          }}>Pensionados</Typography>
          {
            footer.pensioners.map((item, index) => {
              return <Typography key={index} style={{
                color: '#777777a',
                fontSize: '14px' ,
                margin: '5px 0px',            
              }}>{item}</Typography>; 
            })
          }
        </Grid>

        <Grid item style={{
          display: 'flex',
          flexDirection: 'column',
        }} sx={{
          alignItems: {xs: 'center', md: 'flex-start'},
        }}>
          <Typography style={{
            fontWeight: 900,
            color: '#777777a',
            textTransform: 'uppercase',
            fontSize: '20px'
          }}>Empresas</Typography>
          {
            footer.companies.map((item, index) => {
              return <Typography key={index} style={{
                color: '#777777a',
                fontSize: '14px',
                margin: '5px 0px',             
              }}>{item}</Typography>; 
            })
          }
        </Grid>

        <Grid item style={{
          display: 'flex',
          flexDirection: 'column',
        }} sx={{
          alignItems: {xs: 'center', md: 'flex-start'},
        }}>
          <Typography style={{
            fontWeight: 900,
            color: '#777777a',
            textTransform: 'uppercase',
            fontSize: '20px'
          }}>ATENCIÓN al cliente</Typography>
          {
            footer.customer_service.map((item, index) => {
              return <Typography key={index} style={{
                color: '#777777a',
                fontSize: '14px' ,
                margin: '5px 0px',            
              }}>{item}</Typography>; 
            })
          }
        </Grid>
          
        <Grid item style={{
          display: 'flex',
          flexDirection: 'column',
        }} sx={{
          alignItems: {xs: 'center', md: 'flex-start'},
        }}>
          <Typography style={{
            fontWeight: 900,
            color: '#777777a',
            textTransform: 'uppercase',
            fontSize: '20px'
          }}>Ahorro voluntario</Typography>
          {
            footer.voluntary_savings.map((item, index) => {
              return <Typography key={index} style={{
                color: '#777777a',
                fontSize: '14px'  ,
                margin: '5px 0px',           
              }}>{item}</Typography>; 
            })
          }
        </Grid>
        
      </Grid>

    </Grid>

    <Grid item style={{
      background: '#dadada',
      width: '100%',
      
    }}  sx={{
      padding: {xs: '2%', md: '1% 80px'}
    }}>
      <Typography component='p'>
        {new Date().getFullYear()} © Copyright - AFP Confia - Politica de privacidad.
      </Typography>
    </Grid>
  </Grid>;
}