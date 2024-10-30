import Button from "../button/Button"

function CartItem() {
  return (
    <div className="flex border-b pb-2">
      <img
      className="rounded m-4"
       src="https://picsum.photos/150/100" alt="" />
      <div className="ml-3">
      <h3 className="mt-2">Title</h3>
 <div className="mt-2">
 <Button variant="primary">+</Button>
      <span className="mx-2">{2}</span>
      <Button variant="primary">-</Button>
      <Button className="ml-2" variant="danger">Remove</Button>
 </div>
      </div>
    </div>
  )
}

export default CartItem
