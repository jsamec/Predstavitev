import React, { useState, useEffect } from 'react';
import Tabela from './Tabela';
import BackendService from '../services/backend-service'


export default function Lestvica() {

  const [uporabnikiInTocke, setUporabnikiInTocke] = useState([
    { mesto: 1, ime: 'John', tocke: 100, napredek: 10 },
    { mesto: 2, ime: 'Jane', tocke: 80, napredek: 20 },
    { mesto: 3, ime: 'Mark', tocke: 60, napredek: 0 },
    { mesto: 4, ime: 'Mary', tocke: 40, napredek: 0 },
    { mesto: 5, ime: 'Jake', tocke: 20, napredek: 10},
    { mesto: 6, ime: 'Peter', tocke: 10, napredek: 10 },
    { mesto: 7, ime: 'Ben', tocke: 0, napredek: 0 },
    { mesto: 8, ime: 'Jack', tocke: 0, napredek: 0 },
    { mesto: 9, ime: 'John', tocke: 0, napredek: 0 },
    { mesto: 10, ime: 'Mike', tocke: 0, napredek: 0 },
    { mesto: 11, ime: 'Bob', tocke: 0, napredek: 0 },
  ]);

  //get data from database
  useEffect(() => {
    BackendService.fetchLeaderboard()
      .then((res) => {
        setUporabnikiInTocke(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Lestvica</h1>
      <Tabela uporabnikiInTocke={uporabnikiInTocke} />
    </div>
  );
}
