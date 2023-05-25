import axiosInstance from "../utils/axiosInstance";
import errorHandler from "../utils/errorHandler";

<<<<<<< HEAD

=======
>>>>>>> main
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

<<<<<<< HEAD

=======
>>>>>>> main
const getAllFlashcardsCollections = async () => {
  try {
    const response = await axiosInstance.get(`/api/v1/flashcards`);
    return response;
  } catch (error) {
    errorHandler(error.message);
  }
};

<<<<<<< HEAD

export { getFlashcardsCollectionById, getAllFlashcardsCollections };



=======
export { getFlashcardsCollectionById, getAllFlashcardsCollections };
>>>>>>> main
