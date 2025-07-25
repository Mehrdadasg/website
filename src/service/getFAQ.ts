export function getFAQ() {
  return fetch(`${process.env.BASE_URL}/home/faq`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
