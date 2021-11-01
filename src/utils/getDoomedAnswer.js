export const getDoomedAnswer = (distance, dangerousCount) => {
  const distanceNum = parseInt(distance);
  let answer = "Not yet";

  if (dangerousCount > 0 || (distanceNum > 10000 && distanceNum < 190000)) {
    answer = "Maybe";
  }

  if (distance < 10000) {
    answer = "Probably";
  }

  if (distance < 5000) {
    answer = "Yes";
  }

  return answer;
};
