import React from "react";
//@ts-ignore
import { mIpsum } from "mipsum";

import {
  Container,
  TitleArea,
  BooksArea,
  Title,
  Subtitle,
  ActionButton
} from "./styles";

const Content: React.FC = () => {
  const mussumIpsum = mIpsum({
    pNum: 1,
    pQuotes: 2,
    resultType: "text"
  });

  return (
    <Container>
      <TitleArea>
        <Title>Books</Title>
        <Subtitle>{mussumIpsum}</Subtitle>
      </TitleArea>

      <BooksArea></BooksArea>

      <ActionButton>SEE MORE</ActionButton>
    </Container>
  );
};

export default Content;
