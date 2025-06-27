export function getExpertList() {
  return fetch(`${process.env.BASE_URL}/expert/List`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
