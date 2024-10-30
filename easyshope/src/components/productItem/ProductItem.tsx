function ProductItem() {
  return (
    <div className="shadow border rounded pb-2">
      <div className="border p-4 m-2">
        <div>
          <img
            className="rounded-t"
            src="https://via.placeholder.com/150"
            alt="product"
          />
        </div>

        <div className="flex justify-between px-4 mt-2">
          <h1>Product Name</h1>
          <span>345€</span>
        </div>
        {/* <p>Product Description</p>
            <button className="bg-blue-500 text-white p-2 rounded">Add to Cart</button> */}
        <div className="px-4 mt-1">
   <p className="line-clamp-2">          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          doloremque nam numquam necessitatibus eligendi deleniti non porro.
          Dolore, accusantium placeat!</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
