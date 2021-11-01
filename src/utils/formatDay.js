export const formatDay = (dateFromKey, type) => {
  const date = new Date(dateFromKey);
  const splittedDate = date.toString().split(" ");

  if (type === "noYear") {
    return `${splittedDate[0]} ${splittedDate[1]} ${splittedDate[2]}`;
  }

  return `${splittedDate[0]} ${splittedDate[1]} ${splittedDate[2]} ${splittedDate[3]}`;
};
