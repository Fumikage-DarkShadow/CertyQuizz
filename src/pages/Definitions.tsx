import { useMemo, useState } from 'react'
import { GLOSSARY } from '@/data/glossary'
import { MNEMONICS } from '@/data/mnemonics'

const CATEGORIES: { key: string; label: string; match: (term: string) => boolean }[] = [
  { key: 'all', label: 'Tout', match: () => true },
  {
    key: 'fund',
    label: 'Fondamentaux',
    match: (t) =>
      ['CIA', 'AAA', 'Defense in depth', 'Least privilege', 'Need to know', 'Separation of duties', 'Non répudiation'].includes(t),
  },
  {
    key: 'iam',
    label: 'Identité et accès',
    match: (t) =>
      ['IAM', 'PAM', 'PIM', 'JIT', 'SSO', 'MFA', 'FIDO2', 'Passwordless', 'RBAC', 'ABAC', 'MAC', 'DAC', 'Conditional Access', 'Identity Protection', 'Break glass'].includes(t),
  },
  {
    key: 'crypto',
    label: 'Cryptographie',
    match: (t) =>
      ['PKI', 'TLS', 'AES', 'RSA', 'ECC', 'Hash', 'HMAC', 'KMS', 'HSM', 'KEK / DEK', 'Post quantum', 'Tokenisation'].includes(t),
  },
  {
    key: 'threat',
    label: 'Menaces et attaques',
    match: (t) =>
      ['Phishing', 'Spear phishing', 'Whaling', 'Smishing', 'Vishing', 'Pharming', 'Ransomware', 'RAT', 'Rootkit', 'Worm', 'Logic bomb', 'APT', 'C2', 'MITM', 'DDoS', 'SQLi', 'XSS', 'CSRF', 'SSRF', 'Pass the hash', 'Kerberoasting', 'Golden Ticket', 'DCSync', 'IoC'].includes(t),
  },
  {
    key: 'soc',
    label: 'Détection et SOC',
    match: (t) =>
      ['SIEM', 'SOAR', 'EDR', 'XDR', 'MDR', 'UEBA', 'IDS / IPS', 'Honeypot', 'Kill chain', 'MITRE ATT&CK', 'MITRE D3FEND', 'STIX / TAXII', 'Threat intel', 'Playbook', 'Runbook'].includes(t),
  },
  {
    key: 'ms',
    label: 'Microsoft Security',
    match: (t) =>
      ['Sentinel', 'Log Analytics Workspace', 'DCR', 'KQL', 'Defender XDR', 'MDE', 'MDI', 'MDO', 'MDA', 'Defender for Cloud', 'CSPM', 'CWP', 'Purview', 'Entra ID', 'Safe Links', 'Safe Attachments', 'ZAP', 'Fusion', 'NRT', 'Workbook', 'Hunting query'].includes(t),
  },
  {
    key: 'ebios',
    label: 'EBIOS RM',
    match: (t) =>
      ['EBIOS RM', 'Valeur métier', 'Bien support', 'Événement redouté', 'Source de risque', 'Objectif visé', 'Couple SR/OV', 'Gravité', 'Vraisemblance', 'Écosystème', 'Partie prenante critique', 'PACS', 'Risque résiduel', 'Socle de sécurité', 'Homologation'].includes(t),
  },
  {
    key: 'gov',
    label: 'Gouvernance et normes',
    match: (t) =>
      ['ISO 27001', 'ISO 27002', 'ISO 27005', 'ISO 31000', 'NIST CSF', 'CIS Controls', 'RGPD', 'NIS2', 'DORA', 'LPM', 'PCI DSS', 'SOC 2', 'RACI', 'BIA', 'BCP', 'DRP', 'RTO', 'RPO', 'MTTR', 'MTTD', 'MTBF', 'ALE', 'SLE / ARO'].includes(t),
  },
  {
    key: 'net',
    label: 'Architectures et réseau',
    match: (t) =>
      ['Zero Trust', 'ZTNA', 'SASE', 'SSE', 'SWG', 'CASB', 'FWaaS', 'WAF', 'DMZ', 'VPN', 'NAC', 'DLP', 'Segmentation'].includes(t),
  },
  {
    key: 'email',
    label: 'Email et anti phishing',
    match: (t) => ['SPF', 'DKIM', 'DMARC'].includes(t),
  },
  {
    key: 'dev',
    label: 'DevSecOps',
    match: (t) => ['DevSecOps', 'Shift left', 'IaC', 'SBOM', 'Secrets management'].includes(t),
  },
  {
    key: 'misc',
    label: 'Divers examen',
    match: (t) => ['CVE', 'CVSS', 'CWE', 'OWASP Top 10', 'PBQ'].includes(t),
  },
]

export default function Definitions() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')

  const filter = q.trim().toLowerCase()
  const category = CATEGORIES.find((c) => c.key === cat) || CATEGORIES[0]

  const entries = useMemo(
    () =>
      GLOSSARY
        .filter((g) => category.match(g.term))
        .filter(
          (g) =>
            !filter ||
            g.term.toLowerCase().includes(filter) ||
            g.definition.toLowerCase().includes(filter) ||
            g.aka?.some((a) => a.toLowerCase().includes(filter))
        )
        .sort((a, b) => a.term.localeCompare(b.term, 'fr')),
    [filter, cat]
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Définitions</h1>
        <p className="text-muted text-sm">
          Plus de {GLOSSARY.length} termes, acronymes et concepts. Les définitions connues sont cliquables dans les questions (popover au clic).
        </p>
      </div>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Rechercher un terme, un acronyme, un mot clé…"
        className="input"
      />

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setCat(c.key)}
            className={`btn text-xs ${cat === c.key ? 'btn-primary' : 'btn-outline'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {entries.map((g) => (
          <div key={g.term} className="card">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-semibold">{g.term}</span>
              {g.aka && g.aka.length > 0 && (
                <span className="text-xs text-muted">({g.aka.join(', ')})</span>
              )}
            </div>
            <p className="text-sm mt-1 text-muted leading-relaxed">{g.definition}</p>
          </div>
        ))}
        {entries.length === 0 && <div className="card text-muted">Aucun résultat.</div>}
      </div>

      <section>
        <h2 className="font-semibold mb-3">Astuces mnémotechniques</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {MNEMONICS.map((m) => (
            <div key={m.concept} className="card">
              <div className="font-semibold">{m.concept}</div>
              <div className="text-sm mt-1">{m.trick}</div>
              {m.detail && <div className="text-xs text-muted mt-2">{m.detail}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
