import { useContext } from "react";
import { WeatherContext } from "../../hooks/useWeather";

import Rain from '../../../assets/rainy.svg';
import Day from '../../../assets/day.svg';
import Night from '../../../assets/night.svg';
import Cloudy from '../../../assets/cloudy.svg';
import Thunder from '../../../assets/thunder.svg';
import LittleCloudyDay from '../../../assets/little-cloudy-day.svg';
import LittleCloudyNight from '../../../assets/little-cloudy-night.svg';
import CloudyDay from '../../../assets/cloudy-day.svg';
import CloudyNight from '../../../assets/cloudy-night.svg';
import ModerateRain from '../../../assets/moderate-rain.svg'

interface Desc {
    description: string;
}

export function WeatherImageTransiction(){
    const { weathers } = useContext(WeatherContext);
    const hour = new Date().toLocaleTimeString();

    return(
        <>
            {
                weathers.weather?.map((desc: Desc) => {
                    switch(desc.description) {
                        case 'céu limpo':
                            const updateClearSky = hour > '05' && hour < '18' 
                            ? <img key={weathers.id} src={Day} /> 
                            : <img key={weathers.id} src={Night} />

                            return updateClearSky;
                            break;

                        case 'céu pouco nublado':
                            const updateLittleCloudyHour = hour > '05' && hour < '18' 
                            ? <img key={weathers.id} src={LittleCloudyDay} /> 
                            : <img key={weathers.id} src={LittleCloudyNight} />

                            return updateLittleCloudyHour;
                            break;
                        case 'nublado':
                            const updateCloudyHour = hour > '05' && hour < '18' 
                            ? <img key={weathers.id} src={CloudyDay} /> 
                            : <img key={weathers.id} src={CloudyNight} />

                            return updateCloudyHour;
                            break;
                        case 'nuvens quebradas' || 'nuvens dispersas':
                            return <img key={weathers.id} src={Cloudy} />
                            break;

                        case 'chuva fraca':
                            return <img key={weathers.id} src={Rain} />
                            break
                        
                        case 'chuva moderada' || 'nevoeiro':
                            return <img key={weathers.id} src={ModerateRain} />
                            break

                        default: <img key={weathers.id} src={Thunder} />
                    }
                })
            }
        </>
    );
}