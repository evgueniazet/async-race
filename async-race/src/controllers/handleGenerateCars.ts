import { createCar } from "../api/createCar";
import { getRandomItemFromArray } from "../utils/getRandomItemFromArray";
import { createCarStorage } from "../utils/createCarStorage";
import { createRaceField } from "../pages/garage/createRaceField";

export const handleGenerateCars = () => {
  const generateCarsButton = document.querySelector(".button-generate");
  const garageTitle = document.querySelector(".garage-title");
  const racesField = document.querySelector(".races-field") as HTMLElement;

  const handleGenerateCarsButton = async () => {
    const getRandomColor = () => {
      const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "black",
        "white",
        "silver",
        "gray",
        "orange",
        "purple",
      ];
      return getRandomItemFromArray(colors);
    };

    const getRandomCarName = () => {
      const brandNames = [
        "Tesla",
        "Ford",
        "Chevrolet",
        "Toyota",
        "Honda",
        "BMW",
        "Audi",
        "Mercedes",
        "Lamborghini",
        "Ferrari",
      ];
      const modelNames = [
        "Model S",
        "Mustang",
        "Camaro",
        "Corolla",
        "Civic",
        "X5",
        "A4",
        "E-Class",
        "Aventador",
        "458 Italia",
      ];
      const randomBrand = getRandomItemFromArray(brandNames);
      const randomModel = getRandomItemFromArray(modelNames);
      return randomBrand + " " + randomModel;
    };

    const createRandomCar = async () => {
      const randomName = getRandomCarName();
      const randomColor = getRandomColor();
      try {
        await createCar(randomName, randomColor);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    };

    const generateCars = async () => {
      let count = 0;
      let maxCount = 100;
      while (count < maxCount) {
        const success = await createRandomCar();
        if (success) {
          count++;
        }
      }
    };

    await generateCars();

    if (racesField) {
      racesField.innerHTML = "";
      createRaceField(racesField);
    }

    const cars = await createCarStorage();
    const carsFlattenedArr = cars.flat();

    if (garageTitle) {
      garageTitle.innerHTML = `Garage(${carsFlattenedArr.length})`;
    }
  };

  generateCarsButton?.addEventListener("click", handleGenerateCarsButton);
};
