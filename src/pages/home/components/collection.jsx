import { Card } from "../../../components/card";

export const Collection = ({ collection }) => {
  return (
    <section className="container py-5">
      <div className="row">
        <h3 className="px-0">Collection</h3>
        {collection.map((item, i) => {
          return (
            <Card
              key={i}
              src={item.img}
              title={item.title}
              text={item.text}
              className="card-collection px-0"
            />
          );
        })}
      </div>
    </section>
  );
};
