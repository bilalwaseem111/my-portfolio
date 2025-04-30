// pages/index.jsx
import React, { useRef } from 'react';
import Image from 'next/image';
const projects = [
 
  { title: 'My Ai Chat Bot', description: 'An intelligent conversational chatbot built using AI to assist users with smart responses.', link: 'https://mychatbox-xrqfzxdl83xdums9hujpve.streamlit.app/', image: '/aipic.png' },
     { title: 'My Watch World',
    description: 'A sleek luxury watch shopping website featuring 30+ dynamic timepieces from brands like Rolex, Omega, and Tag Heuer. Fully animated, responsive, and connected with social platforms.',
    link: 'https://watch-world-six.vercel.app/',
    image: '/thumb.png'
  },
  { title: 'My Clutch Simulator App', description: 'A mechanical clutch simulation tool demonstrating clutch dynamics and functionality interactively.', link: 'https://clutch-app-two.vercel.app/', image: '/clutchpic.png' },
  { title: 'Car Rental App', description: 'A modern, user-friendly web app for browsing, booking, and managing car rentals seamlessly.', link: 'https://hackathon3t7.vercel.app/', image: '/rentalpic.png' },
  { title: 'My Scientific Calculator', description: 'A stylish, interactive calculator supporting complex scientific operations and animations.', link: 'https://my-scientifiic-calculator-we9y.vercel.app/', image: '/calculatorpic.png' },
  { title: 'My Currency Convertor App', description: 'A real-time currency converter with smooth animations and support for multiple currencies.', link: 'https://my-currency-converter-app-vwrg.vercel.app/', image: '/currencypic.png' },
  { title: 'My Tic-Tac-Toe Game', description: 'An animated and fun version of the classic tic-tac-toe game to play and enjoy.', link: 'https://my-tic-tac-toe-game-tan.vercel.app/', image: '/ticpic.png' },
  { title: 'My Personal Library', description: 'A digital library manager to keep track of books, reading status, and personal book collections.', link: 'https://library-website-pj9s.vercel.app/', image: '/librarypic.png' },
  { title: 'Interactive CV Builder App', description: 'A professional CV builder where users can dynamically generate and preview their resumes.', link: 'https://mycvgenerator-n7y2p6qnakk3akwd68gtez.streamlit.app/', image: '/cvpic.png' },
  { title: 'Unit Convertor App', description: 'A sleek tool to convert between units of measurement like length, mass, temperature, and more.', link: 'https://assign2unitconvertor-h7bcsjbnu55cufvgdbfodz.streamlit.app/', image: '/unitpic.png' },
  { title: 'Password Strength Meter', description: 'A security-focused tool that checks and visually rates the strength of your passwords.', link: 'https://passwordstrengthmeter-nyzaylaudj3hymcfgkevag.streamlit.app/', image: '/passwordpic.png' },
  { title: 'Secure Data App', description: 'A privacy-first web app focused on securely handling and presenting user data.', link: 'https://assignment5-pejbur8y2ewod4m9xbyunw.streamlit.app/', image: '/datapic.png' },
  { title: 'My Thermodynamic Genius Lab', description: 'An educational thermodynamics app to explore engineering formulas and simulations.', link: 'https://thermo-idxcfddfddlpeuh2cuf6cc.streamlit.app/', image: '/thermopic.png' }
];



