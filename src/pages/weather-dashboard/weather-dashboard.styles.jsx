import styled from "styled-components";

export const WeatherDashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 920px) {
    width: 880px;
    margin: 8px auto;
    font-size: 1.1em;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100% !important;
`;
