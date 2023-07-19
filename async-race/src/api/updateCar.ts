import { ICarParams } from "../interfaces/ICar";

export const updateCar = async (id: number, carParams: ICarParams) => {
  const { color, name } = carParams;

  const url = `http://localhost:3000/garage/${id}`;
  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({ name, color });

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers,
      body,
    });

    if (!response.ok) {
      console.error("Error:", response.status, response.statusText);
      return null;
    }

    const updatedCar = await response.json();
    return updatedCar;
  } catch (error) {
    console.error("Error:", (error as Error).message);
    return null;
  }
};
