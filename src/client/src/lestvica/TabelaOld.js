import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Tabela( {uporabnikiInTocke} ) {

  console.log(uporabnikiInTocke);

  return (
    <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 700 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mesto</TableCell>
            <TableCell align="right">Ime</TableCell>
            <TableCell align="right">Točke</TableCell>
            <TableCell align="right">Napredek</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {uporabnikiInTocke.map((uporabnik, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {uporabnik.mesto}
              </TableCell>
              <TableCell align="right">{uporabnik.ime}</TableCell>
              <TableCell align="right">{uporabnik.tocke}</TableCell>
              <TableCell align="right">{uporabnik.napredek}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}