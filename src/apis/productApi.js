import axios from "axios";
export default axios.create({
  baseURL: "https://fakestoreapi.com/",
  // Use an env file to load a baseurl if you prefer that way
});
