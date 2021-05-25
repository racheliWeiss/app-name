import axios from "axios";
import { LoginUser } from "../../Models/LoginUser";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(user:LoginUser) {
    return axios
      .post(API_URL + "login", user)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  
}

export default new AuthService();