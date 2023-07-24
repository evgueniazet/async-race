export const getCar = async (id: number) => {
  const url = `http://localhost:3000/garage/${id}`;

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
