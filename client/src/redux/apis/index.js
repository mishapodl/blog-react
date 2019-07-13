import axios from "axios";

const fetchError = ({ status, data, error }) =>
  status >= 400 ? new Error(error) : data;

export const fetchGetPosts = async () => {
	console.log('fetch-posts')
  let posts = await axios.get("/api/posts");
  return fetchError(posts);
};
