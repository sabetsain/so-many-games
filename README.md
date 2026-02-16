# Games Collection

A collection of browser-based games that can be hosted on GitHub Pages and embedded in SharePoint.

## 🎮 Available Games

- **Snake Game** - Classic snake game with arrow key controls

## 🚀 GitHub Pages Setup

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Snake game setup"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## 📋 SharePoint Embedding

### Method 1: Embed Web Part (Recommended)

1. Edit your SharePoint page
2. Add the **Embed** web part
3. Paste your GitHub Pages URL (e.g., `https://YOUR_USERNAME.github.io/YOUR_REPO/`)
4. Adjust the iframe size as needed
5. Publish the page

### Method 2: Manual iframe Code

If you need more control, add a **Code** web part with:

```html
<iframe 
    src="https://YOUR_USERNAME.github.io/YOUR_REPO/" 
    width="100%" 
    height="800" 
    frameborder="0"
    style="border: none; border-radius: 8px;"
    allowfullscreen>
</iframe>
```

For individual games:
```html
<iframe 
    src="https://YOUR_USERNAME.github.io/YOUR_REPO/snake.html" 
    width="500" 
    height="650" 
    frameborder="0"
    style="border: none; border-radius: 8px;"
    allowfullscreen>
</iframe>
```

## 📁 Project Structure

```
/
├── index.html          # Homepage with game listings
├── snake.html          # Snake game page
├── assets/
│   ├── styles.css      # Shared styles for all pages
│   └── snake.js        # Snake game logic
└── README.md           # This file
```

## 🔧 Development

- All styles are centralized in `/assets/styles.css`
- Game-specific JavaScript is in separate files under `/assets/`
- Uses relative paths for easy hosting and embedding

## ✅ Testing

1. **Local Testing**: Open `index.html` directly in your browser
2. **GitHub Pages Testing**: Visit your GitHub Pages URL after enabling it
3. **SharePoint Testing**: Embed the GitHub Pages URL in a SharePoint page and verify the iframe loads correctly

## 🔐 Security Notes

- JavaScript runs inside the iframe, not on the SharePoint page directly
- GitHub Pages serves content over HTTPS, required for SharePoint embedding
- No external dependencies - all code is self-contained

## 🎯 Adding More Games

To add a new game:

1. Create a new HTML file (e.g., `tetris.html`)
2. Create corresponding JS file in `/assets/` (e.g., `tetris.js`)
3. Link to shared `styles.css` and your game JS
4. Add a game card to `index.html`

## 📝 License

Free to use and modify.
