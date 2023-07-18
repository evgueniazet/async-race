import { createElement } from "../../utils/createElement";
import { addSettingsItem } from "./addSettingsItem";
import { addButtonsSettings } from "./addButtonsSettings";

export const addSettings = (main: HTMLElement | null) => {
  const createField = createElement("div", "create-field");
  const updateField = createElement("div", "update-field");

  addSettingsItem(main, createField, "Create");
  addSettingsItem(main, updateField, "Update");

  const buttonsWrapper = createElement("div", "buttons-wrapper");

  addButtonsSettings(main, buttonsWrapper);
};