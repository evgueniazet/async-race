import { createElement } from "../../utils/createElement";

export const createCombobox = () => {
  const comboboxContainer: HTMLElement = createElement("div", "combobox");

  const inputElement: HTMLInputElement = createElement<HTMLInputElement>(
    "input",
    "combobox-input"
  );
  inputElement.type = "text";
  inputElement.setAttribute("list", "options");

  const datalistElement = createElement("datalist", "combobox-datalist");
  datalistElement.id = "options";

  const options: string[] = ["Tesla", "BMW", "Mersedes", "Ford"]; // replace with real data

  options.forEach((optionText) => {
    const optionElement: HTMLOptionElement = createElement(
      "option",
      "combobox-datalist-option"
    );
    optionElement.value = optionText;
    datalistElement.appendChild(optionElement);
  });

  comboboxContainer.appendChild(inputElement);
  comboboxContainer.appendChild(datalistElement);

  return comboboxContainer;
};
