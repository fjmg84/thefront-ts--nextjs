import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { HomePage } from 'types/my-code-test/type';
import CardComponent from './components/Card';
import AccordionUsage from './components/Accordion';
import BasicTable from './components/Table';
import ListItem from './components/ListItem';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ListIndex from './components/ListIndex';

export default function MyCodeTestHomeView({projects, investor_service_section, frequent_questions, investment_manager, principal_function, commercial_agents}: HomePage){
  // console.log(commercial_agents);

  const [showMenu, setShowMenu] = useState(false);
  const [index] = useState(0);


  return <Grid container style={{
    color: 'gray',
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
        position: 'relative',
        alignContent: 'center'
      }}
      sx={{
        flexDirection: {xs: 'row', lg: 'column'},
      }}
    >

      <button onClick={() => setShowMenu(!showMenu)} 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          background: 'transparent',
          border: '2px solid gray',
          borderRadius: '10px',
          cursor: 'pointer',
          position: 'absolute',
          zIndex: 100
        }}
      ><MenuOpenIcon/></button>
      
      <Grid item xs={4}
        sx={{
          display: {xs: 'none', lg:'inline'}
        }}
        style={{
          flexDirection: 'column',
          gap: 20,
          borderRight: '1px solid gray',
          padding: '0',
          minHeight: '100%',
          transition: 'all 0.2s ease',
          translate: `${showMenu ? '-80%' : 0}`,
          position: `${showMenu ? 'absolute' : 'initial'}`,
          background: 'white'
        }}>

        <ListIndex activeIndex={index} listIndexs={[
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis?',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis?',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis?'
        ]}/>
      </Grid>
      

      <Grid item xs={12} lg={8}  gap={8} style={{
        padding: '0 2%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.2s ease',
        minHeight: '100%'
      }}

      sx={{
        marginLeft: {md: 0, lg: `${!showMenu ? 0 : '5%'}`},
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

          <ListItem values={investor_service_section} listStyle='decimal'/>

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

        <Grid container xs={12} gap={2}>
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

          <Typography component={'p'} style={{
            fontWeight: 'bolder',
          }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint iure eveniet fugit modi soluta aliquam corporis amet repudiandae nostrum.
          </Typography>
          
          <Typography component={'p'} style={{
            fontWeight: 'bolder',
          }}>
              Rafael Castellanos
          </Typography>

          <Typography component={'p'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint iure eveniet fugit modi soluta aliquam corporis amet repudiandae nostrum.
          </Typography>

          <BasicTable cell={[
            'Año',
            'Estudio',
            'Lugar',
          ]}
          rows={[
            {year: 2008, study: 'MBA, Babson Collage', place: 'Wellesley. Massachusetts'},
            {year: 1998, study: 'MBA, Babson Collage', place: 'Wellesley. Massachusetts'}
          ]}/>

          <Typography component={'p'} style={{width: '100%'}}>
              Experiencia profesional
          </Typography>

          <Typography component={'p'} style={{fontWeight: 'bolder', width: '100%'}} >
              Gerente de Inversiones AFP CONFIA
          </Typography>

          <Typography component={'p'} style={{width: '100%'}} >
              Funciones principales
          </Typography>

          <ListItem values={principal_function} listStyle='disc'/>
         
          <Typography component={'p'} style={{fontWeight: 'bolder', width: '100%'}} >
              Oficial de Riesgo Fiduciario AFP CONFIA
          </Typography>

          <Typography component={'p'} style={{width: '100%'}} >
              Funciones principales
          </Typography>

          <ListItem values={principal_function} listStyle='disc'/>

          <Typography component={'p'} style={{fontWeight: 'bolder', width: '100%'}} >
              Agentes Comercializadores
          </Typography>

          <Typography component={'p'} style={{ width: '100%'}} >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt iusto tenetur molestias accusantium assumenda aperiam id nisi doloremque autem? Dolorum fugiat nostrum, officia cupiditate labore delectus aliquid praesentium tenetur doloribus quaerat? Corrupti, minus rem. Libero ut laboriosam vero ullam dolor, laborum, cupiditate architecto nihil voluptatem neque, perferendis officiis. Unde, sint!
          </Typography>

          {
            commercial_agents.map(({data, title}, index) => {
              return <BasicTable key={index} title={title} cell={[
                'Nombre Completo',
                'Correo Electrónico',
                'Teléfono',
                'Dirección'
              ]}
              rows={data}/>;
            })
          }

          


        </Grid>


      </Grid>
    </Grid>
  </Grid>;
}