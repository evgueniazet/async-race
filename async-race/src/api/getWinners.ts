export const getWinners = async () => {
  try {
    const url = "http://127.0.0.1:3000/winners";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error when  receiving  data about winners");
    }

    const data = await response.json();

    return {
      totalCount: data.length,
      winners: data,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return {
      totalCount: 0,
      winners: [],
    };
  }
};
