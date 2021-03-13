import styled from "styled-components";

export const CurrentStatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1em;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 700px) {
    margin-bottom: 1em;
    padding-bottom: 0;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export const StatsValueContainer = styled.div`
  margin-top: 1em;
  font-size: 1.44em;
`;

export const StatsLabelContainer = styled.div`
  color: rgba(255, 255, 255, 0.6);
`;
