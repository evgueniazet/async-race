export const saveInputsValues = () => {
  const createField = document.querySelector(".create-field") as HTMLElement;

  const createTextInput = createField.querySelector(".combobox-input");
  const createColorInput = createField.querySelector(".field-input");

  const updateField = document.querySelector(".update-field") as HTMLElement;

  const updateTextInput = updateField.querySelector(".combobox-input");
  const updateColorInput = updateField.querySelector(".field-input");

  const inputsArr = [
    { element: createTextInput, name: "createTextInput" },
    { element: createColorInput, name: "createColorInput" },
    { element: updateTextInput, name: "updateTextInput" },
    { element: updateColorInput, name: "updateColorInput" },
  ];

  inputsArr.forEach((inputObj) => {
    const { element, name } = inputObj;
    const handleChangeInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      localStorage.setItem(name, target.value);
    };

    element?.addEventListener("input", handleChangeInput);
  });
};
