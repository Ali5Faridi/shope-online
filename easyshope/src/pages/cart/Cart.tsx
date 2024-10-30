
import Container from "../../components/container/Container"
import CartItem from "../../components/cartItem/CartItem"
import Button from "../../components/button/Button"

function Cart() {
  return (
    <div>
        <Container>
            <div>
            <CartItem /> 
            <CartItem /> 
             <CartItem />      
             <CartItem />  
            </div>
            <div className="bg-pink-300 rounded p-6">
                <p>Price: 300$</p>
                <p>Discount: 25%</p>
                <p>Final price: 230$</p>
            </div>

            <Button className="mt-1" variant="success">
                Checkout
            </Button>

        </Container>
      
    </div>
  )
}

export default Cart
