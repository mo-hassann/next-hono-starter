# Next.js, Hono.js, Auth.js, TanStack Query, and Drizzle ORM Starter

This is a starter template for building modern web applications using Next.js, Hono.js, Auth.js, TanStack Query, and Drizzle ORM. The project is structured to offer authentication, server-side data management, and type-safe database queries out of the box.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Next.js Framework**: Provides server-side rendering, static site generation, and routing capabilities.
- **Hono.js for Server APIs**: Ultra-lightweight web framework to create fast and flexible backend APIs.
- **Auth.js Integration**: Pre-configured user authentication and session management with Auth.js.
- **TanStack Query for Data Fetching**: Efficient and powerful data-fetching library for managing server state.
- **Drizzle ORM**: A TypeScript-first ORM for type-safe and scalable database queries.
- **Environment Variables**: Pre-configured `.env` setup for sensitive information such as database URLs and secret keys.

## 🛠️ Tech Stack

- **Next.js**: A React framework for building full-stack web applications with ease.
- **Hono.js**: A lightweight, performant framework for building server-side applications and APIs.
- **Auth.js**: Authentication library for handling sign-up, login, and session management.
- **TanStack Query**: Data-fetching and server-state management library.
- **Drizzle ORM**: Type-safe ORM with full TypeScript support for interacting with SQL databases.

## 📦 Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

- **Node.js** (v16.x or higher)
- **npm** or **yarn** as your package manager
- **PostgreSQL** (or another supported SQL database)

### 🚀 Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mo-hassann/next-hono-starter.git
    cd next-hono-starter
    ```

2. **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    DATABASE_URL=your_database_url
    DATABASE_SECRET=your_database_secret
    DRIZZLE_DATABASE_URL=your_database_url_for_drizzle
    AUTH_SECRET=any_random_secret
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```

4. **Run database migrations:**

    Run Drizzle ORM migrations to initialize the database:

    ```bash
    npm run migrate
    ```

5. **Start the development server:**

    Using npm:

    ```bash
    npm run dev
    ```

    Or using yarn:

    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 📖 Usage

### Running the app

- **Development mode:** `npm run dev` or `yarn dev`
- **Production mode:** `npm run build && npm start` or `yarn build && yarn start`

### API Endpoints

Hono.js serves as the API layer. The routes for backend APIs can be found in the `api/` directory, and they are fully integrated with Next.js for API routing.

### Authentication

Auth.js is set up to handle authentication and session management. You can configure the authentication provider and customize it further by modifying the `auth.js` configuration files.

## ⚙️ Customization

1. **Database Schema**: Modify the Drizzle ORM schema in the `db/schema.ts` file to define your own tables and relationships.
2. **API Routes**: Add or modify API endpoints in the `api/` folder to create custom server-side logic using Hono.js.
3. **Frontend Components**: Update the frontend components in the `components/` and `pages/` directories to customize the user interface.

## 🤝 Contributing

We welcome contributions to this starter project. To contribute:

1. **Fork the repository.**
2. **Create a new branch** (`git checkout -b feature/your-feature-name`).
3. **Make your changes** and commit them (`git commit -m 'Add some feature'`).
4. **Push to the branch** (`git push origin feature/your-feature-name`).
5. **Open a pull request**.

Please make sure to follow the coding guidelines and update tests as appropriate.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
