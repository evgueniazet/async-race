import { createElement } from "../../utils/createElement";
import { addSettingsItem } from "./addSettingsItem";
import { addButtonsSettings } from "./addButtonsSettings";
import { handleCreateCar } from "../../controllers/handleCreateCar";
import { saveInputsValues } from "../../utils/saveInputsValues";

export const addSettings = (main: HTMLElement | null) => {
  const createField = createElement("div", "create-field");
  const updateField = createElement("div", "update-field");

  addSettingsItem(main, createField, "Create");
  addSettingsItem(main, updateField, "Update");

  const createTextInputValue = localStorage.getItem("createTextInput");
  const createColorInputValue = localStorage.getItem("createColorInput");
  const updateColorInputValue = localStorage.getItem("updateColorInput");
  const updateTextInputValue = localStorage.getItem("updateTextInput");

  if (createTextInputValue) {
    const createTextInput = createField.querySelector(
      ".combobox-input"
    ) as HTMLInputElement;

    createTextInput.value = createTextInputValue;
  }

  if (createColorInputValue) {
    const createColorInput = createField.querySelector(
      ".field-input"
    ) as HTMLInputElement;

    createColorInput.value = createColorInputValue;
  }

  if (updateTextInputValue) {
    const updateTextInput = updateField.querySelector(
      ".combobox-input"
    ) as HTMLInputElement;

    updateTextInput.value = updateTextInputValue;
  }

  if (updateColorInputValue) {
    const updateColorInput = updateField.querySelector(
      ".field-input"
    ) as HTMLInputElement;

    updateColorInput.value = updateColorInputValue;
  }

  saveInputsValues();

  handleCreateCar(createField);

  const buttonsWrapper = createElement("div", "buttons-wrapper");

  addButtonsSettings(main, buttonsWrapper);
};
