import { createElement } from "../../utils/createElement";

export const createButton = (className: string, text: string) => {
  const button = createElement("button", className);
  button.innerText = text;
  return button;
};
