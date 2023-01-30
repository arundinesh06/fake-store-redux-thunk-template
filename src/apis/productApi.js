import axios from "axios";
export default axios.create({
  baseURL: "https://fakestoreapi.com/",
  // Add base url from an env file if you prefer
});
