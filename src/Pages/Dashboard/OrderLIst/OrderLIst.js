import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import ButtonGroupCustom from './ButtonGroupCustom';

export default function OrderList() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    // const [dataObserver,setDataObserver]=useState(false)

    useEffect(() => {
        fetch('https://jerins-parlour-server-hazel.vercel.app/appointment')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                // console.log(data)
            });
    }, [user.email])
    return (
        <div>
            <h2>Total Order: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Service Name</TableCell>

                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.userName
}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">
                                   
                                    <ButtonGroupCustom action={row.action} 
                                        id={row._id}
                                        // dataObserver={dataObserver}
                                        // setDataObserver={setDataObserver}
                                    />
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
