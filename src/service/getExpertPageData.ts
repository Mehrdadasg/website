export function getExpertPageData() {
  return fetch(`${process.env.BASE_URL}/expert/Dashboard`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
