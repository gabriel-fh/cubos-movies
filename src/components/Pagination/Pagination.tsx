import React from 'react'
import Button from '../Button'
import { IconButton } from "@material-tailwind/react";
import { Icon } from '@iconify/react/dist/iconify.js';

const Pagination = () => {
  const [active, setActive] = React.useState(1);
 
  const getItemProps = (index: number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
      className: "rounded-full",
    } as any);
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center gap-4">
      <Button
        // variant="text"
        className="flex items-center gap-2 rounded-full"
        // onClick={prev}
        disabled={active === 1}
      >
        <Icon icon={'lets-icons:expand-left'} className='text-mauve-12 text-2xl'/>
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        // variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === 5}
      >
        <Icon icon={'lets-icons:expand-right'} className='text-mauve-12 text-2xl'/>
      </Button>
    </div>
  );
}

export default Pagination