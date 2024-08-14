import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Fourthyear() {
  const fourthYearSem = ["7th Sem", "8th Sem"];
  const { course } = useParams();
  const navigate = useNavigate();

  function fourthYearSemester(fourthYear) {
    navigate(`/course/${encodeURIComponent(course)}/fourthyear/${fourthYear}`);
  }
  return (
    <div className="semester-container">
      <h2 className="academic-heading">
        {course || "Unknown Course"} 4th Year Semesters
      </h2>

      <div className="semester">
        {fourthYearSem.map((fourthYear, index) => (
          <div
            key={index}
            className="semester-box"
            onClick={() => fourthYearSemester(fourthYear)}
          >
            {fourthYear}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fourthyear;
