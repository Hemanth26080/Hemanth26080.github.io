const translations = {
  en: {
    fact_role_label:"TARGET ROLE",
    fact_role:"Cloud / DevSecOps Engineer",
    fact_location_label:"LOCATION",
    fact_location:"Paris, France · Open to France-wide roles",
    fact_authorisation_label:"WORK AUTHORISATION",
    fact_authorisation:"French APS permit · valid through Oct 2027 · authorised to work in France",
    fact_availability_label:"AVAILABILITY",
    fact_availability:"Immediately",
    stat_experience_context:"Capgemini · financial systems production support, 2022–2024",
    stat_setup_context:"Project estimate · Terraform IaC compared with manual console setup",
    stat_cves_context:"Gate configured for HIGH/CRITICAL findings · saved scan report includes HIGH findings to fix",
    stat_mttr_context:"Capgemini · structured RCA + runbooks compared with the previous incident process",
    case_study_link:"Read case study",
    pipeline_source_label:"SOURCE-DEFINED PIPELINE",
    pipeline_source_note:"11 named Jenkinsfile stages, grouped here into five workflow checkpoints.",
    open_jenkinsfile:"Open Jenkinsfile",
    open_scan_report:"Open Trivy scan report",
    browse_screenshots:"Browse project screenshots",
    nav_about:"About",nav_expertise:"Expertise",nav_projects:"Projects",nav_journey:"Journey",nav_contact:"Contact",
    hero_eyebrow:"AVAILABLE IMMEDIATELY · DEVSECOPS / CLOUD",hero_hello:"Cloud & DevSecOps engineer.",hero_headline:"Pipelines that block vulnerabilities before they ship.",hero_intro:"2 years of production reliability in finance, now building secure AWS platforms with Terraform, Kubernetes and CI/CD security gates. Based in Paris, available across France.",hero_cta_projects:"Download CV",hero_cta_cv:"Email me",hero_location:"Paris, France · Open to roles across France",hero_status:"French APS · valid through Oct 2027 · authorised to work in France",hero_footnote:"",visual_system:"DELIVERY MODEL / SOURCE-BASED",visual_live:"PIPELINE WALKTHROUGH",visual_core_sub:"built as code",visual_security:"Security",visual_footer_left:"AUTOMATE · SECURE · OBSERVE",scroll_hint:"SCROLL TO EXPLORE",flow_overline:"BUILT FROM THE COMMITTED JENKINSFILE",flow_heading:"Security checks before release.",flow_subtitle:"Five workflow checkpoints mapped from the committed Jenkinsfile.",flow_commit:"Commit",flow_test:"Tests & build",flow_scan:"Security gates",flow_deploy:"Deploy & verify",flow_observe:"Observe & respond",flow_gate:"POLICY GATE",flow_footer:"LINT · TEST · SCAN · APPROVE · VERIFY",approach_define:"Define",approach_validate:"Validate",approach_operate:"Operate",skill_evidence_label:"APPLIED IN",
    stat_experience:"years in enterprise production",stat_setup:"less manual infrastructure setup",stat_cves:"Trivy gate for HIGH / CRITICAL findings",stat_mttr:"lower MTTR in production incidents",metrics_note:"",
    kicker_about:"THE SHORT VERSION",about_title:"Production discipline.<br><em>Cloud-native execution.</em>",about_p1:"I started in production support for financial systems, where a failed batch meant real consequences. That taught me root-cause analysis, careful releases and writing runbooks people actually use.",about_p2:"Now I apply that discipline to the cloud: Terraform-managed AWS, pipelines that scan and gate releases, and observability that helps teams see what is wrong before users do.",about_p3:"I focus on reproducible infrastructure, explicit security controls and systems that other engineers can operate confidently.",
    kicker_expertise:"WHAT I BRING",expertise_title:"A secure path<br><em>from commit to cloud.</em>",expertise_desc:"Five practical disciplines, each tied to tools I use and work you can inspect.",skill_cloud:"Cloud & IaC",skill_delivery:"CI/CD & Delivery",skill_security:"Security engineering",skill_reliability:"Observability & SRE",skill_development:"Scripting & systems",toolkit_stack:"CURRENT TOOLKIT",skill_visual_label:"HOW I APPROACH THE WORK",
    kicker_projects:"BUILT, NOT JUST DESIGNED",projects_title:"Systems with<br><em>evidence attached.</em>",projects_desc:"Three case studies: what I built, how the controls work, where the current implementation stops, and what it costs to run.",filter_all:"All projects <span>03</span>",filter_security:"Security",filter_cloud:"Cloud / IaC",filter_kubernetes:"Kubernetes",project_kind_pipeline:"DEVSECOPS PIPELINE",project_kind_architecture:"CLOUD ARCHITECTURE",project_kind_kubernetes:"KUBERNETES PLATFORM",project1_desc:"Built a Jenkins CI/CD workflow for a Flask API with flake8, Bandit, SonarQube, pytest, Docker builds and a Trivy image gate. The Jenkinsfile defines staging, manual approval and health-check stages.",project1_outcome1:"Trivy exits non-zero on HIGH / CRITICAL image findings; the committed scan report flags HIGH-severity OS and Python package findings to remediate.",project1_outcome2:"reported reduction vs. manual console provisioning, using Terraform IaC",project2_desc:"A modular Terraform platform for secure AWS foundations, including segmented networking, private data tiers, secure load balancing and CDN delivery.",project2_outcome1:"repeatable modular infrastructure",project2_outcome2:"manual console configuration goal",project3_desc:"A production-style React, Node.js and MongoDB application on EKS, with Terraform-managed infrastructure, published images and operational dashboards.",project3_outcome1:"segmented application architecture",project3_outcome2:"scaling and load-balanced workloads",view_repository:"View repository",more_projects:"MORE EXPERIMENTS, SCRIPTS & NOTES",all_github:"Browse all GitHub repositories",
    kicker_journey:"EXPERIENCE & LEARNING",journey_title:"The production mindset<br><em>travels with me.</em>",journey_desc:"A path from enterprise operations to cloud automation, informed by production discipline and continuous hands-on learning.",role_capgemini:"Data Analyst · Mainframe Production Engineering",experience1_a:"Maintained 10+ enterprise modules across COBOL, JCL, CICS, VSAM and DB2, supporting financial batch pipelines processing millions of records per cycle.",experience1_b:"Cut MTTR by 30%+ with structured root-cause analysis and runbooks across 10+ mainframe modules processing millions of records per batch cycle.",experience1_c:"Automated daily operational tasks with Python and Bash; collaborated across three geographies.",role_training:"DevOps Engineering Program",experience2_a:"Hands-on labs in Docker, Kubernetes / EKS, Terraform, Ansible, Jenkins and GitHub Actions on AWS.",experience2_b:"Practised root-cause analysis across cluster, pipeline, Terraform and Nginx 502/504 incidents; used observability tools to reduce simulated resolution time by 60%.",education_heading:"Master’s · Paris",education_cloud:"MSc Cloudification & Data Security · Sep 2024 – Jul 2025",education_digital:"Additional MSc in Digital Marketing & Influencer Strategies · ICN Business School, 2025–2026 (communication & product storytelling).",education_label:"FOUNDATION",btech_title:"BTech · Electronics & Communication Engineering",btech_sub:"JNTU Hyderabad · 2019–2022",certs_label:"CERTIFICATIONS",certs_text:"Docker Foundations Professional Certificate · GitHub Career Essentials · Google IT Support Specialization · AWS Solutions Architect – Associate (in progress)",
    kicker_contact:"NEXT CHAPTER",contact_title:"Ready to build<br><em>safer cloud systems?</em>",contact_desc:"Hiring for a DevSecOps or cloud role? I can start immediately. I’m based in Paris and open to opportunities across France. Let’s talk.",contact_cta:"Email me",contact_status:"AVAILABLE IMMEDIATELY",contact_linkedin:"Connect professionally",contact_github:"Explore the code",contact_location:"Paris, France · Open to Europe",footer_note:"Last updated Oct 2026 · Hosted on GitHub Pages.",back_top:"Back to top",theme_light:"Switch to light mode",theme_dark:"Switch to dark mode",motion_pause:"Pause decorative motion",motion_resume:"Resume decorative motion",menu_open:"Open navigation",menu_close:"Close navigation",
    skills:{cloud:{title:"Cloud & infrastructure as code",desc:"Define secure foundations once, version them, review changes, and redeploy consistently.",chips:["AWS","Terraform","Ansible","VPC","IAM","RDS","EKS","Secrets Manager"],note:"Security-by-design, least privilege and reproducible environments."},delivery:{title:"CI/CD & automated delivery",desc:"Build a repeatable route from commit to release with quality checks, security gates and deployment verification.",chips:["Jenkins","GitHub Actions","Docker","Pipeline-as-Code","ECR","Release approvals","Health checks"],note:"Fail fast on risky builds and make every release traceable."},security:{title:"Shift-left security engineering",desc:"Bring security signals into development and delivery, with scans that can block releases when thresholds fail.",chips:["Trivy","SonarQube SAST","OWASP ZAP DAST","Bandit","Flake8","STRIDE","Secrets Manager"],note:"Vulnerability scanning, managed secrets and least-privilege identity."},reliability:{title:"Observability & site reliability",desc:"Use metrics, logs and actionable alerts to understand service health and shorten incident recovery.",chips:["Prometheus","Grafana","Loki","Promtail","Alertmanager","ELK Stack","CloudWatch","Runbooks"],note:"Practical monitoring linked to incident response and root-cause analysis."},development:{title:"Scripting & production systems",desc:"Automate recurring work and apply careful debugging habits across application and legacy environments.",chips:["Python 3.11","Bash","Flask","REST API","pytest","MySQL","Linux / RHEL","COBOL / JCL / DB2"],note:"Version-controlled automation, production discipline and clear documentation."}}
  },
  fr: {
    fact_role_label:"POSTE RECHERCHÉ",
    fact_role:"Ingénieur Cloud / DevSecOps",
    fact_location_label:"LOCALISATION",
    fact_location:"Paris, France · Opportunités dans toute la France",
    fact_authorisation_label:"AUTORISATION DE TRAVAIL",
    fact_authorisation:"Titre APS français · valable jusqu’en oct. 2027 · autorisé à travailler en France",
    fact_availability_label:"DISPONIBILITÉ",
    fact_availability:"Immédiate",
    stat_experience_context:"Capgemini · support de production de systèmes financiers, 2022–2024",
    stat_setup_context:"Estimation du projet · Terraform IaC comparé à la configuration manuelle de la console",
    stat_cves_context:"Contrôle configuré pour les alertes ÉLEVÉES / CRITIQUES · le rapport contient des alertes ÉLEVÉES à corriger",
    stat_mttr_context:"Capgemini · analyse des causes racines + runbooks par rapport au processus précédent",
    case_study_link:"Lire l’étude de cas",
    pipeline_source_label:"PIPELINE DÉFINI DANS LE CODE",
    pipeline_source_note:"11 blocs nommés dans le Jenkinsfile, regroupés ici en cinq points de contrôle.",
    open_jenkinsfile:"Ouvrir le Jenkinsfile",
    open_scan_report:"Ouvrir le rapport de scan Trivy",
    browse_screenshots:"Voir les captures du projet",
    nav_about:"À propos",nav_expertise:"Expertise",nav_projects:"Projets",nav_journey:"Parcours",nav_contact:"Contact",
    hero_eyebrow:"DISPONIBLE IMMÉDIATEMENT · DEVSECOPS / CLOUD",hero_hello:"Ingénieur Cloud & DevSecOps.",hero_headline:"Des pipelines qui bloquent les vulnérabilités avant la mise en production.",hero_intro:"2 ans d’expérience en fiabilité de systèmes financiers en production. Je construis maintenant des plateformes AWS sécurisées avec Terraform, Kubernetes et des contrôles de sécurité CI/CD. Basé à Paris, disponible partout en France.",hero_cta_projects:"Télécharger le CV",hero_cta_cv:"M’écrire",hero_location:"Paris, France · Opportunités dans toute la France",hero_status:"APS français · valable jusqu’en oct. 2027 · autorisé à travailler en France",hero_footnote:"",visual_system:"MODÈLE DE LIVRAISON / SOURCE",visual_live:"PARCOURS DU PIPELINE",visual_core_sub:"défini comme du code",visual_security:"Sécurité",visual_footer_left:"AUTOMATISER · SÉCURISER · OBSERVER",scroll_hint:"DÉFILER POUR EXPLORER",flow_overline:"CONSTRUIT À PARTIR DU JENKINSFILE VERSIONNÉ",flow_heading:"Contrôles de sécurité avant livraison.",flow_subtitle:"Cinq points de contrôle issus du Jenkinsfile versionné.",flow_commit:"Commit",flow_test:"Tests et build",flow_scan:"Contrôles de sécurité",flow_deploy:"Déployer et vérifier",flow_observe:"Observer et réagir",flow_gate:"GARDE-FOU",flow_footer:"LINT · TESTS · SCAN · APPROBATION · VÉRIFICATION",approach_define:"Définir",approach_validate:"Valider",approach_operate:"Exploiter",skill_evidence_label:"MIS EN PRATIQUE DANS",
    stat_experience:"ans en production en entreprise",stat_setup:"de configuration manuelle en moins",stat_cves:"Contrôle Trivy pour les alertes ÉLEVÉES / CRITIQUES",stat_mttr:"de MTTR en moins sur les incidents de production",metrics_note:"",
    kicker_about:"EN BREF",about_title:"La rigueur de la production.<br><em>L’exécution cloud-native.</em>",about_p1:"J’ai commencé dans le support de systèmes financiers en production, où un traitement batch en échec avait de vraies conséquences. J’y ai appris l’analyse des causes racines, les mises en production prudentes et la rédaction de runbooks réellement utiles.",about_p2:"J’applique maintenant cette rigueur au cloud : AWS géré avec Terraform, pipelines qui analysent le code et contrôlent les livraisons, et observabilité qui aide les équipes à détecter les problèmes avant les utilisateurs.",about_p3:"Je privilégie une infrastructure reproductible, des contrôles de sécurité explicites et des systèmes que les autres ingénieurs peuvent exploiter avec confiance.",
    kicker_expertise:"MES COMPÉTENCES",expertise_title:"Un chemin sécurisé<br><em>du commit au cloud.</em>",expertise_desc:"Cinq domaines concrets, chacun associé aux outils utilisés et à des réalisations consultables.",skill_cloud:"Cloud et IaC",skill_delivery:"CI/CD et livraison",skill_security:"Ingénierie de sécurité",skill_reliability:"Observabilité et SRE",skill_development:"Scripts et systèmes",toolkit_stack:"BOÎTE À OUTILS",skill_visual_label:"MA FAÇON DE TRAVAILLER",
    kicker_projects:"CONÇUS ET RÉALISÉS",projects_title:"Des systèmes avec<br><em>des preuves concrètes.</em>",projects_desc:"Trois études de cas : ce qui a été construit, le fonctionnement des contrôles, les limites de l’implémentation actuelle et les coûts d’exploitation.",filter_all:"Tous les projets <span>03</span>",filter_security:"Sécurité",filter_cloud:"Cloud / IaC",filter_kubernetes:"Kubernetes",project_kind_pipeline:"PIPELINE DEVSECOPS",project_kind_architecture:"ARCHITECTURE CLOUD",project_kind_kubernetes:"PLATEFORME KUBERNETES",project1_desc:"Création d’un flux CI/CD Jenkins pour une API Flask : flake8, Bandit, SonarQube, pytest, build Docker et contrôle d’image Trivy. Le Jenkinsfile définit les étapes de staging, d’approbation manuelle et de vérification de santé.",project1_outcome1:"Trivy renvoie un code d’échec pour les alertes ÉLEVÉES / CRITIQUES ; le rapport versionné signale des alertes ÉLEVÉES dans les paquets système et Python.",project1_outcome2:"réduction annoncée par rapport au provisionnement manuel, grâce à Terraform IaC",project2_desc:"Plateforme Terraform modulaire pour des fondations AWS sécurisées : réseau segmenté, données privées, équilibrage sécurisé et diffusion CDN.",project2_outcome1:"infrastructure modulaire reproductible",project2_outcome2:"objectif : aucune configuration manuelle dans la console",project3_desc:"Application React, Node.js et MongoDB sur EKS, avec infrastructure Terraform, images publiées et tableaux de bord opérationnels.",project3_outcome1:"architecture applicative en trois couches",project3_outcome2:"mise à l’échelle et équilibrage de charge",view_repository:"Voir le dépôt",more_projects:"AUTRES EXPÉRIMENTATIONS, SCRIPTS ET NOTES",all_github:"Voir tous les dépôts GitHub",
    kicker_journey:"EXPÉRIENCE ET APPRENTISSAGE",journey_title:"La rigueur de production<br><em>m’accompagne.</em>",journey_desc:"Du support d’entreprise à l’automatisation cloud, avec une approche fondée sur la production et l’apprentissage pratique continu.",role_capgemini:"Analyste de données · Ingénierie de production mainframe",experience1_a:"Maintenance de plus de 10 modules d’entreprise en COBOL, JCL, CICS, VSAM et DB2 pour des traitements financiers gérant des millions d’enregistrements par cycle.",experience1_b:"Réduction du MTTR de plus de 30 % grâce à l’analyse structurée des causes racines et aux runbooks sur plus de 10 modules mainframe traitant des millions d’enregistrements par lot.",experience1_c:"Automatisation des tâches quotidiennes avec Python et Bash ; collaboration entre trois zones géographiques.",role_training:"Programme d’ingénierie DevOps",experience2_a:"Travaux pratiques sur Docker, Kubernetes / EKS, Terraform, Ansible, Jenkins et GitHub Actions sur AWS.",experience2_b:"Analyse des incidents Kubernetes, pipeline, Terraform et erreurs Nginx 502/504 ; réduction de 60 % du temps de résolution simulé grâce à l’observabilité.",education_heading:"Master · Paris",education_cloud:"MSc Cloudification & Data Security · sept. 2024 – juil. 2025",education_digital:"Master complémentaire en Digital Marketing & Influencer Strategies · ICN Business School, 2025–2026 (communication et présentation produit).",education_label:"FORMATION INITIALE",btech_title:"BTech · Électronique et télécommunications",btech_sub:"JNTU Hyderabad · 2019–2022",certs_label:"CERTIFICATIONS",certs_text:"Docker Foundations Professional Certificate · GitHub Career Essentials · Google IT Support Specialization · AWS Solutions Architect – Associate (en cours)",
    kicker_contact:"ET MAINTENANT ?",contact_title:"Prêt à construire<br><em>un cloud plus sûr ?</em>",contact_desc:"Vous recrutez pour un poste DevSecOps ou cloud ? Je peux commencer immédiatement. Basé à Paris, je suis ouvert aux opportunités partout en France. Parlons-en.",contact_cta:"M’écrire",contact_status:"DISPONIBLE IMMÉDIATEMENT",contact_linkedin:"Prendre contact professionnellement",contact_github:"Découvrir le code",contact_location:"Paris, France · Mobilité en Europe",footer_note:"Mis à jour en oct. 2026 · Hébergé sur GitHub Pages.",back_top:"Retour en haut",theme_light:"Passer au thème clair",theme_dark:"Passer au thème sombre",motion_pause:"Mettre en pause les animations",motion_resume:"Reprendre les animations",menu_open:"Ouvrir la navigation",menu_close:"Fermer la navigation",
    skills:{cloud:{title:"Cloud et infrastructure as code",desc:"Définir des fondations sécurisées, versionner les changements et redéployer de façon cohérente.",chips:["AWS","Terraform","Ansible","VPC","IAM","RDS","EKS","Secrets Manager"],note:"Sécurité dès la conception, moindre privilège et environnements reproductibles."},delivery:{title:"CI/CD et livraison automatisée",desc:"Créer un parcours fiable du commit à la mise en production, avec contrôles qualité, sécurité et vérification du déploiement.",chips:["Jenkins","GitHub Actions","Docker","Pipeline-as-Code","ECR","Validations","Contrôles de santé"],note:"Détecter tôt les risques et assurer la traçabilité de chaque livraison."},security:{title:"Sécurité intégrée au développement",desc:"Intégrer les contrôles de sécurité au développement et aux livraisons, avec blocage si les seuils sont dépassés.",chips:["Trivy","SonarQube SAST","OWASP ZAP DAST","Bandit","Flake8","STRIDE","Secrets Manager"],note:"Analyse des vulnérabilités, secrets gérés et identité à privilèges minimaux."},reliability:{title:"Observabilité et fiabilité SRE",desc:"Exploiter métriques, journaux et alertes utiles pour suivre la santé des services et accélérer la reprise.",chips:["Prometheus","Grafana","Loki","Promtail","Alertmanager","ELK Stack","CloudWatch","Runbooks"],note:"Supervision opérationnelle, réponse aux incidents et analyse des causes."},development:{title:"Scripts et systèmes de production",desc:"Automatiser les tâches récurrentes et appliquer une méthode rigoureuse de diagnostic aux systèmes modernes et historiques.",chips:["Python 3.11","Bash","Flask","API REST","pytest","MySQL","Linux / RHEL","COBOL / JCL / DB2"],note:"Automatisation versionnée, rigueur opérationnelle et documentation claire."}}
  },

};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const themeToggle = $('#theme-toggle');
const languageSelect = $('#language-select');
const menuToggle = $('#menu-toggle');
const primaryNav = $('#primary-nav');
const toast = $('#toast');
const motionToggle = $('#motion-toggle');
let currentLanguage = 'en';
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === 'dark';
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☼' : '☾';
  themeToggle.setAttribute('aria-label', isDark ? translations[currentLanguage].theme_light : translations[currentLanguage].theme_dark);
  themeToggle.title = isDark ? translations[currentLanguage].theme_light : translations[currentLanguage].theme_dark;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#08140f' : '#f1f4ec');
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
}

