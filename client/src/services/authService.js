import axios from "axios";

const signUp = (e, user) => {
  e.preventDefault();
  axios({
    method: 'post',
    url: '/api/v1/users/signup',
    data: {
      email: user.email,
      name: user.name,
      password: user.password,
      passwordConfirm: user.passwordConfirm
    }
  })
  .then((res) => {
    // setTest("done")
  })
  .catch((e) => {
    console.log(e)
  });
};

export { signUp };
