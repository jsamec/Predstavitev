import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box } from '@mui/system';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function Vizualizacija({macros : {ogljikoviHidrati, beljakovine, mascobe}}) {

  console.log(ogljikoviHidrati, beljakovine, mascobe);

  if (!ogljikoviHidrati) {
    ogljikoviHidrati = 0;
  }
  if (!beljakovine) {
    beljakovine = 0;
  }
  if (!mascobe) {
    mascobe = 0;
  }

  const data = {
    labels: ['Ogljikovi hidrati', 'Beljakovine', 'Maščobe'],
    datasets: [
    {
    label: 'Vnos [g]',
    data: [ogljikoviHidrati, beljakovine, mascobe],
    backgroundColor: [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
    ],
       borderWidth: 1,
    },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Box className="pieChart"> <Pie data={data} options={options} /> </Box>;

  
  
  
}
