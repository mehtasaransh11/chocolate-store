import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Container, Button, Link } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/menu');
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: '#2c3e50', 
      display: 'flex', 
      alignItems: 'center'
    }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #f1c40f 30%, #f39c12 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}
          >
            Chocoloco
          </Typography>
          
          <Typography
            variant="h5"
            component="h2"
            sx={{
              mb: 6,
              color: '#f1c40f',
              textAlign: 'center'
            }}
          >
            Welcome to Jash Mehta's Magical Chocolate world.
            Experience the wonderful chocolates handcrafted by our MasterChef Jash
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShopNow}
              >
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  startIcon={<ShoppingCart />}
                  sx={{
                    px: 4,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Shop Now
                </Button>
              </motion.div>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LandingPage;
