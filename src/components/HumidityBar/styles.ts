import styled from "styled-components";

export const Container = styled.p`
  height: 10px;
  width: 100px;

  border-radius: 20px;

  padding: 2px;

  background-color: #fff;
`

interface ProgressiveBarProps {
  status: number;
}

export const ProgressieBar = styled.p<ProgressiveBarProps>`
  border-radius: 20px;

  height: 100%;
  width: ${props => `${props.status}px`};

  background-color: #FF9F1C;
`