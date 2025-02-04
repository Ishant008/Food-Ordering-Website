const FoodData = [
  {
    id: 6,
    name: "Mango Lassi",
    image: "https://img.freepik.com/free-photo/panna-cotta-with-pineapple-slices_140725-2172.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Drink",
    price: "100",
    category: "veg"
  },
  {
    id: 8,
    name: "Iced Tea",
    image: "https://img.freepik.com/free-photo/glass-coca-cola-with-ice-cubes-lemon-slice-grey-background_140725-10691.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Drink",
    price: "90",
    category: "veg"
  },
  {
    id: 17,
    name: "Chole Bhature",
    image: "https://img.freepik.com/premium-photo/chole-bhature-chick-pea-curry-fried-puri-served-terracotta-crockery-white-background-selective-focus_466689-24973.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Lunch",
    price: "180",
    category: "veg"
  },
  {
    id: 11,
    name: "Paneer Tikka",
    image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19992.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Dinner",
    price: "250",
    category: "veg"
  },
  {
    id: 13,
    name: "Dal Makhani",
    image: "https://img.freepik.com/premium-photo/dal-makhani-daal-makhni-is-popular-food-from-punjab-india-made-using-whole-black-lentil-red-kidney-beans-butter-cream-served-with-garlic-naan-indian-bread-roti_466689-22002.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Dinner",
    price: "210",
    category: "veg"
  },
  {
    id: 14,
    name: "Chicken Biryani",
    image: "https://img.freepik.com/free-photo/high-angle-pakistan-meal-composition_23-2148821517.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Lunch",
    price: "280",
    category: "non-veg"
  },
  {
    id: 7,
    name: "Lemonade",
    image: "https://img.freepik.com/premium-photo/lemonade-with-ice-mint-white-background_437222-1.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Drink",
    price: "80",
    category: "veg"
  },
  {
    id: 22,
    name: "Chicken Soup",
    image: "https://img.freepik.com/free-photo/front-view-delicious-soup-inside-white-plate-dark-surface_179666-34445.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Soup",
    price: "150",
    category: "non-veg"
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    image: "https://img.freepik.com/free-photo/pizza-with-eggplant-tomato-topping_140725-3664.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Pizza",
    price: "380",
    category: "non-veg"
  },
  {
    id: 20,
    name: "Tandoori Chicken",
    image: "https://img.freepik.com/premium-photo/tandoori-chicken-prepared-by-roasting-chicken-marinated-yoghurt-spices-tandoor-leg-piece-served-plate-with-salad-colourful-wooden-background-selective-focus_466689-10045.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Dinner",
    price: "320",
    category: "non-veg"
  },
  {
    id: 12,
    name: "Butter Chicken",
    image: "https://img.freepik.com/premium-photo/chicken-tikka-masala-curry-with-herbs-peppers-indian-food-national-cuisine_97840-3461.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Lunch",
    price: "330",
    category: "non-veg"
  },
  {
    id: 19,
    name: "Aloo Paratha",
    image: "https://img.freepik.com/premium-photo/daikon-radish-mooli-stuffed-paratha-served-plate-with-butter-tomato-ketchup-colourful-wooden-background-selective-focus_466689-63042.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Lunch",
    price: "150",
    category: "veg"
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    image: "https://img.freepik.com/free-photo/slice-cut-from-classic-pepperoni-pizza-with-green-pepper-rolls_114579-1963.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Pizza",
    price: "350",
    category: "non-veg"
  },
  {
    id: 9,
    name: "Coke",
    image: "https://img.freepik.com/premium-photo/glass-cola-lemonade-with-ice-white_130040-105.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Drink",
    price: "50",
    category: "veg"
  },
  {
    id: 5,
    name: "Hawaiian Pizza",
    image: "https://img.freepik.com/free-photo/top-view-delicious-baked-pineapple-pizza_23-2148753776.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Pizza",
    price: "350",
    category: "non-veg"
  },
  {
    id: 1,
    name: "Veg Supreme Pizza",
    image: "https://img.freepik.com/free-photo/chicken-pizza-with-bell-pepper-olives_140725-7233.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Pizza",
    price: "300",
    category: "veg"
  },
  {
    id: 26,
    name: "Poha",
    image: "https://img.freepik.com/premium-photo/poha-chivda-chivada-is-indian-popular-snack-selective-focus_466689-20393.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Breakfast",
    price: "120",
    category: "veg"
  },
  {
    id: 27,
    name: "Idli Sambar",
    image: "https://img.freepik.com/premium-photo/close-up-meal-served-bowl_1048944-19757258.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Breakfast",
    price: "150",
    category: "veg"
  },
  {
    id: 28,
    name: "Masala Dosa",
    image: "https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Breakfast",
    price: "180",
    category: "veg"
  },
  {
    id: 21,
    name: "Tomato Soup",
    image: "https://img.freepik.com/free-photo/side-view-tomato-soup-with-grated-cheese-crackers_141793-5143.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Soup",
    price: "120",
    category: "veg"
  },
  {
    id: 24,
    name: "Hot and Sour Soup",
    image: "https://img.freepik.com/premium-photo/uzbek-nan-zharkop-stewed-soup-with-meat-dough_219193-7419.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Soup",
    price: "140",
    category: "veg"
  },
  {
    id: 18,
    name: "Fish Curry",
    image: "https://img.freepik.com/free-photo/top-view-delicious-fish-meal_23-2148734691.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Dinner",
    price: "350",
    category: "non-veg"
  },
  {
    id: 4,
    name: "Margarita Pizza",
    image: "https://img.freepik.com/free-photo/margherita-pizza-with-cheese-basil-mozzarella_140725-11082.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Pizza",
    price: "250",
    category: "veg"
  },
  {
    id: 29,
    name: "Paneer Sandwich",
    image: "https://img.freepik.com/free-photo/side-view-sandwich-with-baked-potato-sauce_176474-2510.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Breakfast",
    price: "130",
    category: "veg"
  },
  {
    id: 30,
    name: "Oats with Fruits",
    image: "https://img.freepik.com/free-photo/light-dark-background-breakfast-health-cereal_140725-84784.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Breakfast",
    price: "160",
    category: "veg"
  },
  {
    id: 16,
    name: "Palak Paneer",
    image: "https://img.freepik.com/free-photo/top-view-pita-with-indian-traditional-food_23-2148294975.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Dinner",
    price: "220",
    category: "veg"
  },
  {
    id: 10,
    name: "Peach Smoothie",
    image: "https://img.freepik.com/free-photo/high-angle-milkshake-with-peaches-metal-straw_23-2148707777.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Drink",
    price: "120",
    category: "veg"
  },
  {
    id: 15,
    name: "Mutton Rogan Josh",
    image: "https://img.freepik.com/free-photo/delicious-goulash-stew-table_23-2149371730.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Dinner",
    price: "380",
    category: "non-veg"
  },
  {
    id: 25,
    name: "Mushroom Soup",
    image: "https://img.freepik.com/premium-photo/champignon-cream-soup-ceramic-plate-bread-champignons-parsley-wooden-table-top-viewhealthy-food-rich-vitamins-antioxidants-fiber_332246-380.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Soup",
    price: "160",
    category: "veg"
  },
  {
    id: 23,
    name: "Sweet Corn Soup",
    image: "https://img.freepik.com/premium-photo/corn-soup-white-bowl-wooden-table_123827-2088.jpg?ga=GA1.1.735734479.1720967120&semt=ais_hybrid",
    mealType: "Soup",
    price: "130",
    category: "veg"
  },
];

export default FoodData;
