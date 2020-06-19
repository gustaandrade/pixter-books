import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Container, BookCoverImg } from "./styles";

import { BookProps } from "./types";
import { Book } from "../../types";
import { selectBook } from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";

const SingleBook: React.FC<BookProps> = props => {
  function selectCurrentBook() {
    props.selectBook(props.book);
  }

  return (
    <Container>
      <Link to="/detail" onClick={() => selectCurrentBook()}>
        <BookCoverImg
          src={props.book.images.smallThumbnail}
          alt={props.book.title}
        />
      </Link>
    </Container>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  selectBook: (book: Book) => dispatch(selectBook(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);
