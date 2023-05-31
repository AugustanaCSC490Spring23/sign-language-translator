import axiosInstance from "../utils/axiosInstance";
import errorHandler from "../utils/errorHandler";
import notifier from "../utils/notifier";

const signUp = async (user) => {
  try {
    return await axiosInstance
      .post("/api/v1/users/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
        passwordConfirm: user.passwordConfirm,
      })
      .then(function (res) {
        // Store the JWT in local storage
        localStorage.setItem("jwt", res.data.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(res.data.data.user),
        );
        window.location.assign("/");
      });
  } catch (err) {
    console.log(err);
    errorHandler(err.message);
  }
};

const logIn = async (credentials) => {
  try {
    return await axiosInstance
      .post("/api/v1/users/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then(function (res) {
        // Store the JWT in local storage
        localStorage.setItem("jwt", res.data.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(res.data.data.user),
        );
        window.location.assign("/");
        notifier.success("Login successful!");
      });
  } catch (err) {
    console.log(err.message);
    errorHandler(err.message);
  }
};

const logOut = async () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
};

const updateUser = async () => {
  try {
    const userString = localStorage.getItem("user");
    let user = null;

    if (userString) {
      user = JSON.parse(userString);
    } else {
      errorHandler("No such user");
    }

    if (user) {
      const id = user._id;

      const res = await axiosInstance
        .get(`/api/v1/users/${id}`)
        .then((res) => {
          localStorage.setItem(
            "user",
            JSON.stringify(res.data.data.user),
          );
          // console.log(res);
        });

      return res;
    }
  } catch (err) {
    errorHandler(err.message);
  }
};

export { signUp, logIn, logOut, updateUser };
