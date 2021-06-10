import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../../../common/apiConstant";

export const registerUser = async (registerForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`,registerForm);
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