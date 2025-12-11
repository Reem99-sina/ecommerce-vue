
E-Commerce Vue 3 Project
Project Overview

This is a modern e-commerce web application built using Vue 3, Vite, and Vue Router. The project implements dynamic routing, lazy-loaded views, and a responsive interface to simulate an online shopping experience.

Users can browse products, view individual product details, manage their cart, and proceed to checkout.

Features

Homepage (/): Landing page with featured products or categories.

Shop Page (/shop): Displays all products with filtering and sorting options.

Product Details (/product/:id): Shows detailed information about a selected product using dynamic routing.

Shopping Cart (/cart): Users can add, remove, and update product quantities.

Checkout (/checkout): Collects user information and allows proceeding to payment.

Technical Highlights

Built with Vue 3 Composition API for modular and reactive code.

Uses Vite for fast development builds and optimized production builds.

Vue Router configured for:

Lazy-loading route components for improved performance.

Dynamic routing for product pages (/product/:id).

State management with Pinia / Vuex (if used) for cart and checkout data.

Responsive design using Tailwind CSS.

Installation & Setup
# Clone repository
git clone <your-repo-url>

# Navigate to project folder
cd e-commerce-vue

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build