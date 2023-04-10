import axios from "axios";

const getWordsByFirstLetter = async (letter) => {
  return await axios
    .get(`/api/v1/items?sort=-firstLetter&firstLetter=${letter}`)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { getWordsByFirstLetter };
