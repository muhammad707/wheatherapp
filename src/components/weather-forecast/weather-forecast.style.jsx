import styled from "styled-components";

export const WeatherForecastList = styled.div`
  width: 100%;
  margin-top: 1em;
`;

export const WeatherForecastHeading = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  font-weight: normal;

  @media screen and (min-width: 768px) {
    font-size: 1.125em;
  }
`;

export const WeatherForecastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
