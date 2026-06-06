# gen - Free Music Streaming App

A modern, beautiful music streaming application built with Vue 3 and Vite. Stream music for free with a sleek neon-inspired interface.

## Features

- 🎵 Free music streaming
- ✨ Neon-inspired UI with glow effects
- 📱 Mobile-optimized responsive design
- 🎧 Full music player controls
- 🎨 Beautiful animations and transitions
- 🚀 Fast performance with Vite

## Project Structure

```
g_en-music/
├── components/
│   └── MusicPlayer.vue    # Main music player component
├── assets/
│   ├── gen.svg           # Logo
│   ├── gen-ai.svg        # AI button logo
│   └── gen-track.svg     # Track player logo
├── index.html            # HTML entry point
├── main.js               # Vue app entry
├── style.css             # Global styles
├── vite.config.js        # Vite configuration
├── render.yaml           # Render deployment config
└── package.json          # Project dependencies
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Setup

1. **Clone the repository**
```bash
git clone https://github.com/vpizdegroup/g_en-music.git
cd g_en-music
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will automatically open in your browser at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🚀 Deployment on Render (COMPLETE GUIDE)

### Step 1: Prepare Your GitHub Repository

Make sure all files are pushed to GitHub:
```bash
git add .
git commit -m "Initial commit - gen music player app"
git push origin main
```

### Step 2: Go to Render.com

1. Visit https://render.com
2. Click **"Sign up"** or **"Sign in"** with GitHub
3. Authorize Render to access your GitHub account
4. You'll be redirected to your dashboard

### Step 3: Create Web Service

1. Click **"New +" button** in top right
2. Select **"Web Service"**
3. Find your repository `vpizdegroup/g_en-music`
4. Click **"Connect"**

### Step 4: Configure Deployment

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | `gen-music` |
| **Runtime** | `Node` |
| **Root Directory** | Leave empty |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run preview` |
| **Instance Type** | Free |

### Step 5: Deploy!

1. Click **"Create Web Service"**
2. Wait 2-3 minutes for deployment
3. You'll see a URL like `https://gen-music.onrender.com`
4. Visit the URL - your app is live! 🎉

### Step 6: Enable Auto-Deploy (Optional)

- Go to Settings → "Auto-Deploy"
- Select "Yes"
- Now every push to `main` will auto-deploy

---

## 📋 Render Free Tier Info

| Feature | Free Tier |
|---------|-----------|
| **Uptime** | Best effort |
| **Sleep behavior** | Spins down after 15 min inactivity |
| **Wake time** | Auto-wake on request (~30 sec) |
| **Monthly hours** | 750 hours |
| **SSL** | ✅ Included |
| **Custom domain** | ✅ Support |
| **Price** | Free |

**For Production:** Upgrade to Starter Plan ($7/month) for 24/7 uptime.

---

## Usage

### Home Screen
- **Logo** in top right corner
- **"gen AI" button** with glowing neon effect
- **Playlist grid** (2x2)
- **Player bar** at bottom (when track playing)

### Player View
Click "gen AI" button or player bar to open full player:
- Album artwork (with gen-track logo)
- Progress bar with timeline
- Play/Pause, Next, Previous controls
- Time display (current / total)
- Lyrics button at bottom
- Close button (X) in top right

### Controls
| Button | Function |
|--------|----------|
| **▶ Play** | Play/pause track |
| **⏮ Previous** | Previous track |
| **⏭ Next** | Next track |
| **Progress** | Click to seek |
| **Lyrics** | Show lyrics |

## Customization

### Add SVG Logos

Create `assets/` folder:
```
assets/
├── gen.svg          # Top right logo
├── gen-ai.svg       # AI button logo
└── gen-track.svg    # Album art center
```

### Change Colors

Edit `style.css`:
```css
Primary Neon Green: #00ff88
Secondary Neon Blue: #00ccff
Accent Magenta: #ff00ff
```

### Add Songs

Edit `components/MusicPlayer.vue`:
```javascript
tracks: [
  { id: 1, name: 'Song Title', duration: 240 },
  { id: 2, name: 'Another Song', duration: 180 }
]
```

### Add Playlists

Edit `components/MusicPlayer.vue`:
```javascript
playlists: [
  { id: 1, name: 'Playlist 1' },
  { id: 2, name: 'Playlist 2' },
  // ... more playlists
]
```

## Technologies

- **Vue 3** - JavaScript framework
- **Vite** - Build tool (super fast)
- **CSS3** - Styling with animations
- **JavaScript ES6+** - Modern syntax

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## Performance

- **Build size**: ~50KB
- **Load time**: <2 sec
- **Animations**: 60 FPS
- **Mobile**: Fully responsive

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (auto-reload on changes)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Local Development Issues

**Problem: `npm run dev` fails**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Problem: Styles not showing**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart dev server

### Render Deployment Issues

**Problem: Build fails**
- Check Node version in Render (should be auto-detected)
- Run `npm install` locally to verify dependencies
- Check render.yaml syntax

**Problem: App crashes after deploy**
- Check Render logs (Dashboard → Logs)
- Most common: Port configuration issue

**Problem: Slow performance**
- Free tier shares resources
- Upgrade to Starter Plan for consistent speed

## Next Steps

1. ✅ Deploy on Render (instructions above)
2. 🎵 Add real music API integration
3. 👤 Add user authentication
4. 💾 Add database for saved playlists
5. 🔍 Add search functionality
6. ❤️ Add favorites feature

## License

MIT License - Free to use for any project

## Support

- Issues: GitHub Issues
- Email: yemlapshu@gmail.com

---

**Made with ❤️ and neon glow effects ✨**

**Ready to stream? Deploy now! 🚀**
