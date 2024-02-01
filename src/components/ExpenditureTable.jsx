import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import exampleData from '../utils/getData';

const ExpenditureTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell align='right'>Amount ($)</TableCell>
                        <TableCell align='right'>Category</TableCell>
                        <TableCell align='right'>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exampleData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component='th' scope='row'>
                                {row.description}
                            </TableCell>
                            <TableCell align='right'>{row.amount.toFixed(2)}</TableCell>
                            <TableCell align='right'>{row.category}</TableCell>
                            <TableCell align='right'>{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ExpenditureTable;
