## Next.js Frontend for Laravel APIs: A Full-Stack Web Application for Book Reviews and User Management

## Introduction
This project serves as the frontend application built using **Next.js 13.4 with App Router**, designed to work seamlessly with a Laravel backend. It provides a user-friendly interface for managing book reviews and more. This is the backend application [Laravel-React Dashboard](https://github.com/vipertecpro/laravel-react-dashboard) using Laravel Breeze with React.

## Features
- **User Authentication**: Secure login and registration using JWT and CSRF token protection.
- **Guest Features**: Guests can view a list of books, search, paginate through pages, and view single books with multiple reviews.
- **User Features**: Once logged in, users can view books created by them, create new books, remove and update existing books. They can also view reviews received on their books and a list of reviews given by them.
- **State Management**: Utilizes SWR for client-side state management.
- **UI Components**: Built with Headless UI, Hero Icons, and Material Tailwind for a sleek user interface.
- **APIs**: Axios is used for API calls, fully integrated with the Laravel backend.
- **Notifications**: Utilizes React Toastify for responsive notifications.

## Technologies Used
- **Frontend**: **Next.js 13.4 with App Router**
- **State Management**: SWR
- **UI Library**: Headless UI, Hero Icons, Material Tailwind
- **HTTP Client**: Axios
- **Package Manager**: npm

## Code Highlights
- **SWR**: For efficient data fetching and state management.

## Future Enhancements
- Implement real-time notifications.
- Add more interactive UI components.

## How to Run
1. Clone the repository.
2. Run `npm install`.
3. Set up your `.env` file.
4. Run `npm run dev`.
