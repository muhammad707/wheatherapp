import styled from "styled-components";

export const WeatherByHourContainer = styled.div`
  display: none;
  width: 100%;

  @media screen and (min-width: 700px) {
    display: block;
  }
`;

export const HourContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WeatherByHourHeading = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  font-weight: normal;

  @media screen and (min-width: 768px) {
    font-size: 1.125em;
  }
`;
