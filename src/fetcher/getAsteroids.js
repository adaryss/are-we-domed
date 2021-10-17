import { error as asteroidsFetchingError, hasFetched as asteroidsHasFetched } from "../features/asteroidsSlice";

const { REACT_APP_NASA_TOKEN } = process.env;

export const getAsteroids = (payload) => {
	return (dispatch) => {
		return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-10-06&api_key=${REACT_APP_NASA_TOKEN}`)
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
