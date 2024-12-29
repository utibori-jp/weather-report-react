import { Typography, Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import {useSetRecoilState} from "recoil";
import CityState from "../states/CityState.tsx";

const Home = () => {
    const [cityInput, setCityInput] = React.useState("");
    const setCity  = useSetRecoilState(CityState);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCity(cityInput);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Welcome to the Weather App!
            </Typography>

            <Typography variant="h6" gutterBottom>
                Where are you from?
            </Typography>

            <form onSubmit={handleFormSubmit}>
                <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    required
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                />
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                        Set City
                    </Button>
                </Box>
            </form>

            <Typography variant="body1" paragraph>
                The Weather App provides you with real-time weather information for cities around the world...
            </Typography>

            <Box mt={2}>
                <Link to="/weather-report">
                    <Button variant="contained" color="primary">
                        Go to Weather Report
                    </Button>
                </Link>
            </Box>
        </div>
    );
};

export default Home;
