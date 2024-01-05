const transformTimeToMinute = (time) => {
  const arr = time.split(":");

  return +arr[0] * 60 + +arr[1];
};

module.exports = {
  transformTimeToMinute,
};
