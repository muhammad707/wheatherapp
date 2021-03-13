import styled from "styled-components";

export const CurrentTemperatureContainer = styled.div`
  display: flex;
  margin-top: 0.25em;
  width: 100%;

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export const IconContainer = styled.div`
  flex-grow: 1.25;
  text-align: center;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  text-align: center;
`;

export const TemperatureValueContainer = styled.div`
  font-size: 5.25em;
  font-weight: 300;
`;

export const TemperatureSummaryContainer = styled.div`
  margin-top: -0.5em;
  margin-left: -0.6em;
  text-align: center;
  font-size: 1.125em;
`;
