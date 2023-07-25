export const startCar = async (id: number) => {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=started`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
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
