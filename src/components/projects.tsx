import { useState } from "react"

let box1 = {
  githubLink: "https://github.com/luigimagdamit/portfolioreact",
  pic: "https://github.com/luigimagdamit/portfoliopage/raw/main/pics/5.png?raw=true",
  title: "Portfolio Website [React, TypeScript, HTML/CSS]",
  description: "Throughout your time at UCLA, you honed your skills through various internships and hands-on projects, where you had the opportunity to work on real-world problems and gain practical experience. Your passion for technology and innovation has driven you to constantly learn and stay up-to-date with the latest trends in the field."
}
  
let box2 = {
  githubLink: "https://github.com/luigimagdamit/zoomphonebook",
  pic: "https://github.com/luigimagdamit/portfoliopage/raw/main/pics/2.png?raw=true",
  title: "ContactCloud CLI Video Call Manager [Rust]",
  description: "Throughout your time at UCLA, you honed your skills through various internships and hands-on projects, where you had the opportunity to work on real-world problems and gain practical experience. Your passion for technology and innovation has driven you to constantly learn and stay up-to-date with the latest trends in the field."
}
  
let box3 = {
  githubLink: " https://github.com/luigimagdamit/AthenaeumMobileApp",
  pic: "https://github.com/luigimagdamit/portfoliopage/raw/main/pics/4.png?raw=true",
  title: "Athenaeum Library Mobile Application [React Native, JS, Redux]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}
  
let box4 = {
  githubLink: "https://github.com/luigimagdamit/musical-lamp",
  pic: "https://github.com/luigimagdamit/musical-lamp/raw/main/Screenshot12.png",
  title: "COVID-19 & Hate Crime Web Application [JS, HTML/CSS]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}
  
let box5 = {
  githubLink: "https://github.com/luigimagdamit/raytracer",
  pic: "https://raytracing.github.io/images/img-1.04-normals-sphere.png",
  title: "Raytracer 3D Rendering in Rust [Rust]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}
  
let box6 = {
  githubLink: "https://github.com/luigimagdamit/MuseAI",
  pic: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg",
  title: "MuseAI [Node.js, React, Express, JavaScript]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}

let box7 = {
  githubLink: "https://github.com/luigimagdamit/cardgames",
  pic: "https://github.com/luigimagdamit/portfoliopage/raw/main/pics/3.png?raw=true",
  title: "Card Game Console Application [Java]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}

let box8 = {
  githubLink: "https://luigisetchasketch.netlify.app",
  pic: "https://github.com/luigimagdamit/portfoliopage/raw/main/pics/6.png?raw=true",
  title: "Etchasketch [JavaScript, HTML/CSS]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}
  
let box9 = {
  githubLink: "https://github.com/luigimagdamit/gradientdescent",
  pic: "https://github.com/luigimagdamit/portfoliopage/raw/main/pics/7.png?raw=true",
  title: "Gradient Descent Algorithm Implementation [R, Computational Statistics]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}

let box10 = {
  githubLink: "https://spcnradio.netlify.app/",
  pic: "https://github.com/luigimagdamit/portfoliopage/raw/main/pics/1.png?raw=true",
  title: "Samahang Radio Web Application [JavaScript, React]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}

let box11 = {
  githubLink: "https://docs.google.com/presentation/d/1fictKK3G1zPvS_XIYyyc9wfakqf76Grv/edit?usp=sharing&ouid=105330926834459686534&rtpof=true&sd=true",
  pic: "https://ca-times.brightspotcdn.com/dims4/default/b6d9fe0/2147483647/strip/true/crop/3000x2000+0+0/resize/2400x1600!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2f%2F1e%2Ffd540a7e43db92852097f94e5eb5%2Fla-fi-mortgage-rates-housing-market-944974.jpg",
  title: "Housing Prices ML Prediction & Inference [R]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}
let box12 = {
  githubLink: "https://github.com/luigimagdamit/weegeebot",
  pic: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_638,h_442/https://databasecamp.de/wp-content/uploads/lstm-architecture-1024x709.png",
  title: "WeegeeBot - Text Generation Neural Network [Python, Keras]",
  description: " I developed a simple mobile application using React Native that allows users to browse and search for books from a library. The application pulls data from a RESTful API and displays the book information in a clean and user-friendly interface. Users can browse books by genre, search for specific titles or authors, and view details such as the book summary and cover image."
}

export default function Projects() {
    let createBox = (boxdata: any) => {
      const [color,setColor]=useState("rgba(22, 22, 22, 0.726)");
      
      function onHover() {
        setColor("rgba(22, 22, 22, 0.226)")
      }
      
      function onLeave() {
        setColor("rgba(22, 22, 22, 0.726)")
      }
      return(
        <a className = "box" href={boxdata.githubLink}
            onMouseEnter={() => onHover()}
            onMouseLeave={() => onLeave()}
            style={{background: color}}>
            
          <div className="boxitem">
            <img className = "pic" src={boxdata.pic}/>
            <h3>{boxdata.title}</h3>
          </div>
        </a>
      )
    }
    return (
      <div>      
        <div className = "projects">
          {/* WEB AND MOBILE SECTION */}
          <h3 className = "boxheader">Web & Mobile App Development</h3>    
          <div className = "gallery" >
            { createBox(box1) }
            { createBox(box3) }
            { createBox(box4) }
            { createBox(box6) }
            { createBox(box10) }
            { createBox(box8) }
          </div>
          {/* SOFTWARE SECTION */}
          <h3 className = "boxheader">Software Development</h3>
          <div className = "gallery">        
            { createBox(box7) }
            { createBox(box2) }
            { createBox(box5) } 
          </div>
          {/* MACHINE LEARNING AND DATA SCIENCE */}
          <h3 className = "boxheader">Machine Learning & Data Science</h3>
          <div className = "gallery"> 
            { createBox(box9) }
            { createBox(box11) }
            { createBox(box12) }
          </div>
        </div>
    </div>
    )
  }