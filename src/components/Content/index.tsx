/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//@ts-ignore
import { mIpsum } from "mipsum";

import Loading from "../Loading";
import Book from "../Book";

import {
  Container,
  TitleArea,
  BooksArea,
  Title,
  Subtitle,
  ActionButton
} from "./styles";

import { loadBooks, setLoading } from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ContentProps } from "./types";

const mussumIpsum = mIpsum({
  pNum: 1,
  pQuotes: 2,
  resultType: "text"
});

const Content: React.FC<ContentProps> = props => {
  useEffect(() => {
    props.setLoading();
    props.loadBooks();
  }, []);

  return (
    <Container id="content">
      <TitleArea>
        <Title>Books</Title>
        <Subtitle>{mussumIpsum}</Subtitle>
      </TitleArea>

      {props.loading && <Loading />}

      {!props.loading && (
        <BooksArea>
          {props.books.map(b => (
            <Book key={b.id} book={b} />
          ))}
        </BooksArea>
      )}

      <Link to="/books">
        <ActionButton>SEE MORE</ActionButton>
      </Link>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  books: state.books,
  loading: state.loading
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  loadBooks: () => dispatch(loadBooks()),
  setLoading: () => dispatch(setLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
