import styles from './styles/Reviews.module.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { MovieContext } from './MovieContext'

const Reviews = () => {
    const { movieId } = useParams()
    const { movies } = useContext(MovieContext)
    const movie = movies.find(movie => movie.id === Number(movieId));
    
    if (!movie) {
    return <p>Loading or movie not found...</p>;
    }
    console.log(movie)
    return (
        <section className={styles.reviews}>
            <h1>Reviews of {movie.title}</h1>
            <p>Vote average of the movie is {movie.vote_average}</p>
            <p>Vote cound of the movie is {movie.vote_count}</p>
        </section>
    )
}

export default Reviews