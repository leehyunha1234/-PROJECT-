/* General Reset */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #181818;
    color: #fff;
}

/* Video Container */
.video-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding: 20px;
    box-sizing: border-box;
}

/* Video Card */
.video-card {
    flex: 1 1 calc(16.6% - 16px); /* Default: Show 6 videos per row */
    max-width: calc(16.6% - 16px);
    transition: flex 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.video-card:hover {
    flex: 1 1 100%; /* Expand to full width on hover */
    transform: scale(1.05);
    z-index: 1;
}

.video-card iframe {
    width: 100%;
    height: 150px;
    border-radius: 8px;
    border: none;
    background-color: #000;
}

/* Responsive Design */
/* 4 Videos per row (1024px ~ 768px) */
@media (max-width: 1024px) {
    .video-card {
        flex: 1 1 calc(25% - 16px);
        max-width: calc(25% - 16px);
    }
}

/* 3 Videos per row (768px ~ 480px) */
@media (max-width: 768px) {
    .video-card {
        flex: 1 1 calc(33.3% - 16px);
        max-width: calc(33.3% - 16px);
    }
}

/* 2 Videos per row (480px ~ 320px) */
@media (max-width: 480px) {
    .video-card {
        flex: 1 1 calc(50% - 16px);
        max-width: calc(50% - 16px);
    }
}

/* 1 Video per row (320px and below) */
@media (max-width: 320px) {
    .video-card {
        flex: 1 1 100%;
        max-width: 100%;
    }
}
