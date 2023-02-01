import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const getCategories = (setCategories) => {
  api.get("api/messages/categories").then(({data}) => {
    setCategories(data);
  });
};

const createMessage = (category, message) => {
  api
    .post("api/messages", {
      category,
      message,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getMessages = (setLog) => {
  api.get("api/messages").then(({data}) => {
    setLog(data);
  });
};

export {getCategories, createMessage, getMessages};
