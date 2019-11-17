import axios from "axios";


export const axiosWithLoginAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "",
    headers: {
    Authorization: token
    }
  });
};
