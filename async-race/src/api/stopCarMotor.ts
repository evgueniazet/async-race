export const stopCarMotor = async (id: number) => {
  const url = `http://localhost:3000/engine?id=${id}&status=stopped`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
    });

    if (response.ok) {
      const data = await response.json();
      const { velocity, distance } = data;
      console.log(`Car stopped successfully.`);
      console.log(`Actual velocity: ${velocity} km/h`);
      console.log(`Actual distance: ${distance} km`);
    } else if (response.status === 404) {
      console.log(`Car with id ${id} was not found in the garage.`);
    } else if (response.status === 400) {
      const errorData = await response.json();
      console.log("Error:", errorData.content);
    } else {
      console.log("Something went wrong.");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
