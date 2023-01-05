import React,{useState} from 'react'
import "./AboutMe.css"
import { jsPDF } from "jspdf";

function AboutMe({}) {
  const [pageNum,setPageNum]= useState(1)

  
  
  
  function firstLayer(){
   
    document.querySelector("#four").removeAttribute("class","z-index")
    document.querySelector("#one").setAttribute("class","z-index")
   
    setPageNum(2)
  }
  function secondLayer(){
    document.querySelector("#one").removeAttribute("class","z-index")
    document.querySelector("#two").setAttribute("class","z-index")
    setPageNum(3)
  }
  function thirdLayer(){
    document.querySelector("#two").removeAttribute("class","z-index")
    document.querySelector("#three").setAttribute("class","z-index")
    setPageNum(4)
  }
  function fourthLayer(){
    document.querySelector("#three").removeAttribute("class","z-index")
    document.querySelector("#four").setAttribute("class","z-index")
    setPageNum(1)
  }

  function downloadIcdl() {
    const pdfDiv = document.querySelector(".icdl");
    const doc = new jsPDF("p", "px", [569.5, 450]);

    doc.html(pdfDiv, {
      async callback(doc) {
        doc.save(`Icdl.pdf`);
      },
    });
  }
  function downloadEdu() {
    const pdfDiv = document.querySelector(".edu");
    const doc = new jsPDF("p", "px", [591.5, 450]);

    doc.html(pdfDiv, {
      async callback(doc) {
        doc.save(`Education.pdf`);
      },
    });
  }
  function downloadC() {
    const pdfDiv = document.querySelector(".c1");
    const doc = new jsPDF("p", "px", [591.5, 450]);

    doc.html(pdfDiv, {
      async callback(doc) {
        doc.save(`C1.pdf`);
      },
    });
  }
  function downloadDci() {
    const pdfDiv = document.querySelector(".dci");
    const doc = new jsPDF("p", "px", [539.5, 450]);

    doc.html(pdfDiv, {
      async callback(doc) {
        doc.save(`DCI.pdf`);
      },
    });
  }
  return (
    <>
    <main className='about-main'>
    <section className='sec-one'>
      <div className="part-one">
        <p className='title'>Luay Abbas</p>
        <p className='title'>10.01.1981</p>
        <ul >
          <p>Previous training:</p> 
        <li> Further education <q>Weiterbildung</q>  full stack web developer DCI - Digital Career Institute gGmbH,Berlin
        Dec. 2021 - Feb. 2023
        <div>- Implementation of a one-year full-time education including technologies of the MERN</div>
       </li>
      
        <li>  C1 professional German course 2020 cologne</li>
        <li>  B2 professional German course 2019 cologne</li>
        <li>  ICDL International Computer Driving Licence 2014 Syria</li>
        </ul>
        <ul>

        <p >Career:</p>
        <li> Primary school teacher  2000 - 2015, Syria</li>
        <li> Computer repair in one's own computer workshop</li>
        </ul>
        <ul>
          <p>Languages:</p>
          <li>Arabic, native language</li>
          <li>German, C1 level</li>
          <li>English, B2 level</li>
        </ul>
      </div>
      <div className="middle"></div>
      <div className="part-two">
        <p >Knowleadge:</p>
        <ul>
         
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.Js</li>
          <li>Mongodb</li>
          <li>Express</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Microsoft office</li>
        </ul>
       
      </div>
    </section>


    <section className='sec-two'>
   <div className="certificates-container">
    <div>Certificates</div>
      <div className="slider">
        

        <div id='one' ><img className='icdl' src={require("./SlideImages/Icdl.png")} alt="" />

          <i className="fa-solid fa-angles-right" onClick={secondLayer} ></i>
          <button  onClick={downloadIcdl}>Download</button>
        </div>

        
        

        <div id='two' ><img className='c1' src={require("./SlideImages/C1.png")} alt="" />

        <i className="fa-solid fa-angles-right" onClick={thirdLayer}></i>
        <button onClick={downloadC}>Download</button>
        </div>
        

        

        <div id='three' ><img className='edu' src={require("./SlideImages/Edu.png")} alt="" />

        <i className="fa-solid fa-angles-right" onClick={fourthLayer}></i>
        <button onClick={downloadEdu}>Download</button>
        </div>
        
        

        <div id='four' ><img className='dci' src={require("./SlideImages/DCI-Certificate.png")} alt="" />

        <i className="fa-solid fa-angles-right" onClick={firstLayer}></i>
        <button onClick={downloadDci}>Download</button>
        </div>
       
        <span>{pageNum}/4</span>
      </div>
   
  

   </div>
   
    </section>
  
    </main>
    </>
  )
}

export default AboutMe