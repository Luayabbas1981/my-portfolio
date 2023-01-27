import React,{useEffect,useState} from 'react'
import "./Projects.css"
import { cssArr,domArr,reactArr } from './ProjectsArr.js'

function Projects() {
  const [showArrow,setShowArrow] = useState(false)

  function scrollDown (){
    window.scrollBy(0,971)
  }
  function scrollUp(){
    window.stop()
    window.scrollTo(0,0)
  }
  
 useEffect(()=>{

   setTimeout(()=>{
  const cssPros =   document.querySelectorAll(".pro-container")
 cssPros.forEach((el)=> el.setAttribute("class","show-pro"))
        
 },3500)
 setTimeout(()=>{
  setShowArrow(true)  
 

 },7500)
},[])
        console.log(showArrow) 
        
  return (
<main>
<section className='css-sec sec '>
    <div className='sec-bc'></div>
    <div className='css-sec-header' style={{ color: "#528ba6"}}>Css projects 2022</div>
    <div className='css-pros-container '>

    {cssArr.map((pro,i)=>{
   
        return(
            <div key={i} className='pro-container'>
                  <a className='href' href={pro.link} target="_blank" r rel="noreferrer">
                <div className='css-pro-bc'></div>
                <div className='css-pro-bc-cover'>
                    {pro.name}
                </div>
                  <div className='image'>
                    <img src={require(`./cssImages/${i}.png`)} alt="" />
                  </div>
                </a>
            </div>
           
        )
    })} 
    </div>
    <div id={showArrow? "": "hidden"} className='go-down' onClick={scrollDown}> 
  <i className="fa-solid fa-angles-down">
    
    </i>
   
    </div>
 
</section>
<section className='dom-sec sec '>
    <div className='sec-bc'></div>
    <div className='dom-sec-header' style={{ color: "navy"}}>Dom projects 2022</div>
    <div className='dom-pros-container '>

    {domArr.map((pro,i)=>{
   
        return(
            <div key={i} className='pro-container'>
                 <a className='href' href={pro.link} target="_blank" r rel="noreferrer">
                <div className='dom-pro-bc'></div>
                <div className='dom-pro-bc-cover'>
                    {pro.name}
                </div>
                  <div className='image'>
                  <img src={require(`./domImages/${i}.png`)} alt="" />
                  </div>
                 </a>
            </div>
           
        )
    })} 
    </div>
    <div className='go-down' onClick={scrollDown}> 
  <i className="fa-solid fa-angles-down">
    
    </i>
   
    </div>
 
</section>

<section className='react-sec sec '>
    <div className='sec-bc'></div>
    <div className='react-sec-header' style={{ color: "royalblue"}}>React projects 2022</div>
    <div className='react-pros-container '>

    {reactArr.map((pro,i)=>{
   
        return(
            <div key={i} className='pro-container'>
                  <a className='href' href={pro.link} target="_blank" r rel="noreferrer">
                <div className='react-pro-bc'></div>
                <div className='react-pro-bc-cover'>
                    {pro.name}
                </div>
                  <div className='image'>
                    <img src={require(`./reactImages/${i}.png`)} alt="" />
                  </div>
                </a>
            </div>
           
        )
    })} 
    </div>
  
  <div className='go-up' onClick={scrollUp}> 
  <i className="fa-solid fa-angles-up">
    
    </i>
   
    </div>
 
</section>
</main>
  )
}

export default Projects

