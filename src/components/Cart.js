import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton,
  Button,
  Box 
} from '@mui/material';
import { Remove, Delete } from '@mui/icons-material';

const Cart = ({ cartItems, removeFromCart, checkout }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <Paper sx={{ 
      p: 3, 
      mt: 4,
      background: 'navy'
    }}>
      <Typography variant="h4" sx={{ 
        mb: 3,
        color: '#f1c40f'
      }}>
        Your Cart
      </Typography>
      
      <List>
        {cartItems.map(item => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`${item.quantity} × ${item.price.toFixed(2)}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                <Remove />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ color: '#f1c40f' }}>
          Total: ${total.toFixed(2)}
        </Typography>
        <Link to="/billing" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button
            variant="contained"
            color="secondary"
            disabled={cartItems.length === 0}
          >
            Proceed to Billing
          </Button>
        </Link>
      </Box>
    </Paper>
  );
};

export default Cart;
