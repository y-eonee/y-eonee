import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true); //loading state
    const [movies, setMovies] = useState([]); //movie list state
    const getMovies = async() =>{ //movie list api 접근 
        const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        );

        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false); //loading 완료
    }
    useEffect(()=>{
        getMovies();
    });

    return (
        <div>
        {loading ? <h1>Loading...</h1> : movies.map(movie => 
            <Movie //movie 컴포넌트에 props 넘겨줌 
            key = {movie.id}
            id= {movie.id}
            coverImg = {movie.medium_cover_image} 
            title = {movie.title} 
            summary = {movie.summary} 
            genres = {movie.genres} />     
        )}
        </div>
    );
}

export default Home;
