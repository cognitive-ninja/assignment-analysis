import React from 'react';
import Typist from 'react-text-typist';

export default function HomeBackground() {
    
    return (
        <>
            <div style={{marginTop:"18%"}}>
                <Typist typingSpeed="80" loop={false} showCursor={false} style={{fontFamily:"Montserrat", fontWeight:"600", fontStyle: 'italic' , textShadow: "2px 2px #ffffff", fontSize: "50px" }} sentences={[`Great ability develops and reveals itself increasingly ${'\xa0\xa0\xa0\xa0'} with every new assignment...`]}/>
                <p style={{fontFamily:"Montserrat", fontWeight:"normal", fontStyle: 'italic' , textShadow: "2px 2px #ffffff", fontSize: "20px" }} >- Baltasar Gracian</p>
            </div>
            
            
        </>
);
}