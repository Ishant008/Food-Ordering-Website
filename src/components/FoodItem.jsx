import { IoLeafSharp } from "react-icons/io5";
import { GiChickenOven  } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import { toast } from "react-toastify";

const FoodItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleAddCart = (item)=>{
    dispatch(cartActions.addItem(item))
    toast.success("Item added",{
      autoClose: 1000,
      hideProgressBar: true,
    })
  }
  return (
    <div className="w-60 h-80 bg-white flex flex-col rounded-md shadow-xl p-1 gap-2  hover:scale-[1.01] transition-all duration-200">
      <img
        className="bg-amber-200 w-[100%] h-[60%] rounded-md object-cover"
        src={item.image}
        alt="Food-Image"
      />
      <div className="h-[27px] overflow-hidden font-semibold ml-1.5 text-[20px]">
        {item.name}
      </div>
      <div className=" flex text-[#5d4594] mx-1.5 justify-between items-center">
        <div className="text-[17px font-medium ]">Rs. {item.price}/-</div>
        {item.category==="veg"?<div className="flex items-center gap-1 text-[17px] text-green-600">
          <IoLeafSharp />
          {item.category}
        </div>:<div className="flex items-center gap-1 text-[17px] text-red-600">
          <GiChickenOven  />
          {item.category}
        </div>}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#5d4594] py-1 rounded-md text-white w-[90%] mx-3 mb-2 hover:bg-[#b39aed] transition-all duration-200 cursor-pointer" onClick={()=>handleAddCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
