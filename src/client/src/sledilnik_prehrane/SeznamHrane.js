import Button from '@mui/material/Button';

export default function SeznamHrane({hranaArray, izbrisiHrano}) {
    return (
        <div>
            <ul>
                {hranaArray.map((hrana) => (
                    <li key={hrana.key}>{hrana.imeHrane}, {hrana.kolicina}, {hrana.energijskaVrednost} 
                        <Button variant="outlined" onClick={() => izbrisiHrano(hrana.key)}>Izbriši</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}  