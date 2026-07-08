import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SKILLS = [
  { cat: "Cybersécurité", color: "#f43f5e", items: ["Wireshark", "Nmap", "Scapy", "OWASP Top 10", "SOC", "Cryptographie", "RGPD", "Bash scripting", "WSL2 / Ubuntu"] },
  { cat: "IA & Agents", color: "#5eead4", items: ["LLM / Claude API", "Agents IA", "MLflow", "Data Pipeline", "FastAPI"] },
  { cat: "Backend", color: "#a78bfa", items: ["Python", "PHP / Laravel", "Node.js", "REST APIs"] },
  { cat: "Frontend", color: "#60a5fa", items: ["React", "JavaScript", "TypeScript", "HTML / CSS"] },
  { cat: "Bases de données & DevOps", color: "#fb923c", items: ["MySQL", "PostgreSQL", "Docker", "Docker Compose", "Git / CI/CD"] },
];

const EXPERIENCES = [
  {
    company: "Eneo Cameroun",
    subtitle: "Équivalent EDF en France",
    role: "Stagiaire Développeuse Fullstack",
    period: "06/2025 – 08/2025",
    color: "#f59e0b",
    icon: "",
    desc: "Conception d'une application web de suivi de consommation électrique destinée aux grands comptes, permettant une meilleure visibilité sur leurs consommations énergétiques.",
    stack: ["Laravel", "MySQL", "REST API", "JavaScript"],
  },
  {
    company: "Mairie de Nkongsamba",
    subtitle: "Administration publique",
    role: "Stagiaire Développeuse Web",
    period: "07/2022 – 09/2022",
    color: "#60a5fa",
    icon: "",
    desc: "Développement d'une application web d'archivage des actes de naissance. Automatisation du suivi et de la recherche documentaire, réduisant les délais de traitement.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
  },
];

const PROJECTS_AI = [
  {
    id: "p0",
    title: "IRIS",
    tag: "IA · Agents",
    color: "#5eead4",
    icon: "",
    desc: "Agent IA de gestion d'emails et d'agenda développé dans le cadre d'un projet EPITECH. Intègre Gmail et Google Calendar APIs avec Claude API pour automatiser la gestion du temps.",
    highlights: ["Intégration Gmail & Google Calendar", "Agent IA avec Claude API", "Automatisation de l'agenda"],
    stack: ["Python", "Claude API", "Gmail API", "Google Calendar API"],
  },
  {
    id: "p1",
    title: "Employee Wellness",
    tag: "IA · Bien-être",
    color: "#34d399",
    icon: "",
    desc: "Application IA de suivi anonyme des humeurs en entreprise. Chaque vendredi, un dashboard statistique est généré pour les managers avec des propositions concrètes d'amélioration du bien-être.",
    highlights: ["Collecte d'humeurs anonyme", "Dashboard managérial hebdomadaire", "Propositions IA personnalisées"],
    stack: ["Python", "LLM", "React", "FastAPI"],
  },
  {
    id: "p2",
    title: "Scraper IA",
    tag: "IA · OSINT",
    color: "#a78bfa",
    icon: "",
    desc: "Application de recherche automatisée d'informations publiques sur une personne à partir de son nom et de son entreprise. Agrégation et synthèse intelligente des résultats via LLM.",
    highlights: ["Recherche web automatisée", "Synthèse IA des résultats", "Profil structuré en sortie"],
    stack: ["Python", "LLM", "Scraping", "FastAPI"],
  },
  {
    id: "p3",
    title: "Data Pipeline",
    tag: "IA · MLOps",
    color: "#fb923c",
    icon: "",
    desc: "Architecture backend conteneurisée avec Docker intégrant traitement de données, entraînement de modèle ML via MLflow et exposition d'une API REST scalable.",
    highlights: ["Pipeline ML de bout en bout", "Déploiement Docker Compose", "API REST scalable"],
    stack: ["Python", "FastAPI", "MLflow", "PostgreSQL", "Docker"],
  },
];

