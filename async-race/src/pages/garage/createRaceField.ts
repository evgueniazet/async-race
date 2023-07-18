import { createElement } from "../../utils/createElement";
import { createButton } from "../../pages/components/createButton";
import { carIcon } from "../../icons/carIcon";
import { flagIcon } from "../../icons/flagIcon";

export const createRaceField = (racesField: HTMLElement): void => {
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
  title.innerText = "Car Name";
  raceHeader.appendChild(title);

  const raceWrapper: HTMLElement = createElement("div", "race-wrapper");
  race.appendChild(raceWrapper);

  const carWrapper: HTMLElement = createElement("div", "car-wrapper");
  raceWrapper.appendChild(carWrapper);
  carWrapper.innerHTML = carIcon;

  const flagWrapper = createElement("div", "flag-wrapper");
  raceWrapper.appendChild(flagWrapper);
  flagWrapper.innerHTML = flagIcon;
};
