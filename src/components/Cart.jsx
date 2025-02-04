import { RxCross1 } from "react-icons/rx";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import BillContainer from "./BillContainer";
import EmptyCart from "./EmptyCart";

const Cart = ({setShowCart,showCart}) => {

  const cartItems = useSelector(store=>store.cartItems)

  const handleHideCart=()=>{
    setShowCart(false)
  }
  return (
    <div className={`md:w-[35vw] w-full min-h-[300px] h-[100vh] bg-white fixed z-5 right-0 shadow-md min-w-[280px] ${showCart?"translate-0":"translate-x-full"} transition-all duration-400 overflow-y-auto hide-scrollbar`}>
      <div className="p-6 flex justify-between items-center text-purple-600 text-2xl font-semibold shadow-md">
        Order Details
        <RxCross1 className="cursor-pointer hover:scale-[1.1]" onClick={handleHideCart}/>
      </div>
      {cartItems.length===0? <EmptyCart /> :<> {cartItems.map(item=>(
        <CartItem key={item.id} item={item}/>
      ))}
    <BillContainer /> </> }
    </div>
  )
}

export default Cart
