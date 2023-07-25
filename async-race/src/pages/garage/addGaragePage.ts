import { createElement } from "../../utils/createElement";
import { createButton } from "../../pages/components/createButton";
import { addSettings } from "./addSettings";
import { createRaceField } from "./createRaceField";
import { getCars } from "../../api/getCars";
import { handleGenerateCars } from "../../controllers/handleGenerateCars";
import { handleStartRace } from "../../controllers/handleStartRace";
import { handleResetRace } from "../../controllers/handleResetRace";

export const addGaragePage = async (): Promise<void> => {
  try {
    const cars = await getCars();

    const main: HTMLElement | null = document.querySelector("main");
    const pageNumber = Number(localStorage.getItem("page"));

    addSettings(main);

    const title: HTMLElement = createElement("h2", "garage-title");
    main?.appendChild(title);

    title.innerText = `Garage(${cars.length})`;

    const subtitle: HTMLElement = createElement("h2", "garage-subtitle");
    main?.appendChild(subtitle);
    subtitle.innerText = `Page #${pageNumber}`;

    const racesField: HTMLElement = createElement("div", "races-field");
    main?.appendChild(racesField);

    createRaceField(racesField);

    const garageButtons: HTMLElement = createElement("div", "garage-buttons");
    main?.appendChild(garageButtons);

    const prevButton = createButton("garage-button", "Prev");
    garageButtons.appendChild(prevButton);

    const nextButton = createButton("garage-button", "Next");
    garageButtons.appendChild(nextButton);

    const winMessage = createElement("span", "win-message");
    main?.appendChild(winMessage);

    handleGenerateCars();
    handleStartRace();
    handleResetRace();
  } catch (error) {
    console.error(error);
  }
};
