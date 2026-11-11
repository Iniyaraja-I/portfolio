import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, Code2,
  Download, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone,
  Send, Sparkles, X, ExternalLink, Layers3, Smartphone, Database, Bot,
  Globe, ShieldCheck, Camera, Cloud, Workflow, ChevronRight
} from 'lucide-react';
import './styles.css';

const skills = [
  { title: 'AI-Assisted Application Development', icon: Code2, items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'ReactJS', 'AngularJS', 'jQuery', 'Bootstrap', 'Responsive Web Design', 'AJAX', 'REST API Integration'] },
  { title: 'Backend & Database', icon: Database, items: ['C#', 'Basic .NET Debugging', 'Production Support', 'MySQL', 'PostgreSQL', 'SQL Server'] },
  { title: 'Mobile Development', icon: Smartphone, items: ['Flutter', 'Android App Deployment', 'iOS App Deployment', 'Google Play Console', 'Apple App Store Connect'] },
  { title: 'AI & Development Tools', icon: Bot, items: ['ChatGPT', 'Claude', 'OpenAI Codex', 'LLM', 'RAG', 'AI-Assisted Development', 'VS Code', 'Visual Studio', 'Postman', 'pgAdmin', 'Nginx'] },
];

const projects = [
  {
    number: '01', name: 'FaceR', type: 'AI-powered security monitoring', role: 'Frontend Developer',
    icon: Camera, tone: 'mint',
    description: 'A real-time security monitoring platform that captures images through motion-detection cameras and uses the Tevion Engine to match enrolled individuals. Recognition results are presented through a monitoring interface.',
    features: ['Live camera streaming & monitoring', 'AI-based face detection and recognition', 'Alarm notifications', 'Camera mapping, zone mapping & E-Maps', 'User login and master management'],
    stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'AngularJS'],
    contribution: 'UI development, REST API integration and bug fixing.'
  },
  {
    number: '02', name: 'SACP', type: 'Smart security alarm platform', role: 'Full-Stack Developer',
    icon: ShieldCheck, tone: 'lavender',
    description: 'A device-integrated security alarm system with sensor inputs and outputs. It detects unauthorized activity and sends alerts to police and store owners through LAN and SIM connectivity.',
    features: ['Real-time alarm monitoring', 'Police and store-owner notifications', 'LAN and SIM-based communication', 'Sensor, partition and keypad management', 'Expander support for additional sensors'],
    stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
    contribution: 'New device R&D, UI and API integration, Nginx configuration, bug fixing and security vulnerability remediation using Burp Suite, HCL and Fortify.'
  },
  {
    number: '03', name: 'TitanHz Cloud', type: 'Cloud device & firmware management', role: 'Full-Stack Developer',
    icon: Cloud, tone: 'blue',
    description: 'An AWS-hosted cloud platform for managing devices across multiple sites and performing centralized firmware updates. Integrators upload firmware with access controls, while authorized users activate devices and deploy updates.',
    features: ['Centralized device management', 'AWS cloud-based hosting', 'Integrator-based firmware management', 'User authentication and access control', 'Authorized device activation & remote updates'],
    stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    contribution: 'UI development, REST API integration, Nginx hosting configuration and SSL certificate integration.'
  },
  {
    number: '04', name: 'Smart ASP Agent', type: 'QuickBooks & ASP integration', role: 'Full-Stack Developer',
    icon: Workflow, tone: 'peach',
    description: 'A web application that retrieves invoices, credit notes, purchase invoices and master data from QuickBooks, stores records using key-based mapping, and submits relevant data to ASP systems with response tracking.',
    features: ['QuickBooks data synchronization', 'Invoice, credit note & bill management', 'Master data management', 'Key-based database mapping', 'ASP data submission and response monitoring'],
    stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    contribution: 'UI development, agent creation, database management, API and Nginx integration, installation, customer support and AI-assisted development using Codex.'
  },
];

const education = [
  { degree: 'M.Sc. Mathematics', college: 'Dharmapuram Aadhinam Arts College', place: 'Mayiladuthurai', year: '2022', score: '78.35%' },
  { degree: 'B.Sc. Mathematics', college: 'AVC College (Autonomous)', place: 'Mayiladuthurai', year: '2020', score: '57.96%' },
];

function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']];
  const closeMenu = () => setMenuOpen(false);
  const submitContact = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(data.get('subject'));
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:rajaiiniya1106@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">I</span><span>Iniyaraja<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
  <span className="pulse"></span>
  FRONT-END DEVELOPER
  <span className="availability-sep">·</span>
  FULL-STACK DEVELOPER
  <span className="availability-sep">·</span>
  3.5+ YEARS
