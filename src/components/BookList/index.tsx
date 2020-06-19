/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
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
  const [keyword, setKeyword] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [year, setYear] = useState<string>();
  const [author, setAuthor] = useState<string>();

  useEffect(() => {
    props.setLoading();
    props.loadBooks();
  }, []);

  function loadMore() {
    props.setLoading();
    props.loadMoreBooks(props.books.length);
  }

  function filterBooks() {
    if (keyword && keyword !== "") {
      props.books.filter(b => b.id.includes(keyword));
    }
    if (title && title !== "") {
      props.books.filter(b => b.title.includes(title));
    }
    if (category && category !== "") {
      props.books.filter(b => b.categories.includes(category));
    }
    if (year && year !== "") {
      props.books.filter(b => b.publishedDate === year);
    }
    if (author && author !== "") {
      props.books.filter(b => b.authors.includes(author));
    }
  }

  return (
    <Container>
      <FilterArea>
        <FilterContainer>
          <FilterTitle>Filter</FilterTitle>

          <FilterInput
            placeholder="palavra-passe"
            onChange={e => setKeyword(e.target.value)}
          />
          <FilterInput
            placeholder="título"
            onChange={e => setTitle(e.target.value)}
          />
          <FilterInput
            placeholder="categoria"
            onChange={e => setCategory(e.target.value)}
          />
          <FilterInput
            placeholder="ano"
            onChange={e => setYear(e.target.value)}
          />
          <FilterInput
            placeholder="autor"
            onChange={e => setAuthor(e.target.value)}
          />

          <FilterButton onClick={() => filterBooks()}>SUBMIT</FilterButton>
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
