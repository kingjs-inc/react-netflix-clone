import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4d9b670ac6f3e84edab5d39db96000b4",
    language: "ko-KR",
  },
});

export default instance;
