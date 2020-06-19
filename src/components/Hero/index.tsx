import React from "react";
import { DiApple, DiAndroid, DiWindows } from "react-icons/di";
//@ts-ignore
import { mIpsum } from "mipsum";

import {
  Container,
  DescriptionArea,
  ImageArea,
  IconsArea,
  Title,
  Subtitle,
  Description,
  Image
} from "./styles";

import TabletImg from "../../assets/tablet.png";

const shortMussumIpsum = mIpsum({
  pNum: 1,
  pQuotes: 1,
  resultType: "text"
});

const longMussumIpsum = mIpsum({
  pNum: 1,
  pQuotes: 4,
  resultType: "text"
});

const Hero: React.FC = () => {
  return (
    <Container>
      <DescriptionArea>
        <Title>Pixter Digital Books</Title>

        <Subtitle>{shortMussumIpsum}</Subtitle>

        <Description>{longMussumIpsum}</Description>

        <IconsArea>
          <DiApple size="36" color="black" />
          <DiAndroid size="36" color="black" />
          <DiWindows size="36" color="black" />
        </IconsArea>
      </DescriptionArea>

      <ImageArea>
        <Image src={TabletImg} alt="pixter" />
      </ImageArea>
    </Container>
  );
};

export default Hero;
