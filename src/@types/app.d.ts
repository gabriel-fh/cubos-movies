type PaginetedResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

type Movie = {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
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