import { stopIconAnimation } from "../utils/moveIcon";

export const driveCarMotor = async (id: number) => {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=drive`;
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
      } else {
        const textResponse = await response.text();
        console.error("Non-JSON Response:", textResponse);
      }
    }
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
