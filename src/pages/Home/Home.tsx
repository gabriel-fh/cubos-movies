
import SearchAndFilter from './components/SearchAndFilter';
import { useHome } from './Hooks/useHome';
const Home = () => {

  const {data, isLoading} = useHome();

  if(isLoading) {
    return <h1>Carregando...</h1>
  }

  console.log(data);
  return (
    <main className="w-full min-h-screen">
      <div className="absolute -top-32 -z-2 w-full min-h-screen bg-[url(backgropund-krists-luhaers-unsplash.png)]
      bg-no-repeat bg-cover bg-center bg-mauve-1 before:w-full before:h-full before:absolute before:top-0 before:left-0 
       before:bg-gradient-to-b before:from-mauve-1 before:to-mauve-1 before:via-mauve-1/85
      "/>
      <SearchAndFilter/>
      <section className='w-full bg-mauve-3 h-screen p-4'>

      </section>
    </main>
  )
}

export default Home