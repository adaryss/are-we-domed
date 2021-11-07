import { useAllAsteroidsData } from "./useAllAsteroidsData";

export const useClosestAsteroid  = () => {
	const allAsteroids = useAllAsteroidsData();
	let closestAsteroid = allAsteroids[0];

	allAsteroids.forEach(asteroid => {
		const approachData = asteroid.close_approach_data[0].miss_distance.kilometers;
		const currentClosestApproachData = closestAsteroid.close_approach_data[0].miss_distance.kilometers;

		if (approachData < currentClosestApproachData) {
			closestAsteroid = asteroid;
		}
	});

	return closestAsteroid;
}