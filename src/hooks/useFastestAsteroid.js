import { useAllAsteroidsData } from "./useAllAsteroidsData";

export const useFastestAsteroid  = () => {
	const allAsteroids = useAllAsteroidsData();
	let fastestAsteroid = allAsteroids[0];

	allAsteroids.forEach(asteroid => {
		const speedData = parseInt(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour);
		const currentFastestData = parseInt(fastestAsteroid.close_approach_data[0].relative_velocity.kilometers_per_hour);

		if (speedData > currentFastestData) {
			fastestAsteroid = asteroid;
		}
	});

	return fastestAsteroid;
}