const skillProofs = {
  cloud: { title: "AWS Infrastructure Security Platform", url: "https://github.com/Hemanth26080/aws-infrastructure-security-platform" },
  delivery: { title: "SecureCloud-Flask · CI/CD pipeline", url: "https://github.com/Hemanth26080/SecureCloud-Pipeline" },
  security: { title: "SecureCloud-Flask · security gates", url: "https://github.com/Hemanth26080/SecureCloud-Pipeline" },
  reliability: { title: "Three-Tier Application on AWS EKS", url: "https://github.com/Hemanth26080/Three-Tier-EKS" },
  development: { title: "Production engineering · Capgemini", url: "" }
};

function renderSkillPanel(skillKey) {
  const skill = translations[currentLanguage].skills[skillKey];
  if (!skill) return;
  $('#skill-panel-title').textContent = skill.title;
  $('#skill-panel-description').textContent = skill.desc;
  $('#skill-panel-note').textContent = skill.note;
  const proof = skillProofs[skillKey];
  const proofTitle = $('#skill-proof-title');
  const proofLink = $('#skill-proof-link');
  if (proof && proofTitle && proofLink) {
    proofTitle.textContent = proof.title;
    if (proof.url) {
      proofLink.href = proof.url;
      proofLink.hidden = false;
    } else {
      proofLink.hidden = true;
    }
  }
  $('#panel-index').textContent = `STACK_0${['cloud','delivery','security','reliability','development'].indexOf(skillKey) + 1}`;
  const chips = $('#skill-chips');
  chips.replaceChildren(...skill.chips.map((chip, index) => {
    const span = document.createElement('span');
    span.textContent = chip;
    span.style.animationDelay = `${index * 35}ms`;
    return span;
  }));
}

