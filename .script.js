const videoGrid = document.getElementById("video-grid");

// 유튜브 스타일 랜덤 데이터 생성
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
  const daysAgo = getRandomInt(1, 365);
  return `${daysAgo} days ago`;
}

function getRandomViews() {
  return `${getRandomInt(1, 100)}K views`;
}

function getRandomTitle() {
  const titles = [
    "Learn JavaScript",
    "Top 10 Coding Tips",
    "React Tutorials",
    "Fun with CSS",
    "Exploring AI",
    "Gaming Highlights",
    "Travel Vlog",
    "Fitness Journey",
    "Space Exploration",
  ];
  return titles[getRandomInt(0, titles.length - 1)];
}

function getRandomAuthor() {
  const authors = ["John Doe", "Jane Smith", "Tech Guru", "Travel Buddy", "Fitness Pro"];
  return authors[getRandomInt(0, authors.length - 1)];
}

// 동영상 카드 생성 함수
function createVideoItem() {
  const videoItem = document.createElement("div");
  videoItem.className = "video-item";

  const thumbnail = `https://picsum.photos/320/180?random=${getRandomInt(1, 1000)}`;
  const videoSrc = `https://samplelib.com/lib/preview/mp4/sample-${getRandomInt(5, 30)}s.mp4`;

  videoItem.innerHTML = `
    <img src="${thumbnail}" alt="Video Thumbnail">
    <video src="${videoSrc}" muted loop></video>
    <div class="video-info">
      <p class="video-title">${getRandomTitle()}</p>
      <p class="video-author">${getRandomAuthor()}</p>
      <p class="video-stats">${getRandomViews()} • ${getRandomDate()}</p>
    </div>
  `;

  return videoItem;
}

// 동영상 목록 로드 함수
function loadVideos(count = 9) {
  for (let i = 0; i < count; i++) {
    const videoItem = createVideoItem();
    videoGrid.appendChild(videoItem);
  }
}

// 무한 스크롤 기능
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    loadVideos(9);
  }
});

// 초기 동영상 로드
loadVideos(12);
