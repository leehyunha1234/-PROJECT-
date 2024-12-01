const videoGrid = document.getElementById('videoGrid');

// Mock data for videos
const videos = Array.from({ length: 50 }, (_, index) => ({
    thumbnail: `https://picsum.photos/320/180?random=${Math.random()}`,
    title: `Video Title ${index + 1}`,
    author: `Author ${Math.ceil(Math.random() * 10)}`,
    stats: `${Math.ceil(Math.random() * 1_000_000)} views • ${Math.ceil(Math.random() * 12)} hours ago`,
    video: `https://samplelib.com/lib/preview/mp4/sample-5s.mp4`
}));

// Function to create video cards
function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');

    videoCard.innerHTML = `
        <div class="thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <video muted loop preload="none">
                <source src="${video.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="video-info">
            <div class="video-title">${video.title}</div>
            <div class="video-author">${video.author}</div>
            <div class="video-stats">${video.stats}</div>
        </div>
    `;

    videoCard.addEventListener('mouseenter', () => {
        const videoElement = videoCard.querySelector('video');
        videoElement.play(); // Play video on hover
    });

    videoCard.addEventListener('mouseleave', () => {
        const videoElement = videoCard.querySelector('video');
        videoElement.pause(); // Pause video when hover ends
        videoElement.currentTime = 0; // Reset to the beginning
    });

    videoGrid.appendChild(videoCard);
}

// Load initial videos
function loadVideos() {
    videos.slice(0, 12).forEach(video => createVideoCard(video));
}

// Infinite scroll logic
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        const currentCount = document.querySelectorAll('.video-card').length;
        const nextVideos = videos.slice(currentCount, currentCount + 12);
        nextVideos.forEach(video => createVideoCard(video));
    }
});

// Initial load
loadVideos();
