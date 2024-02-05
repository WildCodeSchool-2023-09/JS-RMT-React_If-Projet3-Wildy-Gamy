const divisions = (num) => {
  if (num === 0) {
    return "noob";
  }

  if (num <= 3) {
    return "bronze";
  }

  if (num <= 5) {
    return "argent";
  }

  if (num <= 7) {
    return "or";
  }

  return "platine";
};

export default divisions;
