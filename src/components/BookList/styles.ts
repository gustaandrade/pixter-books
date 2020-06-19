import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  background-color: #fafafa;

  padding: 50px;
`;

export const FilterArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 30%;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70%;
`;

export const BooksArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: space-around;

  width: 70%;
  height: 400px;

  background-color: #fcdb00;

  padding: 30px;
`;

export const FilterTitle = styled.span`
  font-family: Merriweather Sans;
  font-weight: 900;
  font-size: 18pt;
  color: #fafafa;
`;

export const FilterInput = styled.input`
  height: 30px;

  font-family: Merriweather Sans;
  font-weight: 500;
  font-size: 9pt;

  border: 0;
  border-radius: 5px;

  padding: 0 10px;
`;

export const FilterButton = styled.button`
  height: 30px;

  font-family: Merriweather Sans;
  font-weight: 700;
  font-size: 9pt;
  color: #fafafa;

  background-color: black;

  border: 0;
  border-radius: 5px;

  cursor: pointer;
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
