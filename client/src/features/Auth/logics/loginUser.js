import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../../../common/apiConstant";

export const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`,userForm);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }
      return response.data;
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else {
        return { success: false, message: error.message };
      }
    }
  };