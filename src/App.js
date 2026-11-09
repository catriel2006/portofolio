import { useEffect } from "react";
import arc from "./assets/images/arc.webp";
import arcSm from "./assets/images/arc-sm.webp";
import fleur from "./assets/images/fleur.webp";
import fleurSm from "./assets/images/fleur-sm.webp";
import mains from "./assets/images/mains.webp";
import mainsSm from "./assets/images/mains-sm.webp";
import eclipse from "./assets/images/eclipse.webp";
import eclipseSm from "./assets/images/eclipse-sm.webp";

/* ─────────────────────────────────────────────
   CONTENU
───────────────────────────────────────────── */
const LINKS = {
  email: "catrielle.michelle-kotti@epitech.eu",
  linkedin: "https://www.linkedin.com/in/catrielle-michelle-kotti/",
  github: "https://github.com/catriel2006",
};

const SKILLS = [
  { cat: "IA générative & agents", items: ["Agents LLM", "RAG", "API Claude", "LLM locaux (open-weights)"] },
  { cat: "Data & machine learning", items: ["Python (pandas)", "Machine learning (scikit-learn)", "SQL", "Power BI", "Microsoft Fabric", "MLflow"] },
  { cat: "Sécurité & protection des données", items: ["RGPD", "AI Act", "OWASP Top 10", "SOC", "Cryptographie", "Wireshark", "Nmap", "Scapy"] },
  { cat: "Développement", items: ["Python (FastAPI)", "Java", "C++", "PHP / Laravel", "Node.js", "API REST"] },
  { cat: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML / CSS"] },
  { cat: "Bases de données & outils", items: ["MySQL", "PostgreSQL", "Docker", "Docker Compose", "Git", "CI/CD", "Linux (Ubuntu, WSL2)", "Bash"] },
];

const HIGHLIGHTS = [["2", "Stages en développement"], ["11", "Projets"], ["3", "Hackathons et challenges en 2026"]];

const EXPERIENCES = [
  {
    company: "Eneo Cameroun",
    subtitle: "Distributeur d'électricité au Cameroun",
    role: "Développeuse fullstack · stage",
    period: "06/2025 – 08/2025",
    desc: "Application web de suivi de la consommation électrique des grands comptes : tableau de bord de consommation, gestion multi-comptes et rapports détaillés.",
    stack: ["Laravel", "MySQL", "API REST", "JavaScript"],
  },
  {
    company: "Mairie de Nkongsamba",
    subtitle: "Administration publique, Cameroun",
    role: "Développeuse web · stage",
    period: "07/2022 – 09/2022",
    desc: "Application web d'archivage des actes de naissance. Suivi et recherche des actes automatisés, ce qui réduit les délais de traitement.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML / CSS"],
  },
];

const FEATURED = {
  title: "Toumaini",
  subtitle: "Agent IA d'audit de la séparation des tâches",
  meta: "HackAudit 2026 (CNCC) · porteuse unique du projet · oct. 2026, en cours",
  desc: "Agent IA qui assiste les commissaires aux comptes dans l'audit de la séparation des tâches. Il contrôle 100 % des droits d'accès d'un ERP (Odoo) sur le cycle Achats, au lieu d'un sondage.",
  keys: [
    { title: "100 % des droits", text: "Tous les droits d'accès de l'ERP (Odoo) sur le cycle Achats sont contrôlés, au lieu d'un sondage." },
    { title: "Règles + IA locale", text: "Des règles déterministes détectent les conflits ; une IA locale (modèles open-weights) les qualifie et documente la preuve." },
    { title: "Théorique ou exploité", text: "Croisement avec le journal des paiements pour distinguer les conflits théoriques des conflits réellement exploités." },
    { title: "NEP 500 · RGPD · AI Act", text: "Preuve traçable, conformité RGPD et AI Act, protection contre l'injection de prompt. Méthode validée auprès d'experts de l'audit." },
  ],
  stack: ["Agent LLM", "LLM local (open-weights)", "Odoo", "NEP 500", "RGPD", "AI Act"],
};

