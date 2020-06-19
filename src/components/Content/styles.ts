import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fafafa;

  padding: 50px 0;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;

  padding-bottom: 20px;
`;

export const BooksArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 80%;
`;

export const Title = styled.p`
  font-family: Merriweather Sans;
  font-weight: 800;
  font-size: 16pt;
`;

export const Subtitle = styled.p`
  font-family: Merriweather Sans;
  font-weight: 300;
  font-size: 10pt;
  text-align: center;
`;

export const ActionButton = styled.button`
  width: 250px;
  height: 40px;

  font-family: Merriweather Sans;
  font-weight: 700;
  font-size: 9pt;

  background-color: #fcdb00;

  border: 0;
  border-radius: 5px;

  cursor: pointer;
`;
