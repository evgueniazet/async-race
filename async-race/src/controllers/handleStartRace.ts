import { startCarFunc } from "./handleStartCar";

export const handleStartRace = () => {
  const buttonStartRace = document.querySelector(".button-race");

  const handleStartRaceButton = async () => {
    const carWrappers = document.querySelectorAll(".car-wrapper");
    const raceButtonsOn = document.querySelectorAll(".button-motor-on");
    const carWrappersArray = Array.from(carWrappers) as HTMLElement[];

    raceButtonsOn.forEach((button) => {
      button.classList.add("button-motor-on-disabled");
      button.setAttribute("disabled", "");
    });

    await Promise.all(
      carWrappersArray.map(async (car) => {
        const raceWrapper = car.closest(".race-wrapper") as HTMLElement;
        await startCarFunc(raceWrapper);
      })
    );

    raceButtonsOn.forEach((button) => {
      button.classList.remove("button-motor-on-disabled");
      button.removeAttribute("disabled");
    });
  };

  buttonStartRace?.addEventListener("click", handleStartRaceButton);
};
