import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center p-4 border-t-2 border-t-mauvea6 font-semibold text-mauve11'>
      <span className='md:font-medium'>
        {new Date().getFullYear()} &copy; Todos os direitos reservados a {" "}
      </span>
      <span className='cursor-pointer' onClick={() =>
        scrollTo({
          top: 0,
          behavior: 'smooth'
        })}
      >
        Cubos Movies
      </span>
    </footer>
  )
}

export default Footer