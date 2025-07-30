# Recipe React App

Welcome to the **Recipe React App**! This is a modern web application for browsing, creating, and saving your favorite recipes. Built with React and Vite, it features a clean UI, context-based state management, and a modular folder structure for easy development and maintenance.

## Features

- **Browse Recipes:** View a list of delicious recipes with details and images.
- **Create Recipes:** Add your own recipes using a simple form.
- **Favorites:** Mark recipes as favorites and view them in a dedicated section.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Routing:** Seamless navigation between pages using React Router.

## Folder Structure

```
src/
  App.jsx              # Main app component
  index.css            # Global styles
  main.jsx             # Entry point
  components/          # Reusable UI components (Navbar, RecipeCard, etc.)
  context/             # React Context for global state (RecipeContext)
  pages/               # Page components (Home, About, Create, Favorite, etc.)
  routes/              # App routes configuration (Mainroutes.jsx)
public/                # Static assets (images, SVGs)
```

## 📂 File-by-File Explanation

### Root Files

- **package.json**: Manages project dependencies, scripts, and metadata.
- **vite.config.js**: Configuration for Vite (build tool and dev server).
- **eslint.config.js**: ESLint configuration for code linting and style.
- **index.html**: The main HTML file loaded by Vite; React mounts here.
- **README.md**: Project documentation (this file).

### public/

- **background.svg, logo.png, logo.svg, notFound.svg**: Static images and SVGs used throughout the app (e.g., backgrounds, logos, 404 page).

### src/

- **App.jsx**: The root React component. Sets up the main layout and context providers.
- **index.css**: Global CSS styles applied to the entire app.
- **main.jsx**: The entry point for the React app. Renders `App.jsx` into the DOM and wraps it with context providers and router.

#### src/components/

- **Navbar.jsx**: The navigation bar component, present on all pages for easy navigation.
- **RecipeCard.jsx**: Displays individual recipe details in a card format (used in lists and favorites).

#### src/context/

- **RecipeContext.jsx**: Implements React Context for managing recipes and favorites globally. Provides state and functions to components via context.

#### src/pages/

- **About.jsx**: The About page, describing the app and its purpose.
- **Create.jsx**: The page with a form to add new recipes.
- **Favorite.jsx**: Shows the user's favorite recipes.
- **Footer.jsx**: The footer component, shown at the bottom of pages.
- **HeroSection.jsx**: A prominent section (usually on the Home page) for branding or featured content.
- **Home.jsx**: The main landing page, typically listing all recipes.
- **PageNotFound.jsx**: The 404 error page for undefined routes.
- **Recipe.jsx**: Displays details for a single recipe (when selected).
- **Recipes.jsx**: Lists all recipes, possibly with filters or search.

#### src/routes/

- **Mainroutes.jsx**: Defines all application routes using React Router, mapping URLs to page components.

---

### Key Files & Folders

- **src/components/**: Contains UI components like `Navbar` and `RecipeCard`.
- **src/context/RecipeContext.jsx**: Manages global state for recipes and favorites.
- **src/pages/**: Each file is a page (e.g., `Home`, `About`, `Create`, `Favorite`, `Recipe`, `Recipes`, `PageNotFound`).
- **src/routes/Mainroutes.jsx**: Defines all app routes using React Router.
- **public/**: Static files and images used in the app.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sameer2210/Recipe_Create.git
   cd Recipe_React
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

##  Usage Guide

- **Home:** Browse all available recipes.
- **Create:** Add a new recipe with title, ingredients, and instructions.
- **Favorite:** View your favorite recipes.
- **About:** Learn more about the app.
- **404 Page:** Shown for undefined routes.

##  How It Works

- **State Management (Context API):**

  - The React Context API (see `src/context/RecipeContext.jsx`) is used to manage and share global state, such as the list of recipes and user favorites, across all components. This allows any component to access or update recipes and favorites without prop drilling.

- **Routing (React Router):**

  - Routing is handled by React Router (see `src/routes/Mainroutes.jsx`). It defines which page/component is shown for each URL path (e.g., Home, Create, Favorite, About, 404). The Context API is not used for routing, but both work together: the router determines which page is visible, and the context provides shared data to those pages.

- **Components:** UI is split into reusable components for maintainability.
- **Styling:** Uses CSS for styling (`index.css` and component-level styles).

## Example Folder Structure

```
Recipe_React/
├── public/
│   ├── background.svg
│   ├── logo.png
│   ├── logo.svg
│   └── notFound.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── RecipeCard.jsx
│   ├── context/
│   │   └── RecipeContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Create.jsx
│   │   ├── Favorite.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Home.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Recipe.jsx
│   │   └── Recipes.jsx
│   └── routes/
│       └── Mainroutes.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## 📄 License

This project is licensed under the MIT License.

---


## Contact & Socials
GitHub: sameer2210
Twitter (X): @Sameer2210_
LinkedIn: LinkedIn
Email: sameerkhan@gmail.com
Portfolio : portfolio-coral-two-16.vercel.app


**Enjoy cooking and sharing your favorite recipes!**
