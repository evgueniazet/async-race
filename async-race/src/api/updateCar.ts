import { ICarParams } from "../interfaces/ICar";

export const updateCar = async (id: number, dataParams: ICarParams) => {
  const { color, name } = dataParams;

  const url = `http://127.0.0.1:3000/garage/${id}`;
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
