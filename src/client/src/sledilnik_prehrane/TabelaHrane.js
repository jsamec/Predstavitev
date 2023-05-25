import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


export default function Tabela( {hranaArray, izbrisiHrano} ) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Hrana</TableCell>
            <TableCell align="right">Kalorije</TableCell>
            <TableCell align="right">Količina&nbsp;(g)</TableCell>
            <TableCell align="right">Ogljikovi Hidrati&nbsp;(g)</TableCell>
            <TableCell align="right">Beljakovine&nbsp;(g)</TableCell>
            <TableCell align="right">Maščobe&nbsp;(g)</TableCell>
            <TableCell align="right"><Button disabled></Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hranaArray.map((hrana) => (
            <TableRow
              key={hrana.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {hrana.imeHrane}
              </TableCell>
              <TableCell align="right">{hrana.kolicina}</TableCell>
              <TableCell align="right">{hrana.energijskaVrednost}</TableCell>
              <TableCell align="right">{hrana.ogljikoviHidrati}</TableCell>
              <TableCell align="right">{hrana.beljakovine}</TableCell>
              <TableCell align="right">{hrana.mascobe}</TableCell>

              <TableCell align="right"><Button onClick={() => izbrisiHrano(hrana.key)}>Izbriši</Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}