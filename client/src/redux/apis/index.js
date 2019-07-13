import axios from "axios";

const fetchError = ({ status, data, error }) =>
  status >= 400 ? new Error(error) : data;

export const fetchGetPosts = async () => {
  let posts = await axios.get("/api/posts");
  return fetchError(posts);
};
