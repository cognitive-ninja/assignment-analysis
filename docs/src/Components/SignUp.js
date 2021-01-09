import React,{useContext} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import backImage from '../images/home_backg_2.jpg';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {AuthContext} from './AuthContext';
import {IsTeacherContext} from './IsTeacherContext';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/assignment-analysis/">
        Assignment Analyzer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundColor: 'rgb(233,215,195)',
    backgroundImage: `url(${backImage})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'top',
    backgroundSize:'cover',
    /* color: white; */
    /* opacity: 40%; */
    /* margin-top: 10px; */
    // background-position-y: 20px;
    height: '100vh',

  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignIn() {
  const classes = useStyles();
  const history= useHistory();
  
  const [, setAuth] = useContext(AuthContext);
  const [, setIsTeacher] = useContext(IsTeacherContext);
  
  function onSubmit(e) {
    
    e.preventDefault();
    var form = document.getElementById('signup_form');
    var data = new FormData(form);
    const entries = data.entries();
    const userData = Object.fromEntries(entries);
    
    axios.post('http://localhost:5000/user/', userData)
    .then(res => { 
      if(res.status === 200)
      {
        setAuth(true);
        setIsTeacher(true);
        history.push("/assignment-analysis/"); 
      }
    }).catch(res => {
        if(res.status !== 200)
        {
          if( res.status === 404)
          {
            swal("Sorry but currently our server is sleeping...\nTry after some time...");
          }
          else
          {
            swal("Already account exists with this Email-ID")
              .then((value) => {
                if(value)
                {
                  history.push("/assignment-analysis/");
                }
              }
            );
          }
        }
    });

}

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} name="signup_form" id="signup_form" onSubmit={onSubmit}>
          <div className="d-flex flex-row">
            <div className="p-2 flex-fill">
            <TextField
              variant="outlined"
              margin="normal"
              required
              autoFocus
              name="first_name"
              label="First Name"
              type="text"
              id="first_name"
              style={{width:'260px', marginRight:'42px'}}
            />
            {/* </div>
            <div className="p-2"> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
            //   fullWidth
              name="last_name"
              label="Last Name"
              type="text"
              id="last_name"
              style={{width:'260px'}}
            />
            </div>
        </div>
          
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: '#2E3B55' }}
              className={classes.submit}
              // onClick={}
            >
              
              <div style={{color:"white"}}>Sign Up</div>
            </Button>
            </form>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item> */}
                <Link to="/assignment-analysis/signin" variant="body2" style={{textDecoration: 'none', fontSize:'15px'}}>
                  Already have an account? Sign In
                </Link>
              {/* </Grid>
            </Grid> */}
            <Box mt={5}>
              <Copyright />
            </Box>
          
        </div>
      </Grid>
    </Grid>
  );
}