const PROJECTS_CYBER = [
  {
    id: "c1",
    title: "MK Security",
    tag: "Cybersec · Réseau",
    color: "#f43f5e",
    icon: "",
    desc: "Garde du corps numérique : monitoring réseau temps réel avec détection de connexions suspectes. Intègre Nmap pour le scan de ports et envoie des alertes WhatsApp instantanées.",
    highlights: ["Monitoring réseau temps réel", "Détection de connexions suspectes", "Alertes WhatsApp automatiques"],
    stack: ["Python", "Scapy", "Nmap", "WhatsApp API"],
  },
  {
    id: "c2",
    title: "Détecteur de phishing",
    tag: "Cybersec · Email",
    color: "#ef4444",
    icon: "",
    desc: "Outil d'analyse d'emails suspects intégrant VirusTotal API pour détecter les tentatives de phishing, les URL malveillantes et les pièces jointes dangereuses.",
    highlights: ["Analyse d'emails suspects", "Intégration VirusTotal API", "Détection d'URL malveillantes"],
    stack: ["Python", "VirusTotal API", "Email Parsing"],
  },
  {
    id: "c3",
    title: "Moniteur de ports réseau",
    tag: "Cybersec · Monitoring",
    color: "#f97316",
    icon: "",
    desc: "Surveillance automatisée des ports réseau avec alertes email via SMTP. Détecte les ouvertures et fermetures suspectes de ports en temps réel grâce à des scans Nmap récurrents.",
    highlights: ["Surveillance des ports réseau", "Alertes email automatiques", "Scans Nmap récurrents"],
    stack: ["Python", "Nmap", "SMTP", "Bash"],
  },
];

const PROJECTS_WEB = [
  {
    id: "w1",
    title: "Suivi Énergie",
    tag: "Web · Grands comptes",
    color: "#f59e0b",
    icon: "",
    desc: "Application de suivi de consommation électrique dédiée aux grands comptes d'Eneo, offrant une visualisation claire et une meilleure maîtrise des consommations énergétiques.",
    highlights: ["Dashboard de consommation", "Gestion multi-comptes", "Rapports détaillés"],
    stack: ["Laravel", "MySQL", "REST API", "JavaScript"],
  },
  {
    id: "w2",
    title: "Archivage État Civil",
    tag: "Web · Service public",
    color: "#60a5fa",
    icon: "",
    desc: "Application web sécurisée d'archivage des actes de naissance pour la Mairie de Nkongsamba, réduisant les délais de recherche administrative.",
    highlights: ["Archivage numérique sécurisé", "Recherche rapide des documents", "Réduction des délais admin"],
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
  },
];

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <div style={{ width: 24, height: 1.5, background: "#5eead4", flexShrink: 0 }} />
      <span style={{ fontSize: 13, letterSpacing: "0.2em", color: "#5eead4", fontWeight: 600, textTransform: "uppercase", fontFamily: "'Times New Roman', Times, serif" }}>{children}</span>
    </div>
  );
}

function Tag({ children, color }) {
  const c = color || "#5eead4";
  return (
    <span style={{
      fontSize: 13, padding: "3px 10px", borderRadius: 99,
      background: c + "18", color: c,
      border: `1px solid ${c}33`,
      letterSpacing: "0.04em", whiteSpace: "nowrap",
      fontFamily: "'Times New Roman', Times, serif",
    }}>{children}</span>
  );
}

