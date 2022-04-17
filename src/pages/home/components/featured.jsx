import { Card } from "../../../components/card";

export const Featured = ({ highlight }) => {
  return (
    <section className="container py-5">
      <div className="row">
        <h3 className="px-0">Featured</h3>
        {highlight.map((item, i) => {
          return (
            <Card
              key={i}
              alt={item.alt}
              src={item.img}
              text={item.text}
              title={item.title}
              className="card-product col-3 ratio ratio-1x1"
              link="/products/metal-chair"
            />
          );
        })}
      </div>
    </section>
  );
};
