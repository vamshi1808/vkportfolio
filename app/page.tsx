const projects=[
{title:"Multi-Agent Incident Commander",type:"Generative AI · Hackathon",desc:"AI incident-response copilot using RAG, LLMs and multiple agents to correlate alerts, logs, tickets and deployment events.",tags:["AI Agents","RAG","LLM"]},
{title:"Spring Boot CI/CD Demo",type:"DevOps · Java",desc:"Spring Boot application with automated testing and delivery using Jenkins, GitHub Actions and Docker.",tags:["Java","Jenkins","Docker"]},
{title:"Network Performance Monitor",type:"Computer Networks",desc:"Flask dashboard that monitors latency and packet loss and classifies network health as GOOD, MODERATE, POOR or OFFLINE.",tags:["Python","Flask","Networking"]},
{title:"Smart Queue Prediction App",type:"Mobile · Flutter",desc:"Queue-management application concept with separate Home, Staff and Admin experiences for practical real-world use.",tags:["Flutter","Dart","UI"]},
{title:"Self-Healing Web Application",type:"DevOps · Reliability",desc:"Containerized web application exploring health checks, monitoring and automatic recovery when the application fails.",tags:["Docker","CI/CD","Monitoring"]}];

const skillGroups=[
{title:"Languages",items:["Java","Python","C","HTML","CSS","JavaScript"]},
{title:"Development",items:["React","Next.js","Flutter","Dart"]},
{title:"DevOps & Cloud",items:["Git","GitHub","Docker","Jenkins","GitHub Actions"]},
{title:"AI & Concepts",items:["AI / LLM","RAG","AI Agents","REST APIs","DSA","OOP"]}
];

const achievements=[
["01","GSSoC","Open-source program experience"],
["02","Pinnacle Labs","Internship experience"],
["03","AWS","Cloud event participation"],
["04","Microsoft","Azure + Copilot workshop"],
["05","LeetCode","50-day coding streak"],
["06","Hackathons","Recent project competitions"],
["07","Samsung","Galaxy Quiz participation"]
];

const nav=[["home","Home"],["about","About"],["projects","Projects"],["skills","Skills"],["experience","Experience"],["achievements","Achievements"],["contact","Contact"]];

