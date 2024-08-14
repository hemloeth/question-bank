import React from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Refresh() {
    const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page on component mount (refresh)
    navigate("/home");
  }, []);
  return (<></>
  )
}

export default Refresh