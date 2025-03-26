# Amazon Clone

This is a **frontend-only** Amazon Clone built with React and styled using CSS. The project provides an e-commerce shopping experience, including features like product listing, a shopping cart, checkout, and user authentication (removed in this version).

## Features

- **Home Page**: Displays a variety of products with images, prices, and ratings.
- **Header**: Navigation bar with a search bar, cart, and login button.
- **Orders Page**: Displays Ordered products details.
- **Shopping Cart**: Allows users to view added products and remove them.
- **Checkout Page**: Shows a summary of the cart with a subtotal.
- **Routing**: Handled using React Router.

## Tech Stack

- **React**: Component-based UI.
- **React Router**: Enables navigation between pages.
- **CSS**: Custom styling for a visually appealing UI.

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Mesay-AK/amazon-clone.git
   cd amazon-clone
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the Application**
   ```sh
   npm start
   ```

## Folder Structure

```
amazon-clone/
│-- public/         # Static assets
│-- src/
│   ├── components/ # Reusable UI components
│   ├── pages/      # Different pages (Home, Checkout, etc.)
│   ├── context/    # State management (if applicable)
│   ├── styles/     # CSS files
│   ├── App.js      # Main component
│   ├── index.js    # Entry point
│-- package.json
│-- README.md
```

## Future Improvements

- Add a backend for user authentication and order management.
- Implement a better product filtering and sorting system.
- Improve mobile responsiveness.

## License

This project is for educational purposes only and is not affiliated with Amazon.

