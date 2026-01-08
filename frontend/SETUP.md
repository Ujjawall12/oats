# Oats E-Commerce Frontend Setup Guide

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Backend server running (see backend SETUP.md)

## Step 1: Install Dependencies

```bash
cd frontend
npm install
```

## Step 2: Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Open `.env` and configure:

```env
# Backend API URL - Update if your backend runs on different port
VITE_API_URL=http://localhost:3000/api/v1

# Stripe Publishable Key (if using Stripe payments)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

**Important:** 
- If your backend runs on a different port, update `VITE_API_URL`
- The default backend port is `3000`
- For production, update to your production backend URL

## Step 3: Start Development Server

```bash
npm run dev
```

The frontend will start on `http://localhost:5173` (or next available port)

## Step 4: Verify Connection

1. Open browser to `http://localhost:5173`
2. Open browser DevTools (F12) → Network tab
3. Navigate to products page
4. Check if API calls are successful (should see requests to `localhost:3000`)

## Integration with Backend

### Authentication Flow

1. User registers/logs in through `/auth` page
2. Token is stored in `localStorage` as `token`
3. All API requests include token in `Authorization: Bearer <token>` header

### API Service

The frontend uses `src/services/api.ts` for all backend communication.

Key methods:
- `api.login()` - User login
- `api.register()` - User registration
- `api.getProducts()` - Fetch products
- `api.getCart()` - Get user cart
- `api.addToCart()` - Add product to cart

### Cart Management

Cart state is managed in `src/contexts/CartContext.tsx` and syncs with backend via API.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Testing

1. **Test Authentication:**
   - Navigate to `/auth`
   - Register a new user
   - Login with credentials

2. **Test Products:**
   - Navigate to `/category/products`
   - View product listings
   - Click on a product to see details

3. **Test Cart:**
   - Add products to cart
   - View cart
   - Update quantities
   - Remove items

4. **Test Checkout:**
   - Add items to cart
   - Navigate to `/checkout`
   - Complete order (cash or card)

## Troubleshooting

### API Connection Errors

**Error: "Failed to fetch"**
- Ensure backend server is running
- Check `VITE_API_URL` in `.env` matches backend URL
- Verify CORS is enabled on backend
- Check browser console for detailed errors

**Error: "401 Unauthorized"**
- User token may be expired
- Clear localStorage and login again
- Check if token is being sent in headers

**Error: "404 Not Found"**
- Verify API endpoint URLs in `api.ts`
- Check backend routes match frontend expectations
- Ensure backend is running on correct port

### Build Issues

**Error during build:**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be v18+)
- Clear build cache: `rm -rf dist`

### Port Conflicts

If port 5173 is in use:
- Vite will automatically use next available port
- Check terminal output for actual port
- Or specify port: `npm run dev -- --port 3001`

## Environment Variables

All environment variables must be prefixed with `VITE_` to be accessible in the frontend code.

Example:
```env
VITE_API_URL=http://localhost:3000/api/v1
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Production Deployment

1. Update `.env` with production backend URL
2. Build the project: `npm run build`
3. Deploy `dist/` folder to your hosting service
4. Configure your hosting service to serve the built files

### Recommended Hosting Services

- **Vercel** - Easy deployment with automatic builds
- **Netlify** - Great for static sites
- **AWS S3 + CloudFront** - Scalable solution
- **GitHub Pages** - Free for public repos

## Support

For issues or questions:
1. Check backend is running and accessible
2. Verify environment variables are set correctly
3. Check browser console for errors
4. Review network tab for API call details
