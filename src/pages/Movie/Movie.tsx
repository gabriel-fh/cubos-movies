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
      <main className={"relative p-4 flex flex-wrap gap-4"}>
        {/* <section className="flex flex-wrap"> */}
        <section className="relative grid grid-cols-1 md:px-2 xl:p-8 md:py-4 gap-4 md:grid-cols-2
         lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-7 xl:gap-x-8
        ">
          <div
            className="hidden md:block absolute -z-[1] top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center
            before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-mauve1 before:to-mauve1/50 before:via-mauve1/90 rounded-sm"
            style={{ backgroundImage: `url(${IMG_BASE_URL + data.backdrop_path})` }}
          />
          <figure className="aspect-[2/3] md:row-start-1 md:row-span-3 xl:col-span-2 ">
            <img src={IMG_BASE_URL + data.poster_path}
              alt={data.title}
              className="rounded-sm"
            />
          </figure>
          <section className="flex-1 lg:col-start-2 lg:col-span-3 xl:col-start-3 xl:col-span-5">
            <div className="flex flex-wrap gap-4 lg:gap-0 lg:justify-between flex-1">
              <div className="w-full md:w-[300px] h-fit">
                <h1 className="text-2xl font-bold text-mauve12">{data.title}</h1>
                <p className="text-mauve11 text-[15px] md:text-base">Título original: {data.original_title}</p>
                <p className="text-mauve12 text-[15px] md:text-base italic">{data.tagline}</p>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4 items-center h-fit flex-1 f">
                <div className="flex lg:justify-end gap-4 flex-1">
                  <Card
                    title="Popularidade"
                    value={data.popularity}
                    variant="secondary"
                    className="md:flex-none"
                  />
                  <Card
                    title="Votos"
                    value={data.vote_count}
                    variant="secondary"
                    className="md:flex-none"
                  />
                </div>
                <Rating
                  voteAverage={data.vote_average}
                  variant="secondary"
                />
              </div>
            </div>
          </section>
          <section className="md:col-start-2 md:row-start-2 xl:col-start-3 xl:col-span-2">
            <Card
              title="Sinopse"
              value={data.overview}
              className="mb-4"
            />
            <Card title="Gêneros" value={data.genres} />
          </section>
          <section className="grid gap-4 md:col-start-1 md:col-span-2 md:row-start-4 lg:col-span-1 lg:col-start-3 lg:row-start-2 
          xl:col-start-5 xl:col-span-3 h-fit">
            <div className="grid grid-cols-2 items-center flex-wrap gap-4 h-fit">
              <Card title={"Lançamento"} value={data.release_date} />
              <Card title={"Duração"} value={data.runtime} />
              <Card title={"Situação"} value={data.status} />
              <Card title={"Idioma"} value={data.original_language} />
            </div>
            <div className="flex flex-wrap gap-4 flex-1 h-fit">
              <Card title={"Receita"} value={"$467.99"} />
              <Card title={"Orçamento"} value={"$467.99"} />
              <Card title={"Lucro"} value={"$467.99"} />
            </div>
          </section>
        </section>

        {/*
        <section className="w-full">
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
        </section> */}
        {/* </section> */}
      </main>
    ))
}

export default Movie