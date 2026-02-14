# 🐱 Random Cat Facts

A beautiful, interactive web application that displays random cat facts with a sleek glassmorphic design. Features an adorable sleeping cat animation and engaging UI elements.

![Cat Facts App](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Modern Glassmorphic Design** - Beautiful, premium UI with blur effects and transparency
- 🐾 **Interactive Sleeping Cat** - Lottie animation that responds to cursor movement
- 📜 **Scrollable Facts** - Compact container with custom-styled scrollbar for long facts
- 🎭 **Smooth Animations** - Loading states with cute cat animations
- 🎉 **Confetti Effects** - Celebration animation when loading new facts
- 📱 **Responsive Layout** - Works beautifully on all screen sizes
- 🎯 **Cat Images** - Random cat images from The Cat API

## 🚀 Demo

Simply open `index.html` in your browser or use a local development server like Live Server.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with glassmorphism, custom scrollbars, and animations
- **JavaScript (ES6+)** - Async/await, DOM manipulation
- **Bootstrap Icons** - Icon library
- **Lottie** - High-quality animations
- **Lottie Interactivity** - Cursor-based animation control
- **Axios** - HTTP requests
- **Canvas Confetti** - Confetti effects

## 📦 APIs Used

1. **Cat Facts API** - `https://catfact.ninja/fact`
   - Provides random cat facts
   
2. **The Cat API** - `https://api.thecatapi.com/v1/images/search`
   - Provides random cat images

## 📁 Project Structure

```
Randon cat facts/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── app.js             # Application logic and API calls
├── bg-image.jpg       # Background image
├── assets/
│   ├── Cat Sleeping.json    # Sleeping cat Lottie animation
│   ├── Cat Sleeping.lottie  # Alternative format
│   └── pets.svg            # Paw icon SVG
└── README.md          # This file
```

## 🎯 Key Components

### Glassmorphic Card
- Frosted glass effect with backdrop blur
- Subtle shadows and borders
- Compact, centered design

### Interactive Sleeping Cat
- Top-left positioned Lottie animation
- Responds to cursor movement using seek mode
- Retry logic ensures consistent initialization

### Fact Container
- Max height: 100px for compact display
- Auto-scrolling for long facts
- Custom pink-themed scrollbar
- Smooth transitions

### Button with Custom Paw Icon
- Inline SVG paw icon
- Loading state with hourglass icon
- Smooth hover effects

## 🎨 Design Highlights

- **Color Palette**: Pink gradient (`#ff9a9e` to `#fecfef`)
- **Typography**: System fonts with clean hierarchy
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: ARIA labels and semantic HTML

## 💻 Installation & Usage

1. **Clone or Download** the project
   ```bash
   git clone <your-repo-url>
   cd "Randon cat facts"
   ```

2. **Open with Live Server** (recommended)
   - Install Live Server extension in VS Code
   - Right-click `index.html` → "Open with Live Server"

3. **Or open directly**
   - Simply double-click `index.html`

## 🐛 Known Issues & Solutions

### Cat Interactivity Not Working
- **Solution**: The script includes retry logic (up to 10 attempts) to ensure the Lottie player is ready
- Check browser console for "Cat interactivity initialized!" message

### Button Icon Not Updating
- **Solution**: Hard refresh the browser (Ctrl+Shift+R)
- Clear browser cache if needed

## 🔧 Customization

### Change Cat Animation
Replace `assets/Cat Sleeping.json` with your own Lottie animation file and update the path in `index.html`:
```html
<lottie-player id="interactive-mascot" src="assets/YOUR_ANIMATION.json" ...>
```

### Adjust Fact Container Height
In `styles.css`, modify the `.fact-container` max-height:
```css
.fact-container {
    max-height: 100px; /* Change this value */
}
```

### Change Color Theme
Update the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

## 📝 Future Enhancements

- [ ] Add favorite facts feature
- [ ] Share facts on social media
- [ ] Dark mode toggle
- [ ] More cat animation variations
- [ ] Fact categories/filters
- [ ] Offline support with service workers

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Cat facts from [Cat Facts API](https://catfact.ninja/)
- Cat images from [The Cat API](https://thecatapi.com/)
- Sleeping cat animation from [LottieFiles](https://lottiefiles.com/)
- Icons from [Bootstrap Icons](https://icons.getbootstrap.com/)

## 📧 Contact

Created with 💖 by Prathmesh 

---

**Enjoy learning about cats!** 🐱✨
