const header =  document.querySelector('header')
const qualification =  document.querySelector(".qualification-sec")
const q1 =  document.querySelector("#q-1");
const q2 =  document.querySelector("#q-2");
const q3 =  document.querySelector("#q-3");
const qSvg =  document.querySelector("#q-svg");
// about section items
const aboutSection =  document.querySelector("#about");  
const aboutImg =  document.querySelector(".about-img");  
const aboutContainer =  document.querySelector(".about-container");  
const aboutText =  document.querySelector(".about-text");  
// skil section
const skillContainer = document.querySelectorAll(".skill-container")
const skillBar = document.querySelectorAll(".bar")
const skillBarJs = document.querySelectorAll(".bar-js")
var tl = new TimelineMax();
// main-home-scetion
tl.fromTo(header, {y:-100}, {duration:1.2,y:0,ease: "power2.inOut"})
tl.fromTo("#main-svg", {opacity:"0" ,x:-100}, {duration:1.5,opacity:"1" ,x:0,ease: "power2.inOut"},"-=1.2")
.fromTo("#intro-container", {opacity:"0" ,x:100}, {duration:1.5,opacity:"1",x:0,ease: "power2.inOut"},"-=1.5")
// main-home-scetion
gsap.registerPlugin(ScrollTrigger);
// about-me
let about = gsap.timeline( {
    scrollTrigger: {
        trigger:aboutSection,
        start: "top 60% ",
        end:"center 10%",
        toggleActions: "play reverse restart reverse", 
       markers:false,
      
    } // start the animation when ".box" enters the viewport (once) 
  });
  about.fromTo(aboutContainer, {opacity:"0",y:100}, {duration:1.5,opacity:"1",y:0,ease: "power2.inOut"},"-=1")
  about.fromTo(aboutImg, {opacity:"0" ,y:70}, {duration:1.5,opacity:"1",y:0,ease: "power2.inOut"},"-=1")
  about.fromTo(aboutText, {opacity:"0" ,y:70}, {duration:1.5,opacity:"1",y:0,ease: "power2.inOut"},"-=1")
  

//about-me

// qualification

let ql = gsap.timeline( {
    scrollTrigger: {
        trigger:qualification,
        start: "top 80% ",
        end:"center 10% ",
        toggleActions: "play reverse restart reverse", 
       markers:false,
      
    } // start the animation when ".box" enters the viewport (once) 
  });
  ql.fromTo(q1, {opacity:"0" ,x:-100}, {duration:1,opacity:"1" ,x:0,ease: "power2.inOut"})
  ql.fromTo(q2, {opacity:"0" ,x:-100}, {duration:1,opacity:"1" ,x:0,ease: "power2.inOut"},"-=.8")
  ql.fromTo(q3, {opacity:"0" ,x:-100}, {duration:1,opacity:"1" ,x:0,ease: "power2.inOut"},"-=.7")
  ql.fromTo(qSvg, {opacity:"0" ,x:-100}, {duration:1,opacity:"1" ,x:0,ease: "power1.inOut"},"-=.9")
// qualification
// skills
let skill = gsap.timeline( {
    scrollTrigger: {
        trigger:skillContainer,
        start: "top 80% ",
        end:"center 10% ",
        toggleActions: "play reverse restart reverse", 
       markers:false,
      
    } // start the animation when ".box" enters the viewport (once) 
  });
skill.fromTo(skillContainer, {opacity:"0" ,height:0}, {duration:1,opacity:"1",height:"70",ease: "power1.inOut"})
skill.fromTo(skillBar, {opacity:"0" ,width:0}, {duration:1,opacity:"1",width:"90%",ease: "power1.inOut"},"+=.2")
skill.fromTo(skillBarJs, {opacity:"0" ,width:0}, {duration:1,opacity:"1",width:"80%",ease: "power1.inOut"},"-=1")
// skills
