import * as React from "react";
import { TextField, Button, Box } from "@mui/material";
import {useRecoilState} from "recoil";
import CityState from "../states/CityState";

type FormProps = {
    getWeather: (city: string) => void;
}

const Form = (props: FormProps) => {
    const [city, setCity] = useRecoilState(CityState);
    const [cityInput, setCityInput] = React.useState(city);

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCity(cityInput);
        props.getWeather(city);
    }

    return (
        <Box component="form" onSubmit={onFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mt: 4 }}>
            <TextField
                label="Enter a City Name"
                variant="outlined"
                value={cityInput}
                onChange={e => setCityInput(e.target.value)}
                sx={{ width: '300px' }}
                slotProps={{ inputLabel: { shrink: true } }}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ width: '150px' }}>
                Get Weather
            </Button>
        </Box>
    );
}

export default Form;
