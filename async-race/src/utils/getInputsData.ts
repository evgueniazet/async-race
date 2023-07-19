export const getInputsData = (field: HTMLElement) => {
  const colorInput = field.querySelector(".field-input");
  const comboboxInput = field.querySelector(".combobox-input");

  if (
    colorInput instanceof HTMLInputElement &&
    comboboxInput instanceof HTMLInputElement
  ) {
    const color = colorInput.value;
    const name = comboboxInput.value;

    const inputsData = {
      color,
      name,
    };

    return inputsData;
  }

  return null;
};
