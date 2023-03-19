import { useState } from "react";
const aboutMeText = {
  greeting: "Hello, my name is Luigi Magdamit!",
  desc1: "I am a recent UCLA graduate with a strong background in programming and data science. I possess a diverse set of skills that includes proficiency in various programming languages such as Python, Javascript, Rust, Java, and C++. I also have a deep understanding of data analysis and visualization, which allows me to extract meaningful insights from complex datasets.",
  desc2: "Throughout my time at UCLA, I honed my skills through classes & hands-on projects, where I had the opportunity to work on real-world problems and gain practical experience. My passion for technology and innovation has driven me to constantly learn and stay up-to-date with the latest trends in the field.",
  desc3: "Outside of tech, I am a passionate dancer, reader, musician and runner, and I am always happy to connect with others! ",
  email: "luigimagdamit@g.ucla.edu",
  resumeLink: "https://drive.google.com/file/d/1IwOSOM1F3Ai1d4CZQBzGUGtWopTA72i5/view?usp=sharing"
}

const educationText = {
  school1: "University of California, Los Angeles (UCLA)",
  school1degree: "Bachelor of Science (B.S) Degree in Statistics, GPA: 3.2",
  coursework: "Computation & Optimization, Web Development & GIS, Practice of Statistical Consulting, Data Analysis & Regression, Statistical Models & Data Mining, Computational Statistics, Geostatistical Analysis",

  school2: "Norco College",
  school2degree: "Associate of Science Degree in Computer Science & Mathematics, GPA: 4.0",
  coursework2: "Data Structures & Algorithms, Object Oriented Programming, Programming Concepts & Methodologies, Advanced Objects, Java Programming, C++ Programming"
}
export function AboutMe() {
    const [color,setColor]=useState("60px 10px 18px black");
      function onHover() {
        setColor("60px 40px 60px white")
      }
      function onLeave() {
        setColor("60px 10px 18px black")
      }
    return (
      <div className = "aboutme" id = "aboutme" style={{boxShadow: color}} onMouseEnter={()=>onHover()} onMouseLeave={()=>onLeave()}>
        <h1>About Me</h1>
        <hr></hr>
        <p>{aboutMeText.greeting}</p>
        <p>{aboutMeText.desc1}</p>
        <p>{aboutMeText.desc2}</p>
        <p>{aboutMeText.desc3}</p>
      
        <b><p>Email: {aboutMeText.email}</p></b>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href=aboutMeText.resumeLink;}}
        > 
          Click here to see my resume!
        </button>
    </div>
    )
  }



export function Education() {
    return (
      <div className = "aboutme" id = "education">

        <h1>Education</h1>
        <hr></hr>
        <h2>{educationText.school1}</h2>
        <h4>{educationText.school1degree}</h4>
        <i>Relevant Coursework: {educationText.coursework}</i>

        <h2>{educationText.school2}</h2>
        <h4>{educationText.school2degree}</h4>
        <i>Relevant Coursework: {educationText.coursework2}</i>

      </div>
    )
  }

export function Skills() {
    return (
      <div className = "aboutme" id ="skills">
        <h1>Skills</h1>
        <p className='skillsP'>Some of what I've learned in and out of school.</p>
        <hr></hr>
        <h2>Languages</h2>
        <ul>
          <li>R (Fluent)</li>
          <li>Python (Fluent)</li>
          <li>Rust (Proficient)</li>
          <li>HTML5 & CSS3 (Proficient)</li>
          <li>JavaScript (Proficient)</li>
          <li>Java (prior experience)</li>
          <li>React (prior experience)</li>
          <li>C++ (prior experience)</li>
          <li>SQL (prior experience)</li>
        </ul>
      </div>
    )
  }