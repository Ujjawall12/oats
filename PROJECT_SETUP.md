# Complete Oats E-Commerce Project Setup Guide

This guide will help you set up both the frontend and backend for the Oats E-Commerce website.

## Project Structure

```
oats-f/
├── eCommerce-Backend/    # Node.js/Express backend
└── frontend/              # React/TypeScript frontend
```

## Quick Start

### 1. Backend Setup

```bash
cd eCommerce-Backend
npm install
cp .env.example .env
# Edit .env with your MongoDB connection string
npm start
```

Backend will run on: `http://localhost:3000`

### 2. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with backend URL (default: http://localhost:3000/api/v1)
npm run dev
```

Frontend will run on: `http://localhost:5173`

## Detailed Setup

### Prerequisites

- **Node.js** v18.12.0 or higher
- **MongoDB** (Local or MongoDB Atlas)
- **npm** or **yarn**

### Step 1: MongoDB Setup

#### Option A: MongoDB Atlas (Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (free tier M0 is sufficient)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Save this connection string for Step 2

#### Option B: Local MongoDB

1. Download MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install and start MongoDB service
3. Connection string will be: `mongodb://127.0.0.1:27017/Ecommerce-App`

### Step 2: Backend Configuration

1. Navigate to backend directory:
```bash
cd eCommerce-Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Edit `.env` file:
```env
PORT=3000
MODE=dev
MONGO_URL=your_mongodb_connection_string_here
BASE_URL=http://localhost:3000/
JWT_SECRET=your-random-secret-key-here
```

**Important:**
- Replace `your_mongodb_connection_string_here` with your MongoDB connection string from Step 1
- Generate a random string for `JWT_SECRET` (you can use: `openssl rand -base64 32`)

5. Start the backend:
```bash
npm start
```

6. Verify backend is running:
   - Check console for "DB Connected Successfully"
   - Open browser: `http://localhost:3000/api/v1/products`
   - Should see `{"page":1,"message":"success","products":[],"total":0}`

### Step 3: Frontend Configuration

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Edit `.env` file:
```env
VITE_API_URL=http://localhost:3000/api/v1
```

**Note:** If your backend runs on a different port, update the URL accordingly.

5. Start the frontend:
```bash
npm run dev
```

6. Verify frontend is running:
   - Open browser: `http://localhost:5173`
   - You should see the Oats E-Commerce homepage

## Testing the Integration

### 1. Test User Registration

1. Navigate to `http://localhost:5173/auth`
2. Click "Sign Up" or "Register"
3. Fill in:
   - Name: Your Name
   - Email: test@example.com
   - Password: password123
4. Submit the form
5. Check browser console for success message
6. Token should be stored in localStorage

### 2. Test Product Listing

1. Navigate to `http://localhost:5173/category/products`
2. Products should load from backend
3. If no products exist, you'll see an empty state

### 3. Test Admin Features

To create an admin user:

1. Register a user through the frontend
2. Connect to MongoDB (using MongoDB Compass or shell)
3. Update user role:
```javascript
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)
```

4. Login again with that user
5. Navigate to `/admin` to access admin panel

## API Testing with Postman

### Import Postman Collection

1. Open Postman
2. Create a new collection: "Oats E-Commerce"
3. Add environment variable:
   - Variable: `base_url`
   - Value: `http://localhost:3000/api/v1`

### Test Endpoints

**1. Register User:**
```
POST {{base_url}}/auth/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
```

**2. Login:**
```
POST {{base_url}}/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

**3. Get Products (No auth required):**
```
GET {{base_url}}/products
```

**4. Get Cart (Requires auth):**
```
GET {{base_url}}/carts
Authorization: Bearer <token-from-login>
```

## Common Issues & Solutions

### Backend Issues

**Problem: MongoDB connection failed**
- Solution: 
  - Verify MongoDB is running (if local)
  - Check connection string in `.env`
  - For Atlas: Check network access settings
  - Verify username/password are correct

**Problem: Port 3000 already in use**
- Solution: Change `PORT` in `.env` to a different port (e.g., 3001)
- Update frontend `.env` to match new port

**Problem: JWT token errors**
- Solution: 
  - Ensure `JWT_SECRET` is set in `.env`
  - Clear browser localStorage
  - Login again

### Frontend Issues

**Problem: API calls failing**
- Solution:
  - Verify backend is running
  - Check `VITE_API_URL` in `.env`
  - Check browser console for CORS errors
  - Verify backend CORS is enabled

**Problem: Products not loading**
- Solution:
  - Check backend is running
  - Verify API endpoint in Network tab
  - Check backend console for errors
  - Ensure MongoDB connection is working

**Problem: Authentication not working**
- Solution:
  - Check token is being stored in localStorage
  - Verify token format in Network tab headers
  - Check backend authentication middleware
  - Clear localStorage and try again

## Project Features

### Backend Features
- ✅ User authentication (JWT)
- ✅ Product management (CRUD)
- ✅ Shopping cart
- ✅ Order processing (Cash & Card)
- ✅ Stripe payment integration
- ✅ Reviews & ratings
- ✅ Wishlist
- ✅ Coupons & discounts
- ✅ File upload (images)
- ✅ Category & brand management

### Frontend Features
- ✅ Modern React UI with TypeScript
- ✅ Product browsing & search
- ✅ Shopping cart
- ✅ User authentication
- ✅ Checkout process
- ✅ Admin dashboard
- ✅ Responsive design
- ✅ Product details & reviews

## Next Steps

1. **Create Initial Data:**
   - Create categories (Rolled Oats, Steel Cut, etc.)
   - Create brands
   - Add products with images

2. **Configure Stripe (Optional):**
   - Get Stripe API keys
   - Update backend `.env` with Stripe keys
   - Update frontend `.env` with Stripe publishable key

3. **Customize:**
   - Update product categories to match your needs
   - Customize branding and colors
   - Add more product fields if needed

## Production Deployment

### Backend Deployment

1. Set `MODE=production` in `.env`
2. Use strong `JWT_SECRET`
3. Configure production MongoDB
4. Deploy to services like:
   - Heroku
   - Render
   - Railway
   - AWS EC2

### Frontend Deployment

1. Update `VITE_API_URL` to production backend URL
2. Build: `npm run build`
3. Deploy `dist/` folder to:
   - Vercel
   - Netlify
   - AWS S3
   - GitHub Pages

## Support

For detailed information:
- Backend: See `eCommerce-Backend/SETUP.md`
- Frontend: See `frontend/SETUP.md`
- Backend README: See `eCommerce-Backend/README.md`

## Environment Variables Summary

### Backend (.env)
```
PORT=3000
MODE=dev
MONGO_URL=mongodb://...
BASE_URL=http://localhost:3000/
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000/api/v1
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

---

**You're all set!** Start by running both servers and testing the integration. Happy coding! 🎉
