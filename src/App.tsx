import './App.css'

const projects = [
  { number: '01', title: 'Novi Finance', type: 'Product design · Web app', color: 'project--lime' },
  { number: '02', title: 'Morrow Studio', type: 'Brand identity · Website', color: 'project--violet' },
  { number: '03', title: 'Field Notes', type: 'Creative direction · Editorial', color: 'project--orange' },
]

function App() {
  return <main>
    <nav className="nav" aria-label="Main navigation">
      <a className="logo" href="#top" aria-label="Ashan home">AD<span>.</span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a className="nav-cta" href="mailto:hello@example.com">Let’s talk <span>↗</span></a></div>
    </nav>
    <section className="hero" id="top">
      <div className="eyebrow"><span className="status-dot" /> Available for select projects</div>
      <h1>I design digital<br />experiences that <em>feel.</em></h1>
      <div className="hero-bottom"><p>Independent designer and developer crafting clear, characterful websites for ambitious people and brands.</p><a className="circle-link" href="#work" aria-label="View selected work">↓</a></div>
    </section>
    <section className="work" id="work">
      <div className="section-heading"><p>Selected work</p><p>2024—2026</p></div>
      <div>{projects.map((project) => <a className={`project ${project.color}`} href="#contact" key={project.number}><span className="project-number">{project.number}</span><div><h2>{project.title}</h2><p>{project.type}</p></div><span className="project-arrow">↗</span></a>)}</div>
    </section>
    <section className="about" id="about">
      <p className="section-label">A little about me</p>
      <div className="about-copy"><h2>Strategy, design, and code—<br />all under one roof.</h2><div><p>I help turn early ideas into memorable digital products. My approach blends thoughtful design with clean, responsive development.</p><ul><li><span>01</span> Creative direction</li><li><span>02</span> UI/UX design</li><li><span>03</span> Web development</li></ul></div></div>
    </section>
    <footer id="contact">
      <p>Have a project in mind?</p><a href="mailto:hello@example.com">Let’s make something<br /><em>great together.</em> <span>↗</span></a>
      <div className="footer-bottom"><p>© 2026 Ashan Dev</p><div><a href="#top">LinkedIn</a><a href="#top">Instagram</a><a href="#top">Back to top ↑</a></div></div>
    </footer>
  </main>
}

export default App
