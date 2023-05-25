import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TextField from '@mui/material/TextField';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/system';
import { Chart as ChartJS } from 'chart.js/auto'
import backendService from '../services/backend-service'
import dayjs from 'dayjs';

import { Button } from '@mui/material';


export default function Spanec() {

  const [datum, setDatum] = React.useState(dayjs(new Date()));
  const [cas, setCas] = React.useState(0);
  const [data, setData] = React.useState(
    {
      labels: ['Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Sobota', 'Nedelja'],
      datasets: [
      {
      label: 'Dolžina spanca',
      data: [7.3, 6, 6.4, 7, 8, 7, 8],
      backgroundColor: ['rgba(255, 99, 132, 0.7)'],
      }
      ]
    }
  );

  const shrani = () => {

    let year = datum.$y;
    let month = datum.$M;
    let day = datum.$D;

    console.log(year, month, day);
    console.log(cas);

    if (cas < 0 || cas > 24) {
      alert("Vnesite veljavno dolžino spanca");
      return;
    }

    backendService.createSpanec({datum, cas});

    //update the chart
    pridobiPodatke();
  }

  const pridobiPodatke = () => {
    backendService.vrniSpanec().then((response) => {
      console.log(response.data.rows);

      let data = response.data.rows;

      //keep only last 7 days, the data is sorted by date, and is sparse
      let show = [];

      let today = dayjs(new Date());
      for (let i = 0; i < data.length; i++) {
        let datum = dayjs(data[i].datum);
        if (today.diff(datum, 'day') < 7) {
          show.push(data[i]);
        }
      }

      console.log(show);
      //fill in empty days
      let days = [];
      let cas = [];
      let day = today;
      for (let i = 0; i < 7; i++) {
        days.push(day.format('DD/MM'));
        day = day.subtract(1, 'day');
        cas.push(0);
      }
      
      for (let i = 0; i < show.length; i++) {
        let datum = dayjs(show[i].datum);
        let index = today.diff(datum, 'day');
        cas[index] = show[i].cas;
      }

      //reverse the arrays
      days.reverse();
      cas.reverse();

      console.log(days);
      console.log(cas);

      setData({
        labels: days,
        datasets: [
        {
        label: 'Dolžina spanca',
        data: cas,
        backgroundColor: ['rgba(255, 99, 132, 0.7)'],
        }
        ]
      });


    })
  }

  React.useEffect(() => {
    pridobiPodatke();
  }, []);


  return (
    <div className="Spanec">

      <div style={{ width: "40%"}}>
        <h1>Sledilnik Spanja</h1>
        <br />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            label="Datum"
            inputFormat="dd/MM/yyyy"
            value={datum}
            onChange={(novDatum) => { setDatum(novDatum)}}
          />
        </LocalizationProvider>
        <TextField id="spanec" label="Dolžina" variant="outlined" type="number" style={{width:'25%'}} value={cas} onChange={(event) => setCas(event.target.value)} />
        <br />
        <Button variant="contained" onClick={shrani} >Shrani</Button>

        <Box className="barChart" style={{width: "100%"}}>
          <Bar data={data}/>
        </Box>

      </div>

    </div>
  );
}