</div>
<h1>
  Front-End &<br />
  Full-Stack Developer<br />
  <span className="gradient-text">
    Building with AI.
  </span>
</h1>
            <p className="hero-intro">
  I'm Iniyaraja — a Front-End and Full-Stack Developer
  with 3.5+ years of experience building responsive web
  applications, integrating APIs, managing databases,
  and developing end-to-end solutions using AI-assisted
  tools like ChatGPT, Claude and OpenAI Codex.
</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
              <a className="button button-secondary" href="/assets/Iniyaraja-Resume.pdf" download>Download CV <Download size={17}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Tamil Nadu, India</span><span><BriefcaseBusiness size={15}/> Open to opportunities</span></div>
          </div>
          <div className="hero-visual">
            <div className="photo-backdrop"></div>
            <div className="photo-frame"><img src="/assets/profile.png" alt="Professional portrait of Iniyaraja" /></div>
            <div className="floating-card card-code"><span className="mini-icon"><Code2 size={17}/></span><span><b>Clean code</b><small>Thoughtful solutions</small></span></div>
            <div className="floating-card card-ai"><span className="mini-icon"><Sparkles size={17}/></span><span><b>AI-assisted</b><small>Build with purpose</small></span></div>
            <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="stats-band">
          <div className="wrap stats-grid">
            <div><strong>3.5<span>+</span></strong><small>Years of experience</small></div>
            <div><strong>04</strong><small>Real-world projects</small></div>
            <div><strong>10<span>+</span></strong><small>Core technologies</small></div>
            <div><strong>Web <span>&</span> Mobile</strong><small>Development focus</small></div>
          </div>
        </section>

        <section className="section wrap about-section" id="about">
          <div className="about-aside"><span className="vertical-label">A LITTLE ABOUT ME</span><div className="about-mark">I<span>.</span></div></div>
          <div className="about-content">
            <SectionTitle eyebrow="ABOUT ME" title={<>Developer by craft.<br/><span className="muted-heading">Problem-solver by nature.</span></>} />
            <p className="lead">
  Front-End and Full-Stack Developer with 3.5+ years
  of professional experience in web application
  development, maintenance and production support.
</p>

<p>
  I specialize in building responsive frontend
  applications, integrating REST APIs, working with
  databases and supporting backend application
  development. My technical experience includes
  ReactJS, JavaScript, AngularJS, jQuery, C#,
  basic .NET debugging, MySQL, PostgreSQL and SQL Server.
</p>

<p>
  I leverage AI-powered development tools such as
  ChatGPT, Claude and OpenAI Codex to accelerate
  application development, troubleshoot issues,
  improve productivity and build end-to-end
  application solutions. I also have foundational
  knowledge of LLM and RAG.
