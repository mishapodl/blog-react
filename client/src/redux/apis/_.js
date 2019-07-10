import axios from "axios";

export const getPosts = async () => await axios.get("/api/posts");
