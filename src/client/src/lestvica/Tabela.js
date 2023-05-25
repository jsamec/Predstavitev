import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'mesto', headerName: 'Mesto', flex: 1},
  { field: 'ime', headerName: 'Ime', flex: 1.5},
  { field: 'tocke', headerName: 'Točke', flex: 1},
  { field: 'napredek', headerName: 'Napredek', flex: 1},
];

const rows = [
    { id: 0, mesto: 1, ime: 'John', tocke: 100, napredek: 10 },
    { id: 1, mesto: 2, ime: 'Jane', tocke: 80, napredek: 20 },
    { id: 2, mesto: 3, ime: 'Mark', tocke: 60, napredek: 0 },
    { id: 3, mesto: 4, ime: 'Mary', tocke: 40, napredek: 0 },
    { id: 4, mesto: 5, ime: 'Jake', tocke: 20, napredek: 10}
];



export default function Tabela( {uporabnikiInTocke} ) {

  console.log(uporabnikiInTocke);

  const rows = uporabnikiInTocke.map((uporabnik, index) => {
    return {
      id: index,
      mesto: uporabnik.mesto,
      ime: uporabnik.ime,
      tocke: uporabnik.tocke,
      napredek: uporabnik.napredek
    }
  });

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}