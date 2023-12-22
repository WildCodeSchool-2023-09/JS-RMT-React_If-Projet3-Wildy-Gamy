import axios from "axios";

const connexion = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
});

export default connexion;
