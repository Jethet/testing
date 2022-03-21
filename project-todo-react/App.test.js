import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LocalStorageMock } from "@react-mock/localstorage";

import App from "./App";

test("app renders", () => {
  render(<App />);
  const titleElement = screen.getByText("This is a todo app, created with React");
  expect(titleElement).toBeInTheDocument();
});

test("create new todo", () => {
  render(
    <LocalStorageMock>
      <App />
    </LocalStorageMock>
  );

  const createButton = screen.getByText("Create new To Do");
  expect(createButton).toBeInTheDocument();
  createButton.click();

  const titleInput = screen.getByPlaceholderText("Title");
  expect(titleInput).toBeInTheDocument();
  userEvent.type(titleInput, "do the dishes");

  const submitButton = screen.getByText("Submit To Do");
  expect(submitButton).toBeInTheDocument();
  submitButton.click();

  expect(localStorage.store).toMatchObject({
    [expect.any(String)]: expect.objectContaining({ title: "do the dishes" }),
  });
});
