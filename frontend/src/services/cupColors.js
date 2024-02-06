const divisions = (num) => {
  if (num === 0) {
    return "#FFFFFF";
  }
  if (num <= 3) {
    return "#614E1A";
  }
  if (num <= 5) {
    return "#C0C0C0";
  }
  if (num <= 7) {
    return "#FFD700";
  }
  return "#A0B2C6";
};

export default divisions;
