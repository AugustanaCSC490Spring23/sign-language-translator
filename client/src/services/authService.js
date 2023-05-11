import axiosInstance from "../utils/axiosInstance";
import errorHandler from "../utils/errorHandler";
import notifier from "../utils/notifier";

const signUp = async (user) => {
  try {
    const res = await axiosInstance.post("/api/v1/users/signup", {
      name: user.name,
      email: user.email,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
    });
    // Store the JWT in local storage
    localStorage.setItem("jwt", res.data.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.data.user));
    window.location.assign("/");
  } catch (err) {
    console.log(err);
    errorHandler(err.message);
  }
};

const logIn = async (credentials) => {
  try {
    const res = await axiosInstance.post("/api/v1/users/login", {
      email: credentials.email,
      password: credentials.password,
    });
    // Store the JWT in local storage
    localStorage.setItem("jwt", res.data.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.data.user));
    window.location.assign("/");
    notifier.success("Login successful!");
  } catch (err) {
    console.log(err.message);
    errorHandler(err.message);
  }
};

const logOut = async () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
};

export { signUp, logIn, logOut };
