const getCzDay = (day) => {
  switch (day) {
    case "Mon":
      return "Po";
    case "Tue":
      return "Út";
    case "Wed":
      return "St";
    case "Thu":
      return "Čt";
    case "Fri":
      return "Pá";
    case "Sat":
      return "So";
    case "Sun":
      return "Ne";
    default:
      return "";
  }
};
const getCzMonth = (month) => {
  switch (month) {
    case "Jan":
      return "ledna";
    case "Feb":
      return "února";
    case "Mar":
      return "března";
    case "Apr":
      return "dubna";
    case "May":
      return "května";
    case "Jun":
      return "června";
    case "Jul":
      return "července";
    case "Aug":
      return "srpna";
    case "Sep":
      return "září";
    case "Sept":
      return "září";
    case "Oct":
      return "října";
    case "Nov":
      return "listopadu";
    case "Dec":
      return "prosince";
    default:
      return "";
  }
};

const getCzechDate = (splittedDate, type) => {
  if (type === "noYear") {
    return `${getCzDay(splittedDate[0])} ${splittedDate[2]}. ${getCzMonth(splittedDate[1])}`;
  }

  return `${getCzDay(splittedDate[0])} ${splittedDate[2]}. ${getCzMonth(splittedDate[1])} ${splittedDate[3]}`;
};

const getEngDate = (splittedDate, type) => {
  if (type === "noYear") {
    return `${splittedDate[0]} ${splittedDate[1]} ${splittedDate[2]}`;
  }

  return `${splittedDate[0]} ${splittedDate[1]} ${splittedDate[2]} ${splittedDate[3]}`;
};

export const formatDay = (dateFromKey, type, lang) => {
  const date = new Date(dateFromKey);
  const splittedDate = date.toString().split(" ");

  if (lang === "cs") {
    return getCzechDate(splittedDate, type);
  }

  return getEngDate(splittedDate, type);
};
