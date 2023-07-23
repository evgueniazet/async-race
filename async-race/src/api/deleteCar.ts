export const deleteCar = async (id: number) => {
  try {
    const apiUrl = `http://localhost:3000/garage/${id}`;
    await fetch(apiUrl, {
      method: "DELETE",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
