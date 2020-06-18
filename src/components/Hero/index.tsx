import React from "react";
import { DiApple, DiAndroid, DiWindows } from "react-icons/di";

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

const Hero: React.FC = () => {
  return (
    <Container>
      <DescriptionArea>
        <Title>Pixter Digital Books</Title>

        <Subtitle>
          Mussum Ipsum, cacilds vidis litro abertis.
          <br />
          Diuretics paradis num copo é motivis de denguis.
        </Subtitle>

        <Description>
          Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo
          é motivis de denguis. Suco de cevadiss, é um leite divinis, qui tem
          lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo
          tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
        </Description>

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
