import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClassCardMenu from './ClassCardMenu';
import '../App.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import backimg from '../images/classcard_back_2.png';

const useStyles = makeStyles((theme) => ({
  root: {
     minHeight: 200,
     minWidth: 350,
     marginLeft: 40,
     marginTop: 30,
     display: 'inline-block',
     fontFamily:'Lucida',
     '&:hover': {
      boxShadow: '1px 1px 15px rgba(0, 0, 0, 0.4)'
    },
    backgroundImage: `url('${backimg}')`,
    border: '7px solid #2E3B55',
    color: 'white',
    textShadow: '3px 1px #2E3B55',
    borderRadius: '15px',
    padding: '20px',
    img: "width: 100%",
  },
   openButton: {
     marginTop: 15,
     marginBottom:15,
     fontFamily:'Montserrat',
     backgroundColor: ' rgba(0, 0, 0, 0.6)',
     color: 'white'
   },
   content: {
     fontFamily: 'Montserrat',
     fontWeight: 'bold'
   },
   link : {
    textDecoration: 'none'
   }
}));

export default function ClassCard() {
  const classes = useStyles();
  

return (
  <motion.div >
    <div style={{ display: "inline-block"}}>
      {console.log("ClassCard Loaded")}
      
      <motion.Card className={classes.root} initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{
        delay: 0.4, type: "spring", stiffness: 260, damping: 20}} whileHover={{scale : 1.1, delay: 0}}>
        <ClassCardMenu className={classes.rightButton}/>
          <Typography className={classes.content} >
            Class: FYCSE<br></br>
            Class Teacher: Mr. K. V. Madhale
          </Typography>  
        <Link to='/assignment-analysis/classes/FYCSE' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
      </motion.Card>

      <motion.Card className={classes.root} initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{
        delay: 0.4, type: "spring", stiffness: 260, damping: 20}} whileHover={{scale : 1.1, delay: 0}}>
        <ClassCardMenu />
          <Typography className={classes.content}>
            Class: SYCSE<br></br>
            Class Teacher: Dr. N. L. Gavankar
          </Typography>  
        <Link to='/assignment-analysis/classes/SYCSE' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>  
      </motion.Card>
      
      <motion.Card className={classes.root} initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{
        delay: 0.4, type: "spring", stiffness: 260, damping: 20}} whileHover={{scale : 1.1, delay: 0}}>  
        <ClassCardMenu/>
          <Typography className={classes.content}>
            Class: TYCSE<br></br>
            Class Teacher: Mr. A. R. Surve
          </Typography>  
        <Link to='/assignment-analysis/classes/TYCSE' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
        </motion.Card>
    </div>
</motion.div>
);
}
