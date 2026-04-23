import type { Question } from '@/types'

const ISACA_REF = {
  label: 'ISACA CISA, page officielle',
  url: 'https://www.isaca.org/credentialing/cisa',
}
const OUTLINE_REF = {
  label: 'CISA Exam Content Outline',
  url: 'https://www.isaca.org/credentialing/cisa/cisa-exam-content-outline',
}

/**
 * Banque CISA ISACA alignée sur l'Exam Content Outline officiel.
 * Questions rédigées à partir des objectifs publics, pas copiées d'examens réels.
 * Pondération cible : CA1 18 %, CA2 18 %, CA3 12 %, CA4 26 %, CA5 26 %.
 */
export const CISA_QUESTIONS: Question[] = [
  // ===== CA1 Information System Auditing Process =====
  {
    id: 'cisa-ca1-01', certId: 'cisa', domainId: 'ca1', type: 'single', difficulty: 'medium',
    prompt: 'During audit planning, an IS auditor MUST document which element FIRST?',
    options: [
      { id: 'a', text: 'The audit objective and scope', rationale: 'Everything else (procedures, sample size) flows from a clear objective and scope.' },
      { id: 'b', text: 'The names of employees to dismiss', rationale: 'Not an auditor\'s role.' },
      { id: 'c', text: 'The preferred brand of laptop', rationale: 'Irrelevant.' },
      { id: 'd', text: 'Marketing tagline of the company', rationale: 'Irrelevant.' },
    ],
    correct: ['a'],
    explanation: 'Plan with **objective and scope** first.',
    references: [OUTLINE_REF], tags: ['audit planning'],
  },
  {
    id: 'cisa-ca1-02', certId: 'cisa', domainId: 'ca1', type: 'single', difficulty: 'medium',
    prompt: 'An auditor finds a control deficiency. BEST next step?',
    options: [
      { id: 'a', text: 'Discuss the finding with management to validate facts and compensating controls', rationale: 'Avoids rework and strengthens the final report with context.' },
      { id: 'b', text: 'Publish the finding immediately on the public website', rationale: 'Violates professional standards.' },
      { id: 'c', text: 'Silently fix the issue directly in production', rationale: 'Auditors do not implement.' },
      { id: 'd', text: 'Ignore the deficiency', rationale: 'Unprofessional.' },
    ],
    correct: ['a'],
    explanation: 'Validate the finding with management before reporting.',
    references: [OUTLINE_REF], tags: ['audit execution'],
  },
  {
    id: 'cisa-ca1-03', certId: 'cisa', domainId: 'ca1', type: 'single', difficulty: 'hard',
    prompt: 'An auditor uses data analytics on the full population instead of sampling. This is possible BECAUSE:',
    options: [
      { id: 'a', text: 'Computer assisted audit techniques (CAATs) can process the full dataset', rationale: 'Tools like ACL, IDEA, SQL, Python let auditors test 100 % of transactions.' },
      { id: 'b', text: 'ISACA forbids sampling', rationale: 'False.' },
      { id: 'c', text: 'The law requires full population testing', rationale: 'Not a general legal requirement.' },
      { id: 'd', text: 'CAATs replace the need for evidence', rationale: 'Evidence is still required.' },
    ],
    correct: ['a'],
    explanation: '**CAATs** enable full population testing.',
    references: [OUTLINE_REF], tags: ['CAAT', 'data analytics'],
  },
  {
    id: 'cisa-ca1-04', certId: 'cisa', domainId: 'ca1', type: 'single', difficulty: 'medium',
    prompt: 'Which term describes the structured approach for reporting audit findings to management?',
    options: [
      { id: 'a', text: 'Condition, Criteria, Cause, Consequence, Corrective Action (5C)', rationale: 'Standard structure: what was found, benchmark, why, impact, action.' },
      { id: 'b', text: 'Three lines of defense', rationale: 'A governance model, not a reporting format.' },
      { id: 'c', text: 'Pareto analysis', rationale: 'A prioritization tool, not a reporting format.' },
      { id: 'd', text: 'Balanced scorecard', rationale: 'A strategy tool, not a reporting format.' },
    ],
    correct: ['a'],
    explanation: 'Findings reported with **5C**.',
    references: [OUTLINE_REF], tags: ['reporting'],
  },

  // ===== CA2 Governance and Management of IT =====
  {
    id: 'cisa-ca2-01', certId: 'cisa', domainId: 'ca2', type: 'single', difficulty: 'medium',
    prompt: 'The IT strategy MUST align with:',
    options: [
      { id: 'a', text: 'The overall business strategy', rationale: 'IT exists to enable the business.' },
      { id: 'b', text: 'The latest vendor roadmap', rationale: 'Vendor driven, not business driven.' },
      { id: 'c', text: 'The CIO\'s personal preferences', rationale: 'Subjective and not defensible.' },
      { id: 'd', text: 'The weather forecast', rationale: 'Irrelevant.' },
    ],
    correct: ['a'],
    explanation: 'IT strategy serves the **business strategy**.',
    references: [OUTLINE_REF], tags: ['governance'],
  },
  {
    id: 'cisa-ca2-02', certId: 'cisa', domainId: 'ca2', type: 'single', difficulty: 'medium',
    prompt: 'Which framework is the reference for the governance of enterprise IT (ISACA flagship)?',
    options: [
      { id: 'a', text: 'COBIT', rationale: 'ISACA flagship framework for enterprise governance of IT.' },
      { id: 'b', text: 'ITIL', rationale: 'Service management focus, complementary but not governance.' },
      { id: 'c', text: 'PRINCE2', rationale: 'Project management.' },
      { id: 'd', text: 'TOGAF', rationale: 'Enterprise architecture.' },
    ],
    correct: ['a'],
    explanation: 'Governance of enterprise IT: **COBIT**.',
    references: [OUTLINE_REF], tags: ['COBIT'],
  },
  {
    id: 'cisa-ca2-03', certId: 'cisa', domainId: 'ca2', type: 'single', difficulty: 'hard',
    prompt: 'In the "Three Lines of Defense" model, internal audit belongs to:',
    options: [
      { id: 'a', text: 'The third line, providing independent assurance to the board', rationale: 'Independence is key: internal audit reports to the board or audit committee.' },
      { id: 'b', text: 'The first line, managing risks day to day', rationale: 'That is operational management.' },
      { id: 'c', text: 'The second line, oversight and risk functions', rationale: 'Risk and compliance functions, not internal audit.' },
      { id: 'd', text: 'Outside the model entirely', rationale: 'Internal audit is definitely included.' },
    ],
    correct: ['a'],
    explanation: 'Internal audit is the **third line**.',
    references: [OUTLINE_REF], tags: ['three lines'],
  },
  {
    id: 'cisa-ca2-04', certId: 'cisa', domainId: 'ca2', type: 'single', difficulty: 'medium',
    prompt: 'A steering committee for IT projects is primarily expected to:',
    options: [
      { id: 'a', text: 'Align project priorities with business objectives and approve major decisions', rationale: 'Strategic alignment and decision forum.' },
      { id: 'b', text: 'Write code for every project', rationale: 'Not a steering responsibility.' },
      { id: 'c', text: 'Manage the company\'s social media accounts', rationale: 'Out of scope.' },
      { id: 'd', text: 'Replace the internal audit function', rationale: 'Different role entirely.' },
    ],
    correct: ['a'],
    explanation: 'Steering committee: **alignment and decisions**.',
    references: [OUTLINE_REF], tags: ['steering committee'],
  },

  // ===== CA3 IS Acquisition, Development and Implementation =====
  {
    id: 'cisa-ca3-01', certId: 'cisa', domainId: 'ca3', type: 'single', difficulty: 'medium',
    prompt: 'During UAT, which party MUST ultimately approve the readiness to go live?',
    options: [
      { id: 'a', text: 'The business owner or sponsor', rationale: 'Business signoff is a key control before production release.' },
      { id: 'b', text: 'The cleaning team', rationale: 'Irrelevant.' },
      { id: 'c', text: 'The developer who wrote the code', rationale: 'Separation of duties: developer does not also sign off acceptance.' },
      { id: 'd', text: 'The external auditor', rationale: 'The auditor evaluates controls, does not approve releases.' },
    ],
    correct: ['a'],
    explanation: 'Business sponsor approves UAT readiness.',
    references: [OUTLINE_REF], tags: ['UAT', 'SoD'],
  },
  {
    id: 'cisa-ca3-02', certId: 'cisa', domainId: 'ca3', type: 'single', difficulty: 'hard',
    prompt: 'A project is over budget and behind schedule but the sponsor wants to continue. What should the IS auditor evaluate?',
    options: [
      { id: 'a', text: 'Whether the benefits case and risks still justify the investment (go / no go criteria)', rationale: 'Gate review based on updated business case, not sunk costs.' },
      { id: 'b', text: 'How much was already spent', rationale: 'Sunk cost fallacy; not a decision basis.' },
      { id: 'c', text: 'The sponsor\'s mood', rationale: 'Subjective.' },
      { id: 'd', text: 'The weather', rationale: 'Irrelevant.' },
    ],
    correct: ['a'],
    explanation: 'Evaluate the current **business case** and gate criteria.',
    references: [OUTLINE_REF], tags: ['project governance'],
  },

  // ===== CA4 IS Operations and Business Resilience =====
  {
    id: 'cisa-ca4-01', certId: 'cisa', domainId: 'ca4', type: 'single', difficulty: 'medium',
    prompt: 'An auditor verifies that access rights are revoked when employees leave. This test supports which control objective?',
    options: [
      { id: 'a', text: 'Timely deprovisioning to preserve least privilege', rationale: 'JML process assurance.' },
      { id: 'b', text: 'Increased sales revenue', rationale: 'Not a security control objective.' },
      { id: 'c', text: 'Reduced electricity bill', rationale: 'Not related.' },
      { id: 'd', text: 'Improved color palette of dashboards', rationale: 'Irrelevant.' },
    ],
    correct: ['a'],
    explanation: 'JML deprovisioning enforces **least privilege**.',
    references: [OUTLINE_REF], tags: ['IAM'],
  },
  {
    id: 'cisa-ca4-02', certId: 'cisa', domainId: 'ca4', type: 'single', difficulty: 'medium',
    prompt: 'Which test of a disaster recovery plan simulates the recovery in a dedicated environment, without impacting production?',
    options: [
      { id: 'a', text: 'Parallel test', rationale: 'Runs recovery in parallel with production for comparison.' },
      { id: 'b', text: 'Full interruption test', rationale: 'Actually shuts down production; high impact.' },
      { id: 'c', text: 'Walk through only', rationale: 'Tabletop discussion, no real recovery run.' },
      { id: 'd', text: 'Checklist review', rationale: 'Paper only.' },
    ],
    correct: ['a'],
    explanation: 'Recovery without impact: **parallel test**.',
    references: [OUTLINE_REF], tags: ['DRP'],
  },
  {
    id: 'cisa-ca4-03', certId: 'cisa', domainId: 'ca4', type: 'single', difficulty: 'hard',
    prompt: 'An IT operations team uses the same account ("admin") shared by multiple engineers. Which principle is MOST violated?',
    options: [
      { id: 'a', text: 'Accountability through unique identification', rationale: 'Shared accounts break traceability and accountability.' },
      { id: 'b', text: 'Non repudiation of SSL certificates', rationale: 'Wrong scope.' },
      { id: 'c', text: 'Availability of DNS', rationale: 'Unrelated.' },
      { id: 'd', text: 'Hardening of the kernel', rationale: 'Different concept.' },
    ],
    correct: ['a'],
    explanation: 'Shared accounts break **accountability**.',
    references: [OUTLINE_REF], tags: ['IAM'],
  },
  {
    id: 'cisa-ca4-04', certId: 'cisa', domainId: 'ca4', type: 'multi', difficulty: 'medium',
    prompt: 'Select TWO compensating controls when developers need temporary production access for an emergency fix.',
    options: [
      { id: 'a', text: 'Break glass account with just in time activation and full session recording', rationale: 'Bounded in time with tamper evident log trail.' },
      { id: 'b', text: 'Mandatory post incident review to revoke and audit the access', rationale: 'Detective control to validate appropriate use.' },
      { id: 'c', text: 'Grant permanent Domain Admin to all developers', rationale: 'Catastrophic.' },
      { id: 'd', text: 'Disable logging during the fix', rationale: 'Removes traceability.' },
    ],
    correct: ['a', 'b'],
    explanation: 'JIT + session recording plus post incident review.',
    references: [OUTLINE_REF], tags: ['emergency change', 'PAM'],
  },
  {
    id: 'cisa-ca4-05', certId: 'cisa', domainId: 'ca4', type: 'single', difficulty: 'medium',
    prompt: 'What is the FIRST thing an IS auditor checks in a change management process?',
    options: [
      { id: 'a', text: 'Whether changes are authorized, tested, and documented before deployment', rationale: 'Core trio of change governance.' },
      { id: 'b', text: 'Whether staff uses a fashionable project tool', rationale: 'Irrelevant.' },
      { id: 'c', text: 'Whether the CIO has a blog', rationale: 'Irrelevant.' },
      { id: 'd', text: 'Whether backups are done in tape format', rationale: 'Unrelated to change governance basics.' },
    ],
    correct: ['a'],
    explanation: 'Authorized plus tested plus documented.',
    references: [OUTLINE_REF], tags: ['change management'],
  },

  // ===== CA5 Protection of Information Assets =====
  {
    id: 'cisa-ca5-01', certId: 'cisa', domainId: 'ca5', type: 'single', difficulty: 'medium',
    prompt: 'Which classification review practice BEST keeps data protection aligned over time?',
    options: [
      { id: 'a', text: 'Periodic review of classifications and handling rules with data owners', rationale: 'Classifications drift; review keeps them accurate.' },
      { id: 'b', text: 'One time classification at go live and never again', rationale: 'Classifications will go stale.' },
      { id: 'c', text: 'Classifying all data as "public" by default', rationale: 'Defeats the purpose.' },
      { id: 'd', text: 'Letting end users classify however they wish', rationale: 'Lack of governance.' },
    ],
    correct: ['a'],
    explanation: 'Periodic **review with data owners**.',
    references: [OUTLINE_REF], tags: ['classification'],
  },
  {
    id: 'cisa-ca5-02', certId: 'cisa', domainId: 'ca5', type: 'single', difficulty: 'medium',
    prompt: 'The BEST technical control to prevent readable recovery of data from decommissioned disks is:',
    options: [
      { id: 'a', text: 'Cryptographic erase by destroying the encryption key (crypto shred)', rationale: 'Renders data unreadable without having to wipe every sector.' },
      { id: 'b', text: 'Simple OS level format', rationale: 'Leaves recoverable data in place.' },
      { id: 'c', text: 'Rename the files to ".old"', rationale: 'No real protection.' },
      { id: 'd', text: 'Storing the disks in a locked cabinet forever', rationale: 'Does not address future leaks.' },
    ],
    correct: ['a'],
    explanation: 'Cryptographic erase is effective and auditable.',
    references: [OUTLINE_REF], tags: ['data remanence'],
  },
  {
    id: 'cisa-ca5-03', certId: 'cisa', domainId: 'ca5', type: 'single', difficulty: 'hard',
    prompt: 'Multi factor authentication is MOST effective when:',
    options: [
      { id: 'a', text: 'Factors are independent and resist the same attack (phishing resistant MFA)', rationale: 'Two factors from the same channel provide weak compound protection.' },
      { id: 'b', text: 'All factors are SMS based', rationale: 'Same channel, SIM swap risk.' },
      { id: 'c', text: 'It is disabled for executives', rationale: 'High value accounts need more MFA, not less.' },
      { id: 'd', text: 'Only used on internal network', rationale: 'External access is where MFA matters most.' },
    ],
    correct: ['a'],
    explanation: 'Independent factors, phishing resistant when possible.',
    references: [OUTLINE_REF], tags: ['MFA'],
  },
  {
    id: 'cisa-ca5-04', certId: 'cisa', domainId: 'ca5', type: 'single', difficulty: 'medium',
    prompt: 'During a network audit, a flat network is found with no segmentation. The PRIMARY risk is:',
    options: [
      { id: 'a', text: 'Increased blast radius of a single compromise (lateral movement)', rationale: 'Any compromised host can reach almost everything.' },
      { id: 'b', text: 'Higher electricity bill', rationale: 'Unrelated.' },
      { id: 'c', text: 'Better performance', rationale: 'Even if true, not a security risk.' },
      { id: 'd', text: 'Easier backups', rationale: 'Not a primary risk discussion.' },
    ],
    correct: ['a'],
    explanation: 'Flat network plus no segmentation: **maximum blast radius**.',
    references: [OUTLINE_REF], tags: ['network'],
  },
  {
    id: 'cisa-ca5-05', certId: 'cisa', domainId: 'ca5', type: 'single', difficulty: 'hard',
    prompt: 'An organization considers outsourcing security monitoring to an MSSP. What should the IS auditor verify FIRST?',
    options: [
      { id: 'a', text: 'That a signed contract defines SLAs, security responsibilities and right to audit', rationale: 'Formal accountability is a prerequisite before any production use.' },
      { id: 'b', text: 'The MSSP office decor', rationale: 'Irrelevant.' },
      { id: 'c', text: 'The CEO\'s LinkedIn profile', rationale: 'Irrelevant.' },
      { id: 'd', text: 'The colour of badges at the MSSP', rationale: 'Irrelevant.' },
    ],
    correct: ['a'],
    explanation: 'Signed contract with **SLA, responsibilities and right to audit**.',
    references: [OUTLINE_REF, ISACA_REF], tags: ['third party', 'MSSP'],
  },
]
