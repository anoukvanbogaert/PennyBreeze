import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
const Navbar = () => {
    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography
                    variant='h6'
                    component='div'
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'Pixelify Sans',
                        color: 'white',
                        fontSize: '3rem',
                    }}
                >
                    PennyBreeze
                </Typography>
                {/* Add more navbar items here if needed */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
