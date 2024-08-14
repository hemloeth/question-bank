import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Secondyear() {
  const secondYearSem = ["3rd Sem", "4th Sem"];
  const { course } = useParams();
  const navigate = useNavigate();

  function secondYearSemester(secondYear) {
    navigate(`/course/${encodeURIComponent(course)}/secondyear/${secondYear}`);
  }

  return (
    <div className="semester-container">
      <h2 className="academic-heading">
        {course || "Unknown Course"} 2nd Year Semesters
      </h2>
      <div className="semester">
        {secondYearSem.map((secondYear, index) => (
          <div
            key={index}
            className="semester-box"
            onClick={() => secondYearSemester(secondYear)}
          >
            {secondYear}
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Secondyear;
