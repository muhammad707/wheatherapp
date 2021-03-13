import styled from "styled-components";

export const WeatherByHourItemContainer = styled.div`
  padding: 0.8em 0;
  width: 13%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.15);
  font-size: 1.125em;
  text-align: center;

  @media screen and (width: 880px) {
    width: 6.05em;
  }
`;

export const HourContainer = styled.div`
  margin-bottom: 0.5em;
`;
