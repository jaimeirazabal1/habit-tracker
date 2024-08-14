
# Habit Tracker App

## Overview

**Habit Tracker App** is a full-stack application designed to help users build and maintain positive habits. It includes a frontend built with React and a backend using Node.js and Express.

## Features

- **User Authentication**: Secure login and registration system.
- **Habit Management**: Create, edit, delete, and complete daily and weekly habits.
- **Progress Tracking**: View detailed progress with interactive graphs and stats.
- **Reward System**: Earn points for completing habits and track your progress.
- **Responsive Design**: Optimized for mobile and desktop use.
- **Notifications**: In-app notifications to keep users motivated.

## Tech Stack

- **Frontend**: React, Material-UI (Located in `/client`)
- **Backend**: Node.js, Express (Located in `/server`)
- **State Management**: React useState, Context API

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jaimeirazabal1/habit-tracker
   cd tu-repositorio
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

### Running the App

#### Running the Backend (Server)

1. Start the backend server:

   ```bash
   cd server
   npm start
   ```

   The backend will run on `http://localhost:5000` (or the port specified in your server configuration).

#### Running the Frontend (Client)

1. Start the frontend application:

   ```bash
   cd client
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### Deployment

#### Deploying the Backend

1. Build and deploy the backend from the `/server` directory.

#### Deploying the Frontend

1. Build and deploy the frontend from the `/client` directory:

   ```bash
   cd client
   npm run build
   ```

   Deploy the contents of the `build` directory to your hosting service.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the creators of React and Material-UI for their awesome libraries.
- Special thanks to the open-source community for their continuous contributions.


