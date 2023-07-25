import { getInputsData } from "../utils/getInputsData";
import { createCar } from "../api/createCar";
import { createCarItem } from "../pages/garage/createCarItem";
import { createCarStorage } from "../utils/createCarStorage";

export const handleCreateCar = (createField: HTMLElement) => {
  const createButton = createField.querySelector(".field-button");

  const handleCreateCarButtonClick = () => {
    const inputsData = getInputsData(createField);
    const carLength = document.querySelectorAll(".race").length;
    const garageTitle = document.querySelector(".garage-title");

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

        carData.then(async (car) => {
          const cars = await createCarStorage();
          if (carLength < 6) {
            createCarItem(car, racesField);
          }

          if (garageTitle) {
            const carsFlattenedArr = cars.flat();
            garageTitle.innerHTML = `Garage(${carsFlattenedArr.length})`;
          }
        });
      }
    }
  };

  createButton?.addEventListener("click", handleCreateCarButtonClick);
};
