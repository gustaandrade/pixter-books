import React, { useEffect } from "react";
import { connect } from "react-redux";

import Book from "../Book";

import {
  Container,
  FilterArea,
  ContentArea,
  BooksArea,
  FilterContainer,
  FilterTitle,
  FilterInput,
  FilterButton,
  ActionButton
} from "./styles";

import { loadBooks, setLoading, loadMoreBooks } from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { BookListProps } from "./types";

const BookList: React.FC<BookListProps> = props => {
  useEffect(() => {
    props.setLoading();
    props.loadBooks();
  }, []);

  function loadMore() {
    props.setLoading();
    props.loadMoreBooks(props.books.length);
  }

  return (
    <Container>
      <FilterArea>
        <FilterContainer>
          <FilterTitle>Filter</FilterTitle>

          <FilterInput placeholder="palavra-passe" />
          <FilterInput placeholder="título" />
          <FilterInput placeholder="categoria" />
          <FilterInput placeholder="ano" />
          <FilterInput placeholder="autor" />

          <FilterButton>SUBMIT</FilterButton>
        </FilterContainer>
      </FilterArea>

      <ContentArea>
        <BooksArea>
          {props.books && props.books.map(b => <Book key={b.id} book={b} />)}
        </BooksArea>

        <ActionButton onClick={() => loadMore()}>LOAD MORE</ActionButton>
      </ContentArea>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  books: state.books,
  loading: state.loading
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  loadBooks: () => dispatch(loadBooks()),
  loadMoreBooks: (index: number) => dispatch(loadMoreBooks(index)),
  setLoading: () => dispatch(setLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
