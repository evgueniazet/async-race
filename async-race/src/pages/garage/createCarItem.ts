import { createElement } from "../../utils/createElement";
import { createButton } from "../../pages/components/createButton";
import { ICar } from "../../interfaces/ICar";
import { handleRemoveCarButton } from "../../controllers/handleRemoveCarButton";
import { carIcon } from "../../icons/carIcon";
import { flagIcon } from "../../icons/flagIcon";
import { handleChangeCar } from "../../controllers/handleChangeCar";

export const createCarItem = (car: ICar, racesField: HTMLElement) => {
  const race: HTMLElement = createElement("div", "race");
  racesField.appendChild(race);

  const raceHeader: HTMLElement = createElement("div", "race-header");
  race.appendChild(raceHeader);

  const selectButton: HTMLElement = createButton(
    "race-header-button",
    "Select"
  );
  raceHeader.appendChild(selectButton);

  handleChangeCar(selectButton);

  const removeButton: HTMLElement = createButton(
    "race-header-button",
    "Remove"
  );
  raceHeader.appendChild(removeButton);

  handleRemoveCarButton(removeButton);

  const title: HTMLElement = createElement("h3", "race-header-title");
  title.innerText = car.name;
  raceHeader.appendChild(title);

  const raceWrapper: HTMLElement = createElement("div", "race-wrapper");
  race.appendChild(raceWrapper);

  const carContainer = createElement("div", "car-container");
  raceWrapper.appendChild(carContainer);

  const buttonsContainer = createElement("div", "buttons-container");
  carContainer.appendChild(buttonsContainer);

  const buttonOn = createButton("button-motor-on", "A");
  buttonsContainer.appendChild(buttonOn);

  const buttonOff = createButton("button-motor-off", "B");
  buttonOff.setAttribute("disabled", "");
  buttonsContainer.appendChild(buttonOff);

  const carWrapper: HTMLElement = createElement("div", "car-wrapper");
  carContainer.appendChild(carWrapper);
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
