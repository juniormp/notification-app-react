import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import {render} from "@testing-library/react";
import {getCategories, getMessages} from "../services/api";
import NotificatioForm from "./NotificationForm";

jest.mock("../services/api", () => ({
  getCategories: jest.fn(),
  getMessages: jest.fn(),
  createMessage: jest.fn(),
}));

configure({adapter: new Adapter()});

describe("NotificatioForm", () => {
  let wrapper;
  let setMessage;
  let setCategory;
  let handleSubmit;

  beforeEach(() => {
    setMessage = jest.fn();
    setCategory = jest.fn();

    wrapper = shallow(
      <NotificatioForm setMessage={setMessage} setCategory={setCategory} />
    );

    handleSubmit = wrapper.find("button").prop("onClick");
  });

  it("should render correctly", () => {
    const {container} = render(<NotificatioForm />);
    expect(container).toMatchSnapshot();
  });

  it("should fetch categories and messages on mount", () => {
    render(<NotificatioForm />);
    expect(getCategories).toHaveBeenCalled();
    expect(getMessages).toHaveBeenCalled();
  });

  it("shows an alert when no message or category is selected", () => {
    window.alert = jest.fn();
    handleSubmit({preventDefault: jest.fn()});
    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a message and category."
    );
  });
});