function ProjectCard({ project, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#0d1420",
        border: `1px solid ${hov ? project.color + "55" : "#1a2540"}`,
        borderRadius: 14, padding: "24px",
        boxShadow: hov ? `0 4px 32px ${project.color}15` : "none",
        transition: "all 0.3s ease",
        transform: hov ? "translateY(-3px)" : "none",
        opacity: 0,
        animation: `fadeUp 0.55s ${index * 0.1}s cubic-bezier(.4,0,.2,1) forwards`,
        display: "flex", flexDirection: "column", gap: 12,
      }}>
      <div>
        <div style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: 19, fontWeight: 700, color: "#e2e8f0" }}>{project.title}</div>
        <div style={{ fontSize: 13, color: project.color, letterSpacing: "0.08em", marginTop: 1, fontFamily: "'Times New Roman', Times, serif" }}>{project.tag}</div>
      </div>
      <p style={{ fontSize: 15.5, color: "#94a3b8", lineHeight: 1.75, fontFamily: "'Times New Roman', Times, serif" }}>{project.desc}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {project.highlights.map(h => (
          <div key={h} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, color: "#64748b", fontFamily: "'Times New Roman', Times, serif" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: project.color, flexShrink: 0 }} />
            {h}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
        {project.stack.map(s => <Tag key={s} color={project.color}>{s}</Tag>)}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
function ContactFormFS({ isMobile }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xojngpqp", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", subject: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <input className="contact-field" name="name" placeholder="Votre nom / entreprise *" value={form.name} onChange={handle} />
      <input className="contact-field" name="email" placeholder="Votre email *" type="email" value={form.email} onChange={handle} />
      <input className="contact-field" name="subject" placeholder="Objet (Stage  ·  Alternance  ·  Autre)" value={form.subject} onChange={handle} />
      <textarea className="contact-field" name="message" placeholder="Votre message... *" rows={5} value={form.message} onChange={handle} />
      {status === "error" && <p style={{ fontSize: 15, color: "#f87171", fontFamily: "'Times New Roman', Times, serif" }}>Veuillez remplir les champs nom, email et message.</p>}
      {status === "success" && <p style={{ fontSize: 15, color: "#34d399", fontFamily: "'Times New Roman', Times, serif" }}>Message envoyé ! Je vous répondrai très vite.</p>}
      <button
        className="cta-btn"
        onClick={submit}
        disabled={status === "sending" || status === "success"}
        style={{
          alignSelf: isMobile ? "stretch" : "flex-end",
          background: status === "success" ? "#34d39918" : "transparent",
          border: "1px solid " + (status === "success" ? "#34d399" : "#5eead4"),
          color: status === "success" ? "#34d399" : "#5eead4",
          padding: "12px 32px", borderRadius: 9, fontSize: 16.5,
          fontFamily: "'Times New Roman', Times, serif", fontWeight: 500,
          letterSpacing: "0.03em",
          opacity: status === "sending" ? 0.6 : 1,
          cursor: status === "sending" || status === "success" ? "default" : "pointer",
        }}>
        {status === "sending" ? "Envoi en cours..." : status === "success" ? "Message envoyé !" : "Envoyer le message"}
      </button>
    </div>
  );
}

