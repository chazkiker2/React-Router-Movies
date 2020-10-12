import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch, Link, Route, Switch } from "react-router-dom";
import axios from 'axios';
// import React from 'react';
// import { Route, Switch, useParam, } from "react-router-dom";
// import MovieCard from "./MovieCard";

export default function MovieCard(props) {
	const [movie, setMovie] = useState();
	let { id } = useParams();
	const [sId, setSId] = useState(id);
	
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => { setIsOpen(!isOpen) };


	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
			.then(response => {
				// Study this response with a breakpoint or log statements
				// and set the response data as the 'movie' slice of state
				console.log(response);
				setMovie(response.data);
			})
			.catch(error => {
				console.error(error);
			});
		// This effect should run every time time
		// the `id` changes... How could we do this?
	}, [sId]);


	if (!props.movie) {
		return <div>Loading movie information...</div>;
	}


	const { title, director, metascore, stars } = props.movie;


	return (
		<div>
			<div className="movie-card">
				<h2>{title}</h2>
				<div className="movie-director">Director: <em>{director}</em></div>
				<div className="movie-metascore">Metascore: <strong>{metascore}</strong></div>
			</div>
			{
				isOpen
					? (<div className="stars">
						{
							stars.map(star => (
								<div key={star} className="movie-star">
									{star}
								</div>
							))
						}
						<div className="save-button">Save</div>
					</div>)
					: <div></div>
			}
		</div>
	);
}
