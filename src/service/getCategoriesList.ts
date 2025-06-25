export function getCategoriesList() {
  return fetch(`${process.env.BASE_URL}/content/category`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
