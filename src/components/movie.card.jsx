import styles from '../styles/movie.card.module.css';
import MoviePoster from './movie.poster';

export default function MovieCard(props) {
  const { poster_path, title, release_date, overview } = props.movie;

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCardImage}>
        <MoviePoster url={poster_path} title={title} />
      </div>
      <div className={styles.movieCardContent}>
        <h2>{title}</h2>
        <h3>{release_date}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}
