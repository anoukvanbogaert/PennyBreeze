import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50', // Soft Green
        },
        secondary: {
            main: '#03A9F4', // Sky Blue
        },
        error: {
            main: '#FF7043', // Warm Coral
        },
        background: {
            default: '#FAFAFA', // Off-White
        },
        text: {
            primary: '#37474F', // Slate Gray
        },
    },
    typography: {
        fontFamily: '"Pixelify Sans"', // Example fun Google font
    },
});

export default theme;