export default function Home() {
  const infoRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="container">
      <header className="header">
        <h1 className="shiny-text">My Portfolio</h1>
        <nav>
          <button className="btn" onClick={() => scrollTo(infoRef)}>Info</button>
          <button className="btn" onClick={() => scrollTo(educationRef)}>Education</button>
          <button className="btn" onClick={() => scrollTo(projectsRef)}>Projects</button>
          <button className="btn" onClick={() => scrollTo(skillsRef)}>Skills</button>
          <button className="btn" onClick={() => scrollTo(contactRef)}>Contact</button>
        </nav>
      </header>

      <section className="profile">
        <div className="personal-info">
          <div className="info-sequence">
            <p className="info-line">Hi, I am <span>Bilal Waseem</span></p>
            <p className="info-line">I am a <span>Full Stack Developer</span></p>
            <p className="info-line">I am studying <span>Mechanical Engineering</span> &amp; <span>AI</span></p>
            <p className="info-line">I love to create <span>responsive websites</span> &amp; <span>projects</span></p>
            <p className="info-line">For more <span>info</span>, watch my <span>projects below</span></p>
          </div>
        </div>
        <div className="profile-picture">
          <Image src="/bilalwaseempic.png" alt="Bilal Waseem" width={200} height={200} className="rounded-full" />
        </div>
      </section>

      <section ref={infoRef} id="info" className="info-section">
  <h2 className="info-heading">About Me</h2>
  <ul className="info-list">
    <li className="info-item">
      Mechanical Engineering Student at NED University | Tech Innovator | Governor’s Initiative Q3
    </li>
    <li className="info-item">
      I don’t just learn — I build, create, and innovate!,and love to create responsive websites and many more 
    </li>
    <li className="info-item">
      From SolidWorks &amp; AutoCAD to MATLAB simulations, I bridge engineering and tech.
    </li>
    <li className="info-item">
      Passionate about React, Next.js &amp; TypeScript—exploring AI, Web 3.0 &amp; the Metaverse.
    </li>
    <li className="info-item">
      Constantly problem-solving, experimenting, and pushing boundaries.
    </li>
  </ul>
</section>



      <section className="edu-main" id="about" ref={educationRef}>
  <div className="edu-text">
    <h2>EDUCATION</h2>
  </div>

  {/* Box 1 - Mechanical Engineering */}
  <div className="box-con-edu">
    {/* <h3>Bachelor in Mechanical Engineering (BME) from NED University — In Progress</h3> */}
    <p>
      Studying Bachelor in Mechanical Engineering (BME) from NED University — In Progress. A Bachelor in Mechanical Engineering is a University degree centered on the principles of mechanics, energy, and materials. It teaches design, analysis, and problem-solving skills related to machines and mechanical systems. This degree prepares students for careers in fields like automotive, aerospace, manufacturing, robotics, and energy systems.
    </p>
  </div>

  {/* Box 2 - Web 3.0 and Metaverse */}
  <div className="box-con-edu">
    {/* <h3>Certified Web 3.0 &amp; Metaverse (Governor Initiative of IT Program)</h3> */}
    <p>
    Certified Web 3.0 &amp; Metaverse (Governor Initiative of IT Program) The Certified Web 3.0 &amp; Metaverse Program explores the evolution of the internet, emphasizing blockchain technology, immersive virtual environments, and digital asset ownership. Participants gain hands-on experience in building decentralized applications (dApps) and designing interactive 3D spaces. This certification equips learners with the skills needed to thrive in emerging tech domains like decentralized finance (DeFi), virtual reality (VR), and the metaverse economy.
    </p>
  </div>

  {/* Box 3 - Web Development Certificate */}
  <div className="box-con-edu">
    {/* <h3>Certificate of Web Development</h3> */}
    
    <p>
    Certificate of Web Development provided a solid foundation in web development, covering essential technologies like HTML, CSS, and JavaScript. I learned how to design, structure, and enhance web pages with interactive elements. As part of this I also completed a hands-on internship with Code With Alpha, where I gained practical experience and earned an additional certificate. This training marked a strong starting point in my web development career.
    </p>
  </div>

  {/* Box 4 - Sanad of Hafiz-e-Quran */}
  <div className="box-con-edu">
    {/* <h3>Sanat of Hafiz-e-Quran</h3> */}
    <p>
      Achieving the Sanat of Hafiz-e-Quran is a great honor and a symbol of strong dedication and faith. Memorizing the entire Holy Quran is a spiritual milestone and a lifelong blessing that holds deep respect in both religious and personal life. This esteemed certification was awarded by Wafaq ul Madaris, further affirming the authenticity and recognition of this achievement.
    </p>
  </div>
</section>


      <section ref={projectsRef} className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <Image src={p.image} alt={p.title} width={400} height={250} className="project-image" />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="view-button">View Project</a>
          </div>
        ))}
      </section>

      <section ref={skillsRef} className="skills-section">
  <div className="skills-container">
    <h2 className="section-heading">Skills</h2>
    <div className="skills-grid">
      {[
        { name: "Hifz ul Quran", img: "/hifzquranpic.png" },
        { name: "HTML", img: "/htmlpic.png" },
        { name: "CSS", img: "/csspic.png" },
        { name: "JavaScript", img: "/javascriptpic.png" },
        { name: "React", img: "/reactpic.png" },
        { name: "Next.js", img: "/nextjspic.png" },
        { name: "Python", img: "/pythonpic.png" },
        { name: "Java", img: "/javapic.png" },
        { name: "Tailwind", img: "/tailwindcsspic.png" },
        { name: "TypeScript", img: "/typescriptpic.png" },
        { name: "Git", img: "/gitpic.png" },
        { name: "SolidWorks", img: "/solidworkspic.png" },
        { name: "AutoCAD", img: "/autocadpic.png" },
        { name: "Matlab", img: "/matlabpic.png" }
      ].map((s, idx) => (
        <div key={idx} className="skill-card">
          <Image src={s.img} alt={s.name} width={60} height={60} />
          <h4>{s.name}</h4>
        </div>
      ))}
    </div>
  </div>
</section>



      <footer ref={contactRef} className="footer-section">
  <div className="footer-container">
    <h2 className="contact-heading">Contact Me</h2>
    <div className="footer-content">
      <div className="contact-info">
        <div className="contact-item">
          <Image src="/emailiconpic.png" alt="Email" width={34} height={34} />
          bilalwaseem.thala@gmail.com
        </div>
        <div className="contact-item">
          <Image src="/callpic.jpg" alt="Phone" width={34} height={34} />
          +92-337-241-2661
        </div>
        <div className="contact-item">
          <Image src="/locationpic.png" alt="Location" width={34} height={34} />
          Karachi, Pakistan
        </div>
      </div>
      <div className="social-media">
        <a href="https://linkedin.com/in/bilal-waseem-b44006338" className="social-link">
          <Image src="/lpic.png" alt="LinkedIn" width={54} height={54} />
        </a>
        <a href="https://github.com/bilalwaseem111" className="social-link">
          <Image src="/gpic.png" alt="GitHub" width={54} height={54} />
        </a>
        <a href="https://www.facebook.com/share/156R4QStxtw/?mibextid=qi2Omg" className="social-link">
          <Image src="/fpic.png" alt="Facebook" width={54} height={54} />
        </a>
        <a href="https://www.instagram.com/bilalwaseem099?igsh=dTM0Z2Z5N2szdHNq" className="social-link">
          <Image src="/inpic.png" alt="Instagram" width={54} height={54} />
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}
