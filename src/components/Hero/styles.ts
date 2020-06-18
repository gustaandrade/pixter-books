import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  min-height: 500px;

  background-color: #fcdb00;
`;

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;

  padding: 0 75px;
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;

  padding: 0 75px;
`;

export const IconsArea = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 20px;

  * {
    padding-right: 25px;
  }
`;

export const Title = styled.p`
  font-family: Merriweather Sans;
  font-weight: 800;
  font-size: 20pt;
`;

export const Subtitle = styled.p`
  font-family: Merriweather Sans;
  font-weight: 400;
  font-size: 12pt;
`;

export const Description = styled.p`
  font-family: Merriweather Sans;
  font-weight: 300;
  font-size: 10pt;
`;

export const Image = styled.img`
  height: 415px;
  width: 280px;
`;
