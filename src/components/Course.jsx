import React, { useState } from "react";
import './Course.css'
import { useNavigate } from "react-router-dom";

export default function(){
    const navigate = useNavigate();

    const courses = ["Computer Science", "Mechanical", "Civil", "Electronics", "Electrical", "Data Scince"]

    const courseClick = (path) => {
       
        navigate(`/academicyear/${encodeURIComponent(path)}`);
    };
    

    return(
        <div className="courses-category">
            {courses.map((item, index) => (
                <div key={index} className="courses"  onClick={(e) => courseClick(item, e)}>{item}</div>
            ))}
        </div>
    )
}