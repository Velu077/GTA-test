# GTA VI Countdown & Vice City Vault ðŸŽ®

A full-featured **Progressive Web App** countdown to GTA VI with:

- ðŸ• **Live Countdown** â€” Real-time timer to Fall 2025 release
- ðŸ“° **News Feed** â€” 12+ GTA VI news articles with category filters  
- ðŸŽ¬ **Trailers** â€” Official trailers with YouTube embed
- ðŸ–¼ï¸ **4K Wallpapers** â€” 24 AMOLED Vice City wallpapers
- ðŸŽµ **Vice City Radio** â€” 8 stations with Web Audio API synth
- ðŸ“± **PWA** â€” Install as Android app, works offline
- âš¡ **Vercel Backend** â€” 5 serverless API endpoints

## Deploy to Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: GTA VI Countdown Vault PWA"
   git remote add origin https://github.com/YOUR_USERNAME/gta6-countdown.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) â†’ **New Project** â†’ Import your GitHub repo

3. Vercel auto-detects config â€” click **Deploy** âœ…

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/countdown` | Live countdown data |
| `GET /api/news` | News articles (filter by `?category=`) |
| `GET /api/trailers` | Trailer data |
| `GET /api/wallpapers` | Wallpaper list (filter by `?category=`) |
| `GET /api/radio` | Radio station list |

## Tech Stack

- **Frontend**: Vanilla HTML/CSS/JS (no build step)
- **Backend**: Vercel Serverless Functions (Node.js)
- **PWA**: Service Worker + Web App Manifest
- **Audio**: Web Audio API (radio synth)
- **Fonts**: Bebas Neue, JetBrains Mono, Space Grotesk, Outfit

## Android App

Download the Flutter/Dart Android source from the SYSTEM tab of the app.