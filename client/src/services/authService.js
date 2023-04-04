const axios = require("axios");

const signUp = (user) => {
  axios
    .post("/api/v1/user/signup", {
      name: user.name,
      email: user.email,
      role: user.role,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { signUp };
