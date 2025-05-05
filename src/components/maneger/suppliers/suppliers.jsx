import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSuppliersThunk } from "../../../redux/supplierSlice/getSuppliersThunk"
import { TableRows } from "@mui/icons-material";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as React from 'react';

export const Supplier = (props) => {
    const [open, setOpen] = useState(false);
    const {supplier} = props;
  
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row"> </TableCell>
                <TableCell align="right">{supplier.name}</TableCell>
                <TableCell align="right">{supplier.companyName}</TableCell>
                <TableCell align="right">{supplier.phone}</TableCell>
                <TableCell align="right">{supplier.email}</TableCell>
            </TableRow>
            {/* פתיחת הטבלה */}
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div"> </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className='titleSub' align="right">stock</TableCell>
                                        <TableCell className='titleSub' align="right">price</TableCell>
                                        <TableCell className='titleSub' align="right">idPurveyor</TableCell>
                                        <TableCell className='titleSub' align="right">size</TableCell>
                                        <TableCell className='titleSub' align="right">dscribe</TableCell>
                                        <TableCell className='titleSub' align="right">productName</TableCell>
                                        <TableCell className='titleSub' align="right">id</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {supplier.products.map((supplier) => (
                                        <TableRow key={supplier.date}>
                                            <TableCell align="right"component="th" scope="row">{supplier.stock}</TableCell>
                                            {/* <TableCell align="right">{supplier.price}</TableCell> */}
                                            <TableCell align="right">{supplier.price}</TableCell>
                                            <TableCell align="right">{supplier.idPurveyor}</TableCell>
                                            <TableCell align="right">{supplier.size}</TableCell>
                                            <TableCell align="right">{supplier.dscribe}</TableCell>
                                            <TableCell align="right">{supplier.productName}</TableCell>
                                            <TableCell align="right">{supplier.id}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}




//========================
export default function SuppliersManeger() {
    const suppliers = useSelector(state=>state.supplier.suppliers)
    const dispatch=useDispatch()

    useEffect(()=>{
          dispatch(getSuppliersThunk())
    },[])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow className='title'>
                        <TableCell className='title2' align="right"/>
                        <TableCell className='title2' align="right"/>
                        <TableCell className='title2' align="right">email</TableCell>
                        <TableCell className='title2' align="right">phone</TableCell>
                        <TableCell className='title2' align="right">companyName</TableCell>
                        <TableCell className='title2' align="right">name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                 
                    {suppliers&& suppliers.length>0&&suppliers?.map((x) => 
                        <Supplier supplier = {x} />
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
