import React from "react";

function BannerLogo({ images, speed = 15000 }) {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, src, alt }) => (
            <div className="image" key={id}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, src, alt }) => (
            <div className="image" key={id}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, src, alt }) => (
            <div className="image" key={id}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
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
