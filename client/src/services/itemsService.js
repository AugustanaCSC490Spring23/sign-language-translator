import axiosInstance from "../utils/axiosInstance";
import errorHandler from "../utils/errorHandler";

const getWordsByFirstLetter = async (letter) => {
  return await axiosInstance
    .get(`/api/v1/items?sort=-firstLetter&firstLetter=${letter}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      errorHandler(error.message);
    });
};

const getWordsByTopic = async (topic) => {
  return await axiosInstance
    .get(`/api/v1/items?sort=-firstLetter&topic=${topic}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      errorHandler(error.message);
    });
};

const getAllTopics = async () => {
  return await axiosInstance
    .get(`/api/v1/items/topics`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      errorHandler(error.message);
    });
};

export { getWordsByFirstLetter, getWordsByTopic, getAllTopics };
