import { getInputsData } from "../utils/getInputsData";
import { updateCar } from "../api/updateCar";
import { ICarParams } from "../interfaces/ICar";
import { changeRgbToHex } from "../utils/changeRgbToHex";

export const handleChangeCar = (selectButton: HTMLElement) => {
  const handleSelectButtonClick = (event: Event) => {
    if (event.target instanceof Element) {
      const race = event.target.closest(".race");
      if (race) {
        const carName = race.querySelector(".race-header-title");
        const car = race.querySelector(".car");
        const carWrapper = race.querySelector<SVGElement>(".car-wrapper");
        const updateButton = document.querySelectorAll(".field-button")[1];
        const updateField = document.querySelector(
          ".update-field"
        ) as HTMLElement;
        const nameInput = updateField?.querySelector(".combobox-input");
        const colorInput = updateField?.querySelector(".field-input");
        (nameInput as HTMLInputElement).value = carName?.innerHTML || "";

        const carStyle = car && window.getComputedStyle(car);
        const fillValue = carStyle && carStyle.getPropertyValue("fill");

        const hexColorValue = changeRgbToHex(fillValue);
        (colorInput as HTMLInputElement).value = hexColorValue;

        const handleUpdateButtonClick = () => {
          const inputsData = getInputsData(updateField);

          updateCar(Number(carWrapper?.id), inputsData as ICarParams);

          selectButton.classList.remove("race-header-button-active");

          if (carWrapper) {
            const car = carWrapper.querySelector(".car");
            if (car instanceof SVGElement) {
              car.style.fill = inputsData?.color || "defaultColor";
              if (carName) {
                carName.innerHTML = inputsData?.name || "Default Name";
              }
            }
          }
        };

        updateButton.addEventListener("click", handleUpdateButtonClick);
      }
    }

    selectButton.classList.add("race-header-button-active");
    const updateField = document.querySelector(".update-field") as HTMLElement;
  };

  selectButton.addEventListener("click", handleSelectButtonClick);
};
