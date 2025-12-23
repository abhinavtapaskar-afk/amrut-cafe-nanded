# 🍕 Amrut Cafe - Official Website

A modern, responsive website for Amrut Cafe, a beloved neighborhood café in Nanded, Maharashtra. This website is fully owned by the developer and requires no external dependencies or paid services.

## 🌟 Features

- **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Complete Menu System** - All items with prices, organized by categories
- **Customer Reviews** - Real reviews from satisfied customers
- **Location & Contact** - Embedded Google Maps and contact information
- **No External Dependencies** - Works offline (except Google Maps)
- **Easy to Edit** - Simple file-based editing, no database required
- **Production Ready** - Clean, commented code ready for deployment

## 📁 Project Structure

```
amrut-cafe-nanded/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling
├── js/
│   ├── menu-data.js       # Menu items and prices (EDIT THIS TO UPDATE MENU)
│   └── main.js            # Website functionality
├── assets/
│   ├── images/            # Place your images here
│   └── icons/             # Place your icons here
└── README.md              # This file
```

## 🎨 Website Sections

1. **Hero Section** - Eye-catching welcome message
2. **About Section** - Story of Amrut Cafe
3. **Menu Section** - Complete menu with filtering by category
4. **Reviews Section** - Customer testimonials
5. **Visit Us Section** - Location, contact, and map

## ✏️ How to Edit

### 📋 Editing Menu Items and Prices

**File to Edit:** `js/menu-data.js`

1. Open `js/menu-data.js` in any text editor
2. Find the item you want to edit
3. Change the price or description

**Example:**
```javascript
{
    name: "Cheese Burger",
    price: "₹120.00",  // Change this price
    description: "",    // Add description here
    category: "burgers",
    vegetarian: true
}
```

### ➕ Adding New Menu Items

1. Open `js/menu-data.js`
2. Copy an existing item
3. Paste it and modify the values
4. Make sure to add a comma after the previous item

**Example:**
```javascript
{
    name: "New Special Pizza",
    price: "₹250.00",
    description: "Our newest creation with special toppings",
    category: "pizza",
    vegetarian: true
},
```

### 🗂️ Adding New Categories

1. Open `index.html`
2. Find the menu categories section (around line 60)
3. Add a new button:
```html
<button class="category-btn" data-category="newcategory">New Category</button>
```
4. In `js/menu-data.js`, add items with `category: "newcategory"`

### 🖼️ Changing Images

**Hero Background:**
1. Place your image in `assets/images/` folder
2. Open `css/style.css`
3. Find `.hero` section (around line 150)
4. Update the background property

**Menu Item Images (Optional):**
Currently using placeholders. To add images:
1. Place images in `assets/images/menu/`
2. Name them matching menu items (e.g., `cheese-burger.jpg`)
3. Modify `js/main.js` to include image tags in the menu item HTML

### 📞 Updating Contact Information

**File to Edit:** `index.html`

1. Find the "Visit Us" section (around line 200)
2. Update:
   - Phone number
   - Address
   - Opening hours

### 🗺️ Updating Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `index.html` (around line 220)

### 🎨 Changing Colors

**File to Edit:** `css/style.css`

At the top of the file, you'll find CSS variables:
```css
:root {
    --primary-color: #d4a574;      /* Main brand color */
    --secondary-color: #8b6f47;    /* Secondary color */
    --accent-color: #f4e4d7;       /* Accent color */
    --text-dark: #2c2c2c;          /* Dark text */
    --text-light: #666;            /* Light text */
}
```

Change these values to update colors throughout the site.

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://yourusername.github.io/amrut-cafe-nanded/`

### Option 2: Netlify (FREE)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up for free
3. Drag and drop your project folder
4. Get instant deployment with custom domain support

### Option 3: Vercel (FREE)

1. Go to [Vercel](https://vercel.com/)
2. Sign up for free
3. Import your GitHub repository
4. Automatic deployment on every update

### Option 4: Traditional Web Hosting

1. Get any web hosting service (shared hosting works fine)
2. Upload all files via FTP
3. Point your domain to the hosting

## 💻 Local Development

To test the website locally:

1. Download all files
2. Open `index.html` in any web browser
3. That's it! No server required.

**For better development experience:**
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve

# Then open: http://localhost:8000
```

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - No frameworks, no dependencies
- **Mobile-First** - Responsive design approach
- **Performance** - Optimized for fast loading
- **SEO Ready** - Proper meta tags and semantic HTML

## 📝 Customization Tips

### Adding a Search Bar

Uncomment the search functionality in `js/main.js` and add this HTML to `index.html`:
```html
<input type="text" id="menu-search" placeholder="Search menu..." 
       onkeyup="searchMenu(this.value)">
```

### Adding Online Ordering

1. Sign up for a service like Zomato, Swiggy, or your own ordering system
2. Add a button in the hero section:
```html
<a href="YOUR_ORDERING_LINK" class="order-btn">Order Online</a>
```

### Adding Social Media Links

Add to the footer in `index.html`:
```html
<div class="social-links">
    <a href="https://facebook.com/yourpage">Facebook</a>
    <a href="https://instagram.com/yourpage">Instagram</a>
</div>
```

## 🎯 Future Enhancements

Potential features you can add:
- [ ] Image gallery
- [ ] Online ordering integration
- [ ] Newsletter signup
- [ ] Special offers section
- [ ] Blog/News section
- [ ] Customer loyalty program
- [ ] Multi-language support

## 📄 License & Ownership

**This website is fully owned by the developer.** You have complete control over:
- All source code
- All content
- All design elements
- Deployment and hosting choices

No external platform controls your website. You can:
- Edit anything without restrictions
- Host anywhere you want
- Keep it forever without subscriptions
- Transfer ownership easily

## 🆘 Support & Troubleshooting

### Menu items not showing?
- Check that `js/menu-data.js` is loaded before `js/main.js` in `index.html`
- Open browser console (F12) to check for errors

### Mobile menu not working?
- Ensure JavaScript is enabled in the browser
- Check browser console for errors

### Map not loading?
- Verify the Google Maps embed URL is correct
- Check internet connection (maps require online access)

### Styling looks broken?
- Verify `css/style.css` path is correct in `index.html`
- Clear browser cache (Ctrl+F5)

## 📞 Contact

For questions about this website:
- Repository: https://github.com/abhinavtapaskar-afk/amrut-cafe-nanded
- Issues: https://github.com/abhinavtapaskar-afk/amrut-cafe-nanded/issues

---

**Made with ❤️ for Amrut Cafe, Nanded**

*Last Updated: December 2024*