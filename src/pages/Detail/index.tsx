import React from "react";
import { connect } from "react-redux";

import Loading from "../../components/Loading";
import BookDetail from "../../components/BookDetail";

import { Container } from "./styles";

import { StoreState } from "../../stores/reducers/types";
import { DetailProps } from "./types";

const Detail: React.FC<DetailProps> = props => {
  return (
    <Container>
      {props.loading && <Loading />}
      {!props.loading && <BookDetail />}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  loading: state.loading
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
