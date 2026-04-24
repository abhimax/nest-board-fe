# NestBoard Frontend

NestBoard is a co-living space booking platform that allows users to explore, book, and manage properties like **apartments**, **villas**, and **houses**. It offers a user-friendly interface for discovering available spaces, filtering results by city and price, viewing detailed property information, and making bookings.

## Features

- **Home Page**: Display a list of available properties with filtering options.
- **Property Detail Page**: View detailed information about each property, including available rooms, pricing, and facilities.
- **Room Booking**: Book available rooms at a specific property.
- **User Profile**: View and manage personal details, bookings, and favorites.
- **Settings**: Configure account settings, notifications, and preferences.
- **Map View**: View properties located in various cities on an interactive map.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Adds type safety to JavaScript and improves developer experience.
- **Vite**: A build tool and development server optimized for speed and ease of use.
- **Redux Toolkit**: Manages global state across the app.
- **RTK Query**: Fetches data from APIs and simulates backend interactions.
- **React Router**: Manages page navigation and routing between different views.
- **ChatCN UI**: A UI component library for styling and creating responsive layouts.
- **Leaflet/Google Maps**: Used for displaying properties on a map view.

## Getting Started

To get the app running locally on your machine, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/abhimax/nest-board-fe
cd nestboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

Run the following command to start the development server

```bash
npm run dev
```

### 4. Build for Production

Run the following command to start the development server

```bash
npm run build
```

## API Simulation

Since this app does not have a backend, RTK Query is used to simulate API calls. Data is fetched from static JSON files as mock APIs. These files are located in the src/data/ directory and can be modified to simulate different sets of property and booking data.
