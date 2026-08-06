# 🎯 3D_PORTFOLIO

A futuristic, visually immersive, 3D-powered developer portfolio built with React, Vite, Tailwind CSS, React Three Fiber, and Framer Motion.
Designed with a dreamy dark aesthetic using lavender and soft pink highlights.

<p align="center">
  <a href="https://3d-dreamy-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="public/portfolio_logo_invert.png">
      <source media="(prefers-color-scheme: light)" srcset="public/portfolio_logo.png">
      <img alt="Portfolio Logo" src="public/portfolio_logo.png" width="200">
    </picture>
  </a>
</p>

<p align="center">
  <strong>🔗 Site Link: <a href="https://3d-dreamy-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">https://3d-dreamy-portfolio.netlify.app/</a></strong>
</p>

---

## ✨ Features

- 🎨 **Modern UI/UX Design**: Sleek glassmorphic layout, glowing neon borders, and beautiful dark/light themes.
- 🧊 **3D Graphics**: Integrated React Three Fiber elements and smooth interactive floating shapes.
- 🎬 **Smooth Animations**: Framer Motion transitions, physics-based springs, and interactive hover feedback.
- 📱 **Fully Responsive**: Optimized for all devices from 320px mobile up to 4K displays.
- 🔮 **Interactive Sections**: Hero, About, Projects, Skills, Experience, Achievements, and Contact.
- ⚡ **Optimized Performance**: Memoized arrays, GPU hardware acceleration (`will-change`), and throttled animations running at a buttery-smooth 60 FPS.
- 📬 **Interactive Form**: Works seamlessly with EmailJS for direct inquiries.

---

## 🧰 Tech Stack

| 🧩 **Category** | ⚙️ **Technology** |
|:---|:---|
| **Framework** | React.js (Vite) |
| **Styling** | Tailwind CSS |
| **3D Graphics** | React Three Fiber, `@react-three/drei` |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Contact Form** | EmailJS |
| **State & Context** | React Context API (Theme Provider) |

---

## 🚀 Projects Showcased

- **Mutual Funds App**: Full-stack MERN (MongoDB, Express, React, Node) platform for mutual fund investments.
- **E-Commerce Book Store**: Full-stack online bookstore with admin and customer dashboard.
- **Edu Verse**: Feature-packed E-learning website with online quizzes, doubt solvers, and placement preparation.
- **AUREVIA**: A unified real-time interactive community ecosystem for social sharing and admin control.
- **Theatre Ticket Booking**: Seat selection application with real-time price calculation and persistent preferences.
- **ReviewForge**: AI-powered customer feedback sentiment analytics engine built with Python & JavaScript.

---

## 🛠️ Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/Itsme-Debapriya/3D_Portfolio

# Navigate into the folder
cd 3D_Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Setup Environment Variables

Create a `.env` file in the root directory and add the following keys:

```env
VITE_EMAILJS_SERVICE_ID=Your_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=Your_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=Your_EMAILJS_PUBLIC_KEY

# Optional: Remote URL for CV Download
VITE_RESUME_URL=Your_Google_Drive_Or_Dropbox_Link
```

---

## 📄 License

This project is open-source and available for educational purposes.
