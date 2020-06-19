export interface Book {
  id: string;
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: string;
  categories: string[];
  averageRating: number;
  images: Images;
  language: string;
  link: string;
}

export interface Images {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}
