import React from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'


function App() {
  useGSAP(()=>{
    gsap
    var menu = document.querySelector(".page1 i");
    var cross = document.querySelector(".box i");
    
    var tl = gsap.timeline();
    tl.to(".box", {
      right: 0,
      duration: 0.2,
    })

    tl.from(".box h3", {
      x: 100,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
    })

    tl.from(".box i",{
      opacity: 0
    })

    tl.pause()

    menu.addEventListener("click", function(){
      tl.play();
    })    

    cross.addEventListener("click", function(){
      tl.reverse();
    })

    function breakthetext(){
      var t1 = document.querySelector(".animation");
      var t1text = t1.textContent;
      var splittedtext = t1text.split("");
      var halflength = Math.floor(splittedtext.length/2);
      var clutter = "";
      splittedtext.forEach(function(ele, indx){
        if(indx < halflength){
          clutter += `<span class="a">${ele}</span>`
        }
        else{
          clutter += `<span class="b">${ele}</span>`
        }
      })
      t1.innerHTML = clutter;
    }

    breakthetext();

    gsap.from(".animation .a", {
      y: 50,
      scale: 0,
      opacity: 0,
      duartion: 0.1,
      stagger: 0.2,
      ease: "bounce.out",
      rotate: 360
    })

    gsap.from(".animation .b", {
      y: -50,
      scale: 0,
      opacity: 0,
      duartion: 0.1,
      stagger: -0.1,
      ease: "bounce.out",
      rotate: 360
    })

  })
  return (
    <main>
      <div className="page1">
          <div className="Heading">
            <h1>PORTFOLIO</h1>
          </div>
          <i className="ri-menu-3-line"></i>
      </div>
      <div className="box">
          <h3>Home</h3>
          <h3>Work</h3>
          <h3>About Us</h3>
          <h3>Contact Us</h3>
          <i className="ri-close-line"></i>
      </div>
      <div className="headline">
        <h1 className="animation">LEARNING-DEVELOPMENT</h1>
      </div>
    </main>
  )
}

export default App
