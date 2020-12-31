import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import {IsTeacherContext} from './IsTeacherContext';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    alignContent: 'centre',
    // width: '100%',
    maxWidth: "100ch",
    marginLeft: "26%",
    marginTop: "5%",
    marginRight: "5%",
    // maxWidth: '400ch',
    backgroundColor: 'rgb(233,215,195)',
    border: "1px solid black"
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  const [isTeacher] = useContext(IsTeacherContext);
  return (
    <>
    {isTeacher && <Link to='/assignment-analysis/postAssignment' style={{textDecoration: 'none'}}><Button style={{marginTop:"2%"}} variant="contained" size="large" >Post a new assignment</Button></Link>}
    {isTeacher && <List className={classes.root}>
      <Link to="/assignment-analysis/submitAssignment" style={{textDecoration: 'none'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                <AssignmentIcon/>
            </ListItemAvatar>
            <ListItemText style={{fontFamily: "Montserrat"}}
            primary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    // className={classes.inline}
                    color="textPrimary"
                    fontFamily="Montserrat"
                    style={{fontFamily:"Montserrat", fontWeight: "bold"}}
                >
                    Assignment 3
                </Typography>
                
                </React.Fragment>
            }
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    fontFamily="Montserrat"
                >
                    Submit Till 4 Jan
                </Typography>
                
                </React.Fragment>
            }
            />
        </ListItem>
      </Link>
      <Divider variant="inset" component="li" />
      <Link to="/assignment-analysis/submitAssignment" style={{textDecoration: 'none'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AssignmentIcon/>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
            <Typography
                component="span"
                variant="body2"
                // className={classes.inline}
                color="textPrimary"
                fontFamily="Montserrat"
                style={{fontFamily:"Montserrat", fontWeight: "bold"}}
            >
                Assignment 2
            </Typography>
            
            </React.Fragment>
        }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Submit Till 30 Dec
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </Link>
      <Divider variant="inset" component="li" />
      <Link to="/assignment-analysis/submitAssignment" style={{textDecoration: 'none'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AssignmentIcon/>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
            <Typography
                component="span"
                variant="body2"
                // className={classes.inline}
                color="textPrimary"
                fontFamily="Montserrat"
                style={{fontFamily:"Montserrat", fontWeight: "bold"}}
            >
                Assignment 1
            </Typography>
            
            </React.Fragment>
        }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Submit Till 22 Dec
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </Link>
    </List>}
    {!isTeacher && <List className={classes.root}>
      <Link to="/assignment-analysis/submitAssignment" style={{textDecoration: 'none'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                <AssignmentIcon/>
            </ListItemAvatar>
            <ListItemText style={{fontFamily: "Montserrat"}}
            primary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    // className={classes.inline}
                    color="textPrimary"
                    fontFamily="Montserrat"
                    style={{fontFamily:"Montserrat", fontWeight: "bold"}}
                >
                    Assignment 3
                </Typography>
                
                </React.Fragment>
            }
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    fontFamily="Montserrat"
                >
                    Submit Till 4 Jan
                </Typography>
                
                </React.Fragment>
            }
            />
        </ListItem>
      </Link>
      <Divider variant="inset" component="li" />
      <Link to="/assignment-analysis/submitAssignment" style={{textDecoration: 'none'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AssignmentIcon/>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
            <Typography
                component="span"
                variant="body2"
                // className={classes.inline}
                color="textPrimary"
                fontFamily="Montserrat"
                style={{fontFamily:"Montserrat", fontWeight: "bold"}}
            >
                Assignment 2
            </Typography>
            
            </React.Fragment>
        }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Submit Till 30 Dec
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </Link>
      <Divider variant="inset" component="li" />
      <Link to="/assignment-analysis/submitAssignment" style={{textDecoration: 'none'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AssignmentIcon/>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
            <Typography
                component="span"
                variant="body2"
                // className={classes.inline}
                color="textPrimary"
                fontFamily="Montserrat"
                style={{fontFamily:"Montserrat", fontWeight: "bold"}}
            >
                Assignment 1
            </Typography>
            
            </React.Fragment>
        }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Submit Till 22 Dec
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </Link>
    </List>}
    </>
  );
}
