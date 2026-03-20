import { useState, useEffect, useRef } from 'react';
import Spinner from './spinner';
import MovieCard from './movie.card';
import styles from '../styles/grid.module.css';
const baseURL = `https://api.themoviedb.org/3/search/movie`;

export default function Grid(props) {
  //destructure keyword from props from search form
  const { keyword, isLoading, setIsLoading } = props;
  //create state variables for movie data and loading status
  const [movieData, setMovieData] = useState([]);
  //create a reference for the token which is saved across re-renders
  const token = useRef(
    `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjMwNzRiNTgzNjNiYTc2YTM5MGI4OTFlOTdkZTAxZCIsIm5iZiI6MTUwOTIwODgwOC4wNTIsInN1YiI6IjU5ZjRiMmU4YzNhMzY4MWZmMTAxNDA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ez8Fpyp1sTSBldWbfhG7e6vRDARtpN56pG_KGixP3j4`,
  ); //grab your own token from tmdb to save in useRef();

  const search = () => {
    let req = new Request(`${baseURL}?query=${keyword}`, {
      headers: {
        Authorization: `Bearer ${token.current}`,
      },
    });
    fetch(req)
      .then((resp) => {
        if (!resp.ok) throw new Error('Failed to fetch');
        return resp.json();
      })
      .then((data) => {
        console.log('finished searching');
        setMovieData(data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    (() => {
      if (keyword) {
        console.log(`keyword ${keyword}`);
        setIsLoading(true);
        search();
      } else {
        setIsLoading(false);
        setMovieData([]);
      }
    })();
  }, [keyword, search]);

  return (
    <section className={styles.movieGrid}>
      {isLoading && <Spinner />}

      {isLoading == false && movieData.length == 0 && <h2>No movie data available</h2>}

      {isLoading == false && movieData.length > 0 ? movieData.map((m) => <MovieCard movie={m} key={m.id} />) : null}
    </section>
  );
}
