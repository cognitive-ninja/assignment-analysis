import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    fontFamily: 'Montserrat'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  
  hide: {
    display: 'none',
  },
  
  drawer: {
    color: 'white',
    width: drawerWidth,
    flexShrink: 0,
  },
  
  drawerPaper: {
    backgroundColor: 'rgba(255, 228, 196, 0.564)',
    color: 'black',
    width: drawerWidth,
  },
  
  drawerHeader: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  
  drawerIcon: {
    color: 'black'
  },
  drawerTitle:{
    fontWeight: 'bold',
    fontSize: '18px'
  },
  drawerList:{
    marginLeft: '20px',
    fontSize: '15px'
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>

      <CssBaseline />
      
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} className={classes.drawerIcon}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider className={classes.drawerIcon}/>
        
        <List>
           <ListItem button key="CLASSES" onClick={handleDrawerClose} component={ Link } to="/assignment-analysis/classes">
              <ListItemText disableTypography primary="CLASSES" className={classes.drawerTitle}/>
            </ListItem>
          {['FYCSE','SYCSE','TYCSE'].map((text, index) => (
            <ListItem button key={text} component={ Link } onClick={handleDrawerClose} to={`/assignment-analysis/classes/${text}`}>
              <ListItemText disableTypography className={classes.drawerList} primary={text} />
            </ListItem>
          ))}
        </List>
        
        <Divider />
        <List>
            <ListItem button key="SETTINGS" onClick={handleDrawerClose} component={ Link } to="/assignment-analysis/settings">
              <ListItemText disableTypography primary="SETTINGS" className={classes.drawerTitle}/>
            </ListItem>
        </List>
        
      </Drawer>
     
    </div>
  );
}