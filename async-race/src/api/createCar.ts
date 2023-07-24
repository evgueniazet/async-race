export const createCar = async (name: string, color: string) => {
  try {
    const url = "http://localhost:3000/garage";
    const data = {
      name: name,
      color: color,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
