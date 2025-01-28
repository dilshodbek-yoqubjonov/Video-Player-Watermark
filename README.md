# Video Player with Dynamic Watermark

📽️ **A simple video player with dynamically positioned watermark using HTML, CSS, JS, and a backend**

## Features

- 🎥 **Video Playback**: Supports MP4 videos via HTML5 `<video>` tag.
- 🔀 **Dynamic Watermark**: Text watermark (e.g., user ID) displayed over the video.
- 🎲 **Random Positioning**: Watermark moves to random locations every 2 seconds.
- ⏱️ **Visibility Control**: Watermark appears for 2 seconds, hides for 5 seconds.
- 🎨 **Customizable Style**: Adjust font size, opacity, color via CSS.
- 🖥️ **Responsive Design**: Works on all screen sizes.

## Backend Features (Optional)

- 🔒 User authentication to generate unique watermarks.
- 📦 Video file management API.
- ⚙️ Watermark configuration stored in a database.

## Technologies

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Tools**: Git, npm

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/video-player-watermark.git
   cd video-player-watermark
   ```
2. **Install dependencies:**

   ```bash
   npm install express
   ```

3. Place your video file in the videos folder (rename it to video.mp4)

4. **Start the server:**

   ```bash
   node server.js

   ```
