import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    // Authorization: "bearer " + localStorage.getItem("jwt")
  },
});