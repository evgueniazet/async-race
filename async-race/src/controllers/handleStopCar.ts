import { stopCarMotor } from "../api/stopCarMotor";
import { resetIconPosition } from "../utils/moveIcon";

export const handleStopCar = () => {
  const buttonMotorOff = document.querySelectorAll(".button-motor-off");

  buttonMotorOff.forEach((button) => {
    const handleButtonMotorOffClick = async (e: Event) => {
      const raceWrapper = (e.target as Element).closest(".race-wrapper");
      const car = raceWrapper?.querySelector(".car-wrapper") as HTMLElement;
      const carId = car?.getAttribute("id");
      const buttonMotorOn =
        raceWrapper && raceWrapper.querySelector(".button-motor-on");

      if (carId && car && buttonMotorOn) {
        await stopCarMotor(Number(carId));
        resetIconPosition(car);
        buttonMotorOn.classList.remove("button-motor-on-disabled");
        (e.target as Element).classList.remove("button-motor-off-active");
      }
    };

    button.addEventListener("click", handleButtonMotorOffClick);
  });
};
