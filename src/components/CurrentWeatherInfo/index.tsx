import { useWeather } from "../../hooks/useWeather";

import { Container, Title, WeatherInfo } from "./style";


export function CurrentWeatherInfo(){
    const { weathers }  = useWeather();
      
    return(
        <Container>
            <Title>
                Today's Hightlights
            </Title>
            <WeatherInfo>
                <div>
                    <span>Wind status</span>
                    <span>
                        <strong>
                            {weathers.wind?.speed}
                        </strong>
                        mph
                    </span>
                    <span>wsw</span>
                </div>
                <div>
                    <span>Humidity</span>
                    <span>
                    
                        <strong>
                        {weathers.main?.humidity}
                        </strong>
                        %
                    </span>
                    <span>Humidity Bar</span>
                </div>
            </WeatherInfo>
            <WeatherInfo>
                <div>
                    <span>Visibility</span>
                    <span>
                    
                        <strong>{weathers.visibility}</strong>
                        miles
                    </span>
                </div>
                <div>
                    <span>Air Pressure</span>
                    <span>
                   
                        <strong>{weathers.main?.pressure}</strong>
                        mb
                    </span>
                </div>
            </WeatherInfo>
        </Container>
    );
}