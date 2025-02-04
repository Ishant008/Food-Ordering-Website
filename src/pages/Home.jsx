import Category from "../components/category";
import Header from "../components/Header";
import HomeFoodItems from "../components/HomeFoodItems";
import { MdOutlineSearchOff } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";

const Home = () => {
  const foodItems = useSelector((store) => store.foodItems);
  const [searching, setSearching] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="max-w-[100vw] min-h-[100vh] relative bg-[#ebe0f8] ">
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <Header setSearching={setSearching} setShowCart={setShowCart} />
      {foodItems.length === 0 ? (
        <div className="w-full h-[70vh] flex flex-col justify-center items-center text-4xl">
          <MdOutlineSearchOff className="text-6xl" />
          No Result Found
        </div>
      ) : (
        <>
          {!searching && <Category />}
          <HomeFoodItems />
        </>
      )}
    </div>
  );
};

export default Home;
