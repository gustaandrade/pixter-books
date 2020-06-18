import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #000000;

  padding: 50px 0;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 45%;

  padding: 20px 0 10px 0;
`;

export const LinksArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 25%;

  padding: 30px 0;
`;

export const LocationsArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 80%;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 20%;

  line-height: 1pt;
`;

export const Title = styled.p`
  font-family: Merriweather Sans;
  font-weight: 800;
  font-size: 16pt;

  color: #fcdb00;
`;

export const Subtitle = styled.p`
  font-family: Merriweather Sans;
  font-weight: 300;
  font-size: 10pt;
  text-align: center;

  color: #fafafa;
`;

export const Text = styled.p`
  font-family: Merriweather Sans;
  font-weight: 300;
  font-size: 9pt;
  text-align: center;

  color: #fafafa;
`;

export const Input = styled.input`
  width: 70%;
  height: 30px;

  font-family: Merriweather Sans;
  font-weight: 500;
  font-size: 9pt;

  border: 0;
  border-radius: 5px;

  padding: 0 10px;
`;

export const Submit = styled.button`
  width: 20%;
  height: 30px;

  font-family: Merriweather Sans;
  font-weight: 700;
  font-size: 9pt;

  background-color: #fcdb00;

  border: 0;
  border-radius: 5px;

  cursor: pointer;
`;

export const SocialLink = styled.a`
  cursor: pointer;
`;