</p>
            <div className="about-tags"><span><Check size={14}/> Responsive applications</span><span><Check size={14}/> API integrations</span><span><Check size={14}/> Production support</span></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="wrap">
            <SectionTitle eyebrow="WHAT I WORK WITH" title={<>My technical <span className="gradient-text">toolkit.</span></>} text="A practical mix of frontend, backend, mobile, database and AI-assisted development skills." />
            <div className="skills-grid">
              {skills.map((group, i) => {
                const Icon = group.icon;
                return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={21}/></span><span className="skill-index">0{i+1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>;
              })}
            </div>
          </div>
        </section>

        <section className="section wrap experience-section" id="experience">
          <SectionTitle eyebrow="THE JOURNEY" title={<>Experience that <span className="gradient-text">builds.</span></>} text="Professional experience across web applications, connected devices and customer-facing platforms." />
          <div className="experience-card">
            <div className="timeline-rail"><span></span></div>
            <div className="experience-main">
              <div className="experience-head"><div><span className="eyebrow">FEB 2023 — AUG 2026</span><h3>UI Client Programmer</h3><p className="company">Sardonyx Private Limited</p></div><span className="experience-badge">3.5 years</span></div>
              <ul className="experience-list">
                <li>Developed and maintained responsive web application interfaces using ReactJS, JavaScript, AngularJS, jQuery, HTML and CSS.</li>
                <li>Integrated REST APIs and built monitoring, event, alarm, notification and reporting modules.</li>
                <li>Investigated production issues, performed root-cause analysis, fixed defects and supported application releases.</li>
                <li>Maintained Flutter applications and supported Android/iOS application deployment.</li>
                <li>Worked on basic .NET debugging and application maintenance.</li>
                <li>Supported junior developers and trained new frontend team members.</li>
<li>Used AI-assisted development tools to improve productivity.</li>
              </ul>
              <div className="project-inline-label">PROJECTS CONTRIBUTED TO</div>
              <div className="inline-projects">{projects.map(p => <span key={p.name}>{p.name}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="wrap">
            <SectionTitle eyebrow="SELECTED WORK" title={<>Projects with <span className="gradient-text">purpose.</span></>} text="A closer look at platforms I helped build, maintain and improve." />
            <div className="projects-list">
              {projects.map((p) => {
                const Icon = p.icon;
                return <article className={`project-card ${p.tone}`} key={p.name}>
                  <div className="project-number">{p.number}</div>
                  <div className="project-main">
                    <div className="project-heading"><div><span className="project-type">{p.type}</span><h3>{p.name}</h3></div><span className="role-pill">{p.role}</span></div>
                    <p className="project-description">{p.description}</p>
                    <div className="project-detail-grid"><div><h4>KEY FEATURES</h4><ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul></div><div><h4>MY CONTRIBUTION</h4><p>{p.contribution}</p></div></div>
                    <div className="project-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                  </div>
                  <div className="project-art"><div className="art-ring ring-a"></div><div className="art-ring ring-b"></div><div className="art-icon"><Icon size={42} strokeWidth={1.4}/></div><span className="art-caption">PROJECT {p.number}</span></div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="section wrap education-section" id="education">
          <SectionTitle eyebrow="EDUCATION" title={<>Learning is a <span className="gradient-text">foundation.</span></>} />
          <div className="education-grid">
            {education.map((e, i) => <article className="education-card" key={e.degree}><div className="education-icon"><GraduationCap size={22}/></div><div className="education-year">{e.year}</div><h3>{e.degree}</h3><p>{e.college}</p><span className="education-place">{e.place}</span><div className="education-score"><span>Percentage</span><strong>{e.score}</strong></div></article>)}
          </div>
        </section>

        <section className="achievements-section">
          <div className="wrap achievements-wrap">
            <div><span className="eyebrow eyebrow-light">BEYOND THE CODE</span><h2>Good work is built<br/>with <span>good people.</span></h2></div>
            <div className="achievement-points">
              <div><span>01</span><p>Contributed to the development and maintenance of four real-world application projects.</p></div>
              <div><span>02</span><p>Helped junior developers grow through guidance and frontend training.</p></div>
              <div><span>03</span><p>Worked on security vulnerability remediation using Burp Suite, HCL and Fortify.</p></div>
              <div><span>04</span><p>Applied AI tools including ChatGPT, Claude and Codex in development workflows.</p></div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="wrap contact-grid">
            <div className="contact-copy"><SectionTitle eyebrow="GET IN TOUCH" title={<>Have a project<br/>in <span className="gradient-text">mind?</span></>} text="I'm interested in full-stack and frontend development opportunities. Let's connect and discuss how I can contribute." />
              <div className="contact-links">
                <a href="mailto:rajaiiniya1106@gmail.com"><span className="contact-link-icon"><Mail size={18}/></span><span><small>EMAIL ME</small><b>rajaiiniya1106@gmail.com</b></span><ArrowUpRight size={17}/></a>
                <a href="tel:+918870467054"><span className="contact-link-icon"><Phone size={18}/></span><span><small>CALL ME</small><b>+91 88704 67054</b></span><ArrowUpRight size={17}/></a>
                <a href="https://www.linkedin.com/in/iniyaraja-i-198130203" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={18}/></span><span><small>LINKEDIN</small><b>Connect professionally</b></span><ArrowUpRight size={17}/></a>
                <a href="https://github.com/Iniyaraja-I" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={18}/></span><span><small>GITHUB</small><b>Explore my code</b></span><ArrowUpRight size={17}/></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-heading"><h3>Send a message</h3><p>Fill in the details and your email app will open with the message ready to send.</p></div>
              <label>Your name<input name="name" placeholder="Name" required /></label>
              <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>Subject<input name="subject" placeholder="What would you like to discuss?" required /></label>
              <label>Message<textarea name="message" rows="4" placeholder="Tell me a little about it..." required /></label>
              <button className="button button-primary submit-button" type="submit">Prepare email <Send size={16}/></button>
              {sent && <p className="form-note"><Check size={14}/> Your email app should open with your message.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">I</span><span>Iniyaraja<span className="brand-dot">.</span></span></a><p>Designed & built with care. © {new Date().getFullYear()} Iniyaraja I.</p><a className="back-top" href="#home">Back to top <ArrowUpRight size={15}/></a></div></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
