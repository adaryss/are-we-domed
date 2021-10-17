import { asteroidsFetchingError, asteroidsHasFetched } from "../actions/fetchAsteroidsActions";

export const getAsteroids = (payload) => {
	return (dispatch) => {
		return fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-10-06&api_key=8GoRmGXrEmhUridCE5aOjO7q24IHvM4FIe3262zD')
		.then((response) => {
			
			if (!response.ok) {
				dispatch(asteroidsFetchingError(response.status));
			} else {
				return response.json();
			}

		  })
		  .then((responseJson) => {
			  dispatch(asteroidsHasFetched({isFetching: false, data: responseJson}));
		  })
		  .catch((error) => {
			throw new Error('Fetching went wrong', error);
		  });
	}
}
