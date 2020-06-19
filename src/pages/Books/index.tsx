import React from "react";
import { connect } from "react-redux";

import Loading from "../../components/Loading";
import BookList from "../../components/BookList";

import { Container } from "./styles";

import { StoreState } from "../../stores/reducers/types";
import { BooksProps } from "./types";

const Books: React.FC<BooksProps> = props => {
  return (
    <Container>
      {props.loading && <Loading />}
      {!props.loading && <BookList />}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  books: state.books
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