// visual : { img, pos } pour une portion d'image, ou { glow } pour un bandeau de lumière
const PROJECTS = [
  {
    title: "Rush Data",
    tag: "Data · Machine learning",
    meta: "Epitech MBA · BI & Data Analysis Lead · équipe de 3 · 2 jours · 2026",
    result: "Random Forest à 96 % de précision sur 96 000 réponses ; gain net estimé à 5 600 € pour 1 000 passagers.",
    desc: "Prédiction de l'insatisfaction des passagers à partir d'une enquête de satisfaction, et recommandations chiffrées pour la réduire.",
    highlights: ["96 000 réponses analysées par régression logistique", "Modèle Random Forest : 96 % de précision", "Gain net estimé : 5 600 € pour 1 000 passagers", "Recommandations conformes au RGPD"],
    stack: ["Régression logistique", "Random Forest", "Business Intelligence", "RGPD"],
    visual: { img: "arc", pos: "18% 78%" },
  },
  {
    title: "Hackathon Mobilité",
    tag: "Data · Mobilité",
    meta: "Citiz × Microsoft × Epitech · équipe de 4 · 2,5 jours · oct. 2026",
    result: "Un outil d'aide à la décision pour choisir où implanter de nouvelles stations d'autopartage Citiz à Bordeaux Métropole.",
    highlights: ["Données ouvertes : INSEE, GTFS (transports en commun), GBFS (mobilité partagée)", "Traitement et analyse sur Microsoft Fabric"],
    stack: ["Microsoft Fabric", "Open data", "INSEE", "GTFS", "GBFS"],
    visual: { glow: "ice" },
  },
  {
    title: "BESS Telemetry SOC Gateway",
    tag: "Sécurité · IA explicable",
    meta: "Projet personnel · 2026",
    result: "Chaque alerte critique est traduite en recommandation compréhensible par un non-expert.",
    desc: "Passerelle sécurisée d'ingestion de la télémétrie de systèmes industriels de stockage d'énergie par batteries (BESS).",
    highlights: ["Validation automatique des plages physiques des mesures", "Module d'explicabilité IA pour les alertes critiques"],
    stack: ["SOC", "Télémétrie industrielle", "IA explicable", "Sécurité des données"],
    visual: { img: "arc", pos: "62% 32%" },
  },
  {
    title: "IRIS",
    tag: "IA · Agents",
    meta: "Projet Epitech",
    result: "Gmail et Google Calendar reliés à l'API Claude pour automatiser la planification.",
    desc: "Agent IA de gestion des emails et de l'agenda.",
    stack: ["Python", "API Claude", "API Gmail", "API Google Calendar"],
    visual: { glow: "amber" },
  },
  {
    title: "Employee Wellness",
    tag: "IA · Bien-être au travail",
    result: "Chaque vendredi, un tableau de bord statistique et des propositions d'actions rédigées par un LLM pour les managers.",
    desc: "Suivi anonyme de l'humeur des salariés.",
    stack: ["Python", "FastAPI", "React", "LLM"],
    visual: { img: "fleur", pos: "50% 35%" },
  },
  {
    title: "Scraper IA",
    tag: "IA · OSINT",
    result: "Un profil structuré à partir d'un nom et d'une entreprise, synthétisé par un LLM.",
    desc: "Recherche automatisée d'informations publiques sur une personne.",
    stack: ["Python", "FastAPI", "Scraping", "LLM"],
    visual: { glow: "magenta" },
  },
  {
    title: "Data Pipeline",
    tag: "Data · MLOps",
    result: "Du traitement des données à l'API REST, avec un entraînement suivi dans MLflow.",
    desc: "Backend conteneurisé qui enchaîne traitement des données, entraînement d'un modèle suivi avec MLflow et mise à disposition du modèle via une API REST.",
    stack: ["Python", "FastAPI", "MLflow", "PostgreSQL", "Docker Compose"],
    visual: { img: "arc", pos: "88% 8%" },
  },
  {
    title: "MK Security",
    tag: "Sécurité · Réseau",
    result: "Connexions suspectes détectées en temps réel, avec alerte immédiate par WhatsApp.",
    desc: "Surveillance du réseau en temps réel : détection des connexions suspectes et scan des ports avec Nmap.",
    stack: ["Python", "Scapy", "Nmap", "API WhatsApp"],
    visual: { glow: "ice-magenta" },
  },
  {
    title: "Détecteur de phishing",
    tag: "Sécurité · Email",
    result: "URL et pièces jointes d'emails suspects vérifiées avec l'API VirusTotal.",
    desc: "Analyse d'emails suspects pour repérer les tentatives de phishing.",
    stack: ["Python", "API VirusTotal", "Analyse d'emails"],
    visual: { img: "arc", pos: "40% 55%" },
  },
  {
    title: "Moniteur de ports réseau",
    tag: "Sécurité · Surveillance",
    result: "Ouverture ou fermeture inattendue d'un port signalée par email.",
    desc: "Scans Nmap réguliers des ports réseau, avec alerte par email (SMTP).",
    stack: ["Python", "Nmap", "SMTP", "Bash"],
    visual: { glow: "amber-ice" },
  },
];

