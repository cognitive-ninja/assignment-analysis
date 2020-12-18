import React from 'react';
import NavBar from './Layout/Navbar';
// import { Link } from 'react-router-dom';

export default function PostAssignment(){
    
    var fileField = React.useRef(null);
    function handleFileSelected(e) {
        var files = Array.from(e.target.files);
        console.log("files:", files)
    }
    
return(
    <>
        <NavBar/>
        <form>
            <label>
                <h1>Post a new assignment:</h1>
                <input
                onChange={handleFileSelected}
                ref={fileField}
                type="file"
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </>
);
}