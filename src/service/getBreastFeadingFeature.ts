export function getBreastFeadingFeature() {
  return fetch(`${process.env.BASE_URL}/home/features/breastfeeding`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}