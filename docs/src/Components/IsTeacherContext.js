import React, { useState, createContext } from 'react';

export const IsTeacherContext = createContext();
export const IsTeacherProvider = props => {
    const [isTeacher, setIsTeacher] = useState(true);;
    return(
        <IsTeacherContext.Provider value={[isTeacher, setIsTeacher]}>
            {props.children}
        </IsTeacherContext.Provider>
    );
}