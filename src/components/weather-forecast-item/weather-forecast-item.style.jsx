import styled from "styled-components";

export const WeatherForecastRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.3em;
  padding: 0.8em 0;
  width: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 1.19em;
  text-align: center;
`;

export const WeatherForecastLabel = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.83em;
`;

export const WeatherForecastDate = styled.div`
  width: 33.33333%;
  font-size: 0.95em;
  margin-bottom: 0.6em;
  order: -2;

  @media screen and (min-width: 450px) {
    width: 16.666666%;
    margin-bottom: initial;
  }
`;

export const WeatherForecastHigh = styled.div`
  width: 33.33333%;
  font-size: 0.95em;
  margin-bottom: 0.6em;

  @media screen and (min-width: 450px) {
    width: 16.666666%;
    margin-bottom: initial;
  }
`;

export const WeatherForecastLow = styled.div`
  width: 33.33333%;
  font-size: 0.95em;
  margin-bottom: 0.6em;

  @media screen and (min-width: 450px) {
    width: 16.666666%;
    margin-bottom: initial;
  }
`;

export const WeatherForecastIcon = styled.div`
  width: 33.33333%;
  font-size: 0.95em;
  order: -1;

  @media screen and (min-width: 450px) {
    width: 16.666666%;
    margin-bottom: initial;
  }
`;

export const WeatherForecastRain = styled.div`
  width: 33.33333%;
  font-size: 0.95em;

  @media screen and (min-width: 450px) {
    width: 16.666666%;
    margin-bottom: initial;
  }
`;

export const WeatherForecastWind = styled.div`
  width: 33.33333%;
  font-size: 0.95em;

  @media screen and (min-width: 450px) {
    width: 16.666666%;
    margin-bottom: initial;
  }
`;
