import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClassCardMenu from './ClassCardMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    minWidth:300,
    marginLeft: 40,
    marginTop: 30,
    backgroundColor: 'black',
    color: 'white',
    display: 'inline-block',
  },
  openButton: {
    marginTop: 15,
    marginBottom:15
  },
}));

export default function ClassCard() {
  const classes = useStyles();
  

return (
  <div style={{ display: "inline-block" }}>
    <Card className={classes.root}>
      <hr></hr>
      <ClassCardMenu className={classes.rightButton}/>      
      <Typography>
        Class: FYCSE<br></br>
        Class Teacher: Mr. K. V. Madhale
      </Typography>  
      <Button variant="contained" size="large" color="white" className={classes.openButton}>Open</Button>
      <hr></hr> 
    </Card>
    <Card className={classes.root}>
      <hr></hr>
      <ClassCardMenu color="white"/>
      <Typography>
        Class: SYCSE<br></br>
        Class Teacher: Dr. N. L. Gavankar
      </Typography>  
      <Button variant="contained" size="large" color="white" className={classes.openButton}>Open</Button>
      <hr></hr> 
    </Card>
    <Card className={classes.root}>
      <hr></hr>
      <ClassCardMenu color="white"/>
      <Typography>
        Class: TYCSE<br></br>
        Class Teacher: Mr. A. R. Surve
      </Typography>  
      <Button variant="contained" size="large" color="white" className={classes.openButton}>Open</Button>
      <hr></hr> 
    </Card>
  </div>
);
}
