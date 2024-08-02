import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detail.css';

function Detail(){
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);
            setLoading(false);
            setDetails(json.data.movie);
    };
    useEffect(()=>{
        getMovie();
    },[])
    return (
        <div id="detail-container">
            {loading ? <h1>Loading...</h1> :
                <div id="detail-content">
                    <h1 className="detail-title">{details.title_long}</h1>
                    <img 
                        src = {details.medium_cover_image}
                        alt={details.title}
                        className="detail-image" />
                    <h3 className="detail-rating">Rating : {details.rating}</h3>
                    <h3 className="detail-genre">Genres : {details.genres}</h3>
                    <p className="detail-description">{details.description_full}</p>
                </div>
                
            }
        </div>
    )
}

export default Detail;