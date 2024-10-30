
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Store() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
        
        setProducts(result);
        });
    }, []);

  return (
    <div>
      <Container>
        <h1 className="mt-4 bg-red-500 p-4 rounded">New Product</h1>

        <div className="grid grid-cols-4 gap-4 pt-2">
            {
               products.map(item=>(
                <Link to={`/product/${1}`}>
                <ProductItem />
                </Link>
               )) 
            }
        
          
          
        </div>
      </Container>
    </div>
  );
}

export default Store;
