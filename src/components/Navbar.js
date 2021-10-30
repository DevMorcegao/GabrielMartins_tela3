// <-------------------------------------------- IMPORTS --------------------------------------------> //

import React, { useState } from 'react';
import avatar from '../avatar.jpg';
import logo from '../logo.png';
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import {
  Cancel,
  KeyboardArrowDown,
  Menu,
  NotificationsOutlined,
  Search,
  ShoppingCartOutlined,
} from '@material-ui/icons';

// </-------------------------------------------- IMPORTS --------------------------------------------> //

// <-------------------------------------------- CSS --------------------------------------------> //

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: 'none',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#11AABB',
    border: '2px solid #11AABB',
    width: '400px',
    borderRadius: '8px',
    boxSizing: 'border-box',
    padding: '2px 0px',
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '50%',
      marginRight: '0px',
    },
  },
  input: {
    marginLeft: theme.spacing(2),
    color: ' #586673',
  },
  searchIcon: {
    position: 'relative',
    right: '10px',
    [theme.breakpoints.down('sm')]: {
      left: '10px',
    },
  },
  cancel: {
    marginRight: '10px',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icons: {
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  badge: {
    color: '#11AABB',
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  menuSeparation: {
    color: '#11AABB',
    marginRight: theme.spacing(2),
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  arrowDown: {
    color: '#11AABB',
    cursor: 'pointer',
  },
  userName: {
    color: '#586673',
    marginLeft: theme.spacing(1),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    color: '#11AABB',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menu: {
    color: '#11AABB',
    position: 'relative',
    right: '40px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

// </-------------------------------------------- CSS --------------------------------------------> //

// <-------------------------------------------- COMPONENT --------------------------------------------> //

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbar}>
          <img src={logo} alt="Logo Large" className={classes.logoLg} />
          <img src={logo} alt="Logo Small" className={classes.logoSm} />
          <div className={classes.search}>
            <span className={classes.menu}>
              <Menu />
            </span>
            <Search className={classes.searchIcon} />
            <InputBase className={classes.input} />
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={15} color="primary" className={classes.badge}>
            <ShoppingCartOutlined />
          </Badge>
          <Badge badgeContent={10} color="secondary" className={classes.badge}>
            <NotificationsOutlined />
          </Badge>
          <span className={classes.menuSeparation}>|</span>
          <Avatar alt="Usuário" src={avatar} />
          <span className={classes.userName}>
            Olá, <b>Usuário</b>
          </span>
          <KeyboardArrowDown className={classes.arrowDown} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// </-------------------------------------------- COMPONENT --------------------------------------------> //
