# LimeStore - MEAN Stack Product Demo

A modern, responsive, and visually appealing web application demonstrating a clean MEAN (MongoDB, Express, Angular, Node) stack architecture (using a hardcoded in-memory backend for simplicity). It displays a list of premium products with a sleek lime-green aesthetic and smooth CSS hover animations.

## Features
- **Express.js Backend**: Serves product data via a REST API.
- **Angular Frontend**: Displays data in a responsive, modern UI.
- **Premium Design**: Custom styling with CSS Grid/Flexbox, smooth transitions, and hover effects.
- **Image Gallery Hover**: CSS-based slider that animates through product images when hovering over a card.

## Project Structure
```text
.
├── backend/       # Express.js API server
│   ├── package.json
│   └── server.js  # Main backend entry point (runs on port 3000)
├── frontend/      # Angular frontend application
│   ├── src/
│   │   ├── app/   # Angular components and services
│   │   └── styles.css # Global styles and theme variables
│   └── package.json
└── README.md
```

## Setup & Installation

### 1. Run the Backend API
Open a terminal and navigate to the `backend` directory:
```bash
cd backend
npm install
npm start
```
The API will run at `http://localhost:3000/api/items`.

### 2. Run the Angular Frontend
Open a new terminal and navigate to the `frontend` directory:
```bash
cd frontend
npm install
npm start
```
The Angular development server will start at `http://localhost:4200`. Open this URL in your browser to view the application.

## Technologies Used
- **Backend**: Node.js, Express.js, CORS
- **Frontend**: Angular 18+, TypeScript, HTML5, CSS3
- **Design**: Custom CSS variables, Inter font, Flexbox, Grid
- **Images**: Real placeholder product photos from LoremFlickr