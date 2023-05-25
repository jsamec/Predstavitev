import React, { useState, useEffect } from 'react';
import Tabela from './Tabela';
import BackendService from '../services/backend-service'


export default function Lestvica() {

  const [uporabnikiInTocke, setUporabnikiInTocke] = useState([]);

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
