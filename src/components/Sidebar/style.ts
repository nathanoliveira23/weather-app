import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: var(--secundaryColor);
`

export const InputSearch = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 3rem 0;

    input{ 
        width: 16.1rem;
        height: 4rem;
        background-color: #6e707a;

        font-size: 1.8rem;
        color: var(--text-primary-color);

        padding-left: 1rem;
        border: none;

        border-radius: 1rem;
    }

    input::placeholder {
        color: var(--text-primary-color);
    }

    .crosshair {
        color: #E7E7EB;
        background-color: #6e707a;
        padding: 0.2rem;
        border-radius: 50%;
    }
`

export const ImgWeather = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;


    img{
        width: 24.2rem;
        height: 23.4rem;
    }
`

export const WeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h2 {
        font-size: 7.8rem;
        font-weight: 500;
        color: var(--text-primary-color);

        span {
            font-size: 3.9rem;
            color: var(--text-secundary-color);
        }
    }

    p {
        font-size: 3.6rem;
        color: var(--text-secundary-color);
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: var(--text-secundary-color);
        font-size: 1.8rem;
        padding: 1rem;
    }
`