import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 10px 20px;

  @media only screen and (min-width: 768px) {
    flex-wrap: nowrap;
    padding: 50px 100px;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  width: 100%;

  padding: 0 10px;

  @media only screen and (min-width: 768px) {
    width: 40%;
    padding: 0 50px;
  }
`;

export const SocialArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 10px 0;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const DetailsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  padding: 10px 0;
`;

export const TitleWrapperArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 80%;
`;

export const RatingArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 20%;
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 10px 0;

  @media only screen and (min-width: 768px) {
    padding: 50px 0;
    width: 50%;
  }
`;

export const Image = styled.img`
  min-width: 250px;

  padding: 0 50px;
`;

export const Title = styled.p`
  font-family: Merriweather Sans;
  font-weight: 800;
  font-size: 14pt;
`;

export const Description = styled.span`
  font-family: Merriweather Sans;
  font-weight: 300;
  font-size: 10pt;
`;

export const LinkButton = styled.a``;

export const ActionButton = styled.button`
  width: 125px;
  height: 40px;

  font-family: Merriweather Sans;
  font-weight: 700;
  font-size: 9pt;

  background-color: #fcdb00;

  border: 0;
  border-radius: 5px;

  cursor: pointer;
`;

export const WishButton = styled.button`
  width: 125px;
  height: 40px;

  font-family: Merriweather Sans;
  font-weight: 700;
  font-size: 9pt;
  color: #fafafa;

  background-color: #ff0000;

  border: 0;
  border-radius: 5px;

  cursor: pointer;
`;

export const SocialLink = styled.a`
  cursor: pointer;
`;
