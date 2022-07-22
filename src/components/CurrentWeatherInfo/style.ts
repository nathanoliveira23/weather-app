import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: var(--background);
    padding: 5rem;
`

export const Title = styled.h2`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.8rem;
    color: var(--text-primary-color);
`

export const WeatherInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1.5rem;

    margin-top: 3rem;
    

    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;

        width: 32.8rem;
        height: 20.4rem;

        background-color: var(--secundaryColor);

        border-radius: 5px;

        span{
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 18.78px;
            color: var(--text-primary-color);
        }

        :nth-child(1), :nth-child(2){
            strong{
                font-size: 6.4rem;
                font-weight: 700;
                line-height: 75.14px;
            }
        }
    }
`