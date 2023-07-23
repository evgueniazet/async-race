import { startCarMotor } from "../api/startCarMotor";
import { moveIcon } from "../utils/moveIcon";

export const handleStartCar = () => {
  const buttonMotorOn = document.querySelectorAll(".button-motor-on");

  buttonMotorOn.forEach((button) => {
    const handleButtonMotorOnClick = async (e: Event) => {
      const carContainer = (e.target as Element).closest(".car-container");
      const car = carContainer?.querySelector(".car-wrapper");
      const carId = car?.getAttribute("id");

      if (carId && car) {
        const data = await startCarMotor(Number(carId));
        const driveTime = data.distance / data.velocity;
        const currentX = car.getBoundingClientRect().left;
        const targetX = currentX + 590;

        await moveIcon(car as HTMLElement, targetX, driveTime);
      }
    };

    button.addEventListener("click", handleButtonMotorOnClick);
  });
};
