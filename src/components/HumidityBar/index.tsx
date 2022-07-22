import { useWeather } from "../../hooks/useWeather";
import { Container, ProgressieBar } from "./styles";

export function HumidityBar() {
  const { weathers }  = useWeather();

  const statusBar = weathers.main?.humidity;

  return(
    <Container>
        <ProgressieBar status={statusBar}></ProgressieBar>
    </Container>
  );
}