import { error as asteroidsFetchingError, hasFetched as asteroidsHasFetched } from "../features/asteroidsSlice";

const getStartDate = () => {
	const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
	const formattedStartDate = startDate.toISOString().slice(0, 10);

	return formattedStartDate;
}

const { REACT_APP_NASA_TOKEN } = process.env;

export const getAsteroids = (payload) => {
	return (dispatch) => {
		return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${getStartDate()}&api_key=${REACT_APP_NASA_TOKEN}`)
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
