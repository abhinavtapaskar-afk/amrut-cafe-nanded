/* /* ==================================
   AMRUT CAFE - MAIN JAVASCRIPT
   Handles menu, mobile nav, cart, and WhatsApp orders
   ================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ================= CART SYSTEM =================
    let cart = [];

    function addToCart(item) {
        const existing = cart.find(i => i.name === item.name);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({ ...item, qty: 1 });
        }
        updateCartUI();
    }

    function increaseQty(name) {
        const item = cart.find(i => i.name === name);
        if (item) item.qty++;
        updateCartUI();
    }

    function decreaseQty(name) {
        const item = cart.find(i => i.name === name);
        if (!item) return;

        item.qty--;
        if (item.qty === 0) {
            cart = cart.filter(i => i.name !== name);
        }
        updateCartUI();
    }

    function removeItem(name) {
        cart = cart.filter(i => i.name !== name);
        updateCartUI();
    }

    function updateCartUI() {
        const cartBox = document.getElementById("cart-items");
        if (!cartBox) return;

        cartBox.innerHTML = "";

        cart.forEach(item => {
            cartBox.innerHTML += `
                <div class="cart-item">
                    <strong>${item.name}</strong>
                    <div class="cart-controls">
                        <button onclick="decreaseQty('${item.name}')">−</button>
                        <span>${item.qty}</span>
                        <button onclick="increaseQty('${item.name}')">+</button>
                        <button onclick="removeItem('${item.name}')">❌</button>
                    </div>
                </div>
            `;
        });

        // Update quantity under menu items
        cart.forEach(item => {
            const qtySpan = document.getElementById(`qty-${item.name.replace(/\s+/g, '')}`);
            if (qtySpan) {
                qtySpan.textContent = item.qty;
                qtySpan.classList.add("qty-pop");
                setTimeout(() => qtySpan.classList.remove("qty-pop"), 150);
            }
            
        });
    }

    function sendWhatsAppOrder() {
        if (cart.length === 0) {
            alert("Cart is empty");
            return;
        }

        let message = "Hi Amrut Cafe, I want to order:%0A";
        cart.forEach(item => {
            message += `• ${item.name} x ${item.qty}%0A`;
        });

        window.open(`https://wa.me/919665168193?text=${message}`, "_blank");
    }

    // ================= MOBILE NAVIGATION =================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // ================= MENU FUNCTIONALITY =================
    const menuItemsContainer = document.getElementById('menu-items');
    const categoryButtons = document.querySelectorAll('.category-btn');

    function displayMenuItems(items) {
        if (!menuItemsContainer) return;
        menuItemsContainer.innerHTML = '';

        if (items.length === 0) {
            menuItemsContainer.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:2rem;">No items found in this category.</p>';
            return;
        }

        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.setAttribute('data-category', item.category);

            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ''}
                ${item.vegetarian ? '<span class="menu-item-tag">🌱 Vegetarian</span>' : ''}
                <div class="qty-controls">
                    <button onclick="decreaseQty('${item.name}')">−</button>
                    <span id="qty-${item.name.replace(/\s+/g, '')}">0</span>
                    <button onclick="addToCart(${JSON.stringify(item)})">+</button>
                    <button onclick="removeItem('${item.name}')">❌</button>
                </div>
            `;

            menuItemsContainer.appendChild(menuItem);
        });
    }

    function filterMenuItems(category) {
        if (category === 'all') displayMenuItems(menuData);
        else displayMenuItems(menuData.filter(item => item.category === category));
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterMenuItems(this.getAttribute('data-category'));
            menuItemsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });

    if (typeof menuData !== 'undefined') displayMenuItems(menuData);
    else console.error('Menu data not found. Make sure menu-data.js is loaded before main.js');

});
