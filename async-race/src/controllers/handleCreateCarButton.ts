import { createCar } from "../api/createCar";
import { createCarItem } from "../pages/garage/createCarItem";

export const handleCreateCarButton = (createField: HTMLElement) => {
  const createButton = createField.querySelector(".field-button");

  const handleCreateCarButtonClick = () => {
    const colorInput = createField.querySelector(".field-input");
    const comboboxInput = createField.querySelector(".combobox-input");

    if (
      colorInput instanceof HTMLInputElement &&
      comboboxInput instanceof HTMLInputElement
    ) {
      const selectedColor = colorInput.value;
      const comboboxValue = comboboxInput.value;
      const carData = createCar(comboboxValue, selectedColor);
      const racesField = document.querySelector(".races-field") as HTMLInputElement;

      carData.then((car) => {
        createCarItem(car, racesField);
      });
    }
  };

  createButton?.addEventListener("click", handleCreateCarButtonClick);
};
