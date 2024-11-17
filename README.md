# ShoppyGlobe - E-Commerce React Application

ShoppyGlobe is a modern e-commerce web application built with React, Redux, and TailwindCSS. It provides a seamless shopping experience with features like product browsing, cart management, and checkout functionality.

## Features

- **Product Browsing**: View a list of products with search functionality
- **Product Details**: Detailed view of individual products
- **Shopping Cart**: Add/remove items and update quantities
- **Checkout Process**: User-friendly checkout form with order summary
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Technologies Used

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Routing**: React Router 6
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **API**: DummyJSON for product data

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shoppy-globe.git
```

2. Navigate to the frontend directory:
```bash
cd shoppy-app/frontend
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

To create a production build:
```bash
npm run build
```

## Project Structure

```
shoppy_app/frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Checkout.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductItem.jsx
│   │   └── ProductList.jsx
│   ├── hooks/
│   │   └── useProducts.js
│   ├── store/
│   │   ├── cartSlice.jsx
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js
