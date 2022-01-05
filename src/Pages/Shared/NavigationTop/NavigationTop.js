import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
// my own
import logo from './../../../Image_Icon/Group 33092.png'
import { Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';




export default function NavigationTop() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

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
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
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

                            <img src={logo} width='120' alt='logo' />

                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to='/home'>
                                    <Button color="inherit"  >Home</Button>
                                </NavLink>


                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to='/home'>
                                    <Button color="inherit"  >Our Team</Button>
                                </NavLink>

                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to='/home'>
                                    <Button color="inherit"  >Contact Us</Button>
                                </NavLink>
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
