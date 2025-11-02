// constants/index.ts

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export const APP_NAME = 'ALX Listing App';

export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  LOADING: 'Loading...',
  NO_RESULTS: 'No listings found',
};

export const ROUTES = {
  HOME: '/',
  LISTING: '/listing',
  DETAILS: '/details',
};
