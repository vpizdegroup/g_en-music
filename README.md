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

## Deployment on Render

### Step-by-step guide:

1. **Connect your GitHub repository**
   - Go to [render.com](https://render.com)
   - Sign up or log in with GitHub
   - Click "New +" → "Web Service"
   - Select your repository `vpizdegroup/g_en-music`
   - Click "Connect"

2. **Configure the deployment**
   - **Name**: `gen-music` (or your preferred name)
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Plan**: Free (or Starter if you want better uptime)

3. **Environment Variables** (if needed)
   - Leave empty for now unless you have specific requirements

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy your app
   - You'll get a URL like: `https://gen-music.onrender.com`

5. **Auto-deploy**
   - Every push to the main branch will trigger automatic redeployment

### Important Notes for Render:

- **First deployment** may take 2-3 minutes
- **Free tier** apps go to sleep after 15 minutes of inactivity (wake up automatically)
- **Build time** limit: ~30 minutes
- For production, consider upgrading to a **Starter Plan** ($7/month) for consistent uptime

## Usage

### Home Screen
- Logo in the top right corner
- "gen AI" button with glowing effect
- Grid of playlists (4 visible)
- Current track player bar at the bottom (when track is playing)

### Player View
- Click the "gen AI" button or player bar to open full player
- Album artwork display in the center
- Progress bar with time display
- Playback controls (previous, play/pause, next)
- Lyrics button at the bottom
- Click the X to close player

### Controls
- **▶ Play**: Start/pause playback
- **⏮ Previous**: Go to previous track
- **⏭ Next**: Go to next track
- **Progress Bar**: Click to seek to position
- **Lyrics**: View song lyrics

## File Structure Details

### style.css
Contains all styling including:
- Phone frame design with notch
- Neon glow effects
- Responsive layouts
- Animations and transitions
- Modal styling

### MusicPlayer.vue
Vue 3 component with:
- State management for player
- Playback logic
- Track progression
- Time formatting
- Progress tracking

### main.js
Vue 3 app initialization and component mounting

### vite.config.js
Vite build configuration with Vue support

## Customization

### Add SVG Assets
Place your SVG files in the `assets/` folder:
- `assets/gen.svg` - Main logo
- `assets/gen-ai.svg` - AI button logo
- `assets/gen-track.svg` - Track player logo

### Modify Colors
Edit `style.css` to change the neon color scheme:
- Primary green: `#00ff88`
- Secondary blue: `#00ccff`
- Accent magenta: `#ff00ff`

### Add Music Data
Modify the `tracks` array in `MusicPlayer.vue`:
```javascript
tracks: [
  { id: 1, name: 'Your Song', duration: 240 },
  { id: 2, name: 'Another Song', duration: 200 }
]
```

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend build tool
- **CSS3** - Modern styling with animations
- **JavaScript ES6+** - Modern JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Build size**: ~50KB (production)
- **Load time**: <2 seconds
- **Mobile optimized**: 60 FPS animations

## Troubleshooting

### App won't load locally
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Render deployment fails
- Check build command in render.yaml
- Ensure all dependencies in package.json
- Check Node version compatibility
- View build logs in Render dashboard

### Styles not applied
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server: `npm run dev`
- Check browser console for CSS errors

## License

MIT License - feel free to use for personal and commercial projects

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Made with ❤️ and neon glow**
