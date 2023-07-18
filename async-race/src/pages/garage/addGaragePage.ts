import { createElement } from "../../utils/createElement";
import { createButton } from "../../pages/components/createButton";
import { addSettings } from "./addSettings";
import { createRaceField } from "./createRaceField";

export const addGaragePage = (): void => {
  const main: HTMLElement | null = document.querySelector("main");
  addSettings(main);

  const title: HTMLElement = createElement("h2", "garage-title");
  main?.appendChild(title);
  title.innerText = "Garage(5)";

  const subtitle: HTMLElement = createElement("h2", "garage-subtitle");
  main?.appendChild(subtitle);
  subtitle.innerText = "Page #1";

  const racesField: HTMLElement = createElement("div", "races-field");
  main?.appendChild(racesField);

  createRaceField(racesField);

  const garageButtons: HTMLElement = createElement("div", "garage-buttons");
  main?.appendChild(garageButtons);

  const prevButton = createButton("garage-button", "Prev");
  garageButtons.appendChild(prevButton);

  const nextButton = createButton("garage-button", "Next");
  garageButtons.appendChild(nextButton);
};
