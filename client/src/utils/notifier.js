import { toast } from 'react-toastify';

const notifier = {
  success: (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  },
  error: (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  },
  warning: (message) => {
    toast.warning(message, {
      position: toast.POSITION.TOP_CENTER
    });
  },
  info: (message) => {
    toast.info(message, {
      position: toast.POSITION.TOP_CENTER
    });
  },
};

export default notifier;
