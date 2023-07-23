export const startCar = async (carId: number) => {
  const apiUrl = `http://localhost:3000/engine?id=${carId}&status=started`;

  const requestData = {
    id: carId,
    status: "started",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      const errorText = await response.text();
      console.error(errorText);
    }
  } catch (error) {
    console.error(error);
  }
};
