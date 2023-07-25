export const stopCarMotor = async (id: number) => {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=stopped`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
    });

    if (response.ok) {
      await response.json();
    } else if (response.status === 404) {
      throw new Error(`Car with id ${id} was not found in the garage.`);
    } else if (response.status === 400) {
      const errorData = await response.json();
      console.error(errorData.content);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
