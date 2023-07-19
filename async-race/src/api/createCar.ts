export const createCar = async (name: string, color: string) => {
  try {
    const apiUrl = "http://localhost:3000/garage";
    const carData = {
      name: name,
      color: color,
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });

    if (response.status === 201) {
      const newCar = await response.json();
      console.log("Машина успешно создана:");
      console.log(newCar);
      return newCar;
    } else {
      console.log("Произошла ошибка при создании машины.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Ошибка при выполнении запроса POST:", error.message);
    } else {
      console.error("Неизвестная ошибка при выполнении запроса POST.");
    }
  }
};
