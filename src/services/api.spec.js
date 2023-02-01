import axios from "axios";
import {getCategories, createMessage, getMessages} from "./api";
jest.mock("axios");

describe("getCategories", () => {
  it("should set the categories", async () => {
    // Arrange
    const setCategories = jest.fn();
    const data = ["FINANCE", "SPORTS", "MOVIE"];
    axios.get.mockResolvedValue({data});

    // Perform
    await getCategories(setCategories);

    // Assert
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:3000/api/messages/categories"
    );
    expect(setCategories).toHaveBeenCalledWith(data);
  });
});

describe("createMessage", () => {
  it("should send post request with category and message", async () => {
    // Arrange
    const category = "FINANCE";
    const message = "Lorem ...";
    axios.post.mockResolvedValue();

    // Perform
    await createMessage(category, message);

    // Assert
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3000/api/messages",
      {category, message}
    );
  });

  it("should catch errors when posting", async () => {
    // Arrange
    const category = "FINANCE";
    const message = "Lorem ...";
    const error = new Error("test error");
    axios.post.mockRejectedValue(error);
    const consoleSpy = jest.spyOn(console, "log");

    // Perform
    await createMessage(category, message);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(error);
  });
});

describe("getMessages", () => {
  it("should set log", async () => {
    // Arrange
    const setLog = jest.fn();
    const data = ["FINANCE", "SPORTS", "MOVIE"];

    // Perform
    axios.get.mockResolvedValue({data});
    await getMessages(setLog);

    // Assert
    expect(setLog).toHaveBeenCalledWith(data);
  });
});
