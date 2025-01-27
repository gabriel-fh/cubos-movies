import React, { useState } from 'react'

const Select = () => {
  // Array com as opções
  const options = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'];

  const [selectedOption, setSelectedOption] = useState<string>('');

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative">
      <button className="w-full p-3 mt-2 border-2 border-mauve-6 rounded-sm bg-mauve-2 text-mauve-11 font-semibold flex justify-between items-center focus:outline-none focus:border-purple-9 focus:caret-purple-9">
        <span>Select an option</span>
        <span className="ml-2">&#9662;</span>
      </button>

      <div className="absolute left-0 right-0 mt-1 bg-mauve-2 border-2 border-mauve-6 text-mauve-11 font-medium shadow-lg rounded-md z-10 max-h-60 overflow-y-auto">
        {options.map((option, idx) => (
          <div key={idx} className="p-2 cursor-pointer hover:bg-mauve-4">{option}</div>
        ))}
      </div>
    </div>

  );
}

export default Select