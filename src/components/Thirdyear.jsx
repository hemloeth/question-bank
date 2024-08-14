import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Thirdyear() {
    const thirdYearSem = ["5th Sem", "6th Sem"]
    const {course} = useParams();
    const navigate = useNavigate();

    function thirdYearSemester(thirdYear){
      navigate(`/course/${encodeURIComponent(course)}/thirdyear/${thirdYear}`);
    }
  return (
    <div className='semester-container'>
       <h2 className="academic-heading">
        {course || "Unknown Course"} 3rd Year Semesters
      </h2>
        <div className='semester'>
        {thirdYearSem.map((thirdYear, index) => (
            <div key={index} className='semester-box' onClick={() => thirdYearSemester(thirdYear)}>{thirdYear}</div>
        ))}
        </div>
    </div>
  )
}

export default Thirdyear;