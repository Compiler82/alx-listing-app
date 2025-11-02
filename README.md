# alx-listing-app
# ALX Listing App

## Project Overview

The ALX Listing App is an Airbnb clone project designed to showcase property listings in a clean, modern interface. This project demonstrates the implementation of a responsive listing page using Next.js, TypeScript, and Tailwind CSS.

## Goals

- Build a fully functional property listing page
- Implement reusable React components
- Establish a scalable project structure
- Practice TypeScript integration
- Create a responsive UI with Tailwind CSS

## Project Structure
```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx          # Reusable card component for property listings
│       └── Button.tsx        # Reusable button component
├── interfaces/
│   └── index.ts              # TypeScript interfaces and types
├── constants/
│   └── index.ts              # Application constants and configuration
├── pages/
│   ├── _app.tsx              # Custom App component
│   ├── _document.tsx         # Custom Document component
│   └── index.tsx             # Home page with property listings
├── public/
│   └── assets/               # Static assets (images, SVGs, etc.)
├── styles/
│   └── globals.css           # Global styles and Tailwind imports
└── README.md                 # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/alx-listing-app.git
cd alx-listing-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## Component Documentation

### Card Component
Displays property information including image, title, description, price, and rating.

**Props:**
- `title`: string
- `description`: string
- `image`: string
- `price`: number (optional)
- `rating`: number (optional)
- `location`: string (optional)

### Button Component
Reusable button with multiple variants and sizes.

**Props:**
- `label`: string
- `onClick`: function (optional)
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean (optional)

## Future Enhancements

- Add property detail pages
- Implement search and filter functionality
- Integrate with a backend API
- Add user authentication
- Implement booking functionality

## License

This project is part of the ALX Software Engineering program.
