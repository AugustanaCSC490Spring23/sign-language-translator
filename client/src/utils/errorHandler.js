import notifier from "./notifier";

const errorHandler = (error) => {
    // Handle error and display toast message
    notifier.error(error.message);
  };

export default errorHandler;

  