import { useAllAsteroidsData } from "./useAllAsteroidsData";

export const usePotentiallyDangerousItems = () => {
	const allAsteroids = useAllAsteroidsData();
	const dangerousAsteroids = allAsteroids.filter(item => item.is_potentially_hazardous_asteroid === true);

	return dangerousAsteroids;
}