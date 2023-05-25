import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function IzborDnevaInObroka(props) {
    return (
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            label="Datum"
            value={props.datum}
            onChange={(novDatum) => { props.setDatum(novDatum)}}
            inputFormat="dd/MM/yyyy"
          />
        </LocalizationProvider>
  
        <Select
          value={props.obrok}
          onChange={(event) => props.setObrok(event.target.value)}
        >
          <MenuItem value={"Zajtrk"}>Zajtrk</MenuItem>
          <MenuItem value={"Kosilo"}>Kosilo</MenuItem>
          <MenuItem value={"Večerja"}>Večerja</MenuItem>
        </Select>
      </div> 
    );
  }
  
  