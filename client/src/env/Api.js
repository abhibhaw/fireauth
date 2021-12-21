const server_url = process.env.REACT_APP_SERVER_URL;

const api = {
  courses: `${server_url}/courses`,
  user: `${server_url}/user`,
  enroll: `${server_url}/enroll`,
};

export default api;
