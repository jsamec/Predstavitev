import * as React from 'react';

import Button from '@mui/material/Button';
import dayjs from 'dayjs';

import IzborHrane from './IzborHrane';
import IzborDnevaInObroka from './IzborDnevaInObroka';
import SeznamHrane from './SeznamHrane';
import Vizualizacija from './Vizualizacija';
import TabelaHrane from './TabelaHrane';

import backendService from '../services/backend-service'

import './SledilnikPrehrane.css';

export default function SledilnikPrehrane() {
  const [hranaArray, setHranaArray] = React.useState([]);
  const [obrok, setObrok] = React.useState('Zajtrk');
  const [datum, setDatum] = React.useState(dayjs(new Date()));
  const [hranaCount, setHranaCount] = React.useState(0);
  const [macros, setMacros] = React.useState({});

  
  React.useEffect(() => { 
    const izracunajMacros = () => {
      let ogljikoviHidrati = 0;
      let beljakovine = 0;
      let mascobe = 0;
        
      hranaArray.forEach((hrana) => {
        ogljikoviHidrati += Number(hrana.ogljikoviHidrati);
        beljakovine += Number(hrana.beljakovine);
        mascobe += Number(hrana.mascobe);
      });
  
      setMacros({ogljikoviHidrati, beljakovine, mascobe});
    }
    izracunajMacros();
   }, [hranaArray]);

  const izbrisiHrano = (key) => {
    setHranaArray(hranaArray.filter((hrana) => hrana.key !== key));
  }

  const dodajHrano = (imeHrane, kolicina, energijskaVrednost, beljakovine, ogljikoviHidrati, mascobe) => {

    let hrana = {imeHrane, kolicina, energijskaVrednost, beljakovine, ogljikoviHidrati, mascobe, key: hranaCount};

    setHranaCount(hranaCount + 1);

    setHranaArray([...hranaArray, hrana]);

  }

  const shraniObrok = () => {

    let year = datum.$y;
    let month = datum.$M;
    let day = datum.$D;

    backendService.createFood({hranaArray, obrok, year, month, day});
    
  }

  return (
    <div className="SledilnikPrehrane">
      <div className='levaPolovica'>

        <IzborDnevaInObroka obrok={obrok} setObrok={setObrok} datum={datum} setDatum={setDatum} />

        <IzborHrane dodajHrano={dodajHrano}  />

        <Button variant="contained" onClick={shraniObrok} >Shrani Obrok</Button>

      </div>

      <div className='desnaPolovica'>
        <TabelaHrane hranaArray={hranaArray} izbrisiHrano={izbrisiHrano} />

        <div style={{color: "red", padding: 10}}></div>

        <Vizualizacija macros={macros} />
      </div>

    </div>
  );
}


