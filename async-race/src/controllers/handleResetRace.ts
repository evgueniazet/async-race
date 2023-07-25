import { stopCarFunc } from "./handleStopCar";

export const handleResetRace = () => {
  const buttonResetRace = document.querySelector(".button-reset");
  const buttonStartRace = document.querySelector(".button-race") as HTMLElement;

  const handleResetRaceButton = async () => {
    const carWrappers = document.querySelectorAll(".car-wrapper");
    const carWrappersArray = Array.from(carWrappers) as HTMLElement[];

    for (const car of carWrappersArray) {
      const raceWrapper = car.closest(".race-wrapper") as HTMLElement;
      await stopCarFunc(raceWrapper);
    }

    buttonStartRace?.classList.remove("button-race-disabled");
    buttonStartRace?.removeAttribute("disabled");
    buttonStartRace.style.pointerEvents = "auto";
  };

  buttonResetRace?.addEventListener("click", handleResetRaceButton);
};
