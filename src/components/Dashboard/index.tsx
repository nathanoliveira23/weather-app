import { WeatherContextProvider } from "../../hooks/useWeather";
import { CurrentWeatherInfo } from "../CurrentWeatherInfo";
import { Sidebar } from "../Sidebar";
import { Container } from "./style";

export function Dashboard(){
    return(
        <Container>
          <WeatherContextProvider>
            <Sidebar />
            <CurrentWeatherInfo />
          </WeatherContextProvider>
        </Container>
    );
}