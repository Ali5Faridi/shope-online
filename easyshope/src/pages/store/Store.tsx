import React from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";

function Store() {
  return (
    <div>
      <Container>
        <h1 className="mt-4 bg-red-500 p-4">New Product</h1>

        <div className="grid grid-cols-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </div>
  );
}

export default Store;
