import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50', // Navy blue
      light: '#34495e',
      dark: '#212f3c',
    },
    secondary: {
      main: '#f1c40f', // Yellow
      light: '#f39c12',
      dark: '#e67e22',
    },
    background: {
      default: '#ecf0f1', // Light blue
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#7f8c8d',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      color: '#2c3e50',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#2c3e50',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#2c3e50',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#2c3e50',
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: '1rem',
      color: '#7f8c8d',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 8,
          '&.MuiButton-containedPrimary': {
            backgroundColor: '#2c3e50',
            '&:hover': {
              backgroundColor: '#34495e',
            },
          },
          '&.MuiButton-containedSecondary': {
            backgroundColor: '#f1c40f',
            '&:hover': {
              backgroundColor: '#f39c12',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(44, 62, 80, 0.1)',
          transition: 'transform 0.3s ease',
        },
      },
    },
  },
});

export default theme;
