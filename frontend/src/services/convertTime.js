const convertTime = (date) => {
  const dateToUpdate = date.split("-").join("/").slice(0, 10);
  const transformedDate = (newDate) => {
    const [year, month, day] = newDate.split("/");
    const transformedData = `${day}/${month}/${year}`;
    return transformedData;
  };
  const result = transformedDate(dateToUpdate);
  return result;
};

export default convertTime;
