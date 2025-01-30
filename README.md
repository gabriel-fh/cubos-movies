# Cubos Movies

Repositório dedicado ao Desafio Técnico Web - Processo Seletivo da Cubos

Este projeto tem como objetivo o desenvolvimento de um aplicativo web responsivo que consome a API do TMDB (The Movie Database). O aplicativo permite aos usuários pesquisar filmes, visualizar detalhes sobre cada um e oferece uma experiência funcional e intuitiva.

## Tecnologias Usadas

- **React JS**
- **TypeScript**
- **TailwindCSS**

## Descrição do Desenvolvimento

Para o desenvolvimento, foi seguido o design do Figma o mais fiel possível. Contudo, algumas pequenas mudanças foram feitas, buscando melhorar a experiência do usuário e otimizar o layout, especialmente devido à limitação de tempo durante o processo.

### Funcionalidades Implementadas

- Pesquisa por filmes, com exibição de resultados baseados em filtros.
- Exibição de detalhes completos sobre os filmes.
- Interface responsiva, garantindo uma boa experiência tanto em desktop quanto em dispositivos móveis.

### Funcionalidades Faltantes

Devido a limitações de tempo, algumas funcionalidades ficaram de fora:

- **Página de "Not Found"**: Caso o usuário altere a URL diretamente, uma página de erro adequada não foi implementada.
- **Limpeza de Filtros**: A opção para limpar todos os filtros aplicados não foi implementada.
- **Correção de Bug Pequeno nos Filtros**: Existe um pequeno bug que pode ocorrer de forma intermitente ao aplicar filtros. No entanto, isso não compromete a usabilidade do aplicativo.

## Instruções de Uso

Para rodar o projeto localmente, siga as instruções abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/gabriel-fh/cubos-movies.git
   cd cubos-movies

2. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
    
   ```bash
   VITE_API_URL=https://api.themoviedb.org/3
   VITE_API_KEY=sua_chave_de_api

3. Instale as dependências:
    
   ```bash
   npm install

4. Inicie o projeto:
   
   ```bash
   npm run dev

## Agradecimentos

Gostaria de agradecer à **Cubos Tecnologia** pela oportunidade de participar do processo seletivo e deste desafio técnico.



  
