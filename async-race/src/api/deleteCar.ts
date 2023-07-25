export const deleteCar = async (id: number) => {
  try {
    const url = `http://127.0.0.1:3000/garage/${id}`;
    await fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
