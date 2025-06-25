export function getFooter() {
  return fetch(`${process.env.BASE_URL}/home/Footer`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
