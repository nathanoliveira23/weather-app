import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 40.5rem 1fr;

    @media screen and (max-width: 768px) {
        display: block;
    }
`