import { ArrowLeft, ArrowUpRight, Check, CircleDot } from "lucide-react";
import { Link, useRoute } from "wouter";

const projects: Record<string, { eyebrow: string; title: string; summary: string; image: string; metrics: [string, string][]; challenge: string; solution: string; bullets: string[] }> = {
  "cigna-smart-health": {
    eyebrow: "CASE STUDY / 01",
    title: "Cigna Smart Health Systems",
    summary: "A predictive intelligence layer that turns fragmented clinical data into earlier, clearer decisions.",
    image: "https://framerusercontent.com/images/m5JtYB4nxKXIl9LfLgJMwT1doAY.jpg?width=2731&height=4096",
    metrics: [["42%", "faster risk detection"], ["18M", "records mapped"], ["99.98%", "pipeline uptime"]],
    challenge: "Clinical teams were working across disconnected systems, with high-value signals buried in unstructured notes and delayed reporting loops.",
    solution: "SOPRANOVA created a secure agent mesh that unified the knowledge graph, surfaced latent risk patterns, and routed each insight to the right care workflow.",
    bullets: ["Encrypted knowledge graph across clinical systems", "Human-in-the-loop review for every high-impact recommendation", "Live telemetry for model confidence and response time"]
  },
  "aetna-health-data": {
    eyebrow: "CASE STUDY / 02", title: "Aetna Health Data Ecosystem", summary: "Secure AI infrastructure for personalized member intelligence at enterprise scale.", image: "https://framerusercontent.com/images/EuYy1gxty3AwWpl483SuuAIylY.jpg?width=3200&height=2400", metrics: [["3.2x", "faster operations"], ["24", "integrations"], ["85%", "less manual triage"]], challenge: "Operations teams needed a single trusted layer for member data, without compromising privacy or slowing clinical workflows.", solution: "We designed a composable agent system with strict data boundaries, retrieval-aware prompts, and automated handoffs between care operations.", bullets: ["Role-based access across every workflow node", "Vector search with source-level traceability", "Automated escalation for ambiguous records"]
  },
  "anthem-neural-care": {
    eyebrow: "CASE STUDY / 03", title: "Anthem Neural Care Network", summary: "An LLM-native provider network that reduces ticket latency and makes every handoff accountable.", image: "https://framerusercontent.com/images/2gYwQgOmBPtREHpUtFPcitrFhI.jpg?width=3200&height=2400", metrics: [["85%", "lower ticket latency"], ["24/7", "agent coverage"], ["100%", "auditable handoffs"]], challenge: "Provider relations teams spent too much time routing repetitive requests and too little time resolving the complex cases that needed expertise.", solution: "SOPRANOVA mapped the full decision tree, automated routine resolutions, and gave specialists a transparent control room for exceptions.", bullets: ["Intent routing across provider requests", "Recovery logic for failed or incomplete actions", "Evaluation suite for accuracy and policy adherence"]
  }
};

const fallback = projects["cigna-smart-health"];

export default function Detail() {
  const [, params] = useRoute("/details/:id");
  const project = (params?.id && projects[params.id]) || fallback;
  return <div className="detail-page">
    <header className="detail-nav"><Link href="/" className="detail-back"><ArrowLeft size={16}/> Back to SOPRANOVA</Link><span className="detail-kicker">SOPRANOVA / SYSTEMS CASE FILE</span><span className="detail-index">01—03</span></header>
    <main>
      <section className="detail-hero"><div className="detail-hero-copy"><span className="pill">{project.eyebrow}</span><h1>{project.title}</h1><p>{project.summary}</p><a className="primary" href="#overview">Explore system <ArrowUpRight size={16}/></a></div><div className="detail-visual" style={{ backgroundImage: `linear-gradient(135deg, rgba(8,8,8,.1), rgba(8,8,8,.72)), url(${project.image})` }}><span>LIVE SYSTEM VIEW</span><b>NEURAL OPS<br/>/ 2026</b></div></section>
      <section id="overview" className="detail-metrics">{project.metrics.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
      <section className="detail-split"><div><span className="detail-num">01 / THE CHALLENGE</span><h2>Make complexity<br/><em>legible.</em></h2></div><p>{project.challenge}</p></section>
      <section className="detail-solution"><div className="solution-label"><CircleDot size={16}/> SOPRANOVA / AGENT MESH</div><div><span className="detail-num">02 / THE SYSTEM</span><h2>Infrastructure that<br/><em>thinks in context.</em></h2><p>{project.solution}</p><ul>{project.bullets.map(b => <li key={b}><Check size={15}/>{b}</li>)}</ul></div></section>
      <section className="detail-next"><span>READY FOR THE NEXT SYSTEM</span><Link href="/" className="primary">Start a conversation <ArrowUpRight size={16}/></Link></section>
    </main>
  </div>;
}
