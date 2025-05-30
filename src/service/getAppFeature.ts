export function getAppFeature() {
  return fetch(`${process.env.BASE_URL}/home/features/app`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}