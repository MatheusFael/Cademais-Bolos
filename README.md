# Cademais Bolos

Projeto de catálogo de bolos feito em React + Vite + TailwindCSS.

## Funcionalidades

- Listagem de bolos com imagem, nome e botão para pedir pelo WhatsApp
- Filtro por sabor de bolo
- Layout responsivo e moderno
- Tela de loading personalizada
- Navbar e Footer estilizados

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)

## Como rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/cademais-bolos.git
   cd cademais-bolos
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. Acesse [http://localhost:5173](http://localhost:5173) no seu navegador.

## Estrutura de pastas

```
src/
  components/    # Componentes React (NavBar, Main, Footer, Loading)
  utils/         # Dados dos bolos
  img/           # Imagens do projeto
  assets/        # Outros assets
  index.css      # Estilos globais e Tailwind
  App.jsx        # Componente principal
  main.jsx       # Ponto de entrada
```

## Personalização

- Para adicionar ou editar bolos, altere o arquivo [`src/utils/index.js`](src/utils/index.js).
- Para trocar imagens, substitua os arquivos em [`src/img/`](src/img/).

## Licença

Este projeto é apenas para fins de estudo e portfólio.