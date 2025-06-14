import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import LandingPage from './components/LandingPage';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Billing from './components/Billing';

function App() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      setCart(prev => prev.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
      ));
    } else {
      setCart(prev => [...prev, { ...item, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const checkout = () => {
    alert('Thank you for your purchase!');
    setCart([]);
  };

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
              Chocoloco
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="button">Menu</Typography>
              </Link>
              <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconButton>
                  <Badge badgeContent={cart.length} color="error">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} checkout={checkout} />} />
          <Route path="/billing" element={<Billing cartItems={cart} total={total} checkout={checkout} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
