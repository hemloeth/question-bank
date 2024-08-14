import React from "react";
import "./Csefirstsem.css"

function Csefirstsem() {
  const cseFirstSemSubjects = [
    { name: "Math", years: [2020, 2021, 2022], pdf: "pdfs/file (1).pdf" },
    { name: "English", years: [2020, 2021, 2022] },
    { name: "Physics", years: [2020, 2021, 2022] },
    { name: "Chemistry", years: [2020, 2021, 2022] },
    { name: "Bee", years: [2020, 2021, 2022] },
  ];
  const handleDownload = (year, pdfUrl) => {
    if (year === 2020) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = pdfUrl.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <div className="subject-container">
      {cseFirstSemSubjects.map((subject) => (
        <div key={subject.name} className="subject">
          <h2>{subject.name}</h2>
          <ul className="year-list">
            {subject.years.map((year, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => handleDownload(year, subject.pdf)}
                  className="download-link"
                >
                  {year}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Csefirstsem;
