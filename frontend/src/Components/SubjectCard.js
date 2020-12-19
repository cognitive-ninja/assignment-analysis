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
      '&:hover': {
        boxShadow: '7px 7px 4px rgb(75, 75, 75)'
      },
      background: 'linear-gradient(to top, rgba(280, 212, 212, 0.85), rgba(142, 152, 243, 0.85))',
      color: 'black',
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
      fontWeight: 'Normal',
      marginTop: 30
    },
    link : {
      textDecoration: 'none'
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
            <Link to='/classes/FYCSE/Chemistry/' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
            <hr></hr> 
        </Card>
        <Card className={classes.root}>
            <hr></hr>
            <Typography className={classes.content}>
            Subject: Mechanics<br></br>
            Subject Teacher: Mr. Pavan B.
            </Typography>  
            <Link to='/classes/FYCSE/Mechanics/' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
            <hr></hr> 
        </Card>
        <Card className={classes.root}>
            <hr></hr>
            <Typography className={classes.content}>
                Subject: Electronics<br></br>
                Subject Teacher: Mr. Narayan Marathe
            </Typography>  
            <Link to='/classes/FYCSE/Electronics/' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
            <hr></hr> 
        </Card>
        <Card className={classes.root}>
            <hr></hr>
            <Typography className={classes.content}>
                Subject: C Programming Lab<br></br>
                Subject Teacher: Mr. Kiran Kamble
            </Typography>  
            <Link to='/classes/FYCSE/CPL/' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
            <hr></hr> 
        </Card>
        </div>
    </>
  );
  }
  