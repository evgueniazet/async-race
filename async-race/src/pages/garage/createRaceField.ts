import { createElement } from "../../utils/createElement";
import { createButton } from "../../pages/components/createButton";
import { fetchCarsData } from "../../api/fetchCarsData";
import { carIcon } from "../../icons/carIcon";
import { flagIcon } from "../../icons/flagIcon";

interface ICar {
  name: string;
  color: string;
  id: number;
}

export const createRaceField = (racesField: HTMLElement): void => {
  const cars = fetchCarsData();

  cars.then((result) => {
    result.forEach((car: ICar) => {
      createCar(car);
    });
  });

  const createCar = (car: ICar) => {
    const race: HTMLElement = createElement("div", "race");
    racesField.appendChild(race);

    const raceHeader: HTMLElement = createElement("div", "race-header");
    race.appendChild(raceHeader);

    const selectButton: HTMLElement = createButton(
      "race-header-button",
      "Select"
    );
    raceHeader.appendChild(selectButton);

    const removeButton: HTMLElement = createButton(
      "race-header-button",
      "Remove"
    );
    raceHeader.appendChild(removeButton);

    const title: HTMLElement = createElement("h3", "race-header-title");
    title.innerText = car.name;
    raceHeader.appendChild(title);

    const raceWrapper: HTMLElement = createElement("div", "race-wrapper");
    race.appendChild(raceWrapper);

    const carWrapper: HTMLElement = createElement("div", "car-wrapper");
    raceWrapper.appendChild(carWrapper);
    carWrapper.innerHTML = carIcon;
    carWrapper.id = String(car.id);

    const carElem = race.querySelector(".car") as HTMLElement;

    if (carElem) {
      carElem.style.fill = car.color;
    }

    const flagWrapper = createElement("div", "flag-wrapper");
    raceWrapper.appendChild(flagWrapper);
    flagWrapper.innerHTML = flagIcon;
  };
};
