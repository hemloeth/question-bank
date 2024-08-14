import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import "./Firstyear.css"

function Firstyear() {
  const { course } = useParams();
  const navigate = useNavigate();
  
  const semester = ["1st Sem", "2nd Sem"]

  const routeMap = useMemo(() => ({
    "Computer Science": {
      "1st Sem": "/csefirstsem",
      "2nd Sem": "/csesecondsem"
    },
    "Mechanical": {
      "1st Sem": "/mechfirstsem",
      "2nd Sem": "/mechsecondsem"
    },
    "Civil": {
      "1st Sem": "/civilfirstsem",
      "2nd Sem": "/civilsecondsem"
    },
    "Electronics": {
      "1st Sem": "/elecfirstsem",
      "2nd Sem": "/elecsecondsem"
    },
    "Electrical": {
      "1st Sem": "/electrfirstsem",
      "2nd Sem": "/electrsecondsem"
    },
    "Data Science": {
      "1st Sem": "/datafirstsem",
      "2nd Sem": "/datasecondsem"
    }
  }), []);
  
  function semSelector(sem) {
    if (routeMap[course] && routeMap[course][sem]) {
        navigate(routeMap[course][sem]);
    } else {
        navigate(`/course/${encodeURIComponent(course)}/firstyear/${encodeURIComponent(sem)}`);
    }
}
  
  return (
    <div className='semester-container'>
       <h2 className="academic-heading">{course || 'Unknown Course'} 1st Year Semesters</h2>
        <div className='semester'>
        {semester.map((sem, index) => (
           <div key={index} className='semester-box' onClick={() => semSelector(sem)}>{sem}</div>
        ))}
        </div>
    </div>
  )
}

export default Firstyear;