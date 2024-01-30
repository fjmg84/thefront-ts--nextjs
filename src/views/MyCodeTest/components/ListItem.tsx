import React from 'react';

interface Props{
    values: string[], 
    listStyle: string
}


export default function ListItem({values, listStyle='none'}: Props){
  return <ul style={{
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    listStyle,
    padding: 0,
    paddingLeft: '28px',
    margin: 0,
  }}>
    {
      values.map((text, index) => {
        return <li key={index}>{text}</li>;
      })
    }
  </ul>;  
}