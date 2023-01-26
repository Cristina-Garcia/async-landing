const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCjNevOFP-Kil0D9QAjNL-Jw&part=snippet%2Cid&order=date&maxResults=10";

const content = null || document.getElementById("content");
// console.log(content);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3870957061msh17f517d6ba7c38bp184748jsneea37b060839",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    // console.log(videos);
    let view = `
        ${videos.items
          .map(
            (video) => `
            <a href="https://youtube.com/watch?v=${video.id.videoId}"target="_blank">
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `
          )
          .slice(0, 5)
          .join("")}
        `;
    content.innerHTML = view;
    console.log(view);
  } catch (error) {
    console.log(error);
  }
})();
