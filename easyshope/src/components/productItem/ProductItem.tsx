

function ProductItem() {
  return (
    <div>
      
        <div className="border p-4 m-2">
        <div>
            <img src="https://via.placeholder.com/150" alt="product" />
        </div>

            <div className="flex justify-between">
            <h1>Product Name</h1>
            <span>Price</span>
            </div>
            <p>Product Description</p>
            <button className="bg-blue-500 text-white p-2 rounded">Add to Cart</button>

           
        </div>
        
        
      

    </div>
  )
}

export default ProductItem
