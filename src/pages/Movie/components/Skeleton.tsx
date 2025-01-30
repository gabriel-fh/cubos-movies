const Skeleton = () => {
  return (
    <>
      <div className="grid place-items-center animate-pulse bg-mauve5 rounded-sm overflow-hidden aspect-[2/3] 
        md:row-start-1 md:row-span-3 xl:col-span-2"
      />
      <section className="flex-1 lg:col-start-2 lg:col-span-3 xl:col-start-3 xl:col-span-5">
        <div className=" flex-1 flex flex-wrap gap-4 lg:gap-0">
          <div className="w-full flex flex-col gap-2 justify-start md:flex-1 md:min-w-[300px] h-fit">
            <div className="animate-pulse bg-mauve5 h-8 rounded-sm w-[70%]" />
            <div className="animate-pulse bg-mauve5 h-6 rounded-sm w-[75%]" />
            <div className="animate-pulse bg-mauve5 h-6 w-1/2 rounded-sm" />
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4 items-center h-fit flex-1">
            <div className="flex lg:justify-end gap-4 flex-1">
              <div className="h-16 flex-1 rounded-sm animate-pulse bg-mauve5" />
              <div className="h-16 w-[35%] rounded-sm animate-pulse bg-mauve5" />
            </div>
            <div className="w-[85px] h-20 rounded-full animate-pulse bg-mauve5 xl:w-28 xl:h-28 2xl:w-32'" />
          </div>
        </div>
      </section>
      <section className="md:col-start-2 md:row-start-2 xl:col-start-3 xl:col-span-2">
        <div className="h-56 flex-1 rounded-sm animate-pulse bg-mauve5 mb-4" />
        <div className="h-24 flex-1 rounded-sm animate-pulse bg-mauve5" />
      </section>
      <section className="grid gap-4 md:col-start-1 md:col-span-2 md:row-start-4 lg:col-start-3 lg:col-span-1 
      lg:row-start-2 xl:col-start-5 xl:col-span-3 h-fit"
      >
        <div className="grid grid-cols-2 items-center flex-wrap gap-4 h-fit">
          <div className="h-16 xl:h-20 flex-1 rounded-sm animate-pulse bg-mauve5" />
          <div className="h-16 xl:h-20 flex-1 rounded-sm animate-pulse bg-mauve5" />
          <div className="h-16 xl:h-20 flex-1 rounded-sm animate-pulse bg-mauve5" />
          <div className="h-16 xl:h-20 flex-1 rounded-sm animate-pulse bg-mauve5" />
        </div>
        <div className="flex flex-wrap gap-4 flex-1 h-fit">
          <div className="h-16 xl:h-20 flex-1 rounded-sm animate-pulse bg-mauve5" />
          <div className="h-16 xl:h-20 flex-1 rounded-sm animate-pulse bg-mauve5" />
          <div className="h-16 xl:h-20 flex-1 rounded-sm animate-pulse bg-mauve5" />
        </div>
      </section>
    </>
  )
}

export default Skeleton