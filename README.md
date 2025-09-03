
# Jumble – Multiplayer Party Game Platform

**Jumble** is an interactive multiplayer party game platform designed to bring friends together for an engaging gaming experience. The platform supports real-time gameplay and social features, enabling players to join rooms, interact, and compete in fun party-style games.
<p align="center">
  <a href="https://jumble-nine.vercel.app/">:rocket: LINK TO LIVE SITE</a>
</p>


## 🌟 Overview

**Jumble** is a collaborative project developed to offer a fun, interactive environment for users to engage with friends through multiplayer games. Players can join virtual game rooms, play in real-time, and enjoy an array of competitive party games.

### Tech Stack:
- **Frontend**: Built with **React** and **Next.js** for a dynamic, responsive user interface. **TailwindCSS** is used for styling.
- **Backend**: The backend is built using **Node.js** and **Express** for handling game logic and API requests. **WebSockets** enable real-time interactions between players.
- **Database**: **PostgreSQL** is used to manage user data, game states, and other important game-related information.
- **Authentication**: Currently implementing manual user authentication with plans for integrating **OAuth 2.0** for easier third-party login.
- **Hosting**: The application is deployed using **Docker** for containerization, ensuring a seamless and consistent development and production environment. **AWS S3** is used for media file storage.

### Contributors:
- **Muntaqa Maahi** – Backend architecture, user authentication, deployment, and database setup.
- **Azim** – Frontend development and game room interface.

## 🚀 Project Setup

### Prerequisites
Before setting up **Jumble**, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16+)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) (if not using Dockerized database)
- [AWS CLI](https://aws.amazon.com/cli/) (for managing AWS resources)

### Installation & Setup
To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aziiimm/Jumble.git
   cd Jumble
   ```

2. **Install Dependencies**:
   Run the following command to install the necessary packages:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file at the root of the project and add the necessary configuration (such as database connection strings, AWS credentials, etc.).

4. **Start the Development Server**:
   If you're using Docker, run the following to start the containers:
   ```bash
   docker-compose up
   ```
   Otherwise, run the development server locally:
   ```bash
   npm start
   ```

5. **Database Setup**:
   Set up the database by running the necessary migrations (if applicable). The PostgreSQL database is used for user management, game state tracking, etc.

6. **Access the App**:
   Open your browser and navigate to `http://localhost:3000` to start playing!

## 🗂 Folder Structure

The project is organized as follows:

```bash
.
├── /backend/          # Backend logic and API routes
│   ├── /controllers/  # Functions for handling requests
│   ├── /models/       # Database models (User, Game, etc.)
│   ├── /services/     # Game logic, authentication services, etc.
│   └── server.js      # Main server entry point
├── /frontend/         # Frontend React app
│   ├── /components/   # Reusable UI components
│   ├── /pages/        # Game rooms, login, etc.
│   ├── /styles/       # TailwindCSS for styling
│   └── /utils/        # Utility functions (e.g., game state management)
├── .env               # Environment variables
├── Dockerfile         # Docker configuration
└── package.json       # Project dependencies and configuration
```

### Key Folders and Files
- `/backend/`: Contains the backend logic, including API endpoints, game mechanics, and user management.
- `/frontend/`: Contains the React-based frontend for game interactions.
- `Dockerfile`: Used for containerizing the app to ensure consistent deployment.
- `package.json`: Lists the dependencies for both frontend and backend.

## 🕹 Features

- **Real-Time Gameplay**: Players can join rooms and play games interactively.
- **User Authentication**: Secure login and registration (OAuth 2.0 support coming soon).
- **Database-Driven Game State**: User data and game progress are stored and managed in a PostgreSQL database.
- **Multi-Game Support**: The platform will host various party games, with word hunt being one of the initial games.

### Usage Example:
Once you have the app running, you can join a game room and start playing by following these steps:
1. **Sign Up / Login**: Register a new account or log in using OAuth.
2. **Create a Room**: Create a new game room and invite your friends.
3. **Start Playing**: Play and interact with friends in real time.

## 📜 Contribution Guidelines

We welcome contributions to Jumble! To get involved:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Run tests (if applicable).
5. Open a pull request.

Please ensure that your code adheres to the coding style and includes proper documentation.

## 🧑‍💻 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