function setMotionPaused(paused) {
  document.body.classList.toggle('motion-paused', paused);
  motionToggle.textContent = paused ? '▶' : 'Ⅱ';
  motionToggle.setAttribute('aria-pressed', String(paused));
  const label = translations[currentLanguage][paused ? 'motion_resume' : 'motion_pause'];
  motionToggle.setAttribute('aria-label', label);
  motionToggle.title = label;
}

function setLanguage(language) {
  if (!translations[language]) language = 'en';
  currentLanguage = language;
  const dict = translations[language];
  document.documentElement.lang = language;
  languageSelect.value = language;
  $$('[data-i18n]').forEach(node => {
    const value = dict[node.dataset.i18n];
    if (typeof value === 'string') node.innerHTML = value;
  });
  setTheme(document.documentElement.dataset.theme || 'dark');
  menuToggle.setAttribute('aria-label', primaryNav.classList.contains('open') ? dict.menu_close : dict.menu_open);
  setMotionPaused(document.body.classList.contains('motion-paused'));
  const selectedSkill = $('.discipline-tab.active')?.dataset.skill || 'cloud';
  renderSkillPanel(selectedSkill);
  try { localStorage.setItem('portfolio-language', language); } catch (_) {}
}

function setActiveSkill(button) {
  $$('.discipline-tab').forEach(tab => {
    const active = tab === button;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  renderSkillPanel(button.dataset.skill);
}

function filterProjects(category, clickedButton) {
  $$('.filter-button').forEach(button => button.classList.toggle('active', button === clickedButton));
  $$('.project-card').forEach(card => {
    const categories = (card.dataset.categories || '').split(' ');
    const show = category === 'all' || categories.includes(category);
    card.classList.toggle('is-hidden', !show);
  });
}

// Theme and language are persisted locally in the visitor's browser.
let storedTheme = 'dark';
let storedLanguage = 'en';
try {
  storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  storedLanguage = localStorage.getItem('portfolio-language') || 'en';
} catch (_) {}
setTheme(storedTheme);
setLanguage(storedLanguage);

// Native controls: no framework or build step required.
themeToggle.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
motionToggle.addEventListener('click', () => setMotionPaused(!document.body.classList.contains('motion-paused')));
languageSelect.addEventListener('change', event => setLanguage(event.target.value));
$$('.discipline-tab').forEach(button => {
  button.addEventListener('click', () => setActiveSkill(button));
  button.addEventListener('keydown', event => {
    if (!['ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const tabs = $$('.discipline-tab');
    const next = (tabs.indexOf(button) + (['ArrowDown','ArrowRight'].includes(event.key) ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus();
    setActiveSkill(tabs[next]);
  });
});
$$('.filter-button').forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter, button)));

menuToggle.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? translations[currentLanguage].menu_close : translations[currentLanguage].menu_open);
});
$$('.primary-nav a').forEach(link => link.addEventListener('click', () => {
  primaryNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', translations[currentLanguage].menu_open);
}));

// Reading progress is informational and does not affect page content.
const progressBar = $('#scroll-progress-bar');
function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();
$('#current-year').textContent = new Date().getFullYear();

// Reveal content only when motion is permitted; content remains visible without JS support.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reduceMotion) {
  const revealTargets = $$('.content-section, .project-card, .timeline-item, .education-footer, .contact-card');
  revealTargets.forEach(node => node.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09, rootMargin: '0px 0px -30px 0px' });
  revealTargets.forEach(node => observer.observe(node));
}
