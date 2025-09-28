import { useState } from "react";
import "../styleNew/VideoComponentStyle.css"

export function VideoComponent({ videoId }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`;

  return (
    <div className="youtube-container">
      {isPlaying ? (
        <iframe
          src={embedUrl}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div className="youtube-thumbnail" onClick={() => setIsPlaying(true)}>
          <img src={thumbnail} alt="Vista previa del video" />
          <button className="youtube-play">▶</button>
        </div>
      )}
    </div>
  );
}
