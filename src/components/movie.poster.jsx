import { useState } from 'react';
import placholderImage from '../assets/no_poster.png';
import styles from '../styles/movie.poster.module.css';

export default function MoviePoster(props) {
  const { url, title } = props;
  const [hasError, setHasError] = useState(false);

  const imgSrc = url && !hasError ? `https://image.tmdb.org/t/p/w342${url}` : placholderImage;

  return <img src={imgSrc} alt={title} className={styles.poster} onError={() => setHasError(true)} />;
}
