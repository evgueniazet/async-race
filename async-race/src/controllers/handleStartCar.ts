import { startCar } from "../api/startCar";
import { moveIcon } from "../utils/moveIcon";
import { driveCarMotor } from "../api/driveCarMotor";
import { resetIconPosition } from "../utils/moveIcon";

export const handleStartCar = () => {
  const buttonMotorOn = document.querySelectorAll(".button-motor-on");

  buttonMotorOn.forEach((button) => {
    const handleButtonMotorOnClick = async (e: Event) => {
      button.classList.add("button-motor-on-disabled");
      button.setAttribute("disabled", "");
      const raceWrapper = (e.target as Element).closest(".race-wrapper");
      const flag = raceWrapper && raceWrapper.querySelector(".flag-wrapper");
      const buttonMotorOff =
        raceWrapper && raceWrapper.querySelector(".button-motor-off");
      const car = raceWrapper?.querySelector(".car-wrapper") as HTMLElement;
      const carId = car?.getAttribute("id");

      if (carId && car && flag && buttonMotorOff) {
        buttonMotorOff.removeAttribute("disabled");
        buttonMotorOff.classList.add("button-motor-off-active");

        const data = await startCar(Number(carId));
        const driveTime = data.distance / data.velocity;
        const startX = car.getBoundingClientRect().left;
        const finishX = flag.getBoundingClientRect().left;

        await Promise.all([
          moveIcon(car as HTMLElement, startX, finishX, driveTime),
          driveCarMotor(Number(carId), car),
        ]);
      }
    };

    button.addEventListener("click", handleButtonMotorOnClick);
  });
};
