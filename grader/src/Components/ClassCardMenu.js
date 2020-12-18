import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white"
    }
}));

export default function ClassCardMenu(){
  const classes = useStyles();
  const [anchorEl, setAnchorE1] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  return (
    <Grid container justify="flex-end">
        <IconButton  className={classes.root} aria-label="settings" aria-haspopup="true" aria-controls="menu-appbar" onClick={handleMenu}>
            <MoreVertIcon/>
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
                vertical: 'top',
                horizontal: 'left',
            }}
            open={open}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Leave Class</MenuItem>
            <MenuItem onClick={handleClose}>{`Leave & Delete Class`}</MenuItem>
        </Menu>
    </Grid>
  );
}
