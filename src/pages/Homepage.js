import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from '../component/Movie'

const API_KEY = '365580a077bde095848bee15cf5a0299'
const MOVIE_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`

function Homepage() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')



    const dataRequest = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }

    useEffect(() => {
        dataRequest(MOVIE_API)
    }, [])

    const handleOnSumbit = (e) => {
        e.preventDefault()
        dataRequest(SEARCH_API + search)
    }
    const handleOnChenge = e => {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="header">
                <div className="container">
                    <h1>React Move App Baiel</h1>
                    <form onSubmit={handleOnSumbit}>
                        <input placeholder="Поиск..." onChange={handleOnChenge} />
                        <button className="search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </form>
                    <Link to='/a'>login</Link>
                </div>
            </div>
            <div className="container">
                <div className="card-list">
                    {movies.map(movie => {
                        return <Movie key={movie.id} movie={movie} />
                    })}
                </div>
            </div>
        </>
    );
}

export default Homepage;