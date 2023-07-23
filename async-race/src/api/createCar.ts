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
      return newCar;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
