# Security Guidelines

## Environment Variables

This project uses environment variables to store sensitive information. **NEVER commit `.env` files to the repository.**

### Setup Instructions

1. **Backend Setup:**
   ```bash
   cd eCommerce-Backend
   cp .env.example .env
   # Edit .env with your actual values
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   cp .env.example .env
   # Edit .env with your actual values
   ```

### What's Protected

The following files are **ignored by Git** and will never be committed:
- `.env`
- `.env.local`
- `.env.development`
- `.env.production`
- `*.env` (any file ending in .env)

### What's Safe to Commit

- `.env.example` files are **safe** and **should be committed**
- These contain only placeholder values and serve as templates

### Required Environment Variables

#### Backend (.env)
- `MONGO_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `STRIPE_SECRET_KEY` - Stripe API secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret
- `PORT` - Server port (default: 3000)
- `BASE_URL` - Base URL for static files

#### Frontend (.env)
- `VITE_API_URL` - Backend API URL
- `VITE_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key

### If You Accidentally Commit Secrets

If you accidentally commit a `.env` file with secrets:

1. **Immediately rotate/change all exposed secrets:**
   - Change MongoDB password
   - Generate new JWT_SECRET
   - Regenerate Stripe keys

2. **Remove from Git history:**
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env" \
     --prune-empty --tag-name-filter cat -- --all
   ```

3. **Force push (coordinate with team):**
   ```bash
   git push origin --force --all
   ```

### Best Practices

1. ✅ Always use `.env.example` as a template
2. ✅ Never commit actual `.env` files
3. ✅ Rotate secrets if accidentally exposed
4. ✅ Use different secrets for development and production
5. ✅ Review `.gitignore` before committing

### Verification

To verify no secrets are in the repository:
```bash
# Check for common secret patterns
git grep -i "sk_test_\|sk_live_\|whsec_\|mongodb+srv://.*:.*@"
```

If this returns results, investigate and remove any actual secrets.
