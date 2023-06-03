
# MERN STACK ECOMMERCE WEBSITE
The e-commerce website harnesses the power of the MERN stack to deliver a seamless online shopping experience. Leveraging MongoDB for efficient data storage, Express.js for server-side routing and API integration, React.js for dynamic and responsive user interfaces, and Node.js for high-performance backend operations, this platform offers a robust and scalable solution. With this technology stack, efficient product information management, smooth user interactions, real-time updates, and secure transactions are ensured. Explore the website and experience the power of MERN as you browse, search, and add products to your cart effortlessly, all while enjoying a hassle-free online shopping experience.



## Demo

Website Link: https://eshopping-ecommerce.onrender.com

## Features

- User registration, login, and reset password using JWT Token and NodeMailer
- Product catalog with categories and filters
- Product search functionality with debounce
- Product details page with images
- Shopping cart functionality to add and manage items
- Order tracking and history for customers
- Customer reviews and ratings for products
- Wishlist functionality for users to save desired items
- Admin panel for managing products, orders, and customers
- Sales analytics and reporting for administrators
- Responsive web design
## Setup

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/DucLuan22/MERN-Ecommerce.git
   ```
2. Install NPM packages for both client and backend folders
   ```sh
   npm install
   ```
3. Create a **config.env** file
4. Enter the following variables inside of the **config.env** file:
   ```js
   REACT_APP_API_URL: <URL OF THE BACK-END>
   PORT: <BACK-END PORT>
   MONGO_URI: <MONGOLDB CONNECTION>
   EMAIL_PASSWORD: <EMAIL 3RD PARTY APP PASSOWRD>
   EMAIL_FROM: <THE GMAIL ACCOUNT USED TO SEND EMAIL>
   JWT_EXPIRE: <JWTOKEN EXPIRATION TIMEOUT>
   JWT_SECRET: <JWTOKEN SECRET KEY>
   HOST_URL: <URL OF THE FRONT-END>
   ```
