/* ===================================
   AMRUT CAFE - MAIN JAVASCRIPT
   Handles menu filtering, mobile navigation, and interactions
   =================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE NAVIGATION ==========
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // ========== MENU FUNCTIONALITY ==========
    const menuItemsContainer = document.getElementById('menu-items');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Function to display menu items
    function displayMenuItems(items) {
        if (!menuItemsContainer) return;

        // Clear existing items
        menuItemsContainer.innerHTML = '';

        // Check if there are items to display
        if (items.length === 0) {
            menuItemsContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem;">No items found in this category.</p>';
            return;
        }

        // Create and append menu item cards
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.setAttribute('data-category', item.category);

            menuItem.innerHTML = 
    menuItem.innerHTML = `
    <img 
        src="${item.image}" 
        alt="${item.name}" 
        class="menu-item-image"
    >

    <div class="menu-item-header">
        <h3 class="menu-item-name">${item.name}</h3>
        <span class="menu-item-price">${item.price}</span>
    </div>

    ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ''}
    ${item.vegetarian ? '<span class="menu-item-tag">🌱 Vegetarian</span>' : ''}
`;

        
            

            menuItemsContainer.appendChild(menuItem);
        });
    }

    // Function to filter menu items by category
    function filterMenuItems(category) {
        if (category === 'all') {
            displayMenuItems(menuData);
        } else {
            const filteredItems = menuData.filter(item => item.category === category);
            displayMenuItems(filteredItems);
        }
    }

    // Add click event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and filter items
            const category = this.getAttribute('data-category');
            filterMenuItems(category);
            
            // Smooth scroll to menu items
            menuItemsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });

    // Display all items on initial load
    if (typeof menuData !== 'undefined') {
        displayMenuItems(menuData);
    } else {
        console.error('Menu data not found. Make sure menu-data.js is loaded before main.js');
    }

    // ========== SMOOTH SCROLLING ==========
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== SCROLL ANIMATIONS ==========
    // Add fade-in animation for elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe menu items and review cards
    const animatedElements = document.querySelectorAll('.menu-item, .review-card, .info-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========== NAVBAR SCROLL EFFECT ==========
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow to navbar when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ========== SEARCH FUNCTIONALITY (Optional Enhancement) ==========
    // You can add a search bar in the future and use this function
    function searchMenu(searchTerm) {
        const filteredItems = menuData.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        displayMenuItems(filteredItems);
    }

    // Make search function available globally if needed
    window.searchMenu = searchMenu;

    // ========== CONSOLE MESSAGE ==========
    console.log('%c🍕 Amrut Cafe Website Loaded Successfully! 🍕', 
        'color: #d4a574; font-size: 16px; font-weight: bold;');
    console.log('%cTotal Menu Items: ' + menuData.length, 
        'color: #8b6f47; font-size: 14px;');
    
    // Log menu statistics
    const categories = [...new Set(menuData.map(item => item.category))];
    console.log('%cCategories: ' + categories.join(', '), 
        'color: #8b6f47; font-size: 14px;');
});