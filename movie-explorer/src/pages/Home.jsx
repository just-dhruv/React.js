import React, { useEffect, useRef, useState } from 'react'
import MovieList from '../components/MovieList'

function Home() {
    const [movies, setMoviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchRef = useRef(); // for search field

    const fetchMovie = async (query) => {
        setLoading(true); // when user search so show the loading when the api is fetching the data
        const res = await fetch(`http://www.omdbapi.com/?apikey=59ab3691&s=${query}`);
        const data = await res.json();
        // console.log(data);
        setMoviews(data.Search || []);
        setLoading(false); // when the function fetched the searched data so hide the loading
    }

    useEffect(() => {
        fetchMovie('Avengers');
    },[])

    // search
    const handleSearch = (e) => {
        e.preventDefault();
        const search = searchRef.current.value.trim();
        if(search) fetchMovie(search);

    }

    return (
        <>
            <div className="home">

                <form onSubmit={handleSearch}>
                    <input ref={searchRef} className="searchInput" placeholder="Search for a movie..." />
                    <button type="submit">Search 🔎</button>
                </form>

                { loading ? <p className='loading'>Loading...</p> : <MovieList movies={movies} />}
                

            </div>
        </>
    )
}

export default Home