const TOC = [
  { n: "01", id: "a-propos", title: "À propos", desc: "Profil, compétences, parcours" },
  { n: "02", id: "projet-phare", title: "Projet phare", desc: "Toumaini · HackAudit 2026" },
  { n: "03", id: "projets", title: "Autres projets", desc: "Data, IA générative, sécurité" },
  { n: "04", id: "contact", title: "Merci", desc: "Me contacter" },
];

const IMAGES = { arc: { sm: arcSm, lg: arc, w: [768, 1536] }, fleur: { sm: fleurSm, lg: fleur, w: [480, 960] } };
const GLOWS = {
  ice: "radial-gradient(60% 90% at 30% 100%, rgba(156,203,242,0.35), transparent 70%)",
  amber: "radial-gradient(60% 90% at 70% 100%, rgba(233,164,91,0.35), transparent 70%)",
  magenta: "radial-gradient(60% 90% at 40% 100%, rgba(226,88,159,0.30), transparent 70%)",
  "ice-magenta": "radial-gradient(50% 90% at 20% 100%, rgba(156,203,242,0.28), transparent 70%), radial-gradient(50% 90% at 85% 100%, rgba(226,88,159,0.25), transparent 70%)",
  "amber-ice": "radial-gradient(50% 90% at 25% 100%, rgba(233,164,91,0.28), transparent 70%), radial-gradient(50% 90% at 80% 100%, rgba(156,203,242,0.25), transparent 70%)",
};

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&display=swap');

:root {
  --bg: #060709; --card: #0E1014; --border: #22252C;
  --text: #F4F0EA; --text-2: #B9B3AA;
  --amber: #E9A45B; --ice: #9CCBF2; --magenta: #E2589F;
  --serif: 'Bodoni Moda', 'Didot', 'Times New Roman', serif;
  --sans: 'Atkinson Hyperlegible', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --gutter: clamp(16px, 5vw, 72px);
  color-scheme: dark;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { background: var(--bg); }
body { background: var(--bg); overflow-x: hidden; }
.app { font-family: var(--sans); font-size: 18px; line-height: 1.6; color: var(--text); background: var(--bg); overflow-x: clip; }
.app img { display: block; max-width: 100%; }
.app a { color: inherit; }
.app ul, .app ol { list-style: none; }
::selection { background: rgba(233,164,91,0.35); color: var(--text); }

/* Focus clavier */
.app a:focus-visible, .app button:focus-visible, .app summary:focus-visible, .app [tabindex]:focus-visible {
  outline: 3px solid var(--ice); outline-offset: 3px; border-radius: 4px;
}
section[id], div[id] { scroll-margin-top: 72px; }
main:focus, div[id]:focus { outline: none; }

.sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
.skip-link { position:absolute; left:16px; top:-80px; z-index:300; background:var(--amber); color:var(--bg) !important; padding:12px 18px; font-weight:700; text-decoration:none; }
.skip-link:focus { top:12px; }

/* Typographie */
.label { font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-2); font-weight: 400; }
.kicker { font-family: var(--serif); font-style: italic; font-weight: 400; font-size: clamp(20px, 2vw, 26px); color: var(--amber); }
.display { font-family: var(--serif); font-weight: 400; text-transform: uppercase; line-height: 0.95; }
.h2 { font-family: var(--serif); font-weight: 400; text-transform: uppercase; font-size: clamp(40px, 6vw, 84px); line-height: 1; }
.h3 { font-family: var(--serif); font-weight: 400; font-size: clamp(24px, 2.2vw, 30px); line-height: 1.15; }
.prose { max-width: 65ch; color: var(--text-2); }
.prose strong { color: var(--text); font-weight: 700; }

