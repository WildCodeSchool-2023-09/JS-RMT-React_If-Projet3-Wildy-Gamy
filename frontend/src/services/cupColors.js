import img from "../assets/trophy/trophy(1).svg";
import img1 from "../assets/trophy/trophy(2).svg";
import img2 from "../assets/trophy/trophy(3).svg";
import img3 from "../assets/trophy/trophy(4).svg";
import img4 from "../assets/trophy/trophy(5).svg";

const cupColors = (num) => {
  if (num === 0) {
    return img;
  }
  if (num <= 3) {
    return img1;
  }
  if (num <= 5) {
    return img2;
  }
  if (num <= 7) {
    return img3;
  }
  return img4;
};

export default cupColors;