function HamburgerIcon({ open }) {
  return (
    <div style={{ width: 24, height: 18, display: "flex", flexDirection: "column", justifyContent: "space-between", cursor: "pointer" }}>
      <span style={{ display: "block", height: 2, background: "#e2e8f0", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px, 8px)" : "none" }} />
      <span style={{ display: "block", height: 2, background: "#e2e8f0", borderRadius: 2, transition: "all 0.3s", opacity: open ? 0 : 1 }} />
      <span style={{ display: "block", height: 2, background: "#e2e8f0", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px, -8px)" : "none" }} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN
───────────────────────────────────────────── */
export default function Portfolio() {
  const [heroReady, setHeroReady] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -400, y: -400 });

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => { setTimeout(() => setHeroReady(true), 120); }, []);
  useEffect(() => {
    const fn = e => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  const [expRef, expInView] = useInView();
  const [skillRef, skillInView] = useInView();
  const [projAIRef, projAIInView] = useInView();
  const [projCyberRef, projCyberInView] = useInView();
  const [projWebRef, projWebInView] = useInView();
  const [contactRef, contactInView] = useInView();

  const nav = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const NAV = [
    { id: "accueil", label: "Accueil" },
    { id: "projets", label: "Projets IA" },
    { id: "cybersec", label: "Cybersécurité" },
    { id: "experience", label: "Expérience" },
    { id: "competences", label: "Compétences" },
    { id: "contact", label: "Contact" },
  ];

  const px = isMobile ? "20px" : isTablet ? "32px" : "48px";

  return (
    <div style={{ fontFamily: "'Times New Roman', Times, serif", background: "#070b12", color: "#e2e8f0", overflowX: "hidden" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #5eead430; color: #5eead4; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #070b12; }
        ::-webkit-scrollbar-thumb { background: #1a2540; border-radius: 4px; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:none; } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes slideDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:none; } }
        .fade-in { opacity:0; transform:translateY(20px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .fade-in.show { opacity:1; transform:none; }
        .nav-lnk { cursor:pointer; transition:color 0.2s; letter-spacing:0.03em; font-family:'Times New Roman', Times, serif; }
        .nav-lnk:hover { color:#5eead4 !important; }
        .cta-btn { transition: all 0.25s; cursor:pointer; font-family:'Times New Roman', Times, serif; }
        .cta-btn:hover { background:#5eead4 !important; color:#070b12 !important; box-shadow: 0 0 24px #5eead455; }
        .ghost-btn { transition: all 0.25s; cursor:pointer; font-family:'Times New Roman', Times, serif; }
        .ghost-btn:hover { background:#1a254055 !important; }
        .contact-field {
          width:100%; background:#0d1420; border:1px solid #1a2540;
          color:#e2e8f0; padding:13px 16px; border-radius:10px;
          font-size:14.5px; outline:none; font-family:'Times New Roman', Times, serif;
          transition: border-color 0.2s, box-shadow 0.2s; resize:vertical;
        }
        .contact-field:focus { border-color:#5eead4; box-shadow:0 0 0 3px #5eead415; }
        .exp-card { transition: border-color 0.25s, box-shadow 0.25s; }
        .exp-card:hover { border-color:#2a3a55 !important; box-shadow:0 2px 24px #00000040; }
        .skill-pill { transition: all 0.2s; cursor:default; font-family:'Times New Roman', Times, serif; }
        .skill-pill:hover { background:#1a2540 !important; transform:translateY(-2px); }
        .mobile-menu { animation: slideDown 0.25s ease forwards; }
      `}</style>

      {!isMobile && (
        <div style={{
          position: "fixed", pointerEvents: "none", zIndex: 0,
          left: cursorPos.x - 250, top: cursorPos.y - 250,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, #5eead408 0%, transparent 65%)",
          transition: "left 0.12s ease, top 0.12s ease",
        }} />
      )}

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: "rgba(7,11,18,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1a254044",
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: `16px ${px}`,
        }}>
          <div style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: 21, fontWeight: 800, color: "#5eead4", letterSpacing: "-0.02em" }}>
            &lt;<span style={{ color: "#e2e8f0" }}>Catrielle</span> /&gt;
          </div>

          {!isMobile && (
            <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {NAV.map(n => (
                <span key={n.id} className="nav-lnk"
                  onClick={() => nav(n.id)}
                  style={{ fontSize: 15.5, color: activeSection === n.id ? "#5eead4" : "#94a3b8", fontWeight: activeSection === n.id ? 600 : 400 }}>
                  {n.label}
                </span>
              ))}
              <button className="cta-btn" onClick={() => nav("contact")} style={{
                background: "transparent", border: "1px solid #5eead4", color: "#5eead4",
                padding: "8px 20px", borderRadius: 8, fontSize: 15,
                fontFamily: "'Times New Roman', Times, serif", fontWeight: 500,
              }}>
                Me contacter
              </button>
            </div>
          )}

          {isMobile && (
            <div onClick={() => setMenuOpen(o => !o)}>
              <HamburgerIcon open={menuOpen} />
            </div>
          )}
        </div>

        {isMobile && menuOpen && (
          <div className="mobile-menu" style={{
            background: "#0d1420", borderTop: "1px solid #1a2540",
            padding: "16px 20px", display: "flex", flexDirection: "column", gap: 4,
          }}>
            {NAV.map(n => (
              <div key={n.id} className="nav-lnk"
                onClick={() => nav(n.id)}
                style={{
                  fontSize: 18, color: activeSection === n.id ? "#5eead4" : "#94a3b8",
                  fontWeight: activeSection === n.id ? 600 : 400,
                  padding: "12px 8px", borderBottom: "1px solid #1a254055",
                }}>
                {n.label}
              </div>
            ))}
            <button className="cta-btn" onClick={() => nav("contact")} style={{
              marginTop: 8, background: "transparent", border: "1px solid #5eead4", color: "#5eead4",
              padding: "12px", borderRadius: 8, fontSize: 16, width: "100%",
              fontFamily: "'Times New Roman', Times, serif", fontWeight: 500,
            }}>
              Me contacter
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="accueil" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: isMobile ? "100px 20px 60px" : `100px ${px} 60px`,
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, #0d1f3c 0%, #070b12 60%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, opacity: 0.35,
          backgroundImage: "radial-gradient(#1a254088 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
        {!isMobile && <>
          <div style={{ position: "absolute", top: "12%", right: "12%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, #5eead412 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "8%", left: "3%", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, #f43f5e0e 0%, transparent 70%)", pointerEvents: "none" }} />
        </>}

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#5eead412", border: "1px solid #5eead430",
            padding: "6px 14px", borderRadius: 99, marginBottom: 24,
            opacity: heroReady ? 1 : 0, transition: "opacity 0.6s 0.1s ease",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#5eead4", animation: "blink 2s infinite", flexShrink: 0 }} />
            <span style={{ fontSize: isMobile ? 10 : 12, color: "#5eead4", letterSpacing: "0.08em", fontWeight: 500, fontFamily: "'Times New Roman', Times, serif" }}>
              DISPONIBLE — ALTERNANCE · 2sem.école / 2sem.entreprise
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: isMobile ? "clamp(36px, 10vw, 52px)" : "clamp(40px, 5.5vw, 76px)",
            fontWeight: 800, lineHeight: 1.07, letterSpacing: "-0.035em",
            opacity: heroReady ? 1 : 0, transform: heroReady ? "none" : "translateY(20px)",
            transition: "opacity 0.7s 0.25s, transform 0.7s 0.25s",
          }}>
            Catrielle<br />
            <span style={{ color: "#5eead4" }}>Michelle Kotti</span>
          </h1>

          <p style={{
            marginTop: 14, fontSize: isMobile ? 15 : 20, color: "#94a3b8", fontWeight: 300,
            fontFamily: "'Times New Roman', Times, serif",
            opacity: heroReady ? 1 : 0, transition: "opacity 0.7s 0.35s",
          }}>
            Développeuse{" "}
            <span style={{ color: "#5eead4", fontWeight: 500 }}>IA & Cybersécurité</span>
            {" "}· Fullstack · Bac+3 à Epitech Paris
          </p>

          <p style={{
            marginTop: 16, fontSize: isMobile ? 14 : 16, color: "#64748b", lineHeight: 1.8,
            maxWidth: 560, fontFamily: "'Times New Roman', Times, serif",
            opacity: heroReady ? 1 : 0, transition: "opacity 0.7s 0.45s",
          }}>
            Étudiante ingénieure à EPITECH Paris, je conçois des{" "}
            <strong style={{ color: "#94a3b8" }}>agents IA</strong> et des outils de{" "}
            <strong style={{ color: "#94a3b8" }}>cybersécurité défensive</strong> qui résolvent des problèmes concrets.
            Je recherche une{" "}
            <strong style={{ color: "#94a3b8" }}>alternance</strong> pour mettre ces compétences en pratique.
          </p>

          <div style={{
            display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap",
            opacity: heroReady ? 1 : 0, transition: "opacity 0.7s 0.55s",
          }}>
            <button className="cta-btn" onClick={() => nav("projets")} style={{
              background: "#5eead4", color: "#070b12", border: "none",
              padding: isMobile ? "12px 22px" : "13px 28px",
              borderRadius: 9, fontSize: isMobile ? 14 : 14.5, fontWeight: 600,
              fontFamily: "'Times New Roman', Times, serif", width: isMobile ? "100%" : "auto",
            }}>
              Voir mes projets →
            </button>
            <button className="ghost-btn" onClick={() => nav("contact")} style={{
              background: "transparent", color: "#e2e8f0", border: "1px solid #1a2540",
              padding: isMobile ? "12px 22px" : "13px 28px",
              borderRadius: 9, fontSize: isMobile ? 14 : 14.5,
              fontFamily: "'Times New Roman', Times, serif", width: isMobile ? "100%" : "auto",
            }}>
              Me contacter
            </button>
          </div>

          <div style={{
            display: "flex", gap: isMobile ? 24 : 40, marginTop: 48, flexWrap: "wrap",
            opacity: heroReady ? 1 : 0, transition: "opacity 0.7s 0.7s",
            borderTop: "1px solid #1a2540", paddingTop: 28,
          }}>
            {[["2", "Stages réalisés"], ["6", "Projets livrés"], ["15+", "Technologies maîtrisées"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: isMobile ? 24 : 30, fontWeight: 800, color: "#5eead4", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 13, color: "#475569", marginTop: 4, letterSpacing: "0.05em", fontFamily: "'Times New Roman', Times, serif" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETS IA ── */}
      <section id="projets" style={{ padding: `80px ${px}`, background: "#070b12" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={projAIRef} className={`fade-in${projAIInView ? " show" : ""}`}>
            <SectionLabel>Intelligence Artificielle</SectionLabel>
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: isMobile ? 26 : 34, fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 8 }}>
              Projets IA Agentique
            </h2>
            <p style={{ color: "#64748b", fontSize: 17, marginBottom: 32, fontFamily: "'Times New Roman', Times, serif" }}>LLM · Agents IA · Data Pipeline · OSINT automatisé</p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(2, 1fr)",
            gap: 18,
          }}>
            {PROJECTS_AI.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>

          <div ref={projWebRef} className={`fade-in${projWebInView ? " show" : ""}`} style={{ marginTop: 56 }}>
            <SectionLabel>Applications Web & Métier</SectionLabel>
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: isMobile ? 26 : 34, fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 8 }}>
              Projets Web
            </h2>
            <p style={{ color: "#64748b", fontSize: 17, marginBottom: 32, fontFamily: "'Times New Roman', Times, serif" }}>Solutions sur mesure pour structures réelles</p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 18,
          }}>
            {PROJECTS_WEB.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CYBERSÉCURITÉ ── */}
      <section id="cybersec" style={{ padding: `80px ${px}`, background: "#09101a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={projCyberRef} className={`fade-in${projCyberInView ? " show" : ""}`}>
            <SectionLabel>Cybersécurité Défensive</SectionLabel>
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: isMobile ? 26 : 34, fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 8 }}>
              Projets Cybersécurité
            </h2>
            <p style={{ color: "#64748b", fontSize: 17, marginBottom: 32, fontFamily: "'Times New Roman', Times, serif" }}>Monitoring réseau · Détection de menaces · Alertes temps réel</p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
            gap: 18,
          }}>
            {PROJECTS_CYBER.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── EXPÉRIENCES ── */}
      <section id="experience" style={{ padding: `80px ${px}`, background: "#070b12" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={expRef} className={`fade-in${expInView ? " show" : ""}`}>
            <SectionLabel>Expérience Professionnelle</SectionLabel>
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: isMobile ? 26 : 34, fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 32 }}>
              Mes stages
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {EXPERIENCES.map((e, i) => (
              <div key={i} className="exp-card" style={{
                background: "#0d1420", border: "1px solid #1a2540",
                borderRadius: 14, padding: isMobile ? "20px" : "28px 32px",
                opacity: expInView ? 1 : 0,
                transform: expInView ? "none" : "translateY(20px)",
                transition: `opacity 0.6s ${i * 0.15}s, transform 0.6s ${i * 0.15}s`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                  <div>
                    <div style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: 20, fontWeight: 700 }}>{e.company}</div>
                    <div style={{ fontSize: 14, color: "#475569", marginTop: 1, fontFamily: "'Times New Roman', Times, serif" }}>{e.subtitle}</div>
                  </div>
                  <Tag color={e.color}>{e.period}</Tag>
                </div>
                <div style={{ fontSize: 15, color: e.color, fontWeight: 600, marginBottom: 10, letterSpacing: "0.04em", fontFamily: "'Times New Roman', Times, serif" }}>{e.role}</div>
                <p style={{ fontSize: 16.5, color: "#94a3b8", lineHeight: 1.75, marginBottom: 14, fontFamily: "'Times New Roman', Times, serif" }}>{e.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {e.stack.map(s => <Tag key={s} color={e.color}>{s}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPÉTENCES ── */}
      <section id="competences" style={{ padding: `80px ${px}`, background: "#09101a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={skillRef} className={`fade-in${skillInView ? " show" : ""}`}>
            <SectionLabel>Compétences Techniques</SectionLabel>
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: isMobile ? 26 : 34, fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 32 }}>
              Mon stack
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {SKILLS.map((group, gi) => (
                <div key={group.cat}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: group.color, flexShrink: 0 }} />
                    <div style={{ fontSize: 13, color: group.color, letterSpacing: "0.12em", fontWeight: 600, fontFamily: "'Times New Roman', Times, serif" }}>{group.cat.toUpperCase()}</div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.items.map((item, ii) => (
                      <div key={item} className="skill-pill" style={{
                        background: "#0d1420", border: `1px solid ${group.color}22`,
                        color: "#e2e8f0", padding: "9px 18px", borderRadius: 99,
                        fontSize: 16, fontWeight: 500,
                        fontFamily: "'Times New Roman', Times, serif",
                        opacity: skillInView ? 1 : 0,
                        transition: `opacity 0.5s ${(gi * 6 + ii) * 0.04}s`,
                      }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: `80px ${px}`, background: "#070b12" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div ref={contactRef} className={`fade-in${contactInView ? " show" : ""}`}>
            <SectionLabel>Contact</SectionLabel>
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: isMobile ? 26 : 34, fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 8 }}>
              Travaillons ensemble
            </h2>
            <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: 32, fontFamily: "'Times New Roman', Times, serif" }}>
              Vous cherchez une développeuse passionnée en{" "}
              <strong style={{ color: "#94a3b8" }}>IA & Cybersécurité</strong>{" "}
              pour une <strong style={{ color: "#94a3b8" }}>alternance</strong> ?
              Je suis disponible et enthousiaste à l'idée de rejoindre votre équipe.
            </p>
            <ContactFormFS isMobile={isMobile} />
            <div style={{
              marginTop: 40, paddingTop: 28, borderTop: "1px solid #1a2540",
              display: "flex", gap: isMobile ? 20 : 32, flexWrap: "wrap",
            }}>
              {[
                { label: "Email", val: "catrielle.michelle-kotti@epitech.eu" },
                { label: "LinkedIn", val: "catrielle michelle kotti" },
                { label: "GitHub", val: "github.com/catriel2006" },
              ].map(l => (
                <div key={l.label}>
                  <div style={{ fontSize: 13, color: "#475569", letterSpacing: "0.1em", marginBottom: 3, fontFamily: "'Times New Roman', Times, serif" }}>{l.label.toUpperCase()}</div>
                  <div style={{ fontSize: isMobile ? 12 : 14, color: "#5eead4", wordBreak: "break-all", fontFamily: "'Times New Roman', Times, serif" }}>{l.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: `20px ${px}`,
        borderTop: "1px solid #1a2540",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? 8 : 0,
      }}>
        <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: 17, fontWeight: 800, color: "#5eead4" }}>&lt;Catrielle /&gt;</span>
        <span style={{ fontSize: 14, color: "#334155", fontFamily: "'Times New Roman', Times, serif" }}>Alternance · Epitech Paris · 2026–2028</span>
        <span style={{ fontSize: 14, color: "#334155", fontFamily: "'Times New Roman', Times, serif" }}>IA Agentique · Cybersécurité · Fullstack</span>
      </footer>
    </div>
  );
}
