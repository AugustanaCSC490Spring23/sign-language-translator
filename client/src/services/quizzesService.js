import axiosInstance from "../utils/axiosInstance";
import errorHandler from "../utils/errorHandler";
import notifier from "../utils/notifier";

const getTestWithoutAnswers = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/api/v1/test/testDisplay/${id}`,
    );
    return response;
  } catch (error) {
    // errorHandler(error.message);
  }
};

const getTestResult = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/api/v1/test/testReview/${id}`,
    );
    return response;
  } catch (error) {
    // errorHandler(error.message);
  }
};

const getAllTestsWithBasicInfo = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/test/`);
    return response;
  } catch (error) {
    // errorHandler(error.message);
  }
};

const gradeTest = async (testId, responses) => {
  try {
    const response = await axiosInstance.post(
      `/api/v1/test/testReview/${testId}`,
      { responses },
    );
    return response;
  } catch (error) {
    // errorHandler(error.message);
  }
};
const createTest = async (testQuery) => {
  try {
    const response = await axiosInstance.post(`/api/v1/test`, {
      testQuery,
    });
    return response;
  } catch (err) {
    // errorHandler(err.message);
  }
};

export {
  getTestWithoutAnswers,
  getAllTestsWithBasicInfo,
  gradeTest,
  getTestResult,
  createTest,
};
