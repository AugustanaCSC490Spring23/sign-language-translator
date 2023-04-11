import axios from "axios";

const signUp = async (user) => {
  return await axios
    .post("/api/v1/user/signup", {
      name: user.name,
      email: user.email,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { signUp };
