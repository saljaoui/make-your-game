# Make Your Game – Vanilla JavaScript (60 FPS)

⚠️ **Archived project – early JavaScript performance learning (2023)**

This project is a single-player browser game built using **pure JavaScript, HTML, and CSS**, without frameworks or canvas.  
It was developed as part of a learning curriculum to understand **game loops, browser performance, and smooth animations**.

---

## 🎮 Project Overview

The goal of this project was to build a fully functional game engine in JavaScript while maintaining **consistent 60 FPS** and avoiding frame drops or jank.

The game runs entirely in the browser and is controlled **only with the keyboard**.

---

## 🧠 Key Concepts & Skills

- Vanilla JavaScript (no frameworks)
- `requestAnimationFrame` game loop
- Event loop & rendering pipeline
- Keyboard input handling (press & hold)
- DOM-based rendering optimization
- FPS stability & performance measurement
- Pause / Resume / Restart game logic

---

## ✨ Features

- Smooth animations at **60 FPS**
- Single-player gameplay
- Keyboard-only controls
- Pause menu with:
  - Continue
  - Restart
- Real-time scoreboard:
  - Timer / Countdown
  - Score
  - Remaining lives
- Minimal DOM layers to reduce repaints
- No canvas, no libraries — **pure DOM rendering**

---

## 🕹️ Controls

- Keyboard-based movement and actions  
- Holding a key triggers continuous movement  
- Releasing a key stops the action smoothly  

---

## 🛠️ Tech Stack

- **JavaScript** (Vanilla)
- **HTML**
- **CSS**
- Browser Developer Tools (Performance, FPS, Paint Flashing)

---

## 📊 Performance

- Uses `requestAnimationFrame` for smooth rendering
- Optimized to avoid layout thrashing
- Designed to prevent frame drops, even when paused

---

## 📌 Status

This project is **archived** and kept as a reference for early-stage learning in JavaScript performance and browser rendering mechanics.

