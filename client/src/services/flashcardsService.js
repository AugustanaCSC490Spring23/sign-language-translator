import axiosInstance from "../utils/axiosInstance";
import errorHandler from "../utils/errorHandler";
import notifier from "../utils/notifier";

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

const removeFlashcards = async (flashcards, slug) => {
  try {
    const response = await axiosInstance.patch(
      `/api/v1/flashcards/removeFlashcards/${slug}`,
      { flashcards },
    );
    notifier.success(`Removed flashcard(s)!`)
    return response;
  } catch (error) {
    errorHandler(error.message);
  }
};

const deleteCollection = async (slug) => {
  try {
    const response = await axiosInstance.delete(
      `/api/v1/flashcards/${slug}`,
    );
    notifier.success(`Deleted collection!`)
    return response;
  } catch (error) {
    errorHandler(error.message);
  }
};

const addCollection = async (title, description) => {
  try {
    const response = await axiosInstance.post(`/api/v1/flashcards`, {
      title,
      description,
    });
    notifier.success(`Add collection ${title} successfully!`);
    return response;
  } catch (error) {
    errorHandler(error.message);
  }
};

export {
  getFlashcardsCollectionById,
  getAllFlashcardsCollections,
  removeFlashcards,
  deleteCollection,
  addCollection
};
