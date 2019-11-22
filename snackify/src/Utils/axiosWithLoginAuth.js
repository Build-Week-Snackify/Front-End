import axios from "axios";


export const axiosWithLoginAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://snackify7.herokuapp.com",
    headers: {
    Authorization: token
    }
  });
};
