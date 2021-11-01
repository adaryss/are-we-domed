import { useSelector } from "react-redux";
import { selectAsteroids } from "../selectors/asteroids";

export const useAllAsteroidsData = () => {
	const { asteroidsData: {near_earth_objects: nearObjects} } = useSelector(selectAsteroids);
	const asteroidsDataKeys = Object.keys(nearObjects);
	let allAsteroidsData = [];

	asteroidsDataKeys.forEach(item => {
		const concatedData = allAsteroidsData.concat(nearObjects[item]);
		allAsteroidsData = concatedData;
	});

	return allAsteroidsData;
}