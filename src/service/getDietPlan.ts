export function getDietPlan() {
  return fetch(`${process.env.BASE_URL}/home/diet`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}