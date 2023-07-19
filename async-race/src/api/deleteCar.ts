export const deleteCar = async (id: number) => {
  try {
    const apiUrl = `http://localhost:3000/garage/${id}`;
    const response = await fetch(apiUrl, {
      method: "DELETE",
    });

    if (response.status === 200) {
      console.log("Товар успешно удален.");
    } else if (response.status === 404) {
      console.log("Товар не найден.");
    } else {
      console.log("Произошла ошибка при удалении товара.");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Ошибка при выполнении запроса DELETE:", error.message);
    } else {
      console.error("Неизвестная ошибка при выполнении запроса DELETE.");
    }
  }
};
