import React from 'react';
import { 
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider
} from '@mui/material';

const Billing = ({ cartItems, total, checkout }) => {
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
        Billing Information
      </Typography>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 3, color: '#f1c40f' }}>Shipping Address</Typography>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Address Line 1"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Address Line 2"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="City"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="State/Province"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Postal Code"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 3, color: '#f1c40f' }}>Order Summary</Typography>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                {cartItems.map((item, index) => (
                  <Box key={item.id} sx={{ mb: 2 }}>
                    <Typography sx={{ color: '#f1c40f' }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ color: '#f1c40f' }}>
                      {item.quantity} × ${item.price.toFixed(2)}
                    </Typography>
                  </Box>
                ))}
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" sx={{ color: '#f1c40f' }}>Subtotal</Typography>
                  <Typography variant="h6" sx={{ color: '#f1c40f' }}>${total.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">Shipping</Typography>
                  <Typography variant="h6">Free</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h5">Total</Typography>
                  <Typography variant="h5">${total.toFixed(2)}</Typography>
                </Box>
              </CardContent>
            </Card>
            
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={checkout}
              sx={{ mt: 2 }}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Billing;
