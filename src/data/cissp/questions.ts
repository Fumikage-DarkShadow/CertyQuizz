import type { Question } from '@/types'

const ISC2_REF = {
  label: 'ISC2 CISSP, page officielle',
  url: 'https://www.isc2.org/certifications/cissp',
}
const OUTLINE_REF = {
  label: 'CISSP Exam Outline (PDF, ISC2)',
  url: 'https://www.isc2.org/-/media/ISC2/Certifications/Exam-Outlines/CISSP-Exam-Outline-English-May-2021.ashx',
}
const DESTCERT_REF = {
  label: 'Destination Certification, CISSP free masterclass',
  url: 'https://www.destcert.com/resources/cissp-masterclass/',
}
const STUDY_GUIDE_REF = {
  label: 'Guide d\'étude CISSP (support tiers fourni par l\'utilisateur)',
  url: 'https://www.isc2.org/certifications/cissp',
}

/**
 * Banque CISSP ISC2 alignée sur l'Exam Outline public.
 * Questions rédigées à partir des objectifs officiels, pas copiées d'examens réels.
 * Pondération cible : CD1 16 %, CD2 10 %, CD3 13 %, CD4 13 %, CD5 13 %, CD6 12 %, CD7 13 %, CD8 10 %.
 */
export const CISSP_QUESTIONS: Question[] = [
  // ===== CD1 Security and Risk Management =====
  {
    id: 'cissp-cd1-01', certId: 'cissp', domainId: 'cd1', type: 'single', difficulty: 'medium',
    prompt: 'When recommending a control, a CISSP should PRIMARILY align it with:',
    options: [
      { id: 'a', text: 'The organization\'s risk tolerance and business objectives', rationale: 'Security supports the business; risk appetite drives control selection.' },
      { id: 'b', text: 'The latest product marketed by the biggest vendor', rationale: 'Product pushed sales is not risk aligned.' },
      { id: 'c', text: 'The personal preference of the CISO', rationale: 'Subjective, not defensible.' },
      { id: 'd', text: 'The lowest unit price regardless of fit', rationale: 'Cost without context is a poor driver.' },
    ],
    correct: ['a'],
    explanation: 'Controls must map to **risk tolerance** and business goals.',
    references: [OUTLINE_REF], tags: ['governance', 'risk'],
  },
  {
    id: 'cissp-cd1-02', certId: 'cissp', domainId: 'cd1', type: 'single', difficulty: 'medium',
    prompt: 'Which document type formally commits an organization to a specific way of behaving and is approved at the executive level?',
    options: [
      { id: 'a', text: 'Policy', rationale: 'Top level, high level intent; drives standards and procedures.' },
      { id: 'b', text: 'Procedure', rationale: 'Step by step execution document.' },
      { id: 'c', text: 'Standard', rationale: 'Mandatory specific requirement (technical or operational).' },
      { id: 'd', text: 'Guideline', rationale: 'Recommended but not mandatory.' },
    ],
    correct: ['a'],
    explanation: 'Hierarchy: **Policy** → Standard → Procedure → Guideline.',
    references: [OUTLINE_REF], tags: ['policies'],
  },
  {
    id: 'cissp-cd1-03', certId: 'cissp', domainId: 'cd1', type: 'single', difficulty: 'hard',
    prompt: 'A business impact analysis (BIA) is MOST useful for establishing which two recovery metrics?',
    options: [
      { id: 'a', text: 'RTO and RPO', rationale: 'A BIA drives the maximum tolerable downtime and the tolerable data loss.' },
      { id: 'b', text: 'CAPEX and OPEX', rationale: 'Financial metrics, not recovery ones.' },
      { id: 'c', text: 'KPI and OKR', rationale: 'Performance metrics.' },
      { id: 'd', text: 'SLA and SOC 2', rationale: 'Contract and audit constructs, not BIA outputs.' },
    ],
    correct: ['a'],
    explanation: 'The BIA produces **RTO** and **RPO**.',
    references: [OUTLINE_REF], tags: ['BIA', 'BCP'],
  },
  {
    id: 'cissp-cd1-04', certId: 'cissp', domainId: 'cd1', type: 'single', difficulty: 'medium',
    prompt: 'A company enters a region covered by a data protection law it did not previously face. Which step should come FIRST?',
    options: [
      { id: 'a', text: 'Perform a gap analysis against the new legal requirements', rationale: 'Before changing policies or controls, you must identify the gaps.' },
      { id: 'b', text: 'Buy a new firewall', rationale: 'Premature action without analysis.' },
      { id: 'c', text: 'Fire the data protection officer', rationale: 'Absurd.' },
      { id: 'd', text: 'Shut down operations in the region', rationale: 'Over reaction.' },
    ],
    correct: ['a'],
    explanation: 'Start compliance with a **gap analysis**.',
    references: [OUTLINE_REF], tags: ['compliance'],
  },
  {
    id: 'cissp-cd1-05', certId: 'cissp', domainId: 'cd1', type: 'single', difficulty: 'easy',
    prompt: 'The ISC2 Code of Ethics is best summarized as:',
    options: [
      { id: 'a', text: 'Four canons prioritizing society, principals, profession, individuals', rationale: 'Exactly the structure of the code.' },
      { id: 'b', text: 'A list of approved security products', rationale: 'Not the code.' },
      { id: 'c', text: 'A framework of encryption algorithms', rationale: 'Different domain.' },
      { id: 'd', text: 'A sales manual', rationale: 'Absurd.' },
    ],
    correct: ['a'],
    explanation: 'Four canons, ordered by priority.',
    references: [ISC2_REF], tags: ['ethics'],
  },

  // ===== CD2 Asset Security =====
  {
    id: 'cissp-cd2-01', certId: 'cissp', domainId: 'cd2', type: 'single', difficulty: 'medium',
    prompt: 'Who is ultimately accountable for the classification of a dataset in a CISSP aligned model?',
    options: [
      { id: 'a', text: 'The data owner', rationale: 'Business executive who is accountable for the information asset.' },
      { id: 'b', text: 'The data custodian', rationale: 'Operator who applies controls; not accountable for classification.' },
      { id: 'c', text: 'The end user', rationale: 'Consumer of the data, not accountable for class.' },
      { id: 'd', text: 'The auditor', rationale: 'Evaluates, does not set classification.' },
    ],
    correct: ['a'],
    explanation: 'Accountability sits with the **data owner**.' ,
    references: [OUTLINE_REF], tags: ['data ownership'],
  },
  {
    id: 'cissp-cd2-02', certId: 'cissp', domainId: 'cd2', type: 'single', difficulty: 'medium',
    prompt: 'Which lifecycle phase MUST precede decommissioning of a storage system holding sensitive data?',
    options: [
      { id: 'a', text: 'Secure data sanitization (cryptographic erasure, degaussing, or destruction)', rationale: 'Data remanence is a key CISSP exam concept.' },
      { id: 'b', text: 'Marketing announcement', rationale: 'Irrelevant to data remanence.' },
      { id: 'c', text: 'Employee bonus calculation', rationale: 'Irrelevant.' },
      { id: 'd', text: 'Facility repainting', rationale: 'Irrelevant.' },
    ],
    correct: ['a'],
    explanation: 'Sanitize then decommission.',
    references: [OUTLINE_REF], tags: ['data lifecycle'],
  },

  // ===== CD3 Security Architecture and Engineering =====
  {
    id: 'cissp-cd3-01', certId: 'cissp', domainId: 'cd3', type: 'single', difficulty: 'medium',
    prompt: 'Which security model focuses on CONFIDENTIALITY with the "no read up, no write down" rule?',
    options: [
      { id: 'a', text: 'Bell LaPadula', rationale: 'Classic confidentiality oriented mandatory access model.' },
      { id: 'b', text: 'Biba', rationale: 'Integrity oriented, "no read down, no write up".' },
      { id: 'c', text: 'Clark Wilson', rationale: 'Integrity via well formed transactions.' },
      { id: 'd', text: 'Brewer Nash', rationale: 'Chinese Wall for conflicts of interest.' },
    ],
    correct: ['a'],
    explanation: 'Confidentiality first: **Bell LaPadula**.',
    references: [OUTLINE_REF], tags: ['security models'],
  },
  {
    id: 'cissp-cd3-02', certId: 'cissp', domainId: 'cd3', type: 'single', difficulty: 'hard',
    prompt: 'A manufacturer installs a dedicated chip that stores cryptographic keys and performs key management in a tamper resistant manner. What is this?',
    options: [
      { id: 'a', text: 'Hardware Security Module (HSM) or Trusted Platform Module (TPM)', rationale: 'Dedicated silicon isolates and protects keys.' },
      { id: 'b', text: 'A VPN concentrator', rationale: 'Handles tunnels, not key storage isolation.' },
      { id: 'c', text: 'A CDN', rationale: 'Content distribution, unrelated.' },
      { id: 'd', text: 'A SIEM', rationale: 'Log correlation.' },
    ],
    correct: ['a'],
    explanation: 'Tamper resistant key isolation: **HSM or TPM**.',
    references: [OUTLINE_REF], tags: ['cryptography', 'hardware'],
  },
  {
    id: 'cissp-cd3-03', certId: 'cissp', domainId: 'cd3', type: 'single', difficulty: 'hard',
    prompt: 'Which cryptographic choice provides forward secrecy in a TLS handshake?',
    options: [
      { id: 'a', text: 'Ephemeral Diffie Hellman (DHE or ECDHE)', rationale: 'Fresh session key every handshake, immune to later private key compromise.' },
      { id: 'b', text: 'RSA key transport with a long term server key', rationale: 'Server key compromise later decrypts past sessions.' },
      { id: 'c', text: 'Pre shared key alone', rationale: 'Same key reused across sessions.' },
      { id: 'd', text: 'Static ECDH', rationale: 'Static keys defeat forward secrecy.' },
    ],
    correct: ['a'],
    explanation: 'Forward secrecy: **ephemeral Diffie Hellman**.',
    references: [OUTLINE_REF, DESTCERT_REF], tags: ['cryptography', 'TLS'],
  },
  {
    id: 'cissp-cd3-04', certId: 'cissp', domainId: 'cd3', type: 'single', difficulty: 'medium',
    prompt: 'Which concept forbids a trusted application from granting access rights it does not itself possess?',
    options: [
      { id: 'a', text: 'Principle of least privilege', rationale: 'An app can only convey what it holds.' },
      { id: 'b', text: 'Defense in depth', rationale: 'Different principle.' },
      { id: 'c', text: 'Compartmentalization', rationale: 'Different principle.' },
      { id: 'd', text: 'Separation of duties', rationale: 'Different principle.' },
    ],
    correct: ['a'],
    explanation: 'An app cannot grant what it does not possess: **least privilege**.',
    references: [OUTLINE_REF], tags: ['principles'],
  },

  // ===== CD4 Communication and Network Security =====
  {
    id: 'cissp-cd4-01', certId: 'cissp', domainId: 'cd4', type: 'single', difficulty: 'medium',
    prompt: 'At which OSI layer does TLS primarily operate?',
    options: [
      { id: 'a', text: 'Session layer (Layer 5) with visibility at Presentation (Layer 6) and Transport (Layer 4)', rationale: 'The canonical CISSP answer positions TLS above Transport but below Application.' },
      { id: 'b', text: 'Physical layer only', rationale: 'Electrical signals only.' },
      { id: 'c', text: 'Data Link layer only', rationale: 'MAC framing.' },
      { id: 'd', text: 'Application layer only', rationale: 'TLS is used by apps but not an app layer protocol per se.' },
    ],
    correct: ['a'],
    explanation: 'TLS: Session oriented, between Transport and Application.',
    references: [OUTLINE_REF], tags: ['OSI', 'TLS'],
  },
  {
    id: 'cissp-cd4-02', certId: 'cissp', domainId: 'cd4', type: 'single', difficulty: 'medium',
    prompt: 'Which segmentation approach is MOST effective against east west lateral movement in a modern datacenter?',
    options: [
      { id: 'a', text: 'Microsegmentation with identity aware policies on workloads', rationale: 'Fine grained policies per workload, regardless of VLAN.' },
      { id: 'b', text: 'A single flat VLAN for all servers', rationale: 'Eases lateral movement.' },
      { id: 'c', text: 'Only a border firewall', rationale: 'Protects north south but not east west.' },
      { id: 'd', text: 'Disabling all firewalls internally', rationale: 'Maximizes risk.' },
    ],
    correct: ['a'],
    explanation: 'East west containment: **microsegmentation**.',
    references: [OUTLINE_REF], tags: ['network', 'segmentation'],
  },
  {
    id: 'cissp-cd4-03', certId: 'cissp', domainId: 'cd4', type: 'single', difficulty: 'easy',
    prompt: 'Which protocol is a secure replacement for Telnet for remote shell administration?',
    options: [
      { id: 'a', text: 'SSH', rationale: 'Encrypted channel with strong authentication.' },
      { id: 'b', text: 'FTP', rationale: 'File transfer, not remote shell, and unencrypted.' },
      { id: 'c', text: 'SNMP v1', rationale: 'Monitoring, and insecure.' },
      { id: 'd', text: 'HTTP', rationale: 'Web, not shell, and unencrypted.' },
    ],
    correct: ['a'],
    explanation: 'Secure remote shell: **SSH**.',
    references: [OUTLINE_REF], tags: ['network'],
  },

  // ===== CD5 Identity and Access Management =====
  {
    id: 'cissp-cd5-01', certId: 'cissp', domainId: 'cd5', type: 'single', difficulty: 'medium',
    prompt: 'Which protocol allows a service to trust a third party identity provider through the exchange of XML assertions?',
    options: [
      { id: 'a', text: 'SAML 2.0', rationale: 'XML based federation protocol used for enterprise SSO.' },
      { id: 'b', text: 'LDAP', rationale: 'Directory access, not federation.' },
      { id: 'c', text: 'TACACS+', rationale: 'Cisco administrative AAA, not federation.' },
      { id: 'd', text: 'Kerberos', rationale: 'Ticket based AAA, not XML assertions.' },
    ],
    correct: ['a'],
    explanation: 'XML assertions federation: **SAML**.',
    references: [OUTLINE_REF], tags: ['federation', 'SSO'],
  },
  {
    id: 'cissp-cd5-02', certId: 'cissp', domainId: 'cd5', type: 'single', difficulty: 'medium',
    prompt: 'Which identity concept grants access based on environmental and user attributes, enabling fine grained, policy driven decisions?',
    options: [
      { id: 'a', text: 'ABAC', rationale: 'Attribute Based Access Control evaluates user, resource, context attributes.' },
      { id: 'b', text: 'RBAC', rationale: 'Role based; less contextual.' },
      { id: 'c', text: 'MAC', rationale: 'Mandatory labels, inflexible for context policies.' },
      { id: 'd', text: 'DAC', rationale: 'Owner driven, not policy driven.' },
    ],
    correct: ['a'],
    explanation: 'Context aware fine grained access: **ABAC**.',
    references: [OUTLINE_REF], tags: ['access control'],
  },
  {
    id: 'cissp-cd5-03', certId: 'cissp', domainId: 'cd5', type: 'single', difficulty: 'hard',
    prompt: 'An attacker forges a ticket that impersonates any user at will, effective until a trust secret is rotated. Which attack is this?',
    options: [
      { id: 'a', text: 'Golden Ticket attack (Kerberos)', rationale: 'Forgery using the krbtgt hash; gives long lasting, powerful access.' },
      { id: 'b', text: 'Pass the Hash', rationale: 'Reuse of NTLM hash, not a full forged ticket.' },
      { id: 'c', text: 'SQL injection', rationale: 'Database attack.' },
      { id: 'd', text: 'CSRF', rationale: 'Web attack on the browser.' },
    ],
    correct: ['a'],
    explanation: 'Forged long lived Kerberos ticket: **Golden Ticket**.',
    references: [OUTLINE_REF], tags: ['AD', 'Kerberos'],
  },

  // ===== CD6 Security Assessment and Testing =====
  {
    id: 'cissp-cd6-01', certId: 'cissp', domainId: 'cd6', type: 'single', difficulty: 'medium',
    prompt: 'Which testing approach gives testers NO prior internal knowledge to simulate an external attacker?',
    options: [
      { id: 'a', text: 'Black box testing', rationale: 'Testers work with no prior knowledge of the system.' },
      { id: 'b', text: 'White box testing', rationale: 'Full internal knowledge.' },
      { id: 'c', text: 'Gray box testing', rationale: 'Partial knowledge; realistic insider context.' },
      { id: 'd', text: 'No testing', rationale: 'Not a valid choice.' },
    ],
    correct: ['a'],
    explanation: 'Outsider simulation: **black box**.',
    references: [OUTLINE_REF], tags: ['pen test'],
  },
  {
    id: 'cissp-cd6-02', certId: 'cissp', domainId: 'cd6', type: 'single', difficulty: 'medium',
    prompt: 'Which metric BEST reflects how long an organization takes to recover from an incident?',
    options: [
      { id: 'a', text: 'Mean Time To Recover (MTTR)', rationale: 'Directly measures the time from outage to service restoration.' },
      { id: 'b', text: 'MTBF', rationale: 'Measures uptime between failures, not recovery time.' },
      { id: 'c', text: 'ARO', rationale: 'Annual rate of occurrence in risk analysis.' },
      { id: 'd', text: 'ALE', rationale: 'Annualized loss expectancy in risk analysis.' },
    ],
    correct: ['a'],
    explanation: 'Recovery speed: **MTTR**.',
    references: [OUTLINE_REF], tags: ['metrics'],
  },

  // ===== CD7 Security Operations =====
  {
    id: 'cissp-cd7-01', certId: 'cissp', domainId: 'cd7', type: 'single', difficulty: 'medium',
    prompt: 'During incident response, which step should come BEFORE eradication?',
    options: [
      { id: 'a', text: 'Containment', rationale: 'Limit the blast radius first; then eradicate.' },
      { id: 'b', text: 'Lessons learned', rationale: 'Post incident phase.' },
      { id: 'c', text: 'Recovery', rationale: 'Comes after eradication.' },
      { id: 'd', text: 'Public press statement', rationale: 'Not an IR step.' },
    ],
    correct: ['a'],
    explanation: 'Order: Preparation, Identification, **Containment**, Eradication, Recovery, Lessons Learned.',
    references: [OUTLINE_REF], tags: ['incident response'],
  },
  {
    id: 'cissp-cd7-02', certId: 'cissp', domainId: 'cd7', type: 'single', difficulty: 'hard',
    prompt: 'Which evidence handling practice is CRUCIAL to support admissibility of digital evidence in court?',
    options: [
      { id: 'a', text: 'Maintain chain of custody and use hashing for integrity', rationale: 'Demonstrates tamper free handling.' },
      { id: 'b', text: 'Use personal USB drives without tracking', rationale: 'Breaks chain of custody.' },
      { id: 'c', text: 'Delete the original files after analysis', rationale: 'Destroys evidence.' },
      { id: 'd', text: 'Store findings in a shared Wiki only', rationale: 'Not legally sufficient.' },
    ],
    correct: ['a'],
    explanation: 'Admissibility: **chain of custody** plus integrity hashes.',
    references: [OUTLINE_REF], tags: ['forensics'],
  },
  {
    id: 'cissp-cd7-03', certId: 'cissp', domainId: 'cd7', type: 'single', difficulty: 'medium',
    prompt: 'Which backup strategy captures only the data changed since the LAST full backup?',
    options: [
      { id: 'a', text: 'Differential backup', rationale: 'Growing deltas against the last full backup.' },
      { id: 'b', text: 'Full backup', rationale: 'Always backs up everything.' },
      { id: 'c', text: 'Incremental backup', rationale: 'Captures changes since the last backup of any kind.' },
      { id: 'd', text: 'Snapshot only backup', rationale: 'Snapshots do not always relate to a full baseline.' },
    ],
    correct: ['a'],
    explanation: 'Since last full: **differential**. Since last any: incremental.',
    references: [OUTLINE_REF], tags: ['backup'],
  },

  // ===== CD8 Software Development Security =====
  {
    id: 'cissp-cd8-01', certId: 'cissp', domainId: 'cd8', type: 'single', difficulty: 'medium',
    prompt: 'Which activity BEST addresses vulnerabilities early in the software development life cycle (shift left)?',
    options: [
      { id: 'a', text: 'Threat modeling during design', rationale: 'Identifies weaknesses before code is written.' },
      { id: 'b', text: 'Post launch bug bounty only', rationale: 'Catches issues after shipping.' },
      { id: 'c', text: 'Weekly antivirus scan', rationale: 'Not part of SDLC.' },
      { id: 'd', text: 'User training emails', rationale: 'Not an SDLC activity.' },
    ],
    correct: ['a'],
    explanation: 'Early design defense: **threat modeling**.',
    references: [OUTLINE_REF], tags: ['SDLC'],
  },
  {
    id: 'cissp-cd8-02', certId: 'cissp', domainId: 'cd8', type: 'single', difficulty: 'medium',
    prompt: 'The OWASP Top 10 focuses on:',
    options: [
      { id: 'a', text: 'Common critical web application security risks', rationale: 'Industry reference for web risk classes.' },
      { id: 'b', text: 'Hardware performance tuning', rationale: 'Unrelated.' },
      { id: 'c', text: 'Project management methodology', rationale: 'Unrelated.' },
      { id: 'd', text: 'Sales enablement', rationale: 'Unrelated.' },
    ],
    correct: ['a'],
    explanation: 'Top 10: **web application risks**.',
    references: [OUTLINE_REF], tags: ['OWASP'],
  },
  {
    id: 'cissp-cd8-03', certId: 'cissp', domainId: 'cd8', type: 'single', difficulty: 'hard',
    prompt: 'A vendor signs every released binary with its private key so that customers can verify integrity and origin. This supports which property MOST directly?',
    options: [
      { id: 'a', text: 'Integrity and authenticity (non repudiation of the vendor)', rationale: 'Digital signatures prove origin and detect tampering.' },
      { id: 'b', text: 'Confidentiality of the source code', rationale: 'Signing does not hide content.' },
      { id: 'c', text: 'Availability of the software', rationale: 'Signatures do not change uptime.' },
      { id: 'd', text: 'Cost reduction', rationale: 'Not a security property.' },
    ],
    correct: ['a'],
    explanation: 'Code signing: **integrity** plus **authenticity**.',
    references: [OUTLINE_REF], tags: ['supply chain', 'signatures'],
  },

  // =========================================================
  // Lot "Study Guide" : inspiré d'un support d'étude CISSP fourni.
  // 3 questions par domaine, reformulées et alignées sur l'Exam Outline.
  // =========================================================

  // ----- CD1 -----
  {
    id: 'cissp-sg-01', certId: 'cissp', domainId: 'cd1', type: 'single', difficulty: 'medium', official: true,
    prompt: 'A large enterprise hires you to align its security operations with industry control frameworks. The focus is specifically on technology solutions that discourage malicious activity before it starts. Which category of controls fits this goal?',
    options: [
      { id: 'a', text: 'Preventive controls', rationale: 'Preventive controls aim to stop actions, not just discourage them.' },
      { id: 'b', text: 'Deterrent controls', rationale: 'Deterrent controls (IPS, visible cameras, warning banners) aim to discourage malicious behavior.' },
      { id: 'c', text: 'Detective controls', rationale: 'Detective controls identify activity after it happens.' },
      { id: 'd', text: 'Corrective controls', rationale: 'Corrective controls restore the environment after an incident.' },
    ],
    correct: ['b'],
    explanation: 'Technology that discourages malicious action is **deterrent**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['controls'],
  },
  {
    id: 'cissp-sg-02', certId: 'cissp', domainId: 'cd1', type: 'single', difficulty: 'medium', official: true,
    prompt: 'An ISP with thousands of broadband customers holds 5 years of detailed monitoring and incident data. It wants to estimate the probability of future customer compromises using that empirical data. Which risk analysis approach fits?',
    options: [
      { id: 'a', text: 'Qualitative', rationale: 'Qualitative uses descriptive ratings; here the company has measurable data to compute probabilities.' },
      { id: 'b', text: 'Quantitative', rationale: 'When rich historical metrics are available, a numeric quantitative approach produces defensible probabilities and losses.' },
      { id: 'c', text: 'STRIDE', rationale: 'STRIDE is a threat modeling method, not a risk analysis.' },
      { id: 'd', text: 'Reduction analysis', rationale: 'A threat modeling technique, not a risk method.' },
    ],
    correct: ['b'],
    explanation: 'Rich data enables a **quantitative** risk analysis.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['risk'],
  },
  {
    id: 'cissp-sg-03', certId: 'cissp', domainId: 'cd1', type: 'single', difficulty: 'easy', official: true,
    prompt: 'A BCP project for a high volume content platform sets the maximum acceptable data loss in a disaster at 4 hours. Where is this value documented?',
    options: [
      { id: 'a', text: 'Recovery Time Objective (RTO)', rationale: 'RTO measures acceptable downtime, not data loss.' },
      { id: 'b', text: 'Recovery Point Objective (RPO)', rationale: 'RPO is exactly the maximum tolerable data loss expressed in time.' },
      { id: 'c', text: 'Maximum Tolerable Downtime (MTD)', rationale: 'MTD frames total acceptable outage, not data loss.' },
      { id: 'd', text: 'Maximum Data Tolerance (MDT)', rationale: 'Not a standard BCP metric.' },
    ],
    correct: ['b'],
    explanation: 'Maximum acceptable data loss egals **RPO**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['BCP', 'RPO'],
  },

  // ----- CD2 -----
  {
    id: 'cissp-sg-04', certId: 'cissp', domainId: 'cd2', type: 'single', difficulty: 'medium', official: true,
    prompt: 'An audit finds users getting access to data without any formal approval workflow. You propose a formal process. Which role is responsible for approving the policies that govern access to a given dataset?',
    options: [
      { id: 'a', text: 'Data creator', rationale: 'Creating data does not automatically confer governance authority.' },
      { id: 'b', text: 'Data processor', rationale: 'Processors act on the data; they do not set access policy.' },
      { id: 'c', text: 'Data custodian', rationale: 'Custodians operate and maintain data; they do not set policy.' },
      { id: 'd', text: 'Data owner', rationale: 'Data owners are accountable for the asset and approve access policies.' },
    ],
    correct: ['d'],
    explanation: 'Access policies are approved by the **data owner**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['data ownership'],
  },
  {
    id: 'cissp-sg-05', certId: 'cissp', domainId: 'cd2', type: 'multi', difficulty: 'medium', official: true,
    prompt: 'Select THREE effective methods to minimize data remanence on retired storage media.',
    options: [
      { id: 'a', text: 'Quick volume format by the operating system', rationale: 'Quick format leaves file contents recoverable on the media.' },
      { id: 'b', text: 'Secure overwriting with multiple passes', rationale: 'Random pattern overwrites make recovery impractical.' },
      { id: 'c', text: 'Degaussing with a strong magnetic field', rationale: 'Degaussing neutralizes magnetic storage.' },
      { id: 'd', text: 'Physical destruction (shredding, pulverizing)', rationale: 'Physically destroyed media cannot be read.' },
      { id: 'e', text: 'Encryption only, without removing the media', rationale: 'Without destroying or removing the key, the data is still present and recoverable by key holders.' },
    ],
    correct: ['b', 'c', 'd'],
    explanation: 'Overwrite, degauss, destroy. Formatting and encryption alone are not enough.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['data remanence'],
  },
  {
    id: 'cissp-sg-06', certId: 'cissp', domainId: 'cd2', type: 'single', difficulty: 'medium', official: true,
    prompt: 'Three vendors pitch hybrid cloud solutions to your organization. You need an objective method that picks the solution that best meets the stated requirements, not the vendor itself. Which process applies?',
    options: [
      { id: 'a', text: 'Standards selection', rationale: 'Standards selection evaluates and picks the technical solution that best fits the requirements.' },
      { id: 'b', text: 'Standards deviation', rationale: 'Not a standard term.' },
      { id: 'c', text: 'Vendor screening', rationale: 'Evaluates the company, not the technical solution.' },
      { id: 'd', text: 'Vendor reviewing', rationale: 'Vendor centric, not solution centric.' },
    ],
    correct: ['a'],
    explanation: 'Choosing a technical solution objectively is **standards selection**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['selection process'],
  },

  // ----- CD3 -----
  {
    id: 'cissp-sg-07', certId: 'cissp', domainId: 'cd3', type: 'single', difficulty: 'medium', official: true,
    prompt: 'Your current security model enforces confidentiality (no read up, no write down) but fails to stop a low clearance user from writing data upward into a higher classification. Which security property should the complementary model address?',
    options: [
      { id: 'a', text: 'Availability', rationale: 'Not about classification tampering.' },
      { id: 'b', text: 'Governance', rationale: 'Governance is a program property, not a formal model property.' },
      { id: 'c', text: 'Integrity', rationale: 'Biba, an integrity model, forbids write up and read down, solving exactly this gap.' },
      { id: 'd', text: 'Due diligence', rationale: 'Due diligence is a governance concept, not a model tenet.' },
    ],
    correct: ['c'],
    explanation: 'Complement Bell LaPadula with an **integrity** model (Biba).',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['security models'],
  },
  {
    id: 'cissp-sg-08', certId: 'cissp', domainId: 'cd3', type: 'single', difficulty: 'easy', official: true,
    prompt: 'How is an injection attack best described?',
    options: [
      { id: 'a', text: 'Overloading a system or network with traffic', rationale: 'That describes denial of service.' },
      { id: 'b', text: 'Plugging infected portable drives into endpoints', rationale: 'That describes removable media attacks.' },
      { id: 'c', text: 'Passively capturing packets on a network', rationale: 'That describes sniffing.' },
      { id: 'd', text: 'Supplying invalid or crafted input that the interpreter mistakes for code or commands', rationale: 'Exactly the mechanism of SQL injection, command injection, LDAP injection.' },
      { id: 'e', text: 'Intercepting and altering network communication in transit', rationale: 'That describes a man in the middle attack.' },
    ],
    correct: ['d'],
    explanation: 'Injection egals **crafted input** that the interpreter executes.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['injection'],
  },
  {
    id: 'cissp-sg-09', certId: 'cissp', domainId: 'cd3', type: 'single', difficulty: 'hard', official: true,
    prompt: 'You design a PKI that must maximize both security and flexibility of its hierarchy. Which architecture fits best?',
    options: [
      { id: 'a', text: 'Two tier with an offline root CA plus issuing CAs', rationale: 'Secure but less flexible; no dedicated policy layer for revoking a branch independently.' },
      { id: 'b', text: 'Two tier with an online root CA plus issuing CAs', rationale: 'An online root CA weakens security.' },
      { id: 'c', text: 'Three tier with offline root, offline policy CAs, and issuing CAs', rationale: 'Offline root plus offline policy CAs maximize both security and branch level flexibility.' },
      { id: 'd', text: 'Three tier with offline root, online policy CAs, and issuing CAs', rationale: 'Online policy CAs reduce security.' },
    ],
    correct: ['c'],
    explanation: 'Security plus flexibility calls for a **three tier** PKI with offline root and offline policy CAs.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['PKI'],
  },

  // ----- CD4 -----
  {
    id: 'cissp-sg-10', certId: 'cissp', domainId: 'cd4', type: 'single', difficulty: 'medium', official: true,
    prompt: 'You are troubleshooting why some traffic is not taking the expected route across your network. Which OSI layer is the most likely source of the issue?',
    options: [
      { id: 'a', text: 'Layer 2 (Data Link)', rationale: 'Forwards frames within a segment, does not choose routes.' },
      { id: 'b', text: 'Layer 3 (Network)', rationale: 'Routing decisions live at Layer 3, handled by routers.' },
      { id: 'c', text: 'Layer 4 (Transport)', rationale: 'Manages segments and ports, not routes.' },
      { id: 'd', text: 'Layer 5 (Session)', rationale: 'Session management, unrelated to routing.' },
      { id: 'e', text: 'Layer 7 (Application)', rationale: 'Application semantics, unrelated to routing.' },
    ],
    correct: ['b'],
    explanation: 'Routing belongs to **Layer 3**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['OSI'],
  },
  {
    id: 'cissp-sg-11', certId: 'cissp', domainId: 'cd4', type: 'single', difficulty: 'medium', official: true,
    prompt: 'On a wireless LAN with one access point, two clients at opposite edges cannot hear each other (hidden node problem). Which technology mitigates collisions in this situation?',
    options: [
      { id: 'a', text: 'Collision detection (CSMA/CD)', rationale: 'Used on wired Ethernet, not on wireless.' },
      { id: 'b', text: 'Collision avoidance (CSMA/CA) with RTS/CTS', rationale: 'Precisely designed for wireless and the hidden node problem.' },
      { id: 'c', text: 'Channel Service Unit (CSU)', rationale: 'WAN interface hardware, unrelated.' },
      { id: 'd', text: 'Data Service Unit (DSU)', rationale: 'WAN interface hardware, unrelated.' },
    ],
    correct: ['b'],
    explanation: 'Wireless relies on **collision avoidance** (CSMA/CA).',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['wireless'],
  },
  {
    id: 'cissp-sg-12', certId: 'cissp', domainId: 'cd4', type: 'single', difficulty: 'medium', official: true,
    prompt: 'Your SOC deploys an IDS that must only capture traffic tied to internal VoIP calls. Which signaling protocol should the sensor focus on?',
    options: [
      { id: 'a', text: 'H.264', rationale: 'Video codec.' },
      { id: 'b', text: 'DNS', rationale: 'Name resolution, not call signaling.' },
      { id: 'c', text: 'H.263', rationale: 'Older video codec.' },
      { id: 'd', text: 'HTTPS', rationale: 'Web transport.' },
      { id: 'e', text: 'SIP', rationale: 'Session Initiation Protocol is the dominant VoIP signaling protocol.' },
    ],
    correct: ['e'],
    explanation: 'VoIP signaling egals **SIP**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['VoIP'],
  },

  // ----- CD5 -----
  {
    id: 'cissp-sg-13', certId: 'cissp', domainId: 'cd5', type: 'multi', difficulty: 'easy', official: true,
    prompt: 'Select the THREE canonical authentication factors used in multifactor authentication design.',
    options: [
      { id: 'a', text: 'Something you make', rationale: 'Not a recognized factor.' },
      { id: 'b', text: 'Something you know', rationale: 'Knowledge factor : password, PIN, personal answer.' },
      { id: 'c', text: 'Something you have', rationale: 'Possession factor : token, badge, smart card, phone app.' },
      { id: 'd', text: 'Something you need', rationale: 'Not a recognized factor.' },
      { id: 'e', text: 'Something you are', rationale: 'Inherence factor : biometric.' },
      { id: 'f', text: 'Something you do', rationale: 'Sometimes listed but not in the canonical three.' },
    ],
    correct: ['b', 'c', 'e'],
    explanation: 'Three factors : **know, have, are**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['MFA'],
  },
  {
    id: 'cissp-sg-14', certId: 'cissp', domainId: 'cd5', type: 'single', difficulty: 'medium', official: true,
    prompt: 'Your organization is scaling IaaS usage rapidly and wants an authentication solution that minimizes on premise infrastructure, deploys fast, and has low operational overhead for services yet to be defined. What fits best?',
    options: [
      { id: 'a', text: 'A federated identity solution anchored on premise', rationale: 'Heavier to deploy, requires federation infrastructure for every target.' },
      { id: 'b', text: 'A cloud based identity service from the chosen cloud provider', rationale: 'No on premise infrastructure, fast to enable, covers IaaS, PaaS, SaaS natively.' },
      { id: 'c', text: 'A multifactor authentication solution', rationale: 'MFA is a control, not the overall authentication strategy.' },
      { id: 'd', text: 'A third party identity service for SaaS only', rationale: 'Limited to SaaS scenarios; ill suited for IaaS.' },
    ],
    correct: ['b'],
    explanation: 'Rapid cloud scale egals **cloud based identity service**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['cloud identity'],
  },
  {
    id: 'cissp-sg-15', certId: 'cissp', domainId: 'cd5', type: 'single', difficulty: 'medium', official: true,
    prompt: 'A user cannot reach a shared folder. Neither the user nor any of their groups has permissions. Other users and groups do have permissions, and an administrator manually changed permissions on the folder recently. Which access control model is in use?',
    options: [
      { id: 'a', text: 'RBAC', rationale: 'Role based access control does not rely on per user manual grants.' },
      { id: 'b', text: 'Rule based access control', rationale: 'Decisions come from attribute rules, not from manual per user grants.' },
      { id: 'c', text: 'MAC', rationale: 'Mandatory access control uses labels and clearances, not manual folder ACL edits.' },
      { id: 'd', text: 'DAC', rationale: 'Discretionary access control lets owners grant or revoke access manually, which matches the scenario.' },
    ],
    correct: ['d'],
    explanation: 'Manual grants by owners egals **DAC**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['access control'],
  },

  // ----- CD6 -----
  {
    id: 'cissp-sg-16', certId: 'cissp', domainId: 'cd6', type: 'single', difficulty: 'medium', official: true,
    prompt: 'You run an end to end test on a new email application. Testers must cover all features and must have NO prior knowledge of the environment. Which testing type applies?',
    options: [
      { id: 'a', text: 'White box testing', rationale: 'Testers have full knowledge.' },
      { id: 'b', text: 'Black box testing', rationale: 'Testers work with no prior knowledge of the target.' },
      { id: 'c', text: 'Negative testing', rationale: 'Testing with invalid input, not a knowledge level.' },
      { id: 'd', text: 'Static testing', rationale: 'Reviews code or artifacts without running them.' },
      { id: 'e', text: 'Dynamic testing', rationale: 'Runs the system during tests, but not defined by tester knowledge.' },
    ],
    correct: ['b'],
    explanation: 'No prior knowledge egals **black box**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['testing'],
  },
  {
    id: 'cissp-sg-17', certId: 'cissp', domainId: 'cd6', type: 'single', difficulty: 'medium', official: true,
    prompt: 'Your immediate goal is to validate that internal and external auditors actually follow the processes defined in your audit policies. Which type of audit matches that goal?',
    options: [
      { id: 'a', text: 'Internal', rationale: 'Internal audit is one of the things being verified.' },
      { id: 'b', text: 'External', rationale: 'External audit is one of the things being verified.' },
      { id: 'c', text: 'Third party', rationale: 'A neutral third party can independently assess whether both internal and external auditors follow policy.' },
      { id: 'd', text: 'Hybrid', rationale: 'Not a recognized category.' },
    ],
    correct: ['c'],
    explanation: 'Meta audit of other auditors egals **third party**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['audit'],
  },
  {
    id: 'cissp-sg-18', certId: 'cissp', domainId: 'cd6', type: 'single', difficulty: 'medium', official: true,
    prompt: 'A team is tasked with attempting to bypass controls using any technical or non technical method, including social engineering. Which testing type fits?',
    options: [
      { id: 'a', text: 'Vulnerability assessment', rationale: 'Identifies weaknesses, does not usually attempt to exploit them.' },
      { id: 'b', text: 'Penetration testing', rationale: 'Actively attempts to bypass controls, technical or otherwise.' },
      { id: 'c', text: 'Synthetic transaction testing', rationale: 'Scripted transactions, not adversarial bypass.' },
      { id: 'd', text: 'Misuse case testing', rationale: 'Specifies abusive scenarios at design time, different activity.' },
    ],
    correct: ['b'],
    explanation: 'Bypass with all means egals **penetration testing**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['pentest'],
  },

  // ----- CD7 -----
  {
    id: 'cissp-sg-19', certId: 'cissp', domainId: 'cd7', type: 'multi', difficulty: 'hard', official: true,
    prompt: 'A fully patched computer is compromised. Select the TWO statements most likely true about this incident.',
    options: [
      { id: 'a', text: 'A zero day vulnerability existed in one of the running components', rationale: 'If no patch could have prevented it, an unknown or unpatched vulnerability is the likely root.' },
      { id: 'b', text: 'The attacker used a zero day exploit against that vulnerability', rationale: 'An unreleased exploit is the common way to beat a fully patched system.' },
      { id: 'c', text: 'The computer had no configuration management agent', rationale: 'Possible but not required to explain the compromise.' },
      { id: 'd', text: 'The computer had no antimalware installed', rationale: 'Possible but not required given full patching is already in place.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Fully patched plus compromise suggests a **zero day vulnerability and exploit**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['zero day'],
  },
  {
    id: 'cissp-sg-20', certId: 'cissp', domainId: 'cd7', type: 'single', difficulty: 'medium', official: true,
    prompt: 'During peak hours, IP telephony calls suffer from lag and muffled audio. Which technology should you apply to prioritize voice traffic?',
    options: [
      { id: 'a', text: 'System resilience', rationale: 'About recovery speed, not traffic prioritization.' },
      { id: 'b', text: 'Quality of Service (QoS)', rationale: 'Prioritizes specific classes of traffic (voice) over others on shared links.' },
      { id: 'c', text: 'Fault tolerance', rationale: 'Avoids outages through redundancy, not prioritization.' },
      { id: 'd', text: 'Application whitelisting', rationale: 'Controls which apps run, not network priority.' },
      { id: 'e', text: 'Blacklisting', rationale: 'Blocks known bad items, not a prioritization tool.' },
      { id: 'f', text: 'Configuration management', rationale: 'Keeps settings consistent, not a traffic shaper.' },
    ],
    correct: ['b'],
    explanation: 'Voice prioritization egals **QoS**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['QoS'],
  },
  {
    id: 'cissp-sg-21', certId: 'cissp', domainId: 'cd7', type: 'single', difficulty: 'hard', official: true,
    prompt: 'DR testing requirements : IT teams must actually execute recovery steps, the alternate site must be proven, but production operations must NOT be interrupted. Which test type fits?',
    options: [
      { id: 'a', text: 'Partial interruption', rationale: 'Stops part of production; violates the no interruption rule.' },
      { id: 'b', text: 'Tabletop', rationale: 'Pure discussion; no actual recovery steps are performed.' },
      { id: 'c', text: 'Full interruption', rationale: 'Full outage of production; violates the no interruption rule.' },
      { id: 'd', text: 'Parallel', rationale: 'Teams actually recover into the alternate site, while production keeps running.' },
    ],
    correct: ['d'],
    explanation: 'Real steps without impacting production egals **parallel test**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['DR testing'],
  },

  // ----- CD8 -----
  {
    id: 'cissp-sg-22', certId: 'cissp', domainId: 'cd8', type: 'single', difficulty: 'medium', official: true,
    prompt: 'You lead a new software project centered on user stories, rapid iterations, and continuous feedback. Which development methodology best aligns with these goals?',
    options: [
      { id: 'a', text: 'Agile', rationale: 'Agile emphasizes user stories, iterations, and efficient feedback loops.' },
      { id: 'b', text: 'Waterfall', rationale: 'Sequential and rigid, not iterative.' },
      { id: 'c', text: 'Spiral', rationale: 'Iterative with heavy risk analysis, but not story driven like Agile.' },
      { id: 'd', text: 'Rapid Application Development', rationale: 'Prototype oriented; does not revolve around user stories.' },
    ],
    correct: ['a'],
    explanation: 'User stories plus iterations egals **Agile**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['SDLC'],
  },
  {
    id: 'cissp-sg-23', certId: 'cissp', domainId: 'cd8', type: 'single', difficulty: 'easy', official: true,
    prompt: 'A web form accepts up to 200 characters and must reject unwanted character patterns before the data reaches the database. Which control should you enforce on the text field?',
    options: [
      { id: 'a', text: 'Input validation with an allow list and length check', rationale: 'Stops malformed or malicious input at the boundary, mitigating injection and buffer issues.' },
      { id: 'b', text: 'Unit testing of backend classes', rationale: 'Useful, but does not constrain live input at the field.' },
      { id: 'c', text: 'Prototyping', rationale: 'A design activity, not a runtime control.' },
      { id: 'd', text: 'Buffer regression', rationale: 'Not a recognized control.' },
    ],
    correct: ['a'],
    explanation: 'Reject bad input at the field egals **input validation**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['secure coding'],
  },
  {
    id: 'cissp-sg-24', certId: 'cissp', domainId: 'cd8', type: 'single', difficulty: 'hard', official: true,
    prompt: 'You plan an AI style application where the developer defines only constraints and the end goal, and the system figures out the solution itself. Which programming language generation corresponds to this style?',
    options: [
      { id: 'a', text: 'Generation 2 (assembly)', rationale: 'Low level mnemonic instructions.' },
      { id: 'b', text: 'Generation 3 (classical high level)', rationale: 'Imperative with explicit control flow.' },
      { id: 'c', text: 'Generation 4 (very high level)', rationale: 'Reduces code volume, but still imperative.' },
      { id: 'd', text: 'Generation 5 (natural, constraint driven)', rationale: 'Developer states goals and constraints; the system (Prolog, Mercury) derives the solution.' },
    ],
    correct: ['d'],
    explanation: 'Constraint and goal based languages egals **Generation 5**.',
    references: [OUTLINE_REF, STUDY_GUIDE_REF], tags: ['languages'],
  },
]
