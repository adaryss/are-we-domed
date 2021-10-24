import { createAsyncThunk } from "@reduxjs/toolkit";

const getStartDate = () => {
	const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
	const formattedStartDate = startDate.toISOString().slice(0, 10);

	return formattedStartDate;
}

const { REACT_APP_NASA_TOKEN } = process.env;

export const getAsteroids = createAsyncThunk(
	'asteroids/getAsteroids',
	async () => {
		return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${getStartDate()}&api_key=${REACT_APP_NASA_TOKEN}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText)
			} else {
				return response.json();
			}
		})
		.then(json => json)
	}
)