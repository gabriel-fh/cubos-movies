import Rating from "@/components/Rating";
import { useFetchMovieInfo } from "@/hooks/useFetchMovieInfo"
import { IMG_BASE_URL } from "@/utils/constants";
import { useParams } from "react-router";
import Card from "./components/Card";

const Movie = () => {
  const { id = "" } = useParams();

  const { data } = useFetchMovieInfo(id);
  console.log(data);
  return (
    data && (
      <main className="p-4 flex flex-wrap gap-4">
        {/* <section className="flex flex-wrap"> */}
        <figure className="">
          <img src={IMG_BASE_URL + data.poster_path}
            alt={data.title}
            className="aspect-[2/3] rounded-sm" />
        </figure>
        <section className="flex flex-wrap gap-4 justify-between"> {/* trocar pra div se necessário */}
          <div>
            <h1 className="text-2xl font-bold text-mauve12">{data.title}</h1>
            <p className="text-mauve11 text-[15px]">Título original: {data.original_title}</p>
            <p className="text-mauve12 text-[15px] italic">{data.tagline}</p>
          </div>
          <div className="flex flex-wrap flex-row gap-4 items-center w-full ">
            <div className="flex gap-4 flex-1">
              <Card
                title="Popularidade"
                value={data.popularity}
                variant="secondary"
                className="!px-3"
              />
              <Card
                title="Votos"
                value={data.vote_count}
                variant="secondary"
                className="!w-fit !px-3"
              />
            </div>
            <Rating
              voteAverage={data.vote_average}
              variant="secondary"
              className="self-end"
            />
          </div>
        </section>
        <section className="grid gap-4">
          <Card
            title="Sinopse"
            value={data.overview}
            className="w-full"
          />
          <Card title="Gêneros" value={data.genres} />
        </section>
        <section className="w-full grid gap-4">
          <div className="flex items-center flex-wrap gap-4 w-full">
            <Card title={"Lançamento"} value={data.release_date} />
            <Card title={"Duração"} value={data.runtime} />
            <Card title={"Situação"} value={data.status} />
            <Card title={"Idioma"} value={data.original_language} />
          </div>
          <div className="flex gap-4">
            <Card title={"Receita"} value={"$467.99"} /> 
            <Card title={"Orçamento"} value={"$467.99"} />
            <Card title={"Lucro"} value={"$467.99"} />
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-mauve12 mb-4">Trailer</h2>
          <iframe
            title="Trailer"
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/5qap5aO4i9A"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          />
        </section>
        {/* </section> */}
      </main>
    ))
}

export default Movie