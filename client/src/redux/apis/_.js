import axios from "axios";

export const getPosts = () => {
  axios
    .get("/api/posts")
    .then(res => res.data)
    .catch(err => console.log(`${err}`));
};
