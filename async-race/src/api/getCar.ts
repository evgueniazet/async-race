export const getCar = async (id: number) => {
  const url = `http://127.0.0.1:3000/garage/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
