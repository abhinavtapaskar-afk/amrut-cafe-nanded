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
        vegetarian: true,
        image:  "assets/images/menu/barbeque-pizza.png"
    

    },
    {
        name: "Cheese Burst Pizza",
        price: "₹230.00",
        description: "",
        category: "pizza",
        vegetarian: true,
        image: "assets/images/menu/cheese-burst-pizza.png"
    
    },
    {
        name: "Cheese Nachos Pizza",
        price: "₹210.00",
        description: "Onion, green capsicum, cheese, nachos and salsa sauce",
        category: "pizza",
        vegetarian: true,
        image: "assets/images/menu/cheese-nachos-pizza.png"
    },
    {
        name: "Country Feast Pizza",
        price: "₹200.00",
        description: "Sweet corn, tomato, onion, mushroom, green capsicum with cheese",
        category: "pizza",
        vegetarian: true,
        image: "assets/images/menu/country-feast-pizza.png"
    }, 
    {
        name: "Paneer Corn Peri Peri Pizza",
        price: "₹220.00",
        description: "",
        category: "pizza",
        vegetarian: true,
        image: "assets/images/menu/paneer-corn-peri-peri-pizza.png"
    },
    {
        name: "Tandoori Paneer Pizza",
        price: "₹210.00",
        description: "Paneer, vegetable, tomatoes, cheese with tandoori tadka",
        category: "pizza",
        vegetarian: true,
        image : "assets/images/menu/tandoori-paneer-pizza.png"
    },
    {
        name: "Veg Exotica Pizza",
        price: "₹200.00",
        description: "Baby corn, black olive, jalapeno, green capsicum, red capsicum",
        category: "pizza",
        vegetarian: true,
        image : "assets/images/menu/veg-exotica-pizza.png"
    },
    {
        name: "Veg Treat Pizza",
        price: "₹180.00",
        description: "Sweet corn, tomato, onion, jalapeno, capsicum with cheese",
        category: "pizza",
        vegetarian: true,
        image : "assets/images/menu/veg-treat-pizza.png"
    },
    {
        name: "Veggie Crunchy Pizza",
        price: "₹180.00",
        description: "Onion, capsicum with cheese",
        category: "pizza",
        vegetarian: true,
        image : "assets/images/menu/veggie-crunchy-pizza.png"
    },
    {
        name: "Veggie Lover Pizza",
        price: "₹180.00",
        description: "Onion, green capsicum, tomato, mushroom, red paprika",
        category: "pizza",
        vegetarian: true,
        image : "assets/images/menu/veggie-lover-pizza.png"
    },

    // ========== PASTA ==========
    {
        name: "Arrabiata Red Sauce Pasta",
        price: "₹130.00",
        description: "",
        category: "pasta",
        vegetarian: true,
        image : "assets/images/menu/arrabiata-red-sauce-pasta.png"
    },
    {
        name: "Veg Arrabiata Cheese Pasta",
        price: "₹150.00",
        description: "",
        category: "pasta",
        vegetarian: true,
        image : "assets/images/menu/veg-arrabiata-cheese-pasta.png"
    },
    {
        name: "Veg Alfredo Cheese Pasta",
        price: "₹150.00",
        description: "",
        category: "pasta",
        vegetarian: true,
        image : "assets/images/menu/veg-alfredo-cheese-pasta.png"

    },
    {
        name: "Alfredo White Sauce Pasta",
        price: "₹130.00",
        description: "",
        category: "pasta",
        vegetarian: true,
        image :"assets/images/menu/alfredo-white-sauce-pasta.png"
    },

    // ========== BURGERS ==========
    {
        name: "1000 Island Burger",
        price: "₹130.00",
        description: "",
        category: "burgers",
        vegetarian: true,
        image : "assets/images/menu/1000-island-burger.png"
    },
    {
        name: "Cheese Burger",
        price: "₹120.00",
        description: "",
        category: "burgers",
        vegetarian: true,
        image : "assets/images/menu/cheese-burger.png"
    },
    {
        name: "Cheese Paneer Burger",
        price: "₹130.00",
        description: "",
        category: "burgers",
        vegetarian: true,
        image :"assets/images/menu/cheese-paneer-burger.png"
    },
    {
        name: "Grilled Burger",
        price: "₹140.00",
        description: "",
        category: "burgers",
        vegetarian: true,
        image :"assets/images/menu/grilled-burger.png"
    },
    {
        name: "Paneer Burger",
        price: "₹120.00",
        description: "",
        category: "burgers",
        vegetarian: true,
        image : "assets/images/menu/paneer-burger.png"
    },
    {
        name: "Spicy Veg Burger",
        price: "₹130.00",
        description: "",
        category: "burgers",
        vegetarian: true,
        image : "assets/images/menu/spicy-veg-burger.png"
    },
    {
        name: "Veggie Burger",
        price: "₹110.00",
        description: "",
        category: "burgers",
        vegetarian: true,
        image :"assets/images/menu/veggie-burger.png"
    },

    // ========== SANDWICHES ==========
    {
        name: "Amrut Special Club Sandwich",
        price: "₹180.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/amrut-special-club-sandwich.png"
    },
    {
        name: "Cheese Chutney Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/cheese-chutney-sandwich.png"
    },
    {
        name: "Cheese Tikka Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/cheese-tikka-sandwich.png"
    },
    {
        name: "Veg Cheese Paneer Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/veg-cheese-paneer-sandwich.png"
    },
    {
        name: "Chocolate Sandwich",
        price: "₹120.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/chocolate-sandwich.png"
    },
    {
        name: "Paneer Tikka Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image :"assets/images/menu/paneer-tikka-sandwich.png"
    },
    {
        name: "Plain Cheese Butter Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/plain-cheese-butter-sandwich.png"
    },
    {
        name: "Spicy Mayonnaise Sandwich",
        price: "₹120.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/spicy-mayonnaise-sandwich.png"
    },
    {
        name: "Tandoori Makhani Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/tandoori-makhani-sandwich.png"
    },
    {
        name: "Veg Cheese Club Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/veg-cheese-club-sandwich.png"
    },
    {
        name: "Veg Cheese Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image :"assets/images/menu/veg-cheese-sandwich.png"
    },
    {
        name: "Veg Club Sandwich",
        price: "₹140.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/veg-club-sandwich.png"
    },
    {
        name: "Veg Corn Cheese Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/veg-corn-cheese-sandwich.png"
    },
    {
        name: "Veg Mushroom Sandwich",
        price: "₹120.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image :"assets/images/menu/veg-mushroom-sandwich.png"
    },
    {
        name: "Veg Paneer Club Sandwich",
        price: "₹160.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/veg-paneer-club-sandwich.png"
    },
    {
        name: "Veg Paneer Sandwich",
        price: "₹130.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/veg-paneer-sandwich.png"
    },
    {
        name: "Vegetable Sandwich",
        price: "₹120.00",
        description: "",
        category: "sandwiches",
        vegetarian: true,
        image : "assets/images/menu/vegetable-sandwich.png"
    },

    // ========== MAGGI ==========
    {
        name: "Butter Maggi",
        price: "₹100.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/butter-maggi.png"
    },
    {
        name: "Cheese Maggi",
        price: "₹110.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/cheese-maggi.png"
    },
    {
        name: "Paneer Maggi",
        price: "₹110.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/paneer-maggi.png"
    },
    {
        name: "Veg Maggi",
        price: "₹100.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/veg-maggi.png"
    },
    {
        name: "All Mix Maggi",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/all-mix-maggi.png"
    },
    {
        name: "Exotic Maggi",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/exotic-maggi.png"
    },
    {
        name: "Italian Maggi",
        price: "₹130.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/italian-maggi.png"
    },
    {
        name: "Kabra's Special Maggi",
        price: "₹110.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/kabras-special-maggi.png"
    },
    {
        name: "Mac And Cheese",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image :"assets/images/menu/mac-and-cheese.png"
    },
    {
        name: "Peri Peri Maggi",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/peri-peri-maggi.png"
    },
    {
        name: "Pizza Maggi",
        price: "₹140.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/pizza-maggi.png"
    },
    {
        name: "Spicy Cheese Maggi",
        price: "₹130.00",
        description: "",
        category: "maggi",
        vegetarian: true,
        image : "assets/images/menu/spicy-cheese-maggie.png"
    },

    // ========== SNACKS & FRIES ==========
    {
        name: "Aloo Tikki (4 Pieces)",
        price: "₹140.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/aloo-tikki.png"
    },
    {
        name: "Amrut Special Fries",
        price: "₹170.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/amrut-special-fries.png"
    },
    {
        name: "Cheese Mayo Fries",
        price: "₹170.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/cheese-mayo-fries.png"
    },
    {
        name: "French Fries",
        price: "₹120.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/french-fries.png"
    },
    {
        name: "Nachos Fries",
        price: "₹180.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/nachos-fries.png"
    },
    {
        name: "Peri Peri Fries",
        price: "₹170.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/peri-peri-fries.png"
    },
    {
        name: "Potato Yummies (14 Pieces)",
        price: "₹140.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/potato-yummies.png"
    },
    {
        name: "Cheese Chilli Toast",
        price: "₹110.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/cheese-chilli-toast.png"
    },
    {
        name: "Cheese Chilli Corn Toast",
        price: "₹120.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/cheese-chilli-corn-toast.png"
    },
    {
        name: "Garlic Bread",
        price: "₹100.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/garlic-bread.png"
    },
    {
        name: "Garlic Cheese Bread",
        price: "₹110.00",
        description: "",
        category: "snacks",
        vegetarian: true,
        image : "assets/images/menu/garlic-cheese-bread.png"
    },

    // ========== NACHOS ==========
    {
        name: "Cheesy Nachos",
        price: "₹130.00",
        description: "",
        category: "nachos",
        vegetarian: true,
        image : "assets/images/menu/cheesy-nachos.png"
    },
    {
        name: "Mexican Nachos",
        price: "₹150.00",
        description: "",
        category: "nachos",
        vegetarian: true,
        image : "assets/images/menu/mexican-nachos.png"
    },
    {
        name: "Supreme Nachos",
        price: "₹160.00",
        description: "",
        category: "nachos",
        vegetarian: true,
        image : "assets/images/menu/supreme-nachos.png"
    },

    // ========== MOMOS ==========
    {
        name: "Kurkure Momos (5 Pieces)",
        price: "₹140.00",
        description: "",
        category: "momos",
        vegetarian: true,
        image : "assets/images/menu/kurkure-momos.png"
    },
    {
        name: "Mix Veg Momos (5 Pieces)",
        price: "₹120.00",
        description: "",
        category: "momos",
        vegetarian: true,
        image : "assets/images/menu/mix-veg-momos.png"
    },
    {
        name: "Tandoori Momos (5 Pieces)",
        price: "₹160.00",
        description: "",
        category: "momos",
        vegetarian: true,
        image : "assets/images/menu/tandoori-momos.png"
    },
    {
        name: "Corn Cheese Momos (5 Pieces)",
        price: "₹140.00",
        description: "",
        category: "momos",
        vegetarian: true,
        image : "assets/images/menu/corn-cheese-momos.png"
    },
    {
        name: "Paneer Momos (5 Pieces)",
        price: "₹100.00",
        description: "",
        category: "momos",
        vegetarian: true,
        image : "assets/images/menu/paneer-momos.png"
    },

    // ========== BEVERAGES ==========
    // Cold Beverages
    {
        name: "Cold Chocolate",
        price: "₹100.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/cold-chocolate.png"
    },
    {
        name: "Cold Chocolate With Ice Cream",
        price: "₹90.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/cold-chocolate-with-ice-cream.png"
    },
    {
        name: "Cold Coffee",
        price: "₹80.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/cold-coffee.png"
    },
    {
        name: "Cold Coffee With Ice Cream",
        price: "₹90.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/cold-coffee-with-ice-cream.png"
    },
    {
        name: "Creamy Cold Coffee",
        price: "₹100.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/creamy-cold-coffee.png"
    },
    {
        name: "Crushed Creamy Coffee",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/crushed-creamy-coffee.png"
    },
    {
        name: "Muffins Cold Coffee",
        price: "₹120.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/muffins-cold-coffee.png"
    },
    {
        name: "Cream Bournvita",
        price: "₹100.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/creamy-bournvita.png"
    },
    {
        name: "Crushed Cold Coffee",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/crushed-cold-coffee.png"
    },

    // Thick Shakes
    {
        name: "Black Forest Delight Thick Shake",
        price: "₹140.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/black-forest-delight-thick-shake.png"
    },
    {
        name: "Choco Rocks Thick Shake",
        price: "₹120.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/choco-rocks-thick-shake.png"
    },
    {
        name: "Kitkat Thick Shake",
        price: "₹120.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/kitkat-thick-shake.png"
    },
    {
        name: "Oreo Blast Thick Shake",
        price: "₹130.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/oreo-blast-thick-shake.png"
    },

    // Mastani
    {
        name: "Jamun Mastani",
        price: "₹150.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/jamun-mastani.png"
    },
    {
        name: "Mango Mastani",
        price: "₹170.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/mango-mastani.png"
    },
    {
        name: "Sitafal Mastani",
        price: "₹150.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/sitafal-mastani.png"
    },

    // Special Beverages
    {
        name: "Cad B",
        price: "₹130.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/cad-b.png"
    },
    {
        name: "Cad M",
        price: "₹130.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/cad-m.png"
    },
    {
        name: "Mix Cad",
        price: "₹140.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/mix-cad.png"
    },
    {
        name: "Oreo Cad B",
        price: "₹140.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/oreo-cad-b.png"
    },

    // Summer Special
    {
        name: "Cold Blue",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/cold-blue.png"
    },
    {
        name: "Kiwi Cooler",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/kiwi-cooler.png"
    },
    {
        name: "Orange",
        price: "₹110.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/orange.png"
    },
    {
        name: "Virgin Mojito",
        price: "₹120.00",
        description: "",
        category: "beverages",
        vegetarian: true,
        image : "assets/images/menu/virgin-mojito.png"
    }
];