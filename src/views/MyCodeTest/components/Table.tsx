import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props {
    cell: string[];
    rows: Array<Record<string, unknown>>;
    title?: string;
}

export default function BasicTable({cell, rows, title}:Props) {
 
  return (
    <TableContainer component={Paper} style={{
      marginTop: '20px',
      marginBottom: '20px',
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableHead style={{
          background: '#f5f5f5', 
        }}>
          {
            title && <TableRow >
              <TableCell style={{
                color: 'gray',
                fontWeight: 400,
                fontSize: '34px',
              }} colSpan={200}>{title}</TableCell>
            </TableRow>
          }
          <TableRow >
            {
              cell.map((item, index) => <TableCell key={index} align="left" style={{
                color: 'gray'
              }}>{item}</TableCell>)
            
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {Object.values(row).map((value, index) =>  <TableCell key={index} align="left" style={{
                color: 'gray'
              }}>
                {typeof value !== 'undefined' ? String(value) : ''}
              </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}