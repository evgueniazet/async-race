import { getCars } from "../api/getCars";
import { ICar } from "../interfaces/ICar";

export const createCarStorage = () => {
  return getCars().then((result) => {
    let carsArray: ICar[][] = [];
    let carsInPageArr: ICar[] = [];
    const carsOnPage = 7;

    result.forEach((car: ICar, index: number) => {
      carsInPageArr.push(car);
      if (carsInPageArr.length === carsOnPage || index === result.length - 1) {
        carsArray.push(carsInPageArr);
        carsInPageArr = [];
      }
    });

    return carsArray;
  });
};
