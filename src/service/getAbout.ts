export function getAbout() {
  return fetch(`${process.env.BASE_URL}/page/about`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
