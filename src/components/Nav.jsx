import React from "react";
import { useNavigate } from "react-router-dom";
import './Nav.css'

export default function Nav() {
  const navigate = useNavigate();

  const handleClick = (path, event) => {
    event.preventDefault();
    navigate(path.toLowerCase());
  };

  function setHome(){
    navigate('/home')
  }

  return (
    <div className="nav-container">
      <div className="logo" onClick={setHome}>Question Bank</div>
      <input placeholder="Search" className="Search-input"></input>
      <div className="navbar">
        {["Home", "About", "Contact"].map((item, index) => (
          <a
            key={index}
            href={"home" ? "/" : `/${item.toLowerCase()}`}
            onClick={(e) => handleClick(item, e)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
