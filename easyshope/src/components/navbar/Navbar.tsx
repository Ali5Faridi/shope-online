import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { FaShoppingCart } from "react-icons/fa"; // npm install react-icons

function Navbar() {
  return (
    <div className="h-12 border-b shadow flex items-center bg-lime-200">
      <Container>
        <div className="flex justify-between items-center">
          <ul className="flex">
            <li className="ml-4">
              <Link to={"/"} className=" hover:bg-purple-400 p-4 rounded">Home</Link>
            </li>
            <li className="ml-4">
              <Link to={"/Store"} className=" hover:bg-purple-400 p-4 rounded">Store</Link>
            </li>
          </ul>
          <div>
            <Link to="/cart">
            <FaShoppingCart size={24} /> 
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;