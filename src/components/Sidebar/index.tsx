import { Container, Footer, ImgWeather, InputSearch, WeatherInfo } from "./style";

import fahrenheit from '../../../assets/fahrenheit.svg';
import celsius from '../../../assets/celsius.svg';

import { MapPin } from 'phosphor-react';
import moment from 'moment';
import { useWeather } from "../../hooks/useWeather";
import { WeatherImageTransiction } from "../WeatherImgTransition";
import { useState } from "react";


type Desc = {
    id: number;
    description: string;
}

export function Sidebar(){
    const { weathers, temperature, setTemperature, handleSearchCity } = useWeather();
    const [isConverted, setIsconverted] = useState(false)

    function handleConvertToFahrenheit() {
        let currentTempValue = temperature;

        let ToFahrenheit = Math.round((currentTempValue * 1.8) + 32);

        setIsconverted(true);
        setTemperature(ToFahrenheit);
    }

    function handleConvertToCelsius() {
        let currentTempValue = temperature;

        let ToCelsios = Math.round((currentTempValue - 32)/1.8);
    
        setIsconverted(false);
        setTemperature(ToCelsios);
    }

    return(
        <Container key={weathers.id}>
            <InputSearch>
                    <input
                        placeholder="Serch for places"
                        type="text"
                        onChange={handleSearchCity} />

                    <div>
                        <button 
                            onClick={handleConvertToCelsius}
                            disabled={!isConverted}>
                            <img src={celsius} />
                        </button>
                        <button 
                            onClick={handleConvertToFahrenheit}
                            disabled={isConverted}>
                            <img src={fahrenheit} />
                        </button>
                    </div>
            </InputSearch>
            <ImgWeather>
                <WeatherImageTransiction />
            </ImgWeather>
                    
            <WeatherInfo>
                <h2>
                    {Math.round(temperature)}
                    {isConverted ? <span> °F</span> : <span> °C</span>}
                </h2>
                    {weathers.weather?.map((info: Desc) => {
                        return(
                            <p key={info.id}>{info.description}</p>
                        )
                    })}
            </WeatherInfo>             
            <Footer>
                <p>{moment().format('ll')}</p>
                <p>
                    <span><MapPin /> </span>
                    <span>{weathers.name}, {weathers.sys?.country}</span>
                </p>
            </Footer>    
        </Container>
    );
}