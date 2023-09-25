import { openAxiosInstance,securedAxiosInstance } from "./instance";

const auth_apis = {
loginWithEmailAndPassword: async (email, password) => {
    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);
  
     return openAxiosInstance.post(`token`,params)
  }

  };

  const apis = {
    ...auth_apis,
  };
  
  export default apis;