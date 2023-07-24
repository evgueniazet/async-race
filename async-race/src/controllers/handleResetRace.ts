import { stopCarFunc } from "./handleStopCar";

export const handleResetRace = () => {
  const buttonResetRace = document.querySelector(".button-reset");

  const handleResetRaceButton = async () => {
    const carWrappers = document.querySelectorAll(".car-wrapper");
    const carWrappersArray = Array.from(carWrappers) as HTMLElement[];

    const promises = carWrappersArray.map(async (car) => {
      const raceWrapper = car.closest(".race-wrapper") as HTMLElement;
      return stopCarFunc(raceWrapper);
    });

    await Promise.all(promises);
  };

  buttonResetRace?.addEventListener("click", handleResetRaceButton);
};
