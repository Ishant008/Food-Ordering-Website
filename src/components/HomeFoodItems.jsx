import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";


const HomeFoodItems = () => {
  const foodItems = useSelector(store=>store.foodItems)
  
  return (
    <div className="w-full flex-wrap flex justify-center items-center gap-8 p-10 ">
      {foodItems.map(item=> <FoodItem key={item.id} item={item} />)}
    </div>
  );
};

export default HomeFoodItems;
