import { MdOutlineRemoveShoppingCart } from "react-icons/md";


const EmptyCart = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-[50%] text-purple-600 font-semibold text-2xl">
      Your Cart is Empty
      <MdOutlineRemoveShoppingCart className="text-[40px]" />
    </div>
  )
}

export default EmptyCart
