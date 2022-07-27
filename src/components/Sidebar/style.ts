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
    justify-content: space-between;
    
    margin-block: 3rem;

    input{ 
        width: 20rem;
        height: 4rem;

        background-color: #6e707a;

        position: relative;

        font-size: 1.8rem;
        color: var(--text-primary-color);

        padding-left: 4rem;
        margin-left: 1rem;

        border: none;
        border-radius: 1rem;

        outline: none;

        &::placeholder {
            color: var(--text-primary-color);
        }
    }


    svg {
        position: absolute;
        left: 1.5rem;
    }
    
     div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 120px;

        button {
            background-color: transparent;
            border: 2px solid #6e707a;
            border-radius: 50%;
            padding: 5px;
            padding-right: 10px;
            cursor: pointer;

            &:disabled {
                background-color: var(--text-secundary-color);
                cursor: not-allowed;
            }
        }
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