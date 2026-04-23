export interface Mnemonic {
  concept: string
  trick: string
  detail?: string
}

export const MNEMONICS: Mnemonic[] = [
  {
    concept: 'CIA Triad',
    trick: 'C I A : Confidentialité, Intégrité, Availability.',
    detail: 'Trois piliers fondamentaux. Imagine un agent "CIA" qui garde un secret (C), ne l\'altère pas (I) et reste disponible 24h sur 24 (A).',
  },
  {
    concept: 'AAA',
    trick: 'Authentifier, Autoriser, Auditer.',
    detail: 'Les trois A du contrôle d\'accès. Tu valides ton identité (A), tu reçois tes droits (A), tout est tracé (A).',
  },
  {
    concept: 'Ateliers EBIOS RM',
    trick: 'CSSOT : Cadrage, Sources, Stratégique, Opérationnel, Traitement.',
    detail: 'Atelier 1 Cadrage et socle, 2 Sources de risque, 3 Scénarios stratégiques, 4 Scénarios opérationnels, 5 Traitement.',
  },
  {
    concept: 'MITRE ATT&CK, 14 tactiques',
    trick: 'Reco, Resource Dev, Initial Access, Execution, Persistence, Privilege Esc, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, C2, Exfiltration, Impact.',
    detail: 'Ordre logique du cycle d\'attaque, du scouting au dommage final.',
  },
  {
    concept: 'Defender XDR, les 4 piliers',
    trick: 'Endpoint, Identity, Office, Cloud Apps.',
    detail: 'MDE + MDI + MDO + MDA. Tous intégrés dans le portail XDR unifié.',
  },
  {
    concept: 'OWASP Top 10 (2021)',
    trick: 'Broken Access, Crypto failures, Injection, Insecure design, Security misconfig, Vulnerable components, Auth failures, Integrity, Logging, SSRF.',
    detail: 'Top 10 des classes de vulnérabilités web les plus critiques.',
  },
  {
    concept: 'Cryptographie : quand utiliser quoi ?',
    trick: 'Symétrique = rapide (AES). Asymétrique = échange de clé (RSA, ECC). Hash = intégrité (SHA 2 et SHA 3). HMAC = intégrité + authentification.',
    detail: 'Mémo utile pour toute question de choix cryptographique à l\'examen.',
  },
  {
    concept: 'Phases d\'incident response',
    trick: 'PICERL : Preparation, Identification, Containment, Eradication, Recovery, Lessons learned.',
    detail: 'Variante SANS. L\'ordre est critique : scope avant containment, erradication avant recovery.',
  },
  {
    concept: 'Types de contrôles',
    trick: 'Par famille : Managerial, Operational, Technical, Physical. Par fonction : Preventive, Detective, Corrective, Deterrent, Compensating, Directive.',
    detail: 'À l\'examen, une question te donne souvent un contrôle et demande les deux classifications.',
  },
]
