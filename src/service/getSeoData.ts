export function getSeoData() {
  return fetch(`${process.env.BASE_URL}/home/seo`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
