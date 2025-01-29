type PaginetedResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

type Movie = {
  id: number;
  genre_ids: number[];
  poster_path: string;
  title: string;
  vote_average: number;
};

type Genre = {
  id: number;
  name: string;
}

type GenreResponse = {
  genres: Genre[];
}

type Lang = {
  iso_639_1: string;
  english_name: string;
  name: string;
}

type Filter = {
  sort_by: string;
  with_genres: string;
  with_original_language: string;
  vote_average_gte?: number;
  vote_average_lte?: number;
}

type MovieInfo = {
  backdrop_path: string;
  original_title: string;
  popularity: number;
  video: boolean;
  vote_count: number;
  genres: Genre[];
  overview: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  status: string;
  budget: number;
  original_language: string;
} & Movie;