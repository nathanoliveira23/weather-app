import { useWeather } from "../../hooks/useWeather";
import { HumidityBar } from "../HumidityBar";
import { WeatherCardInfo } from "../WeatherCardInfo";

import { Container, Title, WeatherInfo } from "./style";


export function CurrentWeatherInfo(){
    const { weathers }  = useWeather();
      
    return(
        <Container>
            <Title>Today's Highlights</Title>
            <WeatherInfo>
                <WeatherCardInfo 
                    title="Wind status" 
                    value={weathers.wind?.speed} 
                    unit="mph" 
                    subtitle="wsw" 
                />

                <WeatherCardInfo
                    title="Humidity" 
                    value={weathers.main?.humidity}
                    unit="%"
                    subtitle={<HumidityBar />}
                />
            </WeatherInfo>
            
            <WeatherInfo>
                <WeatherCardInfo
                    title="Visibility"
                    value={weathers.visibility}
                    unit="miles"
                />

                <WeatherCardInfo
                    title="Air Pressure"
                    value={weathers.main?.pressure}
                    unit="mb"
                />
            </WeatherInfo>
        </Container>
    );
}