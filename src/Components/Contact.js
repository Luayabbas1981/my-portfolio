import React from 'react'
import "./Contact.css"


function Contact() {

  
  return (
    <>
    
    <div className='contacts-container'>
      <div className="box" style={{color:"royalblue"}}>
        <div className="face front" ><i className="fa-solid fa-envelope"></i></div>
        <div className="face back" >
          abbasluay1981@gmail.com
       
        </div>
      </div>
      <div className="box" style={{color:"#ff6f00"}}>
        <div className="face front"><i className="fa-solid fa-map-location-dot"></i></div>
        <div className="face back" style={{flexDirection:"column"}}>
          <div>Mathildenst.25</div>
          <div>51149 Köln</div>
          
        </div>
      </div>
      <div className="box" style={{color:"#0691b5"}}>
        <div className="face front" ><i className="fa-solid fa-phone"></i></div>
        <div className="face back" >+49 157 8090 2670</div>
      </div>
      <div className="github" >
     <a href='https://github.com/Luayabbas1981?tab=repositories' target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-github-alt" style={{color:"black"}}></i></a>
       
      </div>
      <div className="linkedin">
    <a href="https://www.linkedin.com/in/luay-abbas-79531a24a/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in" style={{color:"darkblue"}}></i></a> 
      
      </div>
    </div>
    </>
  )
}

export default Contact