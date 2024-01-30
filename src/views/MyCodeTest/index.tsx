import React from 'react';
import { Grid, Typography } from '@mui/material';
import { HomePage } from 'types/my-code-test/type';
import CardComponent from './components/Card';
import AccordionUsage from './components/Accordion';
import BasicTable from './components/Table';


export default function MyCodeTestHomeView({projects, investor_service_section, frequent_questions, investment_manager}: HomePage){
  console.log({projects, investor_service_section, frequent_questions, investment_manager});
  return <Grid container style={{
    color: 'gray'
  }}>
    <Grid item xs={12}>

      <Typography component={'h1'} style={{
        color: '#d9272e',
        fontWeight: 'bolder',
        fontSize: '56px',
      
      }} >
        Conoce nuestros Fondos
      </Typography>
    </Grid>

    <Grid container 
      xs={12}
      style={{
        display: 'flex',
      }}
      sx={{
        flexDirection: {xs: 'row', lg: 'column'},
        /* background: {xs: 'green', lg:'yellow'} */
      }}
    >

      <Grid item xs={12} lg={4} >Navegation</Grid>
      <Grid item xs={12} lg={8} gap={8} style={{
        padding: '2%',
        display: 'flex',
        flexDirection: 'column'
      }}
      >
        <Grid container xs={12} gap={3}
        >
          <Grid item style={{
            display: 'flex'
          }}  sx={{
            flexDirection: {xs: 'column', xl: 'row'},
          }}>
            
            <CardComponent 
              project={projects[0]}
              customStyles={{
                borderTopLeftRadius: {xs: '5px', xl: '5px'},
                borderTopRightRadius: {xs: '5px', xl: '0px'},
                borderEndStartRadius: {xs: '0px', xl: '5px'},
                width: {xs: '100%', xl: '50%'},
              }}
            />

            <CardComponent 
              project={projects[1]}
              customStyles={{
                borderTopRightRadius: {xs: '0px', xl: '5px'},
                borderBottomRightRadius: {xs: '0px', xl: '5px'},
                borderEndStartRadius: {xs: '5px', xl: '0px'},
                borderEndEndRadius: {xs: '5px', xl: '5px'},
                width: {xs: '100%', xl: '50%'}
              }}
            />
          </Grid>

          <Typography component={'p'}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod esse, impedit aperiam eligendi cum, consectetur voluptatibus molestiae explicabo deserunt consequuntur ab soluta. Animi consequuntur sint unde iure aliquam aliquid saepe maxime neque repellendus voluptatibus facere dolor sit nesciunt aut blanditiis cupiditate reiciendis asperiores, tenetur hic provident repudiandae rerum magni voluptate?
          </Typography>
        </Grid>
       
        <Grid container xs={12} gap={1}>
              
          <Typography component={'h1'} style={{
            fontWeight: 'bolder',
            fontSize: '36px'
          }}>
                Atención al inversionista
          </Typography>

          <Typography component={'p'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, mollitia?
          </Typography>

          <ul style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            listStyle: 'decimal',
            padding: 0,
            paddingLeft: '28px'
          }}>
            {
              investor_service_section.map((text, index) => {
                return <li key={index}>{text}</li>;
              })
            }
          </ul>  

        </Grid>      
  

        <Grid container xs={12} gap={1}>
          <Typography component={'h1'} style={{
            fontWeight: 'bolder',
            fontSize: '36px'
          }}>
               Preguntas Frecuentes (FAQ)
          </Typography>

          {
            frequent_questions.map(({question,  answer}, index) => {
              
              return <AccordionUsage key={index} id={index.toString()} title={question} details={answer}/>;
            })
          }
        </Grid>

        <Grid container xs={12} gap={1}>
          <Typography component={'h1'} style={{
            fontWeight: 'bolder',
            fontSize: '36px'
          }}>
               Administrador de Inversiones y Agentes Comercializadores
          </Typography>

          <Typography component={'p'} style={{
            fontWeight: 'bolder',
          }}>
               Administrador de Inversiones
          </Typography>

          <Typography component={'p'} style={{
            fontWeight: 'bolder',
         
          }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint iure eveniet fugit modi soluta aliquam corporis amet repudiandae nostrum.
          </Typography>

          <BasicTable cell={[
            'Asiento Registral No.',
            'Fecha de asiento registral',
            'Nombre de administrador de inversiones',
            'Nombre Gestor'
          ]}
          rows={investment_manager}/>
        </Grid>


      </Grid>
    </Grid>
  </Grid>;
}