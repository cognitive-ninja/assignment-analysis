import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClassCardMenu from './ClassCardMenu';
import Navbar from './Layout/Navbar';
import '../App.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
     // maxWidth: 400,
     minHeight: 100,
     minWidth: 350,
     marginLeft: 40,
     marginTop: 30,
     display: 'inline-block',
     fontFamily:'Lucida',
     '&:hover': {
      boxShadow: '7px 7px 4px rgb(75, 75, 75)'
    },
    backgroundColor: 'black',
    color: 'white',
    padding: '0 2em' 
   
  },
   openButton: {
     marginTop: 15,
     marginBottom:15,
     fontFamily:'Montserrat',
   },
   content: {
     fontFamily: 'Montserrat',
     fontWeight: 'Thin'
   }
}));

export default function ClassCard() {
  const classes = useStyles();
  

return (
  <>
  <Navbar />
  <div style={{ display: "inline-block" }}>
    {console.log("ClassCard Loaded")}
    <Card className={classes.root}>
      <hr></hr>
      <ClassCardMenu className={classes.rightButton}/>      
      <Typography className={classes.content}>
        Class: FYCSE<br></br>
        Class Teacher: Mr. K. V. Madhale
      </Typography>  
      <Link to='/classes/FYCSE'><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
      <hr></hr> 
    </Card>

    <Card className={classes.root}>
      <hr></hr>
      <ClassCardMenu />
      <Typography className={classes.content}>
        Class: SYCSE<br></br>
        Class Teacher: Dr. N. L. Gavankar
      </Typography>  
      <Link to='/classes/SYCSE'><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
      <hr></hr> 
    </Card>
    <Card className={classes.root}>
      <hr></hr>
      <ClassCardMenu/>
      <Typography className={classes.content}>
        Class: TYCSE<br></br>
        Class Teacher: Mr. A. R. Surve
      </Typography>  
      <Link to='/classes/TYCSE'><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
      <hr></hr> 
    </Card>
  </div>
</>
);
}
