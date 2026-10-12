const areas = [
  { n: "01", title: "Teaching & Learning", text: "Computer science concepts, clear explanations, course notes, and practical learning resources." },
  { n: "02", title: "Software Projects", text: "Useful digital products, experiments, and projects built with thoughtful engineering." },
  { n: "03", title: "Research & Ideas", text: "Research interests, academic work, emerging technologies, and questions worth exploring." }
];

export default function Home() {
  return <main>
    <div className="announcement"><span className="status-dot" /> PERSONAL WEBSITE · CURRENTLY BEING BUILT</div>
    <header className="site-header shell">
      <a className="wordmark" href="#home"><span className="mark">SL</span><span>Sushil Lamichhane<span className="wordmark-sub">Educator · Developer · Research</span></span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#teaching">Teaching</a><a href="#projects">Projects</a><a href="#research">Research</a></nav>
      <a className="header-contact" href="#contact">Let’s connect ↗</a>
    </header>
    <section className="hero shell" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> A PERSONAL SPACE FOR IDEAS & BUILDING</div>
        <h1>Curious by nature.<br /><span>Building with purpose.</span></h1>
        <p className="hero-description">I’m Sushil Lamichhane — a computer science educator and software developer interested in making technology easier to understand and more useful in the real world.</p>
        <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work ↗</a><a className="text-link" href="#about">A little about me ↓</a></div>
        <div className="hero-meta"><div><span className="meta-label">MY APPROACH</span><span className="meta-value">Learn · Build · Share</span></div><div><span className="meta-label">MY INTERESTS</span><span className="meta-value">Education, software & research</span></div></div>
      </div>
      <div className="hero-art" aria-label="Decorative SL monogram"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-glow" /><div className="art-card card-top">✳ &nbsp; Ideas into impact</div><div className="art-monogram">S<span>L</span><i>.</i></div><div className="art-caption">— A work in progress, by design.</div><div className="art-card card-bottom"><span className="code-symbol">&#123; &#125;</span> Always learning</div><span className="art-spark spark-one">✳</span></div>
    </section>
    <section className="intro-strip"><div className="shell intro-inner"><span className="strip-label">THREE CONNECTED WORLDS</span><div className="strip-items"><span>Education</span><b>·</b><span>Engineering</span><b>·</b><span>Research</span></div><span className="strip-note">One ongoing journey</span></div></section>
    <section className="section shell" id="about"><div className="section-heading"><div><span className="eyebrow">01 / THE PERSON BEHIND THE WORK</span><h2>Technology is better<br />when we <em>share what we learn.</em></h2></div><p className="section-lead">This site is my home on the web: a place to share what I teach, what I build, and the ideas I want to explore next.</p></div>
      <div className="focus-grid">{areas.map(a => <a className="focus-card" href={a.n === "01" ? "#teaching" : a.n === "02" ? "#projects" : "#research"} key={a.n}><span className="focus-number">{a.n}</span><span className="focus-arrow">↗</span><h3>{a.title}</h3><p>{a.text}</p><span className="card-link">Explore section →</span></a>)}</div>
    </section>
    <section className="quote-band" id="teaching"><div className="shell quote-inner"><span className="quote-mark">“</span><div><p>Good technology solves problems. Good teaching helps more people solve them.</p><span>THE PRINCIPLE I TRY TO BRING TO MY WORK</span></div></div></section>
    <section className="section shell split-section" id="projects"><div><span className="eyebrow">02 / PROJECTS & PRACTICE</span><h2>From concepts<br />to <em>working software.</em></h2></div><div className="split-content"><p>This portfolio will grow alongside my work. I’ll use it to document projects, share technical lessons, and show the thinking behind what I build.</p><div className="coming-card"><span className="coming-icon">↗</span><div><strong>Project showcase</strong><span>Projects, source code, demos, and lessons learned will appear here.</span></div><span className="coming-tag">COMING SOON</span></div></div></section>
    <section className="research-section" id="research"><div className="shell research-inner"><div><span className="eyebrow">03 / ACADEMIC CURIOSITY</span><h2>Questions today.<br /><em>Research tomorrow.</em></h2></div><div className="research-copy"><p>I’m interested in continuing to learn, developing research skills, and exploring ideas that connect computer science with real-world needs.</p><div className="research-tags"><span>Computer Science</span><span>Software Engineering</span><span>Technology in Education</span><span>Applied Research</span></div><p className="small-note">Research interests and publications will be updated as this work develops.</p></div><div className="research-watermark">R.</div></div></section>
    <section className="contact-section shell" id="contact"><div><span className="eyebrow">LET’S MAKE A CONNECTION</span><h2>Have an idea<br />worth <em>sharing?</em></h2><p>For teaching, software projects, research conversations, or collaboration, I’d be glad to hear from you.</p></div><a className="button button-light" href="mailto:hello@example.com?subject=Hello%20Sushil">Start a conversation ↗</a></section>
    <footer className="site-footer shell"><a className="footer-brand" href="#home">SL<span>.</span></a><span>© {new Date().getFullYear()} Sushil Lamichhane. Built with curiosity.</span><a href="#home">Back to top ↑</a></footer>
  </main>;
}
