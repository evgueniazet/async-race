import { stopIconAnimation } from "../utils/moveIcon";

export const driveCarMotor = async (id: number) => {
  const url = `http://localhost:3000/engine?id=${id}&status=drive`;
  try {
    const response = await fetch(url, {
      method: "PATCH",
    });

    if (!response.ok) {
      if (response.status === 500) {
        stopIconAnimation();
        throw new Error(
          "Car has been stopped suddenly. Its engine was broken down."
        );
      }
    }
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
