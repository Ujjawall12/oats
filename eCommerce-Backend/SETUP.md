# Oats E-Commerce Backend Setup Guide

## Prerequisites

- Node.js (v18.12.0 or higher)
- MongoDB (Local installation or MongoDB Atlas account)
- npm or yarn package manager

## Step 1: Install Dependencies

```bash
cd eCommerce-Backend
npm install
```

## Step 2: Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Open `.env` and configure the following:

### MongoDB Configuration

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier available)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Update `MONGO_URL` in `.env`:
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/Ecommerce-App
```

**Option B: Local MongoDB**
1. Install MongoDB locally
2. Start MongoDB service
3. Update `MONGO_URL` in `.env`:
```
MONGO_URL=mongodb://127.0.0.1:27017/Ecommerce-App
```

### JWT Secret
Generate a strong random string for JWT_SECRET:
```bash
# On Linux/Mac
openssl rand -base64 32

# Or use any random string generator
```
Update `JWT_SECRET` in `.env` with your generated secret.

### Stripe Configuration (Optional - for payments)
1. Sign up at [Stripe](https://stripe.com)
2. Get your test API keys from the dashboard
3. Update `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` in `.env`

## Step 3: Run the Server

```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in `.env`)

## Step 4: Verify Installation

1. Check the console for "DB Connected Successfully"
2. Test the API endpoint: `http://localhost:3000/api/v1/products`
3. You should see an empty array `[]` or products if any exist

## API Base URL

All API endpoints are prefixed with `/api/v1`

Example: `http://localhost:3000/api/v1/products`

## Testing with Postman

### Import Postman Collection

1. Open Postman
2. Create a new collection named "Oats E-Commerce API"
3. Set collection variable:
   - `base_url`: `http://localhost:3000/api/v1`

### Common Endpoints to Test

**Authentication:**
- `POST {{base_url}}/auth/register` - Register new user
- `POST {{base_url}}/auth/login` - Login user

**Products:**
- `GET {{base_url}}/products` - Get all products
- `GET {{base_url}}/products/:id` - Get specific product
- `POST {{base_url}}/products` - Create product (requires admin token)

**Categories:**
- `GET {{base_url}}/categories` - Get all categories
- `POST {{base_url}}/categories` - Create category (requires admin token)

**Cart:**
- `GET {{base_url}}/carts` - Get user cart (requires token)
- `POST {{base_url}}/carts` - Add to cart (requires token)

### Setting Up Authentication in Postman

1. Register a user:
   ```
   POST {{base_url}}/auth/register
   Body (JSON):
   {
     "name": "John Doe",
     "email": "john@example.com",
     "password": "password123"
   }
   ```

2. Login to get token:
   ```
   POST {{base_url}}/auth/login
   Body (JSON):
   {
     "email": "john@example.com",
     "password": "password123"
   }
   ```

3. Copy the `token` from response

4. For protected routes, add header:
   - Key: `Authorization`
   - Value: `Bearer <your-token>`

   OR use the old format:
   - Key: `token`
   - Value: `<your-token>`

## Creating Admin User

To create an admin user, you can either:

1. **Using MongoDB Compass or MongoDB Shell:**
   ```javascript
   use Ecommerce-App
   db.users.updateOne(
     { email: "admin@example.com" },
     { $set: { role: "admin" } }
   )
   ```

2. **Using the API after registration:**
   - Register a user normally
   - Manually update the role in the database to "admin"

## File Uploads

Product images are stored in:
- `uploads/products/` - Product images
- `uploads/category/` - Category images

Make sure these directories exist or they will be created automatically.

## Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB is running (if local)
- Check MongoDB Atlas network access (if using Atlas)
- Verify connection string in `.env`
- Check firewall settings

### Port Already in Use
- Change `PORT` in `.env` to a different port
- Or stop the process using port 3000

### JWT Token Issues
- Ensure `JWT_SECRET` is set in `.env`
- Clear browser localStorage and login again
- Check token expiration

### File Upload Issues
- Ensure `uploads/` directory exists
- Check file permissions
- Verify multer configuration

## Production Deployment

1. Set `MODE=production` in `.env`
2. Use strong `JWT_SECRET`
3. Use production MongoDB connection
4. Configure proper CORS settings
5. Set up proper error logging
6. Use environment variables for all secrets
7. Enable HTTPS

## Support

For issues or questions, check the README.md or contact the development team.
