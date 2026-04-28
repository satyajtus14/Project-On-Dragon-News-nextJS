# 🐉 Dragon News

<div align="center">


<p align="center">
  <img src="public/logo.png" alt="Logo" width="200" />
</p>



**Dragon News is a responsive front-end web application that delivers real-time news articles with personalized access via secure user authentication.**


[Live Demo](project-on-dragon-news-next-js.vercel.app) 


<!-- TODO: Add live demo link if available -->
<!-- [Live Demo](https://dragon-news-demo.vercel.app) -->

</div>

## 📖 Overview

Dragon News is a modern, responsive web application built with Next.js and React, designed to provide users with a seamless experience for browsing real-time news articles. The application offers a variety of topics and ensures personalized access through a robust Firebase authentication system. Its focus on modern web technologies guarantees a smooth and intuitive user interface across all devices, from desktops to mobile phones.

## ✨ Features

-   🎯 **Real-time News Delivery**: Access up-to-the-minute news articles from various categories.
-   🔐 **User Authentication**: Secure login and registration powered by Firebase for personalized content and settings.
-   📱 **Responsive Design**: Enjoy a consistent and optimal viewing experience across different screen sizes.
-   ⚡ **Modern UI/UX**: Built with modern web technologies to provide an intuitive and engaging user interface.
-   🚀 **Fast Navigation**: Leverage Next.js for efficient page loading and navigation.

## 🖥️ Screenshots

<!-- TODO: Add actual screenshots of the application -->
<!-- ![Desktop Screenshot](public/screenshot-desktop.png) -->
<!-- ![Mobile Screenshot](public/screenshot-mobile.png) -->

## Live Link:
 - Github: https://satyajtus14.github.io/Project-KeenKeeper-Apps
 - Netlify: https://project-keenkeeper-apps.netlify.app/
 - Vercel:project-on-dragon-news-next-js.vercel.app

## 🛠️ Tech Stack

**Frontend:**
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Authentication:**
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=firebase)

**Tooling:**
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)

## 🚀 Quick Start

Follow these steps to get your development environment up and running.

### Prerequisites
Make sure you have the following installed:
-   **Node.js**: `v18.x` or higher (recommended by Next.js)
-   **npm**: Comes with Node.js

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/satyajtus14/Project-On-Dragon-News-nextJS.git
    cd Project-On-Dragon-News-nextJS
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment setup**
    Create a `.env.local` file in the root directory by copying the example (if available, or create manually):
    ```bash
    cp .env.example .env.local # If .env.example exists
    # OR create .env.local manually
    ```
    Then, configure your Firebase environment variables. You will need to obtain these from your Firebase project settings:
    ```ini
    # .env.local
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
    ```
    *   **Note**: If your project also fetches news from a third-party API, you might need additional API keys here.

4.  **Start development server**
    ```bash
    npm run dev
    ```

5.  **Open your browser**
    Visit `http://localhost:3000` to see the application running.

## 📁 Project Structure

```
Project-On-Dragon-News-nextJS/
├── public/                 # Static assets (images, fonts, etc.)
│   └── favicon.ico         # Example static asset
├── src/                    # Main application source code
│   ├── app/                # Next.js App Router root layout and pages
│   │   ├── api/            # Route Handlers (for API endpoints if any)
│   │   ├── (auth)/         # Grouped routes for authentication (e.g., login, signup)
│   │   ├── news/           # News related pages
│   │   └── page.js         # Root page component
│   ├── components/         # Reusable React components
│   ├── utils/              # Utility functions and helpers
│   └── styles/             # Global styles or Tailwind CSS base
├── .gitignore              # Specifies intentionally untracked files to ignore
├── eslint.config.mjs       # ESLint configuration for code linting
├── jsconfig.json           # JavaScript project configuration
├── next.config.mjs         # Next.js configuration file
├── package-lock.json       # Records the exact dependency tree
├── package.json            # Project metadata and script definitions
├── postcss.config.mjs      # PostCSS configuration, typically for Tailwind CSS
└── README.md               # Project README file
```

