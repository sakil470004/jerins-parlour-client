import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
// my own
import logo from './../../../Image_Icon/Group 33092.png'
import { Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';




export default function NavigationTop() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
            <HashLink smooth to='/home#serviceWeProvide'>
                Service
                </HashLink>
            </MenuItem>
            <MenuItem>
            <HashLink smooth to='/home#reviewWeGot'>
                Review
            </HashLink>
            </MenuItem>
            <MenuItem>
            <NavLink to='/dashboard'>
                Dashboard
            </NavLink>
            </MenuItem>

        </Menu>
    );

    const { user, logout } = useAuth();

    return (
        <div style={{ background: '#fff8f5' }}>

            <Container>
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" style={{ background: '#fff8f5', boxShadow: 'none' }}>
                        <Toolbar>
                            <NavLink to='/home'>
                                <img src={logo} width='120' alt='logo' />
                            </NavLink>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to='/home'>
                                    <Button color="inherit"  >Home</Button>
                                </NavLink>


                                <HashLink smooth style={{ color: 'black', textDecoration: 'none' }} to='/home#serviceWeProvide'>
                                    <Button color="inherit"  >Services</Button>
                                </HashLink>

                                <HashLink smooth

                                    style={{ color: 'black', textDecoration: 'none' }} to='/home#reviewWeGot'>
                                    <Button color="inherit"  >Review</Button>
                                </HashLink>
                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to='/dashboard'>
                                    <Button color="inherit"  >Dashboard</Button>
                                </NavLink>

                                {!user?.displayName && <NavLink style={{ color: 'white', backgroundColor: '#f63e7b', textDecoration: 'none', borderRadius: '15px' }} to='/login'>
                                    <Button color="inherit"  >Login</Button>
                                </NavLink>}

                                {user?.displayName && <NavLink style={{ color: 'white', backgroundColor: '#f63e7b', textDecoration: 'none', borderRadius: '15px' }} to='/login'>
                                    <Button

                                        onClick={logout}
                                        color="inherit"  >Logout</Button>
                                </NavLink>}
                            </Box>

                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                // color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box>
            </Container>
        </div>

    );
}
