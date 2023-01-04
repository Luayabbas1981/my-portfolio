import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./Header.css"

function Header() {
  const [home,setHome]= useState(true)
  const [aboutMe,setAboutMe]= useState(false)
  const [contact,setContact]= useState(false)
  const navigat = useNavigate()

    function homeHandler (){
      navigat("/")
      setHome(true)
      setAboutMe(false)
      setContact(false)
      
    }
    function aboutMeHandler (){
      navigat("/aboutme")
      setAboutMe(true)
      setHome(false)
      setContact(false)
      
    }
    function contactHandler (){
      navigat("/contact")
      setContact(true)
      setHome(false)
      setAboutMe(false)
      
    }
    console.log(contact)
  return (
   <>
   <header>
    <div onClick={homeHandler} style={{color:`${home? "royalblue":"#c0bfbf"}`}}>Projects</div>
    <div onClick={aboutMeHandler} style={{color:`${aboutMe? "royalblue":"#c0bfbf"}`}}>About me</div>
    <div onClick={contactHandler  } style={{color:`${contact? "royalblue":"#c0bfbf"}`}}>Contact</div>
   </header>
   </>
  )
}

export default Header