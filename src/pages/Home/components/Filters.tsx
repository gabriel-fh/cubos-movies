import Button from "@/components/Button";
import Select from "@/components/Select";
import React from "react";
import { Drawer } from 'vaul';

type FiltersProps = {
  genresData: GenreResponse | undefined;
}

const Filters = ({ genresData }: FiltersProps) => {

  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content className="bg-mauve-8 flex flex-col rounded-t-[10px] mt-24 h-screen fixed bottom-0 left-0 right-0 outline-none">
        <div className="p-4 bg-mauve-1 rounded-t-[10px] flex-1">
          <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-mauve-6 mb-4" />
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <Drawer.Title className="font-semibold text-mauve-12 text-base">Encontre o que você procura</Drawer.Title>
            {genresData?.genres && (
              <div>
                <h3 className="text-mauve-12 font-semibold">Gêneros</h3>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {genresData.genres.map((genre) => (
                    <li key={genre.id}>
                      <Button className="text-xs px-3 py-[3px] rounded-full capitalize border border-purple-3"
                        variant="secondary"
                      >
                        {genre.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* <div>
              <h3 className="text-mauve-12 font-semibold">Ordenar</h3>
              <Select />
            </div> */}
            {/* <div className="w-full">
              <Button className="w-full py-3">Salvar</Button>
            </div> */}
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  )
}

export default Filters;