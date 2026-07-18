import styles from './styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home:React.FC = () => {
    const [tranding, setTranding] = useState([])
    const apiKey = '71c3daa9589b3ba88d7c5d90ff9276b7'
    useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/day", {
        params: {
        api_key: apiKey,
        },
    })
    .then(res => {
        console.log(res.data.results);
        setTranding(res.data.results)
    })
    .catch(err => {
        console.error(err);
    });
    }, []);
    return (
        <section className={styles.home}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.title}>Trending today</h2>
                <ul className={styles.list}>
                {tranding.map((item, index) => {
                    return (
                        <li className={styles.item} key={index}>
                            <h3 className={styles.movieTitle}>{item.title}</h3>
                        </li>
                    ) 
                })}
                </ul>
            </div>
        </section>
    )
}

export default Home