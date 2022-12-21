import React from 'react'
import "./AboutMe.css"

function AboutMe() {
  return (
    <>
    <main className='about-main'>
    <section className='sec-one'>
      <div className="part-one">
        <p className='title'>Luay Abbas</p>
        <p className='title'>10.01.1981</p>
        <ul >
          <p>Previous training:</p> 
        <li> Further education (Weiterbildung) full stack web developer DCI - Digital Career Institute gGmbH,Berlin
        Dec. 2021 - Feb. 2023 </li>
        <li>Implementation of a one-year full-time education including technologies of the MERN</li>
        <li>  C1 professional German course 2020 cologne</li>
        <li>  B2 professional German course 2019 cologne</li>
        <li>  ICDL International Computer Driving Licence 2014 Syria</li>
        </ul>
        <ul>

        <p >Career:</p>
        <li> Primary school teacher  2000 - 2015, Syria</li>
        <li> Computer repair in one's own computer workshop</li>
        </ul>

      </div>
      <div className="middle"></div>
      <div className="part-two">
        <p >Knowleadge:</p>
        <ul>
          <p>Technologies:</p> 
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.Js</li>
          <li>Express</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Microsoft office</li>
        </ul>
      </div>
    </section>
    <section className='sec-two'></section>
  
    </main>
    </>
  )
}

export default AboutMe