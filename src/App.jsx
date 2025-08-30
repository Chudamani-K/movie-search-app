import React from 'react';
import Search from './components/Search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import {useState} from 'react'
import {useEffect} from 'react'

const API_BASE_URL='http://www.omdbapi.com';

const API_KEY=import.meta.env.VITE_OMDB_API_KEY;



const App = () => {
  const [searchTerm,setSearchTerm]=useState("");

  const [errorMess,setErrorMess]=useState("");

  const [movieList,setMovieList]=useState([]);

  const [isLoading,setIsLoading]=useState(false);

  const [trendingMovies,setTrendingMovies]=useState([]);

  const fetchMovies = async (keyword) => {
    if(!keyword) return;
    setIsLoading(true);
    setErrorMess("");
  try {
    const endpoint = `${API_BASE_URL}/?s=${keyword}&apikey=${API_KEY}`;
    const response=await fetch(endpoint);
    const data = await response.json();

    if (data.Response === "False") {
    
     setErrorMess(data.Error || 'failed to fetch');
     setMovieList([]);
     return;
    }

    setMovieList(data.Search); 
  } catch (error) {
    alert("Network error: " + error.message);
    setMovieList([]);
  }
  finally{
    setIsLoading(false)
  }
};

useEffect(()=>{
  fetchMovies("marvel");

},[]);

  return (
    <main>
      <div className="pattern"></div>

      <div
        className="wrapper"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <header>
          <img src="/hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You will enjoy
            without the Hassle
          </h1>

           <Search searchTerm={searchTerm} 
           setSearchTerm={setSearchTerm}
           onSearch={() => fetchMovies(searchTerm)}/>
        </header>
        <section className="all-movies">
         <h2 className="mt-[40px]">All movies</h2>

         {isLoading?(<Spinner />):errorMess?(<p className="text-red-500">{errorMess}</p>):(
          <ul className="movie-grid">
            {movieList.map((movie)=>(
              <li key={movie.imdbID}>
              <MovieCard  movie={movie}/>
              </li>
            )
             )}
            
          </ul>
         )}

         {errorMess && <p className='text-err'>{errorMess}</p>}
        </section>
       
      </div>
    </main>
  );
};

export default App;
