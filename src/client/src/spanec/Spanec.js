import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TextField from '@mui/material/TextField';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/system';
import { Chart as ChartJS } from 'chart.js/auto'


import { Button } from '@mui/material';


export default function Spanec() {

  const data = {
    labels: ['Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Sobota', 'Nedelja'],
    datasets: [
    {
    label: 'Dolžina spanca',
    data: [7.3, 6, 6.4, 7, 8, 7, 8],
    backgroundColor: ['rgba(255, 99, 132, 0.7)'],
    }
    ]
  }
  

  return (
    <div className="Spanec">

      <div style={{ width: "40%"}}>
        <h1>Spanec</h1>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            label="Datum"
            inputFormat="dd/MM/yyyy"
          />
        </LocalizationProvider>
        <TextField id="spanec" label="Dolžina" variant="outlined" type="number" style={{width:'25%'}} />
        <br /> 
        <Button variant="contained">Shrani</Button>

        <Box className="barChart" style={{width: "100%"}}>
          <Bar data={data}/>
        </Box>

      </div>

    </div>
  );
}


