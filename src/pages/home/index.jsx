import { highlight, collection } from "../../assets/utils/data";

import { Navbar } from "../../components/navbar";
import { Cover } from "../../components/cover";
import { Featured } from "./components/featured";
import { Collection } from "./components/collection";

function Home() {
  return (
    <>
      <Navbar />
      <Cover />
      <Featured highlight={highlight} />
      <Collection collection={collection} />
    </>
  );
}

export default Home;
