export function getAppDownload() {
  return fetch(`${process.env.BASE_URL}/home/DownloadApp`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}