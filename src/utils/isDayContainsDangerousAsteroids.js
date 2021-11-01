export const isDayContainsDangerousAsteroids = (dayData) => {
	return dayData.some(item => item.is_potentially_hazardous_asteroid === true);
}