import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  //local
  //   baseURL: "http://127.0.0.1:5001/clone-36b38/us-central1/api",
  baseURL: "https://us-central1-clone-36b38.cloudfunctions.net/api",
});

export default instance;
