import React from "react";

const Music = () => {
  return (
    <div id="music" class="music">
      <span />
      <h1>Music</h1>
      <div class="vids">
        <iframe
          src="https://www.youtube.com/embed/VpmyQNxi2HQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        <iframe
          src="https://www.youtube.com/embed/H4zWV4xiCnM"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        <iframe
          src="https://www.youtube.com/embed/yLS0MaPmGig"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        <iframe
          src="https://www.youtube.com/embed/wr4hUYTUy2s"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    </div>
  );
};

export default Music;
