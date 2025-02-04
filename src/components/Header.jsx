import { IoFastFoodSharp,IoSearchSharp,IoBagCheck } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { foodItemsActions } from "../Store/foodItemsSlice";

const Header = ({setSearching,setShowCart}) => {
  const cartItems = useSelector(store=>store.cartItems)
  const dispatch = useDispatch()

  const handleSearch=(e,input)=>{
    if(input.length===0){setSearching(false)}else{setSearching(true)}
    e.preventDefault();
    dispatch(foodItemsActions.searchSort(input))
    }

  const handleShowCart=()=>{
    setShowCart(true)
  }
  

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-2 md:px-8 relative">
      <div className="w-14 h-14 bg-white flex justify-center items-center rounded-md shadow-xl">
      <IoFastFoodSharp className="text-3xl text-[#735DA5]"/>
      </div>
      <form className="bg-white w-[60%] h-14 flex items-center p-2 gap-1 rounded-sm md:w-[70%] md:gap-4">
      <IoSearchSharp className="text-2xl text-[#735DA5] md:text-3xl"/>
      <input onChange={(e)=>handleSearch(e,e.target.value)} className="w-full outline-0 text-[15px] md:text-[20px]" type="text" placeholder="Search your food here"/>
      </form>
      <div className="w-14 h-14 bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer fixed right-[8px] md:right-[32px]" onClick={handleShowCart}>
      <IoBagCheck className="text-3xl text-[#735DA5]"/>
      <div className="absolute top-0 right-1 text-purple-500 font-bold">{cartItems.length}</div>
      </div>
      <div className="w-14 h-14 bg-transparent">
      </div>
    </div>
  )
}

export default Header
