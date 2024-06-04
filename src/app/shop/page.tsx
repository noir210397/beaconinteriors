import { Suspense } from "react";
import Search from "./Search";

const Shop = () => {
  return (
    <div>
      <Suspense fallback={<p>loading</p>}>
        <Search />
      </Suspense>
    </div>
  );
};

export default Shop;
