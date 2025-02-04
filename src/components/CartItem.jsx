import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import { toast } from "react-toastify";

const CartItem = ({item}) => {
  const dispatch = useDispatch()
  const handleRemove=(id)=>{
    toast.error("Item removed",{
      autoClose: 1000,
      hideProgressBar: true,
    })
    dispatch(cartActions.removeItem(id))
  }
  return (
    <div className="h-[90px] mx-2 my-3 flex justify-between p-1 shadow-xl rounded-md">
      <div className="w-[70%] flex gap-2 ">
        <img className="w-[60%] h-full object-cover rounded-md" src={item.image} alt="" />
        <div className="font-semibold w-[40%] flex flex-col justify-center gap-2">
          {item.name}
          <div className=" h-[30px] flex justify-center items-center rounded-md overflow-hidden w-[80%] border-1 border-purple-600 shadow-xl font-semibold">
            <button  className="h-full w-[30%] text-purple-600 cursor-pointer hover:bg-gray-200" onClick={()=>dispatch(cartActions.qtyDecrement(item))} >-</button>
            <span className="w-[40%] text-purple-600 text-center bg-gray-200 h-full">{item.qty}</span>
            <button className="h-full w-[30%] text-purple-600 cursor-pointer hover:bg-gray-200" onClick={()=>dispatch(cartActions.qtyIncrement(item))} >+</button>
          </div>
        </div>
      </div>
      <div className="w-[30%] flex flex-col justify-start items-end gap-6 text-purple-600 font-semibold">
        <span className="text-[18px]">Rs. {item.price}/-</span>
        <MdDelete className="text-red-600 text-3xl cursor-pointer" onClick={()=>handleRemove(item.id)}/>
      </div>
    </div>
  )
}

export default CartItem