export default function Home(){
return <main className="portfolio">
<header className="nav">
<a className="logo" href="#home">Vamshi<span>.</span></a>
<nav>{nav.map(([id,label])=><a key={id} href={"#"+id}>{label}</a>)}</nav>
<div className="navActions"><a className="resumeBtn" href="#contact">Resume ↗</a><a className="githubMini" href="https://github.com/vamshi1808" target="_blank" rel="noreferrer">GitHub ↗</a></div>
</header>

<section id="home" className="section homeSection">
<div className="heroGrid">
<div className="heroCopy">
<div className="status"><span/> Open to internships & opportunities</div>
<p className="role">COMPUTER SCIENCE · DEVELOPER · BUILDER</p>
<h1>Vamshi<br/><span>Krishna.</span></h1>
<p className="tagline">I build practical software, explore AI and DevOps, and learn by turning ideas into working projects.</p>
<div className="heroActions"><a className="primary" href="#projects">View my work <b>↓</b></a><a className="textBtn" href="https://linkedin.com/in/vamshi-krishna-734900326" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
<div className="heroStats"><div><strong>8.1</strong><small>CGPA</small></div><div><strong>2028</strong><small>GRADUATION</small></div><div><strong>5+</strong><small>PROJECTS</small></div></div>
</div>
<div className="heroVisual">
<div className="codeCard"><div className="dots"><i/><i/><i/><span>vamshi.tsx</span></div><pre><code>{`const developer = {
  name: "Vamshi Krishna",
  focus: ["AI", "DevOps", "Web"],
  stack: ["Java", "Python", "React"],
  goal: "build + learn + ship"
};`}</code></pre></div>
<div className="orbit one">AI</div><div className="orbit two">DEVOPS</div><div className="orbit three">CSE</div>
</div>
</div>
</section>

<section id="about" className="section contentSection">
<div className="sectionHead"><span>01</span><div><p>ABOUT</p><h2>Learning by <em>building.</em></h2></div></div>
<div className="aboutGrid">
<div className="aboutText"><p>I’m a third-year B.Tech Computer Science Engineering student at <strong>CMR Technical Campus</strong>. I enjoy creating useful applications and learning technologies through hands-on projects.</p><p>My current interests include <strong>AI/LLM applications, web development, cloud and DevOps</strong>. I’m also improving my Java, DSA and problem-solving fundamentals for software development roles.</p><div className="aboutLinks"><a href="https://github.com/vamshi1808" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/vamshi-krishna-734900326" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
<div className="factCard"><span>EDUCATION</span><h3>B.Tech · Computer Science Engineering</h3><p>CMR Technical Campus</p><div className="factLine"><b>8.1</b><span>CGPA</span><b>2028</b><span>EXPECTED</span></div></div>
</div>
</section>

<section id="projects" className="section contentSection projectsSection">
<div className="sectionHead"><span>02</span><div><p>FEATURED WORK</p><h2>Things I’ve <em>built.</em></h2></div></div>
<div className="projectsGrid">{projects.map((p,i)=><article className="projectCard" key={p.title}><div className="projectMeta"><span>{p.type}</span><b>0{i+1}</b></div><div className="projectMark">{["AI","CI","NET","APP","∞"][i]}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a href="https://github.com/vamshi1808" target="_blank" rel="noreferrer">Code on GitHub ↗</a></article>)}</div>
</section>

<section id="skills" className="section contentSection">
<div className="sectionHead"><span>03</span><div><p>TECHNICAL SKILLS</p><h2>My <em>toolbox.</em></h2></div></div>
<div className="skillGroups">{skillGroups.map(g=><div className="skillGroup" key={g.title}><h3>{g.title}</h3><div>{g.items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div>
</section>

<section id="experience" className="section contentSection">
<div className="sectionHead"><span>04</span><div><p>EXPERIENCE</p><h2>Where I’ve <em>learned.</em></h2></div></div>
<div className="experienceList">
<div className="experienceItem"><div className="year">2026</div><div><span className="type">INTERNSHIP</span><h3>Pinnacle Labs</h3><p>Completed an internship with practical development exposure and hands-on project work.</p></div></div>
<div className="experienceItem"><div className="year">2026</div><div><span className="type">HACKATHONS & EVENTS</span><h3>Building under pressure</h3><p>Participated in hackathons, AWS cloud events, Microsoft Azure + Copilot workshop and technical activities.</p></div></div>
<div className="experienceItem"><div className="year">2024—28</div><div><span className="type">EDUCATION</span><h3>CMR Technical Campus</h3><p>B.Tech in Computer Science Engineering · Hyderabad · Expected graduation 2028.</p></div></div>
</div>
</section>

<section id="achievements" className="section contentSection">
<div className="sectionHead"><span>05</span><div><p>ACHIEVEMENTS & ACTIVITIES</p><h2>Beyond the <em>classroom.</em></h2></div></div>
<div className="achievementGrid">{achievements.map(([n,t,d])=><div className="achievement" key={t}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></div>)}</div>
</section>

<section id="contact" className="section contactSection">
<div className="contactInner"><span className="contactLabel">06 / CONTACT</span><p className="contactKicker">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let’s build<br/><em>something useful.</em></h2><p className="contactText">I’m open to internships, projects, learning opportunities and meaningful collaborations.</p><div className="contactActions"><a className="primary" href="https://linkedin.com/in/vamshi-krishna-734900326" target="_blank" rel="noreferrer">Get in touch ↗</a><a className="outline" href="https://github.com/vamshi1808" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
<footer>Vamshi Krishna © 2026 <span>·</span> Built with Next.js</footer>
</section>
</main>
}