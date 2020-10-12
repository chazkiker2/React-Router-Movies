import React from 'react';
import { Link, Route, Switch, useParam, useRouteMatch } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
	// const { movies } = props;
	const { url } = useRouteMatch();

	return (
		<div className="movie-list">
			{
				props.movies.map(movie => {
					return (
					<Link key={movie.id} to={`/movies/${movie.id}`}>
						{/* <MovieDetails key={movie.id} id={movie.id} movie={movie} /> */}
						<MovieCard key={movie.id} id={movie.id} movie={movie} />
					</Link>
					)
				})
			}
		</div>
	);
}

// function MovieDetails(props) {
// 	const { title, director, metascore } = props.movie;

// 	return (

// 		<div className="movie-card">
// 			<h2>{title}</h2>
// 			<div className="movie-director">
// 				Director: <em>{director}</em>
// 			</div>
// 			<div className="movie-metascore">
// 				Metascore: <strong>{metascore}</strong>
// 			</div>
// 		</div>

// 	);
// }
