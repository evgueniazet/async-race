import { getInputsData } from "../utils/getInputsData";
import { createCar } from "../api/createCar";
import { createCarItem } from "../pages/garage/createCarItem";
import { ICarParams } from "../interfaces/ICar";

export const handleCreateCarButton = (createField: HTMLElement) => {
  const createButton = createField.querySelector(".field-button");

  const handleCreateCarButtonClick = () => {
    const inputsData = getInputsData(createField);

    if (inputsData) {
      const { name: comboboxValue, color: selectedColor } = inputsData;

      if (
        typeof comboboxValue === "string" &&
        typeof selectedColor === "string"
      ) {
        const carData = createCar(comboboxValue, selectedColor);

        const racesField = document.querySelector(
          ".races-field"
        ) as HTMLInputElement;

        carData.then((car) => {
          createCarItem(car, racesField);
        });
      }
    }
  };

  createButton?.addEventListener("click", handleCreateCarButtonClick);
};
