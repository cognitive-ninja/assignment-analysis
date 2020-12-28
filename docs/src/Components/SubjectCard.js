import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import backimg from '../images/new_sub_back_3.jpg';
import { motion } from 'framer-motion';
// import { Frame } from 'framer';

import {IsTeacherContext} from './IsTeacherContext';
// import PostAssignment from './PostAssignment';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: 200,
      minWidth: 350,
      marginLeft: 40,
      marginTop: 40,
      display: 'inline-block',
      fontFamily:'Lucida',
      '&:hover': {
       boxShadow: '1px 1px 15px rgba(0, 0, 0, 0.4)'
     },
     backgroundImage: `url('${backimg}')`,
     border: '7px solid #2E3B55',
     color: 'white',
     textShadow: '1px 1px #2E3B55',
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
      fontWeight: 'Normal',
      marginTop: 50,
    },
    link : {
      textDecoration: 'none'
     }
  }));
  
  export default function SubjectCard() {
    
    const [isTeacher, setIsTeacher] = useContext(IsTeacherContext);
    const classes = useStyles();
    return (
    <>
        <div style={{ display: "inline-block" }}>
        {console.log("SubjectCard Loaded")}
         <motion.Card className={classes.root}  whileTap={{ scale: 0.95 }} whileHover={{ scale : 0.95}}>
                    
            <Typography className={classes.content}>
              Subject: Chemistry<br></br>
              Subject Teacher: Mr. A. A. Powar
            </Typography>  
            {isTeacher && <Link to='/postAssignment/classes/FYCSE/Chemistry' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>}
            {!isTeacher && <Link to='/submitAssignment/classes/FYCSE/Chemistry' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>}
        </motion.Card>
        <motion.Card className={classes.root} whileTap={{ scale: 0.95 }} whileHover={{ scale : 0.95}}>
            
            <Typography className={classes.content}>
            Subject: Mechanics<br></br>
            Subject Teacher: Mr. Pavan B.
            </Typography>  
            <Link to='/postAssignment/classes/FYCSE/Mechanics/' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
             
        </motion.Card>
        <motion.Card className={classes.root} whileTap={{ scale: 0.95 }} whileHover={{ scale : 0.95}}>
            
            <Typography className={classes.content}>
                Subject: Electronics<br></br>
                Subject Teacher: Mr. Narayan Marathe
            </Typography>  
            <Link to='/postAssignment/classes/FYCSE/Electronics/' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
             
        </motion.Card>
        <motion.Card className={classes.root} whileTap={{ scale: 0.95 }} whileHover={{ scale : 0.95}}>
            
            <Typography className={classes.content}>
                Subject: C Programming Lab<br></br>
                Subject Teacher: Mr. Kiran Kamble
            </Typography>  
            <Link to='/postAssignment/classes/FYCSE/CPL/' className={classes.link}><Button variant="contained" size="large" className={classes.openButton}>Open</Button></Link>
             
        </motion.Card>
        </div>
    </>
  );
  }
  