import { createCar } from "../api/createCar";
import { getRandomItemFromArray } from "../utils/getRandomItemFromArray";

export const handleGenerateCars = () => {
  const generateCarsButton = document.querySelector(".button-generate");

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

    const create100Cars = async () => {
      let count = 0;
      while (count < 100) {
        const success = await createRandomCar();
        if (success) {
          count++;
        }
      }
      console.log("All 100 cars created successfully!");
    };

    create100Cars();
  };

  generateCarsButton?.addEventListener("click", handleGenerateCarsButton);
};
