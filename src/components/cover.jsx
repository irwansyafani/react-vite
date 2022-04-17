import { useCallback, useState } from "react";

export const Cover = () => {
  const [active, setActive] = useState(0);
  const images = [
    {
      src: "https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Image 1",
    },
    {
      src: "https://images.pexels.com/photos/6527044/pexels-photo-6527044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Image 2",
    },
    {
      src: "https://images.pexels.com/photos/5696273/pexels-photo-5696273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Image 3",
    },
  ];

  const control = (targetIdx) => {
    setActive(
      targetIdx == images.length
        ? 0
        : targetIdx == -1
        ? images.length - 1
        : targetIdx
    );
  };

  return (
    <section>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((img, i) => {
            return (
              <div
                key={i}
                className={`carousel-item ${active == i ? "active" : ""}`}
              >
                <img src={img.src} className="d-block w-100 ratio ratio-4x3 ratio-md-16x9" alt={img.alt} />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => control(active - 1)}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={() => control(active + 1)}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
