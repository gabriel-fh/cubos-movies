export const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export const SORT_BY_OPTIONS = [
  { label: "Mais Populares", value: "popularity.desc" },
  { label: "Menos Populares", value: "popularity.asc" },
  { label: "Melhor Avaliação", value: "vote_average.desc" },
  { label: "Pior Avaliação", value: "vote_average.asc" },
  { label: "Título (A-Z)", value: "title.asc" },
  { label: "Título (Z-A)", value: "title.desc" },
  { label: "Mais Novos", value: "primary_release_date.desc" },
  { label: "Mais Antigos", value: "primary_release_date.asc" },
];

export const MOVIE_STATUS: { [key: string]: string } = {
  Released: "Lançado",
  "Returning Series": "Renovada",
  "In Production": "Em produção",
  "Pre-Production": "Pré-produção",
  "Post Production": "Pós-produção",
  Announced: "Anunciado",
  Canceled: "Cancelado",
  Rumored: "Rumorado",
  Planned: "Planejado",
  "Awaiting Release": "Aguardando lançamento",
  Ended: "Finalizado",
};