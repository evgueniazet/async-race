import { createCombobox } from "../../pages/components/createCombobox";
import { createElement } from "../../utils/createElement";
import { createButton } from "../../pages/components/createButton";

export const addSettingsItem = (
  main: HTMLElement | null,
  field: HTMLElement,
  buttonText: string
) => {
//   const main = document.querySelector("main");

  main?.appendChild(field);

  const comboboxField = createCombobox();
  field.appendChild(comboboxField);

  const colorInput: HTMLInputElement = createElement("input", "field-input");
  colorInput.type = "color";
  field.appendChild(colorInput);

  const button = createButton("field-button", buttonText);
  field.appendChild(button);
};
