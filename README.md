# Next.js Product Viewer with Shopping Cart and Authentication

## Overview
This Next.js-based product viewer application has been further enhanced with user authentication and authorization features. It now allows users to log in using their credentials to access the application securely. The project showcases advanced web development practices, including JWT-based authentication, responsive design, efficient API integration, and user-friendly interfaces.

## Features
- **Dynamic Product Details**: Displays detailed product data, including title, description, price, category, and images, sourced from the "Product" API.
- **Shopping Cart**: Allows users to add items to the cart, view their selections, and see the total amount dynamically.
  - Modal integration to add items to the cart directly from the product page.
  - Cart page to manage and display selected items with a total cost summary.
- **User Authentication**:
  - Login functionality with username and password.
  - JWT token acquisition for secure session management.
  - Error handling for failed login attempts.
  - Logout functionality to end the session.
- **Home Page**: Features the organization’s logo, product images, and an introduction/mission statement.
- **About Page**: Provides details about the organization and its product offerings.
- **Responsive Design**: Ensures a seamless experience across devices of various sizes.

## Tools and Technologies
- **React**: For building dynamic and reusable UI components.
- **Next.js**: For server-side rendering, routing, and performance optimization.
- **Fetch API**: For efficient and seamless API communication.
- **CSS**: For responsive and visually appealing styling.
- **JSON Web Tokens (JWT)**: For secure authentication.

## Getting Started
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd nextjs-product-viewer
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
#### Development Mode
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

#### Production Mode
1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

### Testing Credentials
- **Username:** Tester
- **Password:** Seneca

## Application Structure
- **`pages/index.js`**: Implements the Home page.
- **`pages/about.js`**: Implements the About page.
- **`pages/product/[id].js`**: Implements the dynamic route for individual product details.
- **`pages/cart.js`**: Implements the shopping cart page, displaying selected items and their total cost.
- **`pages/login.js`**: Implements the login page, handling user authentication.
- **`components/ProductDetails.js`**: Component for rendering product details dynamically.
- **`components/Cart.js`**: Component for managing and displaying cart items.
- **`components/LoginForm.js`**: Component for the login interface.
- **`styles/`**: Contains CSS files for styling the application.

## Screenshots
Showcase the application with visuals (replace placeholders with actual screenshots):

![Screenshot (134)](https://github.com/user-attachments/assets/ae2a4eb2-d997-4884-afe4-8ae6666e8440)
*Caption: Home page featuring all the product images*

![Screenshot (132)](https://github.com/user-attachments/assets/acb27d4f-a080-4e46-88a0-f29a9b738b42)
*Caption: Main featuring Welcome message*

![Screenshot (133)](https://github.com/user-attachments/assets/fb523e96-9020-4a94-ad53-e21bb466aa35)
*Caption: About page featuring the logo and introduction.*

![Screenshot (136)](https://github.com/user-attachments/assets/487f9abd-df11-4476-b0c0-e29c6b27471a)
*Caption: Login page for user authentication.*

![Screenshot (137)](https://github.com/user-attachments/assets/9fdac3fe-72a8-4bb7-b78e-79ff4abff394)
*Caption: Products page featuring all the products*

![Screenshot (138)](https://github.com/user-attachments/assets/37542858-09cd-4e5c-98be-e1c909deadc2)
*Caption: Detailed product view with all key information.*

![Screenshot (140)](https://github.com/user-attachments/assets/f9a0c0dc-64a4-4f09-a0c8-f94429e5b9bc)
*Caption: Shopping cart page displaying selected items and total cost.*

## Highlights
This enhanced version of the application demonstrates:
- Secure user authentication and session management using JWT.
- Modular, maintainable components for product details, cart management, and authentication.
- Efficient server-side rendering and routing with Next.js for optimized performance.
- Real-time API data integration to dynamically display product and cart information.
- A responsive and visually appealing interface that provides an intuitive shopping experience.

---

**Developed by Adnan Mohammed**
