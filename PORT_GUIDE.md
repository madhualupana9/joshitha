# Port Configuration Guide - Windows PowerShell

## ❌ Common Errors on Windows

### Error 1: PORT=3001 not recognized
```powershell
PORT=3001 npm start
# ❌ This is Linux/Mac syntax, doesn't work in PowerShell
```

### Error 2: && not valid separator
```powershell
set PORT=3001 && npm start
# ❌ && doesn't work in PowerShell
```

---

## ✅ Solutions for Windows PowerShell

### Method 1: Use npm scripts (EASIEST)

We've added convenient scripts to package.json:

```powershell
# Default port 3000
npm run dev

# Run on port 3001
npm run dev:3001

# Run on port 3002
npm run dev:3002

# Alternative (same as dev)
npm start
```

### Method 2: Use PowerShell environment variable

```powershell
# Set environment variable and run (single line)
$env:PORT=3001; npm run dev

# Or set it first, then run
$env:PORT=3001
npm run dev
```

### Method 3: Use Vite CLI flag (RECOMMENDED)

```powershell
# Specify port directly
npm run dev -- --port 3001

# Or
npx vite --port 3001
```

### Method 4: Use cross-env package

```powershell
# Install cross-env (one time)
npm install --save-dev cross-env

# Then use it
npx cross-env PORT=3001 npm run dev
```

---

## 🚀 Quick Commands

### Start on default port (3000)
```powershell
npm run dev
```

### Start on port 3001
```powershell
npm run dev:3001
```

### Start on port 3002
```powershell
npm run dev:3002
```

### Start on custom port
```powershell
npm run dev -- --port 4000
```

---

## 🔧 Auto Port Selection

The vite.config.js is now configured with `strictPort: false`, which means:

- If port 3000 is busy, Vite will automatically try 3001
- If 3001 is busy, it will try 3002
- And so on...

So you can just run:
```powershell
npm run dev
```

And Vite will find an available port automatically!

---

## 📝 Current Configuration

**vite.config.js:**
```javascript
server: {
  port: process.env.PORT || 3000,
  open: true,
  strictPort: false, // Auto-find available port
}
```

**package.json scripts:**
```json
{
  "dev": "vite",
  "dev:3001": "vite --port 3001",
  "dev:3002": "vite --port 3002",
  "start": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 🐛 Troubleshooting

### Port already in use?

**Option 1: Let Vite auto-select**
```powershell
npm run dev
# Vite will automatically use next available port
```

**Option 2: Kill the process using the port**
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F
```

**Option 3: Use a different port**
```powershell
npm run dev:3001
```

---

## 💡 Pro Tips

### 1. Check what's running on a port
```powershell
netstat -ano | findstr :3000
```

### 2. Kill all Node processes
```powershell
taskkill /F /IM node.exe
```

### 3. See all available npm scripts
```powershell
npm run
```

### 4. Run in background (Windows)
```powershell
Start-Process npm -ArgumentList "run dev" -WindowStyle Hidden
```

---

## 🎯 Recommended Workflow

**For development:**
```powershell
cd joshitha-modern-site
npm run dev
```

**If port 3000 is busy:**
```powershell
npm run dev:3001
```

**For production build:**
```powershell
npm run build
npm run preview
```

---

## 📚 Additional Resources

- **Vite Docs**: https://vitejs.dev/config/server-options.html
- **PowerShell Docs**: https://docs.microsoft.com/powershell/

---

**Remember:** On Windows PowerShell, always use:
- ✅ `npm run dev:3001` (easiest)
- ✅ `$env:PORT=3001; npm run dev`
- ✅ `npm run dev -- --port 3001`

**Never use:**
- ❌ `PORT=3001 npm run dev` (Linux/Mac syntax)
- ❌ `set PORT=3001 && npm run dev` (CMD syntax, not PowerShell)

