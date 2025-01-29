import { Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import Movie from '@/pages/Movie'

const Root = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/movie/:id" element={<Movie />} />
    </Routes>
  )
}

export default Root