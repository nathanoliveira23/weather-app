import { useContext } from "react";

import { Container, Footer, ImgWeather, InputSearch, WeatherInfo } from "./style";

import { CircleNotch, Crosshair, MapPin } from 'phosphor-react';
import moment from 'moment';
import { useWeather, WeatherContext } from "../../hooks/useWeather";
import { WeatherImageTransiction } from "../WeatherImgTransition";


type Desc = {
    id: number;
    description: string;
}

export function Sidebar(){
    const { weathers, handleSearchCity } = useWeather();

    return(
        <Container key={weathers.id}>
            <InputSearch>
                <input 
                    placeholder="Serch for places"
                    type="text"
                    onChange={handleSearchCity} />
                <Crosshair size={32} className="crosshair" />
            </InputSearch>
            <ImgWeather>
                <WeatherImageTransiction />
            </ImgWeather>
                    
            <WeatherInfo>
                <h2> {weathers.main?.temp} <span>°C</span></h2>
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