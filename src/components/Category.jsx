import { MdFreeBreakfast,MdLunchDining,MdOutlineDinnerDining  } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiFullPizza } from "react-icons/gi";
import { TiThSmall } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { foodItemsActions } from "../Store/foodItemsSlice";


const Category = () => {
  const dispatch  = useDispatch()

  const categoryItem = [
    {
      name:"All",
      icon:<TiThSmall className="text-5xl text-[#735DA5]"/>
    },
    {
      name:"Breakfast",
      icon:<MdFreeBreakfast className="text-5xl text-[#735DA5]"/>
    },
    {
      name:"Lunch",
      icon:<MdLunchDining className="text-5xl text-[#735DA5]"/>
    },
    {
      name:"Dinner",
      icon:<MdOutlineDinnerDining className="text-5xl text-[#735DA5]"/>
    },
    {
      name:"Soup",
      icon:<TbSoupFilled className="text-5xl text-[#735DA5]"/>
    },
    {
      name:"Drink",
      icon:<RiDrinks2Fill className="text-5xl text-[#735DA5]"/>
    },
    {
      name:"Pizza",
      icon:<GiFullPizza className="text-5xl text-[#735DA5]"/>
    },
  ]

  const handleSort = (category)=>{
    dispatch(foodItemsActions.categorySort(category))
  }

  return (
    <div className="w-full flex-wrap flex justify-center items-center gap-2 md:gap-8">
      {categoryItem.map(item=>(
        <div key={item.name} onClick={()=>handleSort(item.name)} className="w-24 h-24 bg-white flex flex-col justify-center items-center rounded-md shadow-xl py-1.5 gap-2 hover:bg-[#e3e3ed] hover:scale-[1.03] transition-all duration-200">
        <div className="text-[17px] font-semibold">{item.name}</div>
        {item.icon}
        </div>
      ))}
    </div>
  )
}

export default Category
