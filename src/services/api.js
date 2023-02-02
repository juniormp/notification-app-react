import axios from "axios";

const getCategories = (setCategories) => {
  axios
    .get(process.env.REACT_APP_MY_BACKEND_URL + "messages/categories")
    .then(({data}) => {
      setCategories(data);
    });
};

const createMessage = (category, message) => {
  axios
    .post(process.env.REACT_APP_MY_BACKEND_URL + "messages", {
      category,
      message,
    })
    .catch((error) => {
      console.log(error);
    });
};

const getMessages = (setLog) => {
  axios
    .get(process.env.REACT_APP_MY_BACKEND_URL + "messages")
    .then(({data}) => {
      setLog(data);
    });
};

export {getCategories, createMessage, getMessages};
