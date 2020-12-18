import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Navbar from './Layout/Navbar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      // maxWidth: 400,
      minHeight: 100,
      minWidth:350,
      marginLeft: 40,
      marginTop: 30,
      backgroundColor: 'rgb(99, 6, 142)',
      color: 'white',
      display: 'inline-block',
      fontFamily:'Lucida',
    },
    openButton: {
      marginTop: 15,
      marginBottom:15,
      fontFamily:'Montserrat',
    },
    content: {
      fontFamily: 'Montserrat',
      fontWeight: 'Thin',
      marginTop: 30
    }
  }));
  
  export default function SubjectCard() {
    const classes = useStyles();
    return (
    <>
        <Navbar />
        <div style={{ display: "inline-block" }}>
        {console.log("SubjectCard Loaded")}
        <Card className={classes.root}>
            <hr></hr>
            <Typography className={classes.content}>
            Subject: Chemistry<br></br>
            Subject Teacher: Mr. A. A. Powar
            </Typography>  
            <Link to='/classes/FYCSE/Chemistry/'><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
            <hr></hr> 
        </Card>
        <Card className={classes.root}>
            <hr></hr>
            <Typography className={classes.content}>
            Subject: Mechanics<br></br>
            Subject Teacher: Mr. Pavan B.
            </Typography>  
            <Link to='/classes/FYCSE/Mechanics/'><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
            <hr></hr> 
        </Card>
        <Card className={classes.root}>
            <hr></hr>
            <Typography className={classes.content}>
                Subject: Electronics<br></br>
                Subject Teacher: Mr. Narayan Marathe
            </Typography>  
            <Link to='/classes/FYCSE/Electronics/'><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
            <hr></hr> 
        </Card>
        <Card className={classes.root}>
            <hr></hr>
            <Typography className={classes.content}>
                Subject: C Programming Lab<br></br>
                Subject Teacher: Mr. Kiran Kamble
            </Typography>  
            <Link to='/classes/FYCSE/CPL/'><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
            <hr></hr> 
        </Card>
        </div>
    </>
  );
  }
  