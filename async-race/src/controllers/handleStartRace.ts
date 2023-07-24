import { startCarFunc } from "./handleStartCar";

export const handleStartRace = () => {
  const buttonStartRace = document.querySelector(".button-race");

  const handleStartRaceButton = async () => {
    const carWrappers = document.querySelectorAll(".car-wrapper");
    const raceButtons = document.querySelectorAll(".button-motor-on");

    raceButtons.forEach((button) => {
      button.classList.add("button-motor-on-disabled");
      button.setAttribute("disabled", "");
    });

    const racePromises = Array.from(carWrappers).map(async (car) => {
      const raceWrapper = car.closest(".race-wrapper") as HTMLElement;
      startCarFunc(raceWrapper);
    });

    try {
      await Promise.all(racePromises);
    } catch (error) {
      console.error(error);
    }

    raceButtons.forEach((button) => {
      button.classList.remove("button-motor-on-disabled");
      button.removeAttribute("disabled");
    });
  };

  buttonStartRace?.addEventListener("click", handleStartRaceButton);
};
