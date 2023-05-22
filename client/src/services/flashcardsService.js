import axiosInstance from "../utils/axiosInstance";
import errorHandler from "../utils/errorHandler";


const getFlashcardsCollectionById = async (slug) => {
  try {
    const response = await axiosInstance.get(
      `/api/v1/flashcards/${slug}`,
    );
    return response;
  } catch (error) {
    errorHandler(error.message);
  }
};


const getAllFlashcardsCollections = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/flashcards`);
    return response;
  } catch (error) {
    errorHandler(error.message);
  }
};


export { getFlashcardsCollectionById, getAllFlashcardsCollections };



