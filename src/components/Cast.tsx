import styles from './styles/Reviews.module.css'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

const Reviews: React.FC  = () => {
    const { movieId } = useParams()
    console.log(movieId)
    const { movies } = useContext(MovieContext)
    const movie = movies.find(movie => movie.id === Number(movieId));
    
    if (!movie) {
    return <p>Loading or movie not found...</p>;
    }
    console.log(movie)
    return (
        <section className={styles.cast}>
            <h1>Cast of {movie.title}</h1>
            <p>Cast of the movie is not added to this website yet</p>
        </section>
    )
}

export default Reviews