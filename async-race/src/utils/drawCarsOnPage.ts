import { createCarItem } from "../pages/garage/createCarItem";
import { ICar } from "../interfaces/ICar";
import { handleStartCar } from "../controllers/handleStartCar";
import { handleStopCar } from "../controllers/handleStopCar";

export const drawCarsOnPage = (
  cars: ICar[][],
  page: number,
  racesField: HTMLElement
) => {
  if (cars.length > 0 && page > 0) {
    cars[page - 1].forEach((car) => {
      createCarItem(car, racesField);
    });
    handleStartCar();
    handleStopCar();
  }
};
