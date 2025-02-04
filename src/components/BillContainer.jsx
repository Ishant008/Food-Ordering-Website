import { useSelector } from "react-redux"

const BillContainer = () => {
  const cartItems = useSelector(store=>store.cartItems)
  let subtotal = cartItems.reduce((total,item)=>total+item.qty*Number(item.price),0);
  let taxes = subtotal*0.9/100;
  let total = Math.floor(subtotal+taxes+50);

  return (
    <div className="mx-9 my-6 h-[150px]">
      <div className="h-[2px] bg-purple-600"></div>
      <div className="my-4">
        <div className="flex justify-between font-semibold">
          <span className="font-semibold">Subtotal</span>
          <span className="text-purple-600">Rs. {subtotal}/-</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span className="font-semibold">Delivery Fee</span>
          <span className="text-purple-600">Rs. 50/-</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span className="font-semibold">Taxes</span>
          <span className="text-purple-600">Rs. {taxes}/-</span>
        </div>
      </div>
      <div className="h-[2px] bg-purple-600"></div>
      <div className="flex justify-between font-semibold mt-1">
          <span className="font-semibold">Total</span>
          <span className="text-purple-600">Rs. {total}/-</span>
        </div>
    </div>
  )
}

export default BillContainer
