import styles from './styles/MovieDetails.module.css'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { MovieContext } from "./MovieContext";
import { Link } from 'react-router-dom';

const MovieDetails: React.FC = () => {
    const { movieId } = useParams()
    const { movies } = useContext(MovieContext)
    const movie = movies.find(movie => movie.id === Number(movieId));
    if (!movie) {
    return <p>Loading or movie not found...</p>;
    }
    return (
        <section className={styles.movieDetails}>
            <div className={`${styles.container} container`}>
                <h1 className={styles.title}>{movie.title}</h1>
                <p className={styles.text}>{movie.overview}</p>
                <img className={styles.image} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <p className={styles.text}>Popularity of the movie: {movie.popularity}</p>
                <p className={styles.text}>Release date of the movie: {movie.release_date}</p>
                <Link to={`/movies/${movieId}/cast`} className={styles.link}>
                    <button className={styles.title}>
                        Cast of {movie.title}
                    </button>
                </Link>
                <Link to={`/movies/${movieId}/reviews`} className={styles.link}>
                    <button className={styles.title}>
                        Reviews of {movie.title}
                    </button>
              </Link>
            </div>
        </section>
    )
}

export default MovieDetails