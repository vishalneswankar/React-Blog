import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://www.omdbapi.com/?s=star wars&apikey=71b7d016`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<div className='container-fluid movie-app'>
       <h2 className="pb-5 pt-5 title_head">
       OMDB <span>API</span>
        </h2>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
