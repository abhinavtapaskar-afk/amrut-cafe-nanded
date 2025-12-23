/* ===================================
   AMRUT CAFE - MENU DATA
   
   HOW TO EDIT:
   1. To change a price: Find the item and update the "price" value
   2. To add a new item: Copy an existing item object and modify the values
   3. To add a new category: Add a new category name and create items with that category
   4. Keep "vegetarian: true" for all veg items
   
   EXAMPLE:
   {
       name: "New Item Name",
       price: "₹150.00",
       description: "Optional description",
       category: "pizza",
       vegetarian: true
   }
   =================================== */

const menuData = [
    // ========== PIZZA ==========
    {
        name: "Barbeque Pizza",
        price: "₹220.00",
        description: "",
        category: "pizza",
        vegetarian: true
    },
    {
        name: "Cheese Burst Pizza",
        price: "₹230.00",
        description: "",
        category: "pizza",
        vegetarian: true
    },
    {
        name: "Cheese Nachos Pizza",
        price: "₹210.00",
        description: "Onion, green capsicum, cheese, nachos and salsa sauce",
        category: "pizza",
        vegetarian: true
    },
    {
        name: "Country Feast Pizza",
        price: "₹200.00",
        description: "Sweet corn, tomato, onion, mushroom, green capsicum with cheese",
        category: "pizza",
        vegetarian: true
    },
    {
        name: "Paneer Corn Peri Peri Pizza",
        price: "₹220.00",
        description: "",
        category: "pizza",
        vegetarian: true
    },
    {
        name: "Tandoori Paneer Pizza",
        price: "₹210.00",
        description: "Paneer, vegetable, tomatoes, cheese with tandoori tadka",
        category: "pizza",
        vegetarian: true
    },
    {
        name: "Veg Exotica Pizza",
        price: "₹200.00",
        description: "Baby corn, black olive, jalapeno, green capsicum, red capsicum",
        category: "pizza",
        vegetarian: true
    },
    {
        name: "Veg Treat Pizza",
        price: "₹180.00",
        description: "Sweet corn, tomato, onion, jalapeno, capsicum with cheese",
        category: "pizza",
        vegetarian: true
    },
    {
        name: "Veggie Crunchy Pizza",
        price: "₹180.00",
        description: "Onion, capsicum with cheese",
        category: "pizza",
        vegetarian: true
    },
    {
        name: "Veggie Lover Pizza",
        price: "₹180.00",
        description: "Onion, green capsicum, tomato, mushroom, red paprika",
        category: "pizza",
        vegetarian: true
    },

    // ========== PASTA ==========
    {
        name: "Arrabiata Red Sauce Pasta",
        price: "₹130.00",
        description: "",
        category: "pasta",
        vegetarian: true
    },
    {
        name: "Veg Arrabiata Cheese Pasta",
        price: "₹150.00",
        description: "",
        category: "pasta",
        vegetarian: true
    },
    {
        name: "Veg Alfredo Cheese Pasta",
        price: "₹150.00",
        description: "",
        category: "pasta",
        vegetarian: true
    },
    {
        name: "Alfredo White Sauce Pasta",
        price: "₹130.00",
        description: "",
        category: "pasta",
        vegetarian: true
    },

    // ========== BURGERS ==========
    {
        name: "1000 Island Burger",
        price: "₹130.00",
        description: "",
        category: "burgers",
        vegetarian: true
    },
    {
        name: "Cheese Burger",
        price: "₹120.00",
        description: "",
        category: "burgers",
        vegetarian: true
    },
    {
        name: "Cheese Paneer Burger",
        price: "₹130.00",
        description: "",
        category: "burgers",
        vegetarian: true
    },
    {
        name: "Grilled Burger",
        price: "₹140.00",
        description: "",
        category: "burgers",
        vegetarian: true
    },
    {
        name: "Paneer Burger",
        price: "₹120.00",
        description: "",
        category: "burgers",
        vegetarian: true
    },
    {
        name: "Spicy Veg Burger",
        price: "₹130.00",
        description: "",
        category: "burgers",
        vegetarian: true
    },
    {
        name: "Veggie Burger",
        price: "₹110.00",
        description: "",
        category: "burgers",
        vegetarian: true
    },

    // ========== SANDWICHES ==========
    {
        name: "Amrut Special Club Sandwich",
        price: "₹180.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Cheese Chutney Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Cheese Tikka Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Veg Cheese Paneer Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Chocolate Sandwich",
        price: "₹120.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Paneer Tikka Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Plain Cheese Butter Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Spicy Mayonnaise Sandwich",
        price: "₹120.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Tandoori Makhani Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Veg Cheese Club Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Veg Cheese Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Veg Club Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Veg Corn Cheese Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Veg Mushroom Sandwich",
        price: "₹120.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Veg Paneer Club Sandwich",
        price: "₹160.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Veg Paneer Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },
    {
        name: "Vegetable Sandwich",
        price: "₹120.00",
        description: "",
        category: "sandwiches",
        vegetarian: true
    },

    // ========== MAGGI ==========
    {
        name: "Butter Maggi",
        price: "₹100.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Cheese Maggi",
        price: "₹110.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Paneer Maggi",
        price: "₹110.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Veg Maggi",
        price: "₹100.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "All Mix Maggi",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Exotic Maggi",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Italian Maggi",
        price: "₹130.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Kabra's Special Maggi",
        price: "₹110.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Mac And Cheese",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Peri Peri Maggi",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Pizza Maggi",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },
    {
        name: "Spicy Cheese Maggi",
        price: "₹130.00",
        description: "",
        category: "maggi",
        vegetarian: true
    },

    // ========== SNACKS & FRIES ==========
    {
        name: "Aloo Tikki (4 Pieces)",
        price: "₹140.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "Amrut Special Fries",
        price: "₹170.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "Cheese Mayo Fries",
        price: "₹170.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "French Fries",
        price: "₹120.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "Nachos Fries",
        price: "₹180.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "Peri Peri Fries",
        price: "₹170.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "Potato Yummies (14 Pieces)",
        price: "₹140.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "Cheese Chilli Toast",
        price: "₹110.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "Cheese Chilli Corn Toast",
        price: "₹120.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "Garlic Bread",
        price: "₹100.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },
    {
        name: "Garlic Cheese Bread",
        price: "₹110.00",
        description: "",
        category: "snacks",
        vegetarian: true
    },

    // ========== NACHOS ==========
    {
        name: "Cheesy Nachos",
        price: "₹130.00",
        description: "",
        category: "nachos",
        vegetarian: true
    },
    {
        name: "Mexican Nachos",
        price: "₹150.00",
        description: "",
        category: "nachos",
        vegetarian: true
    },
    {
        name: "Supreme Nachos",
        price: "₹160.00",
        description: "",
        category: "nachos",
        vegetarian: true
    },

    // ========== MOMOS ==========
    {
        name: "Kurkure Momos (5 Pieces)",
        price: "₹140.00",
        description: "",
        category: "momos",
        vegetarian: true
    },
    {
        name: "Mix Veg Momos (5 Pieces)",
        price: "₹120.00",
        description: "",
        category: "momos",
        vegetarian: true
    },
    {
        name: "Tandoori Momos (5 Pieces)",
        price: "₹160.00",
        description: "",
        category: "momos",
        vegetarian: true
    },
    {
        name: "Corn Cheese Momos (5 Pieces)",
        price: "₹140.00",
        description: "",
        category: "momos",
        vegetarian: true
    },
    {
        name: "Paneer Momos (5 Pieces)",
        price: "₹100.00",
        description: "",
        category: "momos",
        vegetarian: true
    },

    // ========== BEVERAGES ==========
    // Cold Beverages
    {
        name: "Cold Chocolate",
        price: "₹100.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Cold Chocolate With Ice Cream",
        price: "₹90.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Cold Coffee",
        price: "₹80.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Cold Coffee With Ice Cream",
        price: "₹90.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Creamy Cold Coffee",
        price: "₹100.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Crushed Creamy Coffee",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Muffins Cold Coffee",
        price: "₹120.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Cream Bournvita",
        price: "₹100.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Crushed Cold Coffee",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },

    // Thick Shakes
    {
        name: "Black Forest Delight Thick Shake",
        price: "₹140.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Choco Rocks Thick Shake",
        price: "₹120.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Kitkat Thick Shake",
        price: "₹120.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Oreo Blast Thick Shake",
        price: "₹130.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },

    // Mastani
    {
        name: "Jamun Mastani",
        price: "₹150.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Mango Mastani",
        price: "₹170.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Sitafal Mastani",
        price: "₹150.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },

    // Special Beverages
    {
        name: "Cad B",
        price: "₹130.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Cad M",
        price: "₹130.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Mix Cad",
        price: "₹140.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Oreo Cad B",
        price: "₹140.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },

    // Summer Special
    {
        name: "Cold Blue",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Kiwi Cooler",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Orange",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true
    },
    {
        name: "Virgin Mojito",
        price: "₹120.00",
        description: "",
        category: "beverages",
        vegetarian: true
    }
];