/* En-tête */
.topbar { position: fixed; inset: 0 0 auto 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; gap: 16px;
  padding: 4px var(--gutter); background: rgba(6,7,9,0.82); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.topbar-name { font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; min-height: 44px; display: inline-flex; align-items: center; }
.topbar nav ul { display: flex; gap: clamp(8px, 2.5vw, 32px); }
.topbar nav a { font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; color: var(--text-2);
  min-height: 44px; display: inline-flex; align-items: center; padding: 0 4px; transition: color .3s; }
.topbar nav a:hover { color: var(--text); }

/* Boutons */
.btn { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 26px;
  font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; border-radius: 999px;
  transition: background .3s, color .3s, border-color .3s; }
.btn-primary { background: var(--amber); color: var(--bg); border: 1px solid var(--amber); font-weight: 700; }
.btn-primary:hover { background: var(--text); border-color: var(--text); }
.btn-outline { color: var(--text); border: 1px solid var(--border); background: rgba(14,16,20,0.6); }
.btn-outline:hover { border-color: var(--amber); }

.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { font-size: 14px; letter-spacing: 0.06em; color: var(--text-2); border: 1px solid var(--border); background: var(--card); padding: 4px 12px; border-radius: 999px; }

/* Fondu des images dans la page */
.fade-edges { -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 45%, transparent 100%);
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 45%, transparent 100%); }

/* Animations */
@keyframes drift { from { transform: scale(1.04) translate(0, 0); } to { transform: scale(1.12) translate(-2%, -1.5%); } }
@keyframes breathe { from { transform: scale(1); } to { transform: scale(1.03); } }
@keyframes flow { from { background-position: 0% 50%; } to { background-position: 300% 50%; } }
.drift { animation: drift 26s ease-in-out infinite alternate; }
.drift-slow { animation: drift 30s ease-in-out infinite alternate-reverse; }
.breathe { animation: breathe 7s ease-in-out infinite alternate; }
.light-line { height: 2px; width: min(420px, 100%); border-radius: 2px;
  background: linear-gradient(90deg, var(--amber), var(--text), var(--ice), var(--magenta), var(--amber));
  background-size: 300% 100%; animation: flow 14s linear infinite; }
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 1.1s ease, transform 1.1s ease; }
.reveal.is-visible { opacity: 1; transform: none; }

/* 1. Couverture */
.cover { display: grid; grid-template-columns: 55fr 45fr; min-height: 100vh; min-height: 100svh; }
.cover-text { display: flex; flex-direction: column; justify-content: flex-end; gap: 28px; padding: 120px var(--gutter) 56px; min-width: 0; }
.cover-title { font-size: clamp(52px, 7.6vw, 150px); }
.cover-lead { font-size: clamp(18px, 1.4vw, 21px); }
.cover-foot { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px 24px; padding-top: 20px; border-top: 1px solid var(--border); }
.cover-media { position: relative; overflow: hidden; min-height: 100%; }
.cover-media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 30% 50%;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 30%), linear-gradient(to bottom, transparent 0%, #000 15%, #000 80%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image: linear-gradient(to right, transparent 0%, #000 30%), linear-gradient(to bottom, transparent 0%, #000 15%, #000 80%, transparent 100%);
  mask-composite: intersect; }

