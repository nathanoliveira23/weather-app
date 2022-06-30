import { Children, createContext, ReactNode, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface GetWeather {
    id: number;
    name: string;
    visibility: number;
    weather: [
        {
            id: number,
            main?: string,
            description: string
        }
    ];
    wind: {
        speed: number,
        deg?: 160
    };
    main: {
        temp: number,
        temp_max?: number,
        temp_min?: number,
        pressure: number,
        humidity: number
    }
    sys: {
        id: number,
        country: string
    };
}

interface WeatherContextData {
    weathers: GetWeather;
    city: string
    handleSearchCity: (e: any) => void;
}

interface GetWeatherProps {
    children: ReactNode
}

export const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

export function WeatherContextProvider({ children }: GetWeatherProps) {
    const [weathers, setWeathers] = useState<GetWeather>({} as GetWeather);
    const [city, setCity] = useState("Parnamirim");

    const getWeatherInfo = async () => {
        const response = await api.get(`weather?q=${city},br&APPID=fd5c802b33c3dc3748049715cc0c6e5f&lang=pt&units=metric`)
        console.log(response.data);
        setWeathers(response.data);
      }
    
      useEffect(() => {
        getWeatherInfo();
      }, [city]);

      function handleSearchCity(e: any){
        setCity(e.target.value)
      }

    return(
        <WeatherContext.Provider value={{ weathers, city, handleSearchCity }}>
            {children}
        </WeatherContext.Provider>
    )
}

export function useWeather() {
    const context = useContext(WeatherContext);

    return context;
}