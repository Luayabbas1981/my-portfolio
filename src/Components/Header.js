import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Header.css"

function Header() {
    const navigat = useNavigate()
  return (
   <>
   <header>
    <div onClick={()=>navigat("/")}>My projects</div>
    <div onClick={()=>navigat("/aboutme")}>About me</div>
    <div onClick={()=>navigat("/contact")}>Contact</div>
   </header>
   </>
  )
}

export default Header