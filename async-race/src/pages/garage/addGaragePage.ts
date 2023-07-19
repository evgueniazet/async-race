import { createElement } from "../../utils/createElement";
import { createButton } from "../../pages/components/createButton";
import { addSettings } from "./addSettings";
import { createRaceField } from "./createRaceField";
import { fetchCarsData } from "../../api/fetchCarsData";

export const addGaragePage = async (): Promise<void> => {
  try {
    const cars = await fetchCarsData();

    const main: HTMLElement | null = document.querySelector("main");

    addSettings(main);

    const title: HTMLElement = createElement("h2", "garage-title");
    main?.appendChild(title);

    title.innerText = `Garage(${cars.length})`;

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
  } catch (error) {
    console.error(error);
  }
};
