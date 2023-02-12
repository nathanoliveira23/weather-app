import { ReactElement } from "react";

interface WeatherCardInfoProps {
  title: string;
  value: number;
  unit: string;
  subtitle?: string | ReactElement;
}

export function WeatherCardInfo({ title, value, unit, subtitle } : WeatherCardInfoProps) {
  return (
    <div>
      <span>{title}</span>
      <span>
        <strong>
            {value}
        </strong>
        {unit}
      </span>
      <span>{subtitle}</span>
    </div>
  );
}