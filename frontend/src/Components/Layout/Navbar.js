import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LeftDrawer from './LeftDrawer';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 0,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    // flexGrow: 0.8,
    
  },
  linkStyle:{
    textDecoration: "None",
    color: 'white',
    alignContent: 'centre',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textShadow: '2px 2px black'
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [auth] = React.useState(true);
  // const [setAuth] = React.useState(true);
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        
        <Toolbar>
          <LeftDrawer/>
          <Typography variant="h6" style={{ alignItems: 'center', flexGrow: 0.8 }}>
            <Link to="/" className={classes.linkStyle}> Assignment Analyzer</Link>
          </Typography>

          {auth && (
            <div  style={{marginLeft: 'auto'}}>

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={ Link } to="/profile">Profile</MenuItem>
                <MenuItem onClick={handleClose} component={ Link } to="/create">Create Classroom</MenuItem>
                <MenuItem onClick={handleClose} component={ Link } to="/join">Join Classroom</MenuItem>
              </Menu>

            </div>
          )}
        </Toolbar>
      </AppBar>
      
    </div>
  );
}