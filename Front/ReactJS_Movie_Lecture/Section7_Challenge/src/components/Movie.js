import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './Movie.css';

function Movie({id, coverImg, title, summary, genres}){
    return (
        <div id="movie-container">
            <h2 className="movie-title">
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <ul className="movie-genre">
                {genres.map(g => <li key={g}>{g}</li>)} {/*각 g에 대해 map함수 한 번 더 적용*/}
            </ul>
            <div className="movie-content">
                <img className="movie-img" src={coverImg} alt={title} />
                <p className="movie-summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;