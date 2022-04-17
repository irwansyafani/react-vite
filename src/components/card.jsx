export const Card = ({ src, alt, link = "#", title, text, className }) => {
  const move = () => {
    window.location.href = link;
  };

  return (
    <div className={`card ${className}`} onClick={move}>
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};
