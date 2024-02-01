import React from 'react';
import ExpenditureTable from '../components/ExpenditureTable';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box>
            <h1>Counting pennies made simple</h1>
            <ExpenditureTable />
        </Box>
    );
};

export default Home;
