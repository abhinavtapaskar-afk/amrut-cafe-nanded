# 🚀 Quick Start Guide - Amrut Cafe Website

## ⚡ 3-Minute Setup

### Step 1: Enable GitHub Pages (1 minute)
1. Go to: https://github.com/abhinavtapaskar-afk/amrut-cafe-nanded/settings/pages
2. Under "Source", select **"main"** branch
3. Click **"Save"**
4. Wait 2-3 minutes
5. Your site will be live at: **https://abhinavtapaskar-afk.github.io/amrut-cafe-nanded/**

### Step 2: Update Contact Info (1 minute)
1. Click on `index.html` in GitHub
2. Click the pencil icon (Edit)
3. Find line ~210 (Visit Us section)
4. Update phone number and address
5. Click "Commit changes"

### Step 3: Update Google Maps (1 minute)
1. Go to [Google Maps](https://www.google.com/maps)
2. Search "Amrut Cafe Nanded" or your address
3. Click **Share** → **Embed a map**
4. Copy the `<iframe>` code
5. Edit `index.html` line ~220
6. Replace the existing iframe with your code
7. Commit changes

## 📝 Most Common Edits

### Change a Menu Price
**File:** `js/menu-data.js`

Find the item and change the price:
```javascript
{
    name: "Cheese Burger",
    price: "₹120.00",  // ← Change this
    ...
}
```

### Add a New Menu Item
**File:** `js/menu-data.js`

Copy any existing item and modify:
```javascript
{
    name: "New Special Burger",
    price: "₹150.00",
    description: "Our newest creation",
    category: "burgers",
    vegetarian: true
},  // ← Don't forget the comma!
```

### Change Website Colors
**File:** `css/style.css` (lines 10-17)

```css
:root {
    --primary-color: #d4a574;    /* Change this */
    --secondary-color: #8b6f47;  /* And this */
    ...
}
```

## 🎨 Customization Checklist

- [ ] Enable GitHub Pages
- [ ] Update phone number in `index.html`
- [ ] Update address in `index.html`
- [ ] Update Google Maps embed in `index.html`
- [ ] Review menu prices in `js/menu-data.js`
- [ ] Add your logo to `assets/images/`
- [ ] Add café photos to `assets/images/`
- [ ] Update opening hours in `index.html`
- [ ] Test website on mobile device
- [ ] Share website link with customers!

## 📱 Test Your Website

After making changes:
1. Wait 1-2 minutes for GitHub to rebuild
2. Visit: https://abhinavtapaskar-afk.github.io/amrut-cafe-nanded/
3. Test on mobile: Open on your phone
4. Check all sections work correctly

## 🆘 Quick Troubleshooting

**Website not loading?**
- Wait 3-5 minutes after enabling GitHub Pages
- Check Settings → Pages shows "Your site is live"

**Changes not showing?**
- Wait 1-2 minutes after committing
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

**Menu not displaying?**
- Check `js/menu-data.js` for syntax errors
- Make sure all items have commas between them
- Open browser console (F12) to see errors

## 💡 Pro Tips

1. **Edit on GitHub directly** - No need to download files
2. **Test locally first** - Download and open `index.html` in browser
3. **Make small changes** - Test after each change
4. **Keep backups** - GitHub automatically keeps version history
5. **Mobile-first** - Always test on mobile devices

## 📞 Need Help?

- **View your site:** https://abhinavtapaskar-afk.github.io/amrut-cafe-nanded/
- **Edit files:** https://github.com/abhinavtapaskar-afk/amrut-cafe-nanded
- **Full documentation:** See README.md

---

**Ready to go live? Enable GitHub Pages now! 🚀**