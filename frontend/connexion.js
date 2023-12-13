import axios from "axios";

const connexion = axios.create({
  baseURL: "https://some-domain.com/api/",
});

export default connexion;
