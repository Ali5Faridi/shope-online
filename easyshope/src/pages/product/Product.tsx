import React from "react";

import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";


function Product() {
  const params = useParams();
  return (
    <div>
     <Container>
       <div className="h-90 shadow mt-4 grid grid-cols-12">
        <div className="bg-orange-300 col-span-10 p-3">
            <h1>product name</h1>
            <div>
                <p>price: 300$</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa quasi at atque voluptatem error culpa? Dolorum cupiditate alias impedit. Itaque reprehenderit cum quos qui ipsum praesentium labore natus unde?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa quasi at atque voluptatem error culpa? Dolorum cupiditate alias impedit. Itaque reprehenderit cum quos qui ipsum praesentium labore natus unde?</p>
            </div>
        </div>

        <div className="bg-slate-300 col-span-2 p-4">
            <img
            className="rounded-t"
            src="https://picsum.photos/200/250"
            />
            <div>
                <Button className="mt-2 w-full" variant="primary"> Add To Cart </Button>
            </div>

        </div>
       </div>
     </Container>

    </div>
    
  );
}

export default Product;