## ⚙️ Configuration

### Environment Variables
Environment variables are managed through `.env.local` files. These are crucial for storing sensitive information like API keys.

| Variable | Description | Example Default | Required |
|----------|-------------|-----------------|----------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Web API Key | `AIzaSy...` | Yes |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain | `project-id.firebaseapp.com` | Yes |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Project ID | `project-id-12345` | Yes |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket | `project-id.appspot.com` | Yes |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID | `1234567890` | Yes |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase App ID | `1:1234567890:web:abcdefghijkl` | Yes |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase Measurement ID (Analytics) | `G-XXXXXXXXXX` | No |

### Configuration Files
-   `next.config.mjs`: Central configuration for Next.js, including image optimization, environment variables, and more.
-   `postcss.config.mjs`: Configures PostCSS plugins, specifically for Tailwind CSS and Autoprefixer.
-   `eslint.config.mjs`: Defines linting rules and configurations for consistent code quality.
-   `jsconfig.json`: Provides JavaScript language features like path aliases and IntelliSense.

## 🔧 Development

### Available Scripts
In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server. Opens `http://localhost:3000`. |
| `npm run build` | Builds the application for production to the `.next` folder. |
| `npm run start` | Starts the Next.js production server. Requires a prior `npm run build`. |
| `npm run lint` | Runs ESLint to check for code style and potential errors. |

### Development Workflow
1.  Ensure all prerequisites are met and dependencies are installed.
2.  Configure your `.env.local` file with necessary API keys.
3.  Run `npm run dev` to start the development server.
4.  Make changes to the `src/` directory. Next.js provides hot module reloading for a smooth development experience.
5.  Regularly run `npm run lint` to maintain code quality.

## 🧪 Testing

This project uses Next.js, which typically supports testing frameworks like Jest or React Testing Library.

```bash
# Run linting checks
npm run lint

# TODO: Add actual test commands if a testing framework is configured (e.g., Jest, React Testing Library)
# npm test
# npm test -- --coverage
```

## 🚀 Deployment

The Dragon News application, being a Next.js project, is highly optimized for deployment to platforms like Vercel (the creators of Next.js) or Netlify.

### Production Build
To create an optimized production build:
```bash
npm run build
```
This command generates the `.next` directory with the production-ready build.

### Deployment Options
-   **Vercel**: The simplest way to deploy a Next.js app. Connect your GitHub repository, and Vercel will automatically build and deploy your project.
-   **Netlify**: Similar to Vercel, Netlify provides continuous deployment from Git repositories.
-   **Docker**: A `Dockerfile` can be created for containerized deployment to any cloud provider (AWS, GCP, Azure).
-   **Traditional Hosting**: The `build` output can be served by a Node.js server using `npm run start`.

## 🤝 Contributing

We welcome contributions to the Dragon News project! If you have suggestions for improvements, new features, or bug fixes, please open an issue or submit a pull request.

### Development Setup for Contributors
Follow the [Quick Start](#quick-start) guide to set up your local development environment. Ensure your `.env.local` is configured correctly for authentication.

## 📄 License

This project is currently **Unlicensed**. Please consider adding a license like MIT or Apache 2.0 to clarify usage rights.

## 🙏 Acknowledgments

-   **Next.js**: For providing an incredible React framework for production.
-   **React**: The foundational library for building user interfaces.
-   **Tailwind CSS**: For utility-first CSS styling that speeds up UI development.
-   **Firebase**: For robust and easy-to-integrate authentication services.
-   **The open-source community**: For countless tools and libraries that made this project possible.

## 📞 Support & Contact

-   🐛 **Issues**: Report bugs or suggest features via [GitHub Issues](https://github.com/satyajtus14/Project-On-Dragon-News-nextJS/issues).
-   👤 **Author**: [SATYAJIT BARUA](https://github.com/satyajtus14)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [SATYAJIT BARUA](https://github.com/satyajtus14)

</div>
