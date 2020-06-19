import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 125px;

  background-color: #fcdb00;

  box-shadow: 0 7px 6px -6px #c0c0c0;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 50%;

  padding-left: 25px;

  @media only screen and (min-width: 1012px) {
    width: 70%;
    padding-left: 75px;
  }
`;

export const TabsArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 50%;

  padding-right: 25px;

  a {
    color: black;
    text-decoration: none;
  }

  @media only screen and (min-width: 1012px) {
    width: 30%;
    padding-right: 75px;
  }
`;

export const Logo = styled.img`
  width: 125px;
`;

export const Tab = styled.span`
  font-family: Merriweather Sans;
  font-weight: 800;

  cursor: pointer;
`;
