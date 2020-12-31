import React, {useContext} from 'react';
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
import {AuthContext} from '../AuthContext';
import Button from '@material-ui/core/Button';
import { IsTeacherContext } from '../IsTeacherContext';

const useStyles = makeStyles((theme) => ({
  root: {
  },

  menuButton: {
  },

  title: {
    
  },
  linkStyle:{
    textDecoration: "None",
    color: 'white',
    alignContent: 'centre',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textShadow: '2px 2px black'
  },
  authStyle:{
    
    marginLeft: theme.spacing(2),
    fontFamily:'Montserrat',
    fontWeight: '4px'
  },
  signIn:{
    fontFamily:'Montserrat',
    fontWeight: '4px'  
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [auth, setAuth] = useContext(AuthContext);
  const [isTeacher] = useContext(IsTeacherContext);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAuthClose = () => {
    setAnchorEl(null);
    setAuth(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        
        <Toolbar style={{justifyContent: 'flex-end'}}>
          {auth && <LeftDrawer/>}
          <Typography variant="h6" style={{ alignItems: 'center', flexGrow: 0.8 }}>
            <Link to="/assignment-analysis/" className={classes.linkStyle}> Assignment Analyzer</Link>
          </Typography>
          
          {!auth && 
          <Link to='/assignment-analysis/signin' style={{ textDecoration: 'none', fontFamily:'Montserrat' }}>
              <Button className={classes.signIn} variant="contained" color="default">Sign In</Button>
            </Link>
          }
          
          {!auth && 
            <Link to='/assignment-analysis/signup' style={{ textDecoration: 'none'}}>
              <Button className={classes.authStyle} variant="contained" color="default" >Sign Up</Button>
            </Link>
          }

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
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={ Link } to="/assignment-analysis/profile">Profile</MenuItem>
                {isTeacher && <MenuItem onClick={handleClose} component={ Link } to="/assignment-analysis/create">Create Classroom</MenuItem>}
                {!isTeacher && <MenuItem onClick={handleClose} component={ Link } to="/assignment-analysis/join">Join Classroom</MenuItem>}
                <MenuItem onClick={handleAuthClose} component={ Link } to="/assignment-analysis/">Sign Out</MenuItem>
              </Menu>

            </div>
          )}
        </Toolbar>
      </AppBar>
      
    </div>
  );
}