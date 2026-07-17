import './App.css';
import { Routes, Route, NavLink, Link } from "react-router-dom";
// import { Home } from "./components/Home"
// import { Movies } from './components/Movies'
// import { MovieDetails } from './components/MovieDetails'
// import { Reviews } from './components/Reviews'
// import { MovieDetails } from './components/MovieDetails'
// import { Cast } from './components/Cast'
// import { NotFound } from './components/NotFound'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieProvider } from "./components/MovieContext";
import { lazy } from 'react';
import { Suspense } from 'react';
import { Audio } from 'react-loader-spinner'
import { ThreeDots } from 'react-loader-spinner'

const Home = lazy(() => 
  import('./components/Home')
)

const Movies = lazy(() => 
  import('./components/Movies')
)

const MovieDetails = lazy(() => 
  import('./components/MovieDetails')
)

const NotFound = lazy(() => 
  import('./components/NotFound')
)

const Cast = lazy(() => 
  import('./components/Cast')
)

const Reviews = lazy(() => 
  import('./components/Reviews')
)

function App() {
    const [tranding, setTranding] = useState([])
    

  return (
      <Suspense fallback={<ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#0a3554ff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
      wrapperClass="custom-loader"
      visible={true}
/>}>
    <div className="App">
      <header className='header'>
        <div className='header-container container'>
            <h1 className='title'>Movies DB</h1>
            <nav className='nav'>
                <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
                } to="/">Home</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
                } to="/movies">Movies</NavLink>
            </nav>
        </div>
      </header>
      <main>
        <MovieProvider>

            <Routes>
                <Route path="/" element={<Home />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/movies/:movieId" element={<MovieDetails />} />
                  <Route path="/movies/:movieId/cast" element={<Cast />} />
                  <Route path="/movies/:movieId/reviews" element={<Reviews />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          
        </MovieProvider>
      </main>
      {/* <footer className='footer'>
        <div className='footer-container container'>
            <h2 className='footer-title'>Movie DB</h2>
            <a className='footer-link' href='https://www.themoviedb.org/'>themoviedb.org API</a>
        </div>
      </footer> */}
    </div>
    </Suspense>
  );
}

export default App;
