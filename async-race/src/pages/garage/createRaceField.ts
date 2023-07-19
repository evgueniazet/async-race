import { fetchCarsData } from "../../api/fetchCarsData";
import { createCarItem } from "./createCarItem";
import { ICar } from "../../interfaces/ICar";

export const createRaceField = (racesField: HTMLElement): void => {
  const cars = fetchCarsData();

  cars.then((result) => {
    result.forEach((car: ICar) => {
      createCarItem(car, racesField);
    });
  });
};
