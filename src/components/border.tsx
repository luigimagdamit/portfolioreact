import { AnimatedText } from "./animatedtext";

let borderText = {
  intro: "Hi, I'm Luigi!",
  heading1: "I am a recently graduated statistics student from the University of California, Los Angeles (UCLA), with skills in software engineering, data science, statistics and mathematics.",
  heading2: "I'm currently open to full-time positions, part-time internships and freelance development work. Feel free to get in touch to discuss these or just to have a chat!",
  pfpdesc: "this is me btw 😃"
};

let borderLinks = {
  linkedin: "https://www.linkedin.com/in/luigi-magdamit/",
  github: "https://github.com/LuigiMagdamit",
  pfp: "https://github.com/luigimagdamit/landing-page/blob/main/images/canvas.png?raw=true"
}

let icons = {
  linkedin: "https://innerventur.es/wp-content/uploads/2020/10/white-linkedin-icon.png",
  github: "https://github.com/luigimagdamit/landing-page/blob/main/images/25231.png?raw=true"
}

export default function Border() {
    return (
      <div className = "border">
      <div className = "left-border">
        <AnimatedText />
        <p>{borderText.heading1}</p>
        <p>{borderText.heading2}</p>
        <a href= {borderLinks.linkedin}>
          <img 
            id = "linkedin" 
            src={icons.linkedin} 
          />
        </a>
        <a href={borderLinks.github}>
          <img 
            id = "linkedin" 
            src={icons.github} />
        </a>
      </div>  
      <div className="right-border">
        <img 
          className = "pfp" 
          src={borderLinks.pfp} 
          alt="" />
        <p>{borderText.pfpdesc}</p>
      </div>
      </div>
    )
  }