import axios from "axios";

// base url to make rquests to movie datbases

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
