import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import axios from 'axios';

export default function SubmitAssignment(){
    
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
          },
          fontFamily: "Montserrat",backgroundColor: 'rgb(233,215,195)',
          
        },
        input: {
            display: 'none',
        },
        styling:{
            backgroundColor: 'rgb(233,215,195)',
            height: '100vh'

        }
      }));
      
    //   const onSubmit= (e) => {
        // e.preventDefault();
        // const obj = {
        //     hello: "world"
        //   };
        //   const json = JSON.stringify(obj);
        //   const blob = new Blob([json], {
        //     type: 'application/json'
        //   });
        //   const data = new FormData();
        //   data.append("document", blob);
//         var data = new FormData();
//         var formfile = document.querySelector('#file');
//         console.log(formfile);
//         data.append("formfile", formfile.files[0]);
//         console.log(data);
//         axios.post("http://localhost:5000/uploads", data, {  headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }).then(function (response) {
//             console.log(response);
//         }).catch(function (response) {
//             console.log(response);
//         });
// };
    // var fileField = React.useRef(null);
    // function handleFileSelected(e) {
    //     var files = Array.from(e.target.files);
    //     console.log("files:", files)
    //     var para = document.createElement("p");
    //     var node = document.createTextNode(files[0].name);
    //     para.appendChild(node);
    //     var element = document.getElementById("uploaded");
    //     element.appendChild(para);
    // }
    
    const classes = useStyles();
      
      return(
        <>
            <form action="http://localhost:5000/upload" method="post" className={classes.styling} style={{fontFamily: "Montserrat", fontWeight: "Normal"}}
                        encType="multipart/form-data">
                <h2>Submit an Assignment</h2>
                <label>
                    <p id="uploaded">Submit here:</p>
                    <input
                    // onChange={handleFileSelected}
                    // ref={fileField}
                        type="file"
                        // className={classes.input}
                        id="file" name="file"
                        multiple
                    />
                    {/* <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span" >
                        Upload 
                        </Button>
                    </label> */}
                </label>
                <br></br><br></br><TextField id="standard-basic" label="Any Comment"/><br></br><br></br>
                <Button variant="outlined" color="secondary" type="submit" value="Submit">Submit</Button>
                <Button variant="outlined" color="secondary" type="reset" value="Reset" >Reset</Button>
            </form>
        </>
    );
}