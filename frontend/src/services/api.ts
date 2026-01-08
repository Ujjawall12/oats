const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

export const api = {
  async request(endpoint: string, options: RequestInit = {}) {
    const token = localStorage.getItem('token');
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'An error occurred' }));
      throw new Error(error.error || error.message || 'Request failed');
    }

    return response.json();
  },

  // Products
  getProducts(params?: { 
    category?: string; 
    featured?: boolean; 
    sort?: string;
    page?: number;
    keyword?: string;
    isNew?: boolean;
    organic?: boolean;
    glutenFree?: boolean;
  }) {
    const query = new URLSearchParams();
    if (params?.category) query.append('category', params.category);
    if (params?.featured) query.append('featured', 'true');
    if (params?.sort) query.append('sort', params.sort);
    if (params?.page) query.append('page', params.page.toString());
    if (params?.keyword) query.append('keyword', params.keyword);
    if (params?.isNew) query.append('isNew', 'true');
    if (params?.organic) query.append('organic', 'true');
    if (params?.glutenFree) query.append('glutenFree', 'true');
    
    return this.request(`/products?${query.toString()}`);
  },

  getProduct(id: string) {
    return this.request(`/products/${id}`);
  },

  // Auth
  register(data: { email: string; password: string; name: string }) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  login(data: { email: string; password: string }) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Categories
  getCategories() {
    return this.request('/categories');
  },

  getCategory(id: string) {
    return this.request(`/categories/${id}`);
  },

  // Subcategories
  getSubcategories(categoryId?: string) {
    const query = categoryId ? `?category=${categoryId}` : '';
    return this.request(`/subcategories${query}`);
  },

  // Brands
  getBrands() {
    return this.request('/brands');
  },

  // Cart
  getCart() {
    return this.request('/carts');
  },

  addToCart(data: { productId: string; quantity?: number }) {
    return this.request('/carts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateCartItem(itemId: string, quantity: number) {
    return this.request(`/carts/${itemId}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
  },

  removeFromCart(itemId: string) {
    return this.request(`/carts/${itemId}`, {
      method: 'DELETE',
    });
  },

  applyCoupon(code: string) {
    return this.request('/carts/apply-coupon', {
      method: 'POST',
      body: JSON.stringify({ code }),
    });
  },

  // Orders
  createCashOrder(cartId: string, shippingAddress: any) {
    return this.request(`/orders/${cartId}`, {
      method: 'POST',
      body: JSON.stringify({ shippingAddress }),
    });
  },

  createCheckoutSession(cartId: string, shippingAddress: any) {
    return this.request(`/orders/checkOut/${cartId}`, {
      method: 'POST',
      body: JSON.stringify({ shippingAddress }),
    });
  },

  getMyOrders() {
    return this.request('/orders');
  },

  getAllOrders() {
    return this.request('/orders/all');
  },

  // Reviews
  getReviews(productId?: string) {
    const query = productId ? `?productId=${productId}` : '';
    return this.request(`/review${query}`);
  },

  createReview(data: { productId: string; text: string; rate: number }) {
    return this.request('/review', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateReview(reviewId: string, data: { text?: string; rate?: number }) {
    return this.request(`/review/${reviewId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  deleteReview(reviewId: string) {
    return this.request(`/review/${reviewId}`, {
      method: 'DELETE',
    });
  },

  // Wishlist
  getWishlist() {
    return this.request('/wishlist');
  },

  addToWishlist(productId: string) {
    return this.request('/wishlist', {
      method: 'PATCH',
      body: JSON.stringify({ productId }),
    });
  },

  removeFromWishlist(productId: string) {
    return this.request('/wishlist', {
      method: 'DELETE',
      body: JSON.stringify({ productId }),
    });
  },

  // Address
  getAddresses() {
    return this.request('/address');
  },

  addAddress(data: { city: string; street: string; phone: string }) {
    return this.request('/address', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  deleteAddress(addressId: string) {
    return this.request('/address', {
      method: 'DELETE',
      body: JSON.stringify({ addressId }),
    });
  },

  // Coupons
  getCoupons() {
    return this.request('/coupons');
  },

  getCoupon(id: string) {
    return this.request(`/coupons/${id}`);
  },

  // Admin - Products
  createProduct(data: FormData) {
    const token = localStorage.getItem('token');
    return fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: data,
    }).then(res => {
      if (!res.ok) {
        return res.json().then(err => { throw new Error(err.error || err.message || 'Request failed'); });
      }
      return res.json();
    });
  },

  updateProduct(id: string, data: any) {
    return this.request(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  deleteProduct(id: string) {
    return this.request(`/products/${id}`, {
      method: 'DELETE',
    });
  },

  // Admin - Categories
  createCategory(data: FormData) {
    const token = localStorage.getItem('token');
    return fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: data,
    }).then(res => {
      if (!res.ok) {
        return res.json().then(err => { throw new Error(err.error || err.message || 'Request failed'); });
      }
      return res.json();
    });
  },

  // Admin - Brands
  createBrand(data: FormData) {
    const token = localStorage.getItem('token');
    return fetch(`${API_URL}/brands`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: data,
    }).then(res => {
      if (!res.ok) {
        return res.json().then(err => { throw new Error(err.error || err.message || 'Request failed'); });
      }
      return res.json();
    });
  },
};

