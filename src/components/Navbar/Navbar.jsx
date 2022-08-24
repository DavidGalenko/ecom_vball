import React from 'react'
import {AppBar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/vball-logo.png';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <ToolBar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="30px" className={classes.image}/>
                    VballOnTheBeach
                </Typography>
            <div className={classes.grow} />
            {location.pathname === '/' && (
            <div className={classes.button}>
                <IconButton  component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </div> )}
            </ToolBar>
        </AppBar>
    </div>
  )
}

export default Navbar;