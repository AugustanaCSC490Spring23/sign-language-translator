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

const getSentence = async (prop) => {
  try {
    return await axiosInstance

      .post("/api/v1/items/sentence", {
        sentence: prop.sentence,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        errorHandler(error.message);
      });
  } catch (err) {
    console.log(err.message);
    errorHandler(err.message);
  }
};

const getWordByText = async (text) => {
  return await axiosInstance
    .get(`/api/v1/items/text/${text}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      errorHandler(error.message);
    });
};

const getNextWordOrPreviousByFirstLetter = async (id) => {
  try {
    return await axiosInstance
      .get(`/api/v1/items/dictionary/nextorprevious/${id}`)
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        errorHandler(error.message);
      });
  } catch (err) {
    console.log(err.message);
    errorHandler(err.message);
  }
};

export {
  getWordsByFirstLetter,
  getWordsByTopic,
  getAllTopics,
  getWordByText,
  getSentence,
  getNextWordOrPreviousByFirstLetter,
};
