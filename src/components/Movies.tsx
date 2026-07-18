import styles from './styles/Movies.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import { MovieContext } from './MovieContext'
import { useContext } from 'react';

const Movies:React.FC = () => {
  const { setMovies, movies } = useContext(MovieContext);
  const [search, setSearch] = useState('')
  const apiKey = '71c3daa9589b3ba88d7c5d90ff9276b7'

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.currentTarget as HTMLFormElement & {
    elements: {
      input: HTMLInputElement;
    };
  };

  setSearch(target.elements.input.value);
  }

  useEffect(() => {
    if (!search) return

    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: apiKey,
        query: search,
      },
    })
    .then(res => {
      console.log(res.data.results)
      setMovies(res.data.results)
    })
    .catch(err => console.error(err))
  }, [search])

  return (
    <section className={styles.movies}>
      <div className={`${styles.container} container`}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            name="input"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Search</button>
        </form>

        <ul className={styles.list}>
          {movies.map(movie => (
            <li className={styles.item} key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} className={styles.link}>
                <p className={styles.title}>
                  {movie.title}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}


export default Movies

