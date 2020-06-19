import React from "react";

import BookList from "../../components/BookList";

import { Container } from "./styles";

const Books: React.FC = () => {
  return (
    <Container>
      <BookList />
    </Container>
  );
};

export default Books;
