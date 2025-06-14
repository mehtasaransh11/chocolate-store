import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  IconButton,
  Box 
} from '@mui/material';
import { ShoppingCart, Remove, Add } from '@mui/icons-material';

const chocolates = [
  {
    id: 1,
    name: 'Belgian Truffles',
    price: 49.99,
    description: 'Luxurious Belgian chocolate truffles with a smooth, creamy center',
    image: 'https://via.placeholder.com/300x200?text=Chocolate+Truffles'
  },
  {
    id: 2,
    name: 'Dark Chocolate Assortment',
    price: 39.99,
    description: 'Premium dark chocolate collection with various flavors',
    image: 'https://via.placeholder.com/300x200?text=Dark+Chocolate'
  },
  {
    id: 3,
    name: 'Milk Chocolate Bars',
    price: 29.99,
    description: 'Classic milk chocolate bars with rich, creamy texture',
    image: 'https://via.placeholder.com/300x200?text=Milk+Chocolate'
  },
  {
    id: 4,
    name: 'White Chocolate Delights',
    price: 34.99,
    description: 'Creamy white chocolate with hints of vanilla and caramel',
    image: 'https://via.placeholder.com/300x200?text=White+Chocolate'
  },
  {
    id: 5,
    name: 'Sea Salt Caramels',
    price: 44.99,
    description: 'Rich dark chocolate with sea salt and buttery caramel',
    image: 'https://via.placeholder.com/300x200?text=Sea+Salt+Caramels'
  },
  {
    id: 6,
    name: 'Raspberry Truffles',
    price: 39.99,
    description: 'Belgian dark chocolate with raspberry ganache center',
    image: 'https://via.placeholder.com/300x200?text=Raspberry+Truffles'
  },
  {
    id: 7,
    name: 'Almond Pralines',
    price: 32.99,
    description: 'Crispy almond pieces in smooth milk chocolate',
    image: 'https://via.placeholder.com/300x200?text=Almond+Pralines'
  },
  {
    id: 8,
    name: 'Orange & Almond',
    price: 37.99,
    description: 'Dark chocolate with orange peel and almond pieces',
    image: 'https://via.placeholder.com/300x200?text=Orange+Almond'
  },
  {
    id: 9,
    name: 'Hazelnut Crunch',
    price: 35.99,
    description: 'Milk chocolate with hazelnut praline and crispy wafers',
    image: 'https://via.placeholder.com/300x200?text=Hazelnut+Crunch'
  },
  {
    id: 10,
    name: 'Coconut Delights',
    price: 29.99,
    description: 'Dark chocolate with shredded coconut and caramel',
    image: 'https://via.placeholder.com/300x200?text=Coconut+Delights'
  },
  {
    id: 11,
    name: 'Lavender & Honey',
    price: 42.99,
    description: 'Dark chocolate infused with lavender and honey',
    image: 'https://via.placeholder.com/300x200?text=Lavender+Honey'
  },
  {
    id: 12,
    name: 'Chili & Lime',
    price: 36.99,
    description: 'Dark chocolate with a spicy kick of chili and lime',
    image: 'https://via.placeholder.com/300x200?text=Chili+Lime'
  },
  {
    id: 13,
    name: 'Coffee & Walnut',
    price: 38.99,
    description: 'Dark chocolate with coffee and walnut pieces',
    image: 'https://via.placeholder.com/300x200?text=Coffee+Walnut'
  },
  {
    id: 14,
    name: 'Pistachio Praline',
    price: 41.99,
    description: 'Milk chocolate with pistachio praline center',
    image: 'https://via.placeholder.com/300x200?text=Pistachio+Praline'
  },
  {
    id: 15,
    name: 'Lemon & White Chocolate',
    price: 33.99,
    description: 'White chocolate with zesty lemon filling',
    image: 'https://via.placeholder.com/300x200?text=Lemon+White'
  }
];

const Menu = ({ addToCart }) => {
  const [cartItems, setCartItems] = useState({});

  const handleQuantityChange = (id, type) => {
    setCartItems(prev => {
      const newItems = { ...prev };
      if (!newItems[id]) {
        newItems[id] = 1;
      } else {
        newItems[id] = type === 'add' ? newItems[id] + 1 : Math.max(0, newItems[id] - 1);
      }
      return newItems;
    });
  };

  return (
    <Box sx={{ 
      p: 4,
      background: '#2c3e50'
    }}>
      <Typography variant="h3" sx={{ 
        mb: 4, 
        textAlign: 'center',
        color: '#f1c40f'
      }}>
        Our Collection
      </Typography>
      
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {chocolates.map(chocolate => (
          <Grid item xs={12} sm={6} md={4} key={chocolate.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card 
                sx={{ 
                  height: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 2,
                  bgcolor: '#ecf0f1',
                  width: '100%',
                  margin: '0 auto',
                  maxWidth: '300px'
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ 
                    mb: 2, 
                    position: 'relative', 
                    height: '200px', 
                    overflow: 'hidden',
                    bgcolor: '#2c3e50'
                  }}>
                    <img
                      src={chocolate.image}
                      alt={chocolate.name}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                    />
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    sx={{ 
                      mb: 1, 
                      color: '#2c3e50',
                      height: '40px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {chocolate.name}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2, 
                      color: '#2c3e50',
                      height: '60px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {chocolate.description}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#f1c40f', 
                      mb: 2,
                      fontSize: '1.2rem'
                    }}
                  >
                    ${chocolate.price.toFixed(2)}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton onClick={() => handleQuantityChange(chocolate.id, 'remove')}>
                        <Remove />
                      </IconButton>
                      <Typography variant="body1" sx={{ color: '#2c3e50' }}>
                        {cartItems[chocolate.id] || 0}
                      </Typography>
                      <IconButton onClick={() => handleQuantityChange(chocolate.id, 'add')}>
                        <Add />
                      </IconButton>
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => addToCart(chocolate, 1)}
                      sx={{ bgcolor: '#2c3e50', color: '#ffffff' }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
