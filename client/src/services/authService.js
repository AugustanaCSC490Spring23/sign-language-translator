import axios from "axios";
import notifier from "../utils/notifier";

const signUp = async (user) => {
  try {
    return await axios
      .post("/api/v1/users/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
        passwordConfirm: user.passwordConfirm,
      })
      .then(function (res) {
        console.log(res);
        // Store the JWT in local storage
        localStorage.setItem("jwt", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        window.location.assign("/");
      });
  } catch (err) {
    console.log(err);
  }
};

const logIn = async (credentials) => {
  try {
    return await axios
      .post("/api/v1/users/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then(function (res) {
        // Store the JWT in local storage
        localStorage.setItem("jwt", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        window.location.assign("/");
        notifier.success("Login successful!")
      });
  } catch (err) {
    console.log(err);
    notifier.error("Login failed!")
  }
};

const logOut = async () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
};

export { signUp, logIn, logOut };