/* 2. À propos + sommaire */
.spread { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--border); }
.spread > * { padding: clamp(56px, 8vw, 120px) var(--gutter); min-width: 0; }
.spread > :first-child { border-right: 1px solid var(--border); }
.spread > #sommaire { position: sticky; top: 48px; align-self: start; }
.about-portrait { width: min(340px, 80%); margin: 0 auto 40px; }
.about-block { margin-top: 44px; }
.about-block > .label { margin-bottom: 14px; display: block; }
.contact-list li { display: grid; grid-template-columns: 110px 1fr; gap: 12px; align-items: center; border-bottom: 1px solid var(--border); }
.contact-list a { min-height: 44px; display: inline-flex; align-items: center; word-break: break-all; text-decoration-color: var(--amber); text-underline-offset: 4px; }
.highlights { display: flex; flex-wrap: wrap; gap: 24px 40px; }
.highlights > div { display: flex; flex-direction: column-reverse; }
.highlights dd { font-family: var(--serif); font-size: 44px; line-height: 1; color: var(--amber); }
.highlights dt { font-size: 15px; color: var(--text-2); margin-top: 6px; }
.skill-group + .skill-group { margin-top: 14px; }
.skill-group h4 { font-size: 16px; font-weight: 700; color: var(--text); }
.skill-group p { color: var(--text-2); }
.xp { padding: 20px 0; border-bottom: 1px solid var(--border); }
.xp-head { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px 16px; align-items: baseline; }
.xp-head h4 { font-family: var(--serif); font-weight: 400; font-size: 24px; line-height: 1.2; }
.xp-role { color: var(--amber); font-size: 16px; margin-top: 2px; }
.toc { margin-top: 40px; border-top: 1px solid var(--border); }
.toc a { display: grid; grid-template-columns: 64px 1fr; gap: 16px; align-items: baseline; padding: 20px 0; min-height: 44px;
  text-decoration: none; border-bottom: 1px solid var(--border); transition: padding-left .4s; }
.toc a:hover { padding-left: 10px; }
.toc a:hover .toc-title { color: var(--amber); }
.toc-n { font-family: var(--serif); font-style: italic; font-size: 26px; color: var(--amber); }
.toc-title { font-family: var(--serif); font-size: clamp(26px, 2.6vw, 34px); line-height: 1.1; display: block; transition: color .4s; }
.toc-desc { color: var(--text-2); font-size: 16px; display: block; margin-top: 4px; }
.toc-flower { width: min(360px, 85%); margin: 56px auto 0; }

/* 3. Projet phare */
.featured { position: relative; overflow: hidden; padding: clamp(80px, 12vw, 160px) var(--gutter); border-top: 1px solid var(--border); }
.featured-bg { position: absolute; inset: 0; z-index: 0; }
.featured-bg img { width: 100%; height: 100%; object-fit: cover; object-position: 60% 40%; }
.featured-bg::after { content: ""; position: absolute; inset: 0;
  background: linear-gradient(to bottom, var(--bg) 0%, rgba(6,7,9,0.80) 18%, rgba(6,7,9,0.80) 82%, var(--bg) 100%),
              linear-gradient(to right, rgba(6,7,9,0.6), rgba(6,7,9,0) 60%); }
.featured-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }
.featured-title { font-size: clamp(56px, 12vw, 180px); margin: 12px 0 8px; }
.featured-sub { font-family: var(--serif); font-style: italic; font-size: clamp(22px, 2.4vw, 32px); line-height: 1.3; margin-bottom: 20px; }
.keys { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 56px; }
.key { background: rgba(14,16,20,0.9); border: 1px solid var(--border); padding: 28px 24px; }
.key h3 { font-family: var(--serif); font-weight: 400; font-size: 24px; line-height: 1.15; color: var(--amber); margin-bottom: 12px; }
.key p { color: var(--text-2); }

