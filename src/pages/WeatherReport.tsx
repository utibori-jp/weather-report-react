import Title from "../components/Title";
import Form from "../components/Form";
import Results from "../components/Results";
import {useRecoilState, useRecoilValue} from "recoil";
import ResultState from "../states/ResultState.tsx";
import CityState from "../states/CityState.tsx";
import {useEffect} from "react";

const WeatherReport = () => {
    const city = useRecoilValue(CityState);
    const [result, setResults] = useRecoilState(ResultState);
    const initialCity: string = city
    const WEATHER_API_KEY: string = import.meta.env.VITE_WEATHER_API_KEY;

    // 天気情報を取得する関数
    const getWeather = (city: string) => {
        if (city) {
            console.log(WEATHER_API_KEY)
            fetch(
                `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`
            )
                .then((res) => res.json())
                .then((data) =>
                    setResults({
                        country: data.location.country,
                        cityName: data.location.name,
                        temperature: data.current.temp_c,
                        conditionText: data.current.condition.text,
                        icon: data.current.condition.icon,
                    })
                );
        }
    };

    useEffect(() => {
        if (city) {
            getWeather(city);
        }
    }, [initialCity]);

    return (
        <div>
            <Title />
            <Form getWeather={getWeather} />
            <Results results={result} />
        </div>
    );
};

export default WeatherReport;
