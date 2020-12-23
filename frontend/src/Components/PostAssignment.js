import React from 'react';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function PostAssignment(){
    
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
          },
          fontFamily: "Montserrat",
        },
        input: {
            display: 'none',
        },
      }));
    const classes = useStyles();
      
    var fileField = React.useRef(null);
    function handleFileSelected(e) {
        var files = Array.from(e.target.files);
        console.log("files:", files)
        // document.write(files[0].name);
        var para = document.createElement("p");
        var node = document.createTextNode(files[0].name);
        para.appendChild(node);
        var element = document.getElementById("uploaded");
        element.appendChild(para);
    }
    
return(
    <>
        <form style={{fontFamily: "Montserrat", fontWeight: "Normal"}}>
            <h2>Post a new assignment</h2>
            <label>
                <p id="uploaded">Upload here:</p>
                {/* <input
                onChange={handleFileSelected}
                ref={fileField}
                type="file" required
                /> */}
                <input
                    onChange={handleFileSelected}
                    ref={fileField}
                    type="file"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Upload
                    </Button>
                </label>
            </label>
            <p>Add title and some description about assignment:</p>
            <div  className={classes.root}>    
                <TextField id="standard-basic" label="Title of an Assignment" required/><br></br><br></br>
                <TextField id="standard-basic" label="Description of an Assignment" required/><br></br>
            </div>
            <br></br>
            <Button variant="outlined" color="secondary" type="submit" value="Submit" >Submit</Button>
            <Button variant="outlined" color="secondary" type="reset" value="Reset" >Reset</Button>
        </form>
    </>
);
}