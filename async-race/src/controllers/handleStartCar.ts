import { startCar } from "../api/startCar";
import { moveIcon } from "../utils/moveIcon";
import { driveCarMotor } from "../api/driveCarMotor";
import { addWinnerMessage } from "../pages/garage/addWinnerMessage";

let isWin = true;

export const startCarFunc = async (raceWrapper: HTMLElement) => {
  const flag = raceWrapper && raceWrapper.querySelector(".flag-wrapper");
  const buttonMotorOff =
    raceWrapper && raceWrapper.querySelector(".button-motor-off");
  const car = raceWrapper?.querySelector(".car-wrapper") as HTMLElement;
  const carId = car?.getAttribute("id");
  const wins = 1;

  if (carId && car && flag && buttonMotorOff) {
    buttonMotorOff.removeAttribute("disabled");
    buttonMotorOff.classList.add("button-motor-off-active");

    const data = await startCar(Number(carId));
    const driveTime = data.distance / data.velocity;
    const startX = car.getBoundingClientRect().left;
    const finishX = flag.getBoundingClientRect().left;

    Promise.all([
      moveIcon(car as HTMLElement, startX, finishX, driveTime),
      driveCarMotor(Number(carId)),
    ])
      .then((result) => {
        const driveCarMotorResult = result[1];

        if (driveCarMotorResult && driveCarMotorResult.success && isWin) {
          //   console.log("driveCarMotorResult", driveCarMotorResult);
          addWinnerMessage(Number(car.id), driveTime, wins);
          isWin = false;
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
};

export const handleStartCar = () => {
  const buttonMotorOn = document.querySelectorAll(".button-motor-on");

  buttonMotorOn.forEach((button) => {
    const handleButtonMotorOnClick = async (e: Event) => {
      button.classList.add("button-motor-on-disabled");
      button.setAttribute("disabled", "");
      const raceWrapper = (e.target as Element).closest(
        ".race-wrapper"
      ) as HTMLElement;
      startCarFunc(raceWrapper);
    };

    button.addEventListener("click", handleButtonMotorOnClick);
  });
};
