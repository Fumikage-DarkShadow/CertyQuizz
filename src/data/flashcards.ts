import type { Flashcard } from '@/types'

export const FLASHCARDS: Flashcard[] = [
  // Security+
  { id: 'f-sp-01', certId: 'security-plus', front: 'CIA Triad', back: 'Confidentiality, Integrity, Availability. Trois piliers fondamentaux de la sécurité.' },
  { id: 'f-sp-02', certId: 'security-plus', front: 'AAA', back: 'Authentication, Authorization, Accounting. Pilier du contrôle d\'accès et de la traçabilité.' },
  { id: 'f-sp-03', certId: 'security-plus', front: 'Types de contrôles', back: 'Par famille : Managerial, Operational, Technical, Physical. Par fonction : Preventive, Detective, Corrective, Deterrent, Compensating, Directive.' },
  { id: 'f-sp-04', certId: 'security-plus', front: 'ALE', back: 'ALE = ARO multiplié par SLE. Annualized Loss Expectancy.' },
  { id: 'f-sp-05', certId: 'security-plus', front: 'Non répudiation', back: 'Propriété qui garantit qu\'un auteur ne peut nier une action. Obtenue via signatures numériques (clés privées uniques).' },
  { id: 'f-sp-06', certId: 'security-plus', front: 'RTO et RPO', back: 'RTO : durée acceptable d\'indisponibilité. RPO : perte de données maximale tolérée (ancienneté de la dernière sauvegarde).' },
  { id: 'f-sp-07', certId: 'security-plus', front: 'Zero Trust', back: 'Never trust, always verify. Vérification continue de l\'identité, de la posture du device et du contexte. Aucune confiance réseau implicite.' },
  { id: 'f-sp-08', certId: 'security-plus', front: 'Hashing versus HMAC', back: 'Hash : intégrité seule. HMAC : intégrité + authentification via secret partagé.' },

  // EBIOS RM
  { id: 'f-eb-01', certId: 'ebios-rm', front: 'Les 5 ateliers EBIOS RM', back: '1. Cadrage et socle. 2. Sources de risque et objectifs visés. 3. Scénarios stratégiques. 4. Scénarios opérationnels. 5. Traitement du risque (PACS).' },
  { id: 'f-eb-02', certId: 'ebios-rm', front: 'Valeur métier versus bien support', back: 'Valeur métier : ce qu\'on protège (processus, info, fonction). Bien support : actif technique ou organisationnel qui porte la valeur.' },
  { id: 'f-eb-03', certId: 'ebios-rm', front: 'SR/OV', back: 'Source de Risque et Objectif Visé. Couple central de l\'atelier 2.' },
  { id: 'f-eb-04', certId: 'ebios-rm', front: 'PACS', back: 'Plan d\'Amélioration Continue de la Sécurité. Livrable de l\'atelier 5.' },
  { id: 'f-eb-05', certId: 'ebios-rm', front: 'Gravité', back: 'Impact intrinsèque d\'un événement redouté, évalué sans tenir compte des mesures de sécurité existantes.' },
  { id: 'f-eb-06', certId: 'ebios-rm', front: 'Vraisemblance', back: 'Probabilité estimée qu\'un scénario opérationnel se produise dans le contexte courant (atelier 4).' },

  // SC 200
  { id: 'f-sc-01', certId: 'sc-200', front: 'Sentinel', back: 'SIEM et SOAR cloud de Microsoft, bâti sur Log Analytics. Interrogé via KQL.' },
  { id: 'f-sc-02', certId: 'sc-200', front: 'Defender XDR, 4 piliers', back: 'Endpoint (MDE), Identity (MDI), Office 365 (MDO), Cloud Apps (MDA).' },
  { id: 'f-sc-03', certId: 'sc-200', front: 'CSPM versus CWP', back: 'CSPM : posture et configuration. CWP : protection runtime (VM, SQL, containers, stockage).' },
  { id: 'f-sc-04', certId: 'sc-200', front: 'KQL summarize', back: 'Agrégations (count, sum, avg, dcount, make_set). Exemple : | summarize c=count() by bin(TimeGenerated,1h), Account' },
  { id: 'f-sc-05', certId: 'sc-200', front: 'Analytics rules', back: 'Scheduled, NRT, Fusion (ML), Microsoft Security (passe plats), Anomaly.' },
  { id: 'f-sc-06', certId: 'sc-200', front: 'MITRE ATT&CK, exemples de tactiques', back: 'Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, C2, Exfiltration, Impact.' },
]

export function flashcardsFor(certId: string) {
  return FLASHCARDS.filter((f) => f.certId === certId)
}
