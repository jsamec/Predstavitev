import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function IzborHrane({dodajHrano}) {
    const [hrana, setHrana] = React.useState('');
    const [kolicina, setKolicina] = React.useState(0);
    const [engVrednost, setEngVrednost] = React.useState(0);
    const [beljakovine, setBeljakovine] = React.useState(0);
    const [ogHidrati, setOgHidrati] = React.useState(0);
    const [mascobe, setMascobe] = React.useState(0);
  
    const nastaviStevilo = (event, setFunction) => {
      if(event.target.value.match(/^[0-9]+$/)){
        event.target.value = parseInt(event.target.value);

        setFunction(event.target.value);
      }
    }
  
    function submit(){
      //console.log(hrana + " " + kolicina + " " + engVrednost + " " + beljakovine + " " + ogHidrati + " " + mascobe);
      dodajHrano(hrana, kolicina, engVrednost, beljakovine, ogHidrati, mascobe);
  
      setHrana('');
      setKolicina(0);
      setEngVrednost(0);
      setBeljakovine(0);
      setOgHidrati(0);
      setMascobe(0);
    }
  
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="hrana" label="Hrana" variant="outlined" value={hrana} onChange={(event) => setHrana(event.target.value)} />
        <TextField id="kolicina" label="Količina[g]" variant="outlined" type="number" value={kolicina} onChange={(e) => nastaviStevilo(e, setKolicina)} />
        <TextField id="engVrednost" label="Energijska vrednost[kcal]" variant="outlined" type="number" value={engVrednost} onChange={(e) => nastaviStevilo(e, setEngVrednost)} />
        <TextField id="ogHidrati" label="Ogljikovi hidrati[g]" variant="outlined" type="number" value={ogHidrati} onChange={(e) =>  nastaviStevilo(e, setOgHidrati)} />
        <TextField id="beljakovine" label="Beljakovine[g]" variant="outlined" type="number" value={beljakovine} onChange={(e) =>  nastaviStevilo(e, setBeljakovine)} />
        <TextField id="mascobe" label="Maščobe[g]" variant="outlined" type="number" value={mascobe} onChange={(e) => nastaviStevilo(e, setMascobe)} />
        <Button variant="contained" onClick={submit} >Dodaj</Button>
  
      </Box>
    );
}
  