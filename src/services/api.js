import axios from "axios";

const getCategories = (setCategories) => {
  axios.get("http://localhost:3000/api/messages/categories").then(({data}) => {
    setCategories(data);
  });
};

const createMessage = (category, message) => {
  axios
    .post("http://localhost:3000/api/messages", {
      category,
      message,
    })
    .catch((error) => {
      console.log(error);
    });
};

const getMessages = (setLog) => {
  axios.get("http://localhost:3000/api/messages").then(({data}) => {
    setLog(data);
  });
};

export {getCategories, createMessage, getMessages};
