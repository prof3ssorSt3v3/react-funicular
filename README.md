# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Starter code for React Movie App

`index.html` will load `src/main.jsx` which loads `src/index.css` and `App.jsx`. The `App.jsx` file is the container for our application. It will load a `<SearchForm>` and `<Grid>` component and hold the state variable for the movie search.

The `<SearchForm>` will have its own state variable for the value in the `<input>`. It will have an `onSubmit` listener that updates the state variable for the movie search inside `App.js`.

Fetch calls will be done inside the `<Grid>`. The search term gets passed to the grid as a property. It needs a state variable for the current loading status and a second one for the fetch results. It will create a grid of `<MovieCard>` components. While fetching it will show a `<Spinner>` component.

The `<MovieCard>` component will receive all the details of each movie through `props`. It will also use the `<MoviePoster>` component to show either a movie poster or the default fallback image. When loading an image it will need an error handler too.
