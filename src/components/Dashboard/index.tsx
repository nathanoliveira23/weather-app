import { useEffect, useState } from "react";
import { WeatherContext, WeatherContextProvider } from "../../hooks/useWeather";
import api from "../../services/api";
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