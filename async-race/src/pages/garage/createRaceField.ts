import { drawCarsOnPage } from "../../utils/drawCarsOnPage";
import { pagination } from "../../controllers/pagination";
import { createCarStorage } from "../../utils/createCarStorage";

export const createRaceField = (racesField: HTMLElement): void => {
  const page = localStorage.getItem("page");
  const carsArrayPromise = createCarStorage();

  carsArrayPromise.then((carsArray) => {
    drawCarsOnPage(carsArray, Number(page), racesField);
    pagination(carsArray, racesField);
  });
};
