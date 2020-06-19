import React from "react";
import { connect } from "react-redux";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaPinterestSquare
} from "react-icons/fa";

import {
  Container,
  ImageArea,
  SocialArea,
  DetailsArea,
  TitleArea,
  TitleWrapperArea,
  RatingArea,
  ButtonsArea,
  Image,
  Title,
  Description,
  LinkButton,
  ActionButton,
  WishButton,
  SocialLink
} from "./styles";

import { selectBook } from "../../stores/actions";
import { BookDetailProps } from "./types";
import { Book } from "../../types";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";

const BookDetail: React.FC<BookDetailProps> = props => {
  return (
    <Container>
      <ImageArea>
        <Image
          src={props.selectedBook?.images.thumbnail}
          alt={props.selectedBook?.title}
        />

        <SocialArea>
          <SocialLink href="#">
            <FaFacebookSquare size="24" color="#fcdb00" />
          </SocialLink>

          <SocialLink href="#">
            <FaTwitterSquare size="24" color="#fcdb00" />
          </SocialLink>

          <SocialLink href="#">
            <FaGooglePlusSquare size="24" color="#fcdb00" />
          </SocialLink>

          <SocialLink href="#">
            <FaPinterestSquare size="24" color="#fcdb00" />
          </SocialLink>
        </SocialArea>
      </ImageArea>

      <DetailsArea>
        <TitleArea>
          <TitleWrapperArea>
            <Title>{props.selectedBook?.title}</Title>
          </TitleWrapperArea>

          <RatingArea>
            {props.selectedBook && props.selectedBook?.averageRating > 0 ? (
              props.selectedBook && props.selectedBook.averageRating === 1 ? (
                <FaStarHalfAlt size="24" color="#fcdb00" />
              ) : (
                <FaStar size="24" color="#fcdb00" />
              )
            ) : (
              <FaRegStar size="24" color="#c0c0c0" />
            )}

            {props.selectedBook && props.selectedBook?.averageRating > 1 ? (
              props.selectedBook && props.selectedBook.averageRating === 2 ? (
                <FaStarHalfAlt size="24" color="#fcdb00" />
              ) : (
                <FaStar size="24" color="#fcdb00" />
              )
            ) : (
              <FaRegStar size="24" color="#c0c0c0" />
            )}

            {props.selectedBook && props.selectedBook?.averageRating > 2 ? (
              props.selectedBook && props.selectedBook.averageRating === 3 ? (
                <FaStarHalfAlt size="24" color="#fcdb00" />
              ) : (
                <FaStar size="24" color="#fcdb00" />
              )
            ) : (
              <FaRegStar size="24" color="#c0c0c0" />
            )}

            {props.selectedBook && props.selectedBook?.averageRating > 3 ? (
              props.selectedBook && props.selectedBook.averageRating === 4 ? (
                <FaStarHalfAlt size="24" color="#fcdb00" />
              ) : (
                <FaStar size="24" color="#fcdb00" />
              )
            ) : (
              <FaRegStar size="24" color="#c0c0c0" />
            )}

            {props.selectedBook && props.selectedBook?.averageRating > 4 ? (
              props.selectedBook && props.selectedBook.averageRating === 5 ? (
                <FaStarHalfAlt size="24" color="#fcdb00" />
              ) : (
                <FaStar size="24" color="#fcdb00" />
              )
            ) : (
              <FaRegStar size="24" color="#c0c0c0" />
            )}
          </RatingArea>
        </TitleArea>

        <Description>{props.selectedBook?.description}</Description>

        <ButtonsArea>
          <LinkButton href={props.selectedBook?.link}>
            <ActionButton>BUY</ActionButton>
          </LinkButton>

          <LinkButton href={props.selectedBook?.link}>
            <WishButton>WISHLIST</WishButton>
          </LinkButton>
        </ButtonsArea>
      </DetailsArea>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  selectedBook: state.selectedBook
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  selectBook: (book: Book) => dispatch(selectBook(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
