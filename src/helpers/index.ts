import { Book, Images } from "../types";

const getImagesFromBook = (data: any): Images => {
  let images: Images;

  if (data) {
    images = {
      smallThumbnail: data.smallThumbnail,
      thumbnail: data.thumbnail,
      small: data.small,
      medium: data.medium,
      large: data.large,
      extraLarge: data.extraLarge
    };
  } else {
    images = {
      smallThumbnail: "",
      thumbnail: "",
      small: "",
      medium: "",
      large: "",
      extraLarge: ""
    };
  }

  return images;
};

export const getBooksFromJson = (data: any): Book[] => {
  const books: Book[] = [];

  if (data && data.items.length > 0) {
    data?.items?.forEach((dt: any) => {
      const book: Book = {
        id: dt.id,
        title: dt.volumeInfo.title,
        authors: dt.volumeInfo.authors,
        publisher: dt.volumeInfo.publisher,
        publishedDate: dt.volumeInfo.publishedDate,
        description: dt.volumeInfo.description,
        pageCount: dt.volumeInfo.pageCount,
        categories: dt.volumeInfo.categories,
        averageRating: dt.volumeInfo.averageRating,
        images: getImagesFromBook(dt.volumeInfo.imageLinks),
        language: dt.volumeInfo.language,
        link: dt.volumeInfo.infoLink
      };

      books.push(book);
    });
  }

  return books;
};
