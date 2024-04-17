import React, { useState } from "react";

function BannerLogo({ images, speed = 15000 }) {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  return (
    <div className="inner">
      <div
        className="wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <section style={{ "--speed": `${isPaused ? 0 : speed}ms` }}>
          {images.map(({ id, src, alt }) => (
            <div className="image" key={id}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${isPaused ? 0 : speed}ms` }}>
          {images.map(({ id, src, alt }) => (
            <div className="image" key={id}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${isPaused ? 0 : speed}ms` }}>
          {images.map(({ id, src, alt }) => (
            <div className="image" key={id}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${isPaused ? 0 : speed}ms` }}>
          {images.map(({ id, src, alt }) => (
            <div className="image" key={id}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${isPaused ? 0 : speed}ms` }}>
          {images.map(({ id, src, alt }) => (
            <div className="image" key={id}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default BannerLogo;
