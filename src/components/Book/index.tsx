import React from "react";

import { Container, BookCover, BookCoverImg } from "./styles";

import { BookProps } from "./types";

const Book: React.FC<BookProps> = props => {
  return (
    <Container>
      <BookCover href={props.link}>
        <BookCoverImg src={props.coverUrl} alt={props.title} />
      </BookCover>
    </Container>
  );
};

export default Book;
