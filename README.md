# Personal Portfolio Website - Adhabiya Ummer

A clean, modern, and fully responsive personal portfolio website built using React, Vite, Tailwind CSS, and Framer Motion.
This project showcases my academic background, technical skills, web development projects, and includes a functional contact form for easy communication.

The portfolio is designed with a professional UI, smooth animations, and optimized performance across all devices.
---

## ✨ Features

Modern & Responsive Design
Works seamlessly on mobile, tablet, and desktop devices.

Component-Based Architecture
Clean, reusable React components for easy maintenance.

Smooth Animations
Page transitions and staggered animations using Framer Motion.

Dark / Light Mode
User-friendly theme toggle with saved preference.

Skills & Projects Showcase
Dedicated sections for skills, academics, and projects.

Functional Contact Form
Integrated with EmailJS to send messages directly to email (no backend required).

High Performance
Fast builds and loading times powered by Vite.

---

## 🛠️ Tech Stack

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- `npm`
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  Clone the repo
    ```sh
    git clone git clone https://github.com/adhabiya/my-portfolio.git

    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```
    Your site will be available at `http://localhost:5173/` (or another port if 5173 is in use).

---

## 📂 File Structure

The project follows a standard component-based structure to keep the code organized and maintainable.

```
src/
├── components/
│   ├── About.jsx
│   ├── Academics.jsx
│   ├── Contact.jsx
│   ├── CP.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Projects.jsx
│   ├── ScrollToTop.jsx
│   ├── SideNav.jsx
│   ├── Skills.jsx
│   └── ui/              # Shadcn/ui components
│       ├── button.jsx
│       └── ...
├── App.jsx              # Main app component with routing
└── main.jsx             # Entry point of the application
```