/* 4. Autres projets */
.projects { padding: clamp(80px, 10vw, 140px) var(--gutter); border-top: 1px solid var(--border); }
.projects-head { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 24px; margin-bottom: 56px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr)); gap: 20px; }
.card { background: var(--card); border: 1px solid var(--border); display: flex; flex-direction: column; overflow: hidden; transition: border-color .4s; }
.card:hover { border-color: #3A3E47; }
.card-media { position: relative; height: 170px; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover;
  -webkit-mask-image: linear-gradient(to bottom, #000 40%, transparent 100%); mask-image: linear-gradient(to bottom, #000 40%, transparent 100%); }
.card-glow { position: absolute; inset: 0; }
.card-body { padding: 8px 28px 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
.card-n { font-family: var(--serif); font-style: italic; font-size: 22px; color: var(--amber); }
.card-result { color: var(--text); }
.card details { margin-top: auto; border-top: 1px solid var(--border); }
.card summary { cursor: pointer; min-height: 44px; display: flex; align-items: center; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-2); }
.card summary:hover, .card details[open] summary { color: var(--text); }
.card details > div { display: flex; flex-direction: column; gap: 10px; padding-bottom: 6px; }
.card-meta { font-size: 15px; color: var(--text-2); }
.dots li { position: relative; padding-left: 18px; color: var(--text-2); }
.dots li::before { content: ""; position: absolute; left: 0; top: 0.7em; width: 6px; height: 6px; border-radius: 50%; background: var(--amber); }

/* 5. Merci */
.thanks { position: relative; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 24px; min-height: 90vh;
  padding: clamp(80px, 10vw, 140px) 0 clamp(80px, 10vw, 140px) var(--gutter); border-top: 1px solid var(--border); overflow: hidden; }
.thanks > * { min-width: 0; }
.thanks-title { font-size: clamp(64px, 11vw, 168px); margin: 8px 0 28px; }
.thanks-media img { width: 100%; height: auto;
  -webkit-mask-image: radial-gradient(ellipse 60% 60% at 55% 50%, #000 50%, transparent 100%); mask-image: radial-gradient(ellipse 60% 60% at 55% 50%, #000 50%, transparent 100%); }
.thanks-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 36px; }
.footer { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding: 24px var(--gutter); border-top: 1px solid var(--border); }

/* Responsive */
@media (max-width: 1100px) { .keys { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 860px) {
  .cover { grid-template-columns: 1fr; min-height: 0; }
  .cover-text { padding-top: 104px; justify-content: flex-start; }
  .cover-title { font-size: clamp(48px, 15.5vw, 120px); }
  .featured-title { font-size: clamp(44px, 14vw, 180px); }
  .thanks-title { font-size: clamp(64px, 24vw, 168px); }
  .cover-media { min-height: 62vw; }
  .cover-media img { object-position: 40% 50%;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 25%, #000 75%, transparent 100%);
    mask-image: linear-gradient(to bottom, transparent 0%, #000 25%, #000 75%, transparent 100%); }
  .spread { grid-template-columns: 1fr; }
  .spread > :first-child { border-right: 0; }
  .spread > #sommaire { position: static; border-top: 1px solid var(--border); }
  .thanks { grid-template-columns: 1fr; padding-right: var(--gutter); min-height: 0; }
  .thanks-media { order: -1; margin: 0 calc(-1 * var(--gutter)); }
}
@media (max-width: 600px) {
  .topbar-name { display: none; }
  .topbar { justify-content: center; }
  .cover-foot { justify-content: flex-start; }
  .keys { grid-template-columns: 1fr; }
  .contact-list li { grid-template-columns: 1fr; gap: 0; padding-top: 10px; }
  .card-body { padding: 8px 20px 20px; }
}

@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
@media (prefers-reduced-motion: reduce) {
  .drift, .drift-slow, .breathe, .light-line { animation: none !important; }
  .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  .toc a, .toc-title, .btn, .card, .topbar nav a { transition: none !important; }
  .toc a:hover { padding-left: 0; }
}
`;

/* ─────────────────────────────────────────────
   COMPOSANTS
───────────────────────────────────────────── */
function Chips({ items }) {
  return <ul className="chips">{items.map(s => <li key={s} className="chip">{s}</li>)}</ul>;
}

function ExternalLink({ href, children, className }) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span>
    </a>
  );
}

function ProjectCard({ p, n }) {
  const v = p.visual;
  const im = v.img && IMAGES[v.img];
  return (
    <li className="card">
      <div className="card-media" aria-hidden="true">
        {im ? (
          <img src={im.lg} srcSet={`${im.sm} ${im.w[0]}w, ${im.lg} ${im.w[1]}w`}
            sizes="(max-width: 860px) 100vw, 33vw" alt="" loading="lazy" decoding="async"
            className="drift" style={{ objectPosition: v.pos }} />
        ) : (
          <div className="card-glow" style={{ background: GLOWS[v.glow] }} />
        )}
      </div>
      <div className="card-body">
        <span className="card-n">/{String(n).padStart(3, "0")}</span>
        <span className="label">{p.tag}</span>
        <h3 className="h3">{p.title}</h3>
        <p className="card-result">{p.result}</p>
        <details>
          <summary>Détails du projet</summary>
          <div>
            {p.meta && <p className="card-meta">{p.meta}</p>}
            {p.desc && <p className="prose">{p.desc}</p>}
            {p.highlights && <ul className="dots">{p.highlights.map(h => <li key={h}>{h}</li>)}</ul>}
            <Chips items={p.stack} />
          </div>
        </details>
      </div>
    </li>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Portfolio() {
  useEffect(() => {
    document.documentElement.lang = "fr";
    const els = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="app">
      <style>{CSS}</style>
      <a href="#contenu" className="skip-link">Aller au contenu</a>

      <header className="topbar">
        <a href="#couverture" className="topbar-name">Catrielle Michelle Kotti</a>
        <nav aria-label="Navigation principale">
          <ul>
            <li><a href="#sommaire">Sommaire</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="contenu" tabIndex={-1}>
        {/* ── 1. COUVERTURE ── */}
        <section id="couverture" className="cover" aria-labelledby="titre-principal">
          <div className="cover-text">
            <h1 id="titre-principal" className="display cover-title reveal">Portfolio</h1>
            <div className="light-line" aria-hidden="true" />
            <p className="prose cover-lead reveal">
              <strong>Catrielle Michelle Kotti</strong>, étudiante ingénieure à Epitech en MBA Data Protection & Sécurité des Données.
              Je développe des outils data et IA générative en tenant compte de la protection des données.
            </p>
            <p className="label reveal" style={{ color: "var(--text)" }}>
              Recherche une alternance · 2 semaines école / 2 semaines entreprise
            </p>
            <div className="cover-foot">
              <span className="label">Développement</span>
              <span className="label">Data</span>
              <span className="label">IA générative</span>
            </div>
          </div>
          <div className="cover-media">
            <img src={arc} srcSet={`${arcSm} 768w, ${arc} 1536w`} sizes="(max-width: 860px) 100vw, 45vw"
              alt="Rubans de lumière ambrée, blanche et bleutée qui s'enroulent en spirale sur un fond noir"
              fetchPriority="high" decoding="async" className="drift" />
          </div>
        </section>

        {/* ── 2. À PROPOS + SOMMAIRE ── */}
        <section id="a-propos" className="spread" aria-labelledby="titre-apropos">
          <div>
            <div className="about-portrait">
              <img src={eclipse} srcSet={`${eclipseSm} 480w, ${eclipse} 960w`} sizes="340px" loading="lazy" decoding="async"
                alt="Illustration afro-futuriste : une silhouette de dos, coiffure tressée, sous une éclipse dorée, entourée d'anneaux de lumière bleue et magenta"
                className="fade-edges breathe" />
            </div>
            <p className="kicker reveal">/01 · Profil</p>
            <h2 id="titre-apropos" className="h2 reveal" style={{ margin: "8px 0 24px" }}>À propos</h2>
            <p className="prose">
              Étudiante ingénieure à Epitech, en <strong>MBA Data Protection & Sécurité des Données</strong>.
              Je travaille sur le <strong>développement</strong>, la <strong>data</strong> et l'<strong>IA générative</strong>,
              en tenant compte de la sécurité et de la protection des données.
              Dernier projet : un agent IA qui contrôle 100 % des droits d'accès d'un ERP pour assister les commissaires aux comptes.
            </p>

            <div className="about-block">
              <dl className="highlights">
                {HIGHLIGHTS.map(([n, l]) => (
                  <div key={l}><dt>{l}</dt><dd>{n}</dd></div>
                ))}
              </dl>
            </div>

            <div className="about-block">
              <h3 className="label">Contact</h3>
              <ul className="contact-list">
                <li><span className="label">Email</span><a href={`mailto:${LINKS.email}`}>{LINKS.email}</a></li>
                <li><span className="label">LinkedIn</span><ExternalLink href={LINKS.linkedin}>catrielle-michelle-kotti</ExternalLink></li>
                <li><span className="label">GitHub</span><ExternalLink href={LINKS.github}>github.com/catriel2006</ExternalLink></li>
              </ul>
            </div>

            <div className="about-block">
              <h3 className="label">Compétences</h3>
              {SKILLS.map(g => (
                <div key={g.cat} className="skill-group">
                  <h4>{g.cat}</h4>
                  <p>{g.items.join(" · ")}</p>
                </div>
              ))}
            </div>

            <div className="about-block">
              <h3 className="label">Parcours</h3>
              {EXPERIENCES.map(e => (
                <article key={e.company} className="xp">
                  <div className="xp-head">
                    <h4>{e.company}</h4>
                    <span className="label">{e.period}</span>
                  </div>
                  <p className="xp-role">{e.role} · <span style={{ color: "var(--text-2)" }}>{e.subtitle}</span></p>
                  <p className="prose" style={{ margin: "8px 0 12px" }}>{e.desc}</p>
                  <Chips items={e.stack} />
                </article>
              ))}
            </div>
          </div>

          <div id="sommaire" tabIndex={-1}>
            <p className="kicker reveal">/Table of contents</p>
            <h2 className="h2 reveal" style={{ marginTop: 8 }}>Sommaire</h2>
            <nav aria-label="Sommaire">
              <ol className="toc">
                {TOC.map(t => (
                  <li key={t.id}>
                    <a href={`#${t.id}`}>
                      <span className="toc-n" aria-hidden="true">{t.n}</span>
                      <span>
                        <span className="toc-title">{t.title}</span>
                        <span className="toc-desc">{t.desc}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="toc-flower">
              <img src={fleur} srcSet={`${fleurSm} 480w, ${fleur} 960w`} sizes="360px" loading="lazy" decoding="async"
                alt="Fleur d'arum blanche aux reflets irisés arc-en-ciel sur fond sombre" className="fade-edges drift-slow" />
            </div>
          </div>
        </section>

        {/* ── 3. PROJET PHARE ── */}
        <section id="projet-phare" className="featured" aria-labelledby="titre-phare">
          <div className="featured-bg" aria-hidden="true">
            <img src={arc} srcSet={`${arcSm} 768w, ${arc} 1536w`} sizes="100vw" alt="" loading="lazy" decoding="async" className="drift-slow" />
          </div>
          <div className="featured-inner">
            <p className="kicker reveal">/001 · Projet phare</p>
            <h2 id="titre-phare" className="display featured-title reveal">{FEATURED.title}</h2>
            <p className="featured-sub reveal">{FEATURED.subtitle}</p>
            <p className="label" style={{ letterSpacing: "0.12em", marginBottom: 20 }}>{FEATURED.meta}</p>
            <p className="prose" style={{ color: "var(--text)" }}>{FEATURED.desc}</p>
            <ul className="keys">
              {FEATURED.keys.map(k => (
                <li key={k.title} className="key">
                  <h3>{k.title}</h3>
                  <p>{k.text}</p>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32 }}><Chips items={FEATURED.stack} /></div>
          </div>
        </section>

        {/* ── 4. AUTRES PROJETS ── */}
        <section id="projets" className="projects" aria-labelledby="titre-projets">
          <div className="projects-head">
            <div>
              <p className="kicker reveal">/002 – /011</p>
              <h2 id="titre-projets" className="h2 reveal" style={{ marginTop: 8 }}>Autres projets</h2>
            </div>
            <p className="prose" style={{ maxWidth: "42ch" }}>Hackathons, projets Epitech et projets personnels, du plus récent au plus ancien.</p>
          </div>
          <ul className="grid">
            {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} n={i + 2} />)}
          </ul>
        </section>

        {/* ── 5. MERCI / CONTACT ── */}
        <section id="contact" className="thanks" aria-labelledby="titre-merci">
          <div>
            <p className="kicker reveal">/04 · Contact</p>
            <h2 id="titre-merci" className="display thanks-title reveal">Merci</h2>
            <p className="prose" style={{ fontSize: 20 }}>
              Vous proposez une <strong>alternance</strong> en développement, data, IA générative ou sécurité des données ?
              Écrivez-moi, je vous réponds rapidement.
            </p>
            <div className="thanks-actions">
              <a href={`mailto:${LINKS.email}`} className="btn btn-primary">M'écrire</a>
              <ExternalLink href={LINKS.linkedin} className="btn btn-outline">LinkedIn</ExternalLink>
              <ExternalLink href={LINKS.github} className="btn btn-outline">GitHub</ExternalLink>
            </div>
          </div>
          <div className="thanks-media">
            <img src={mains} srcSet={`${mainsSm} 768w, ${mains} 1536w`} sizes="(max-width: 860px) 100vw, 50vw" loading="lazy" decoding="async"
              alt="Deux mains peintes à larges touches orange, bleues et violettes, qui se tendent l'une vers l'autre ; une étincelle dorée jaillit entre leurs doigts"
              className="breathe" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="label">Catrielle Michelle Kotti · Epitech</span>
        <span className="label">Portfolio 2026</span>
      </footer>
    </div>
  );
}
