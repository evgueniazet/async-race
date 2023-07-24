export const createWinner = async (newWinnerData: {
  id: number;
  wins: number;
  time: number;
}) => {
  try {
    const response = await fetch("http://localhost:3000/winners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWinnerData),
    });

    if (response.status === 201) {
      const data = await response.json();
      return data;
    } else {
      const errorText = await response.text();
      console.error(
        "Server responded with status",
        response.status,
        "-",
        errorText
      );
      throw new Error("Failed to create winner.");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};
