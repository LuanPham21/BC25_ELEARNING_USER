import axios from "axios";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjMiLCJIZXRIYW5TdHJpbmciOiIyNC8wMS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzQ1MTg0MDAwMDAiLCJuYmYiOjE2NTc2NDUyMDAsImV4cCI6MTY3NDY2NjAwMH0.tMpP9vQGyw0easJhkJFDbghtZNpnB7aQjlSyjqVoNRI";

const api = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api/",
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: localStorage.getItem("UserAdmin")
        ? "Bearer " + JSON.parse(localStorage.getItem("UserAdmin")).accessToken
        : "",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
