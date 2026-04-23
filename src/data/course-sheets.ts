import type { CourseSheet } from '@/types'

export const COURSE_SHEETS: CourseSheet[] = [
  {
    id: 'sp-d1-cia',
    certId: 'security-plus',
    domainId: 'd1',
    title: 'CIA Triad et contrôles de sécurité',
    readMinutes: 3,
    body: `La **CIA Triad** (Confidentiality, Integrity, Availability) est la base de tout programme de sécurité.

- **Confidentiality** : chiffrement, classification, contrôle d'accès.
- **Integrity** : hashs, signatures numériques, contrôle de versions.
- **Availability** : redondance, sauvegardes, DRP et BCP.

**Types de contrôles** à connaître pour l'examen :

- **Managerial** : politiques, procédures, standards.
- **Operational** : sensibilisation, gestion des accès, patch management.
- **Technical** : pare feu, MFA, chiffrement, IDS et IPS.
- **Physical** : serrures, badges, vidéosurveillance.

Chacun peut être **preventive**, **detective**, **corrective**, **deterrent**, **compensating** ou **directive**.`,
  },
  {
    id: 'sp-d2-malware',
    certId: 'security-plus',
    domainId: 'd2',
    title: 'Typologie des menaces et des malwares',
    readMinutes: 3,
    body: `**Acteurs (threat actors)** : nation state, organized crime, hacktivist, insider (intentional ou unintentional), script kiddie, shadow IT.

**Vecteurs** : message (phishing, smishing, vishing), image, removable media, supply chain, ingénierie sociale.

**Malwares** :

- **Ransomware** : chiffre et extorque.
- **Trojan** : se cache dans un programme légitime.
- **Worm** : se propage sans action utilisateur.
- **Rootkit** : persistance bas niveau (kernel, bootkit).
- **Keylogger et spyware** : vol d'informations.
- **Logic bomb** : déclenchement conditionnel.

**IoC** typiques : connexions C2, création de tâches planifiées, hashs malveillants, modifications de clé de registre, exfiltrations vers domaines inconnus.`,
  },
  {
    id: 'sp-d3-zerotrust',
    certId: 'security-plus',
    domainId: 'd3',
    title: 'Zero Trust et architectures modernes',
    readMinutes: 3,
    body: `**Zero Trust** signifie "never trust, always verify". Pas de confiance implicite, même en interne.

Piliers à retenir :

- **Policy Decision Point (PDP)** : décide, par exemple Conditional Access.
- **Policy Enforcement Point (PEP)** : applique, par exemple proxy, gateway.
- **Identity aware** : MFA, device posture, risque utilisateur.
- **Micro segmentation** : VLAN, SDN, NSG.
- **Least privilege** : JIT, JEA, PAM.

À l'examen, associe Zero Trust à **SASE et SSE**, **ZTNA**, **CASB** et au **Conditional Access** (Entra ID).`,
  },
  {
    id: 'sp-d4-iam',
    certId: 'security-plus',
    domainId: 'd4',
    title: 'IAM et durcissement',
    readMinutes: 3,
    body: `**Authentification** : quelque chose que vous **savez, avez, êtes, faites**, ou **où vous êtes**.
**MFA** : au moins deux facteurs distincts. TOTP est plus sûr que SMS.

**Autorisations** :
- **RBAC** (rôles).
- **ABAC** (attributs).
- **Rule based**.
- **DAC et MAC**.

**Durcissement (hardening)** :
- Désactiver services et ports inutiles, établir une secure baseline.
- Patch management et vulnerability scanning.
- Principle of least privilege + separation of duties.
- Logging centralisé (SIEM) et monitoring continu.`,
  },
  {
    id: 'sp-d5-risk',
    certId: 'security-plus',
    domainId: 'd5',
    title: 'Gouvernance et gestion du risque',
    readMinutes: 3,
    body: `**Risk = Likelihood multiplié par Impact**.
Traitements possibles : **avoid, transfer, mitigate, accept**, voire **exploit**.

Métriques clés :
- **MTBF** (Mean Time Between Failures).
- **MTTR** (Mean Time To Repair).
- **RTO** (Recovery Time Objective).
- **RPO** (Recovery Point Objective).
- **ALE = ARO multiplié par SLE** (Annualized Loss Expectancy).

**Tiers et chaîne d\'approvisionnement** : due diligence, SLA, SLR, MOU, NDA, questionnaires de sécurité, audit fournisseur.`,
  },
  {
    id: 'eb-a1',
    certId: 'ebios-rm',
    domainId: 'a1',
    title: 'Atelier 1 : Cadrage et socle de sécurité',
    readMinutes: 3,
    body: `Objectif : **poser le périmètre** et identifier ce que l\'on protège.

Livrables :
- **Valeurs métier** : ce qu\'il faut protéger du point de vue métier.
- **Biens supports** : les actifs techniques et organisationnels qui portent les valeurs.
- **Événements redoutés** : ce qu\'on ne veut pas voir arriver, avec une **gravité**.
- **Socle de sécurité** : référentiels applicables (ISO 27001, PSSI, LPM, NIS2).

À retenir : la gravité est **intrinsèque** à l\'événement redouté et s\'évalue **avant** toute mesure.`,
  },
  {
    id: 'eb-a2',
    certId: 'ebios-rm',
    domainId: 'a2',
    title: 'Atelier 2 : Sources de risque et objectifs visés',
    readMinutes: 3,
    body: `Identifier les **couples SR/OV** pertinents.

- **Source de Risque (SR)** : qui peut attaquer (cybercriminel, concurrent, État, interne).
- **Objectif Visé (OV)** : ce qu\'il cherche à obtenir (argent, renseignement, sabotage, notoriété).

Critère de retenue : **pertinence** (motivation multipliée par ressources et par ciblage).

Sortie : liste hiérarchisée de couples SR/OV qui alimente les ateliers 3 et 4.`,
  },
  {
    id: 'eb-a3',
    certId: 'ebios-rm',
    domainId: 'a3',
    title: 'Atelier 3 : Scénarios stratégiques',
    readMinutes: 3,
    body: `Construire des **chemins d\'attaque stratégiques** à travers l\'**écosystème** (parties prenantes critiques).

- Cartographie des parties prenantes (clients, fournisseurs, partenaires, prestataires).
- Évaluation de la **menace** et de l\'**exposition** de chaque partie.
- Identification des **parties prenantes critiques** (fort niveau de menace ET d\'exposition).
- Définition de **mesures de sécurité sur l\'écosystème** (contrat, audit, segmentation).

Livrable : scénarios stratégiques, avec **gravité** par scénario.`,
  },
  {
    id: 'eb-a4',
    certId: 'ebios-rm',
    domainId: 'a4',
    title: 'Atelier 4 : Scénarios opérationnels',
    readMinutes: 3,
    body: `Traduire les scénarios stratégiques en **chemins techniques**.

- Modes opératoires inspirés du **MITRE ATT&CK** (ou kill chain).
- Évaluation de la **vraisemblance** (probabilité qu\'il se produise).
- Combinaison **gravité multipliée par vraisemblance** donne le niveau de risque.

Le livrable est la **cartographie des risques** avant traitement.`,
  },
  {
    id: 'eb-a5',
    certId: 'ebios-rm',
    domainId: 'a5',
    title: 'Atelier 5 : Traitement du risque',
    readMinutes: 3,
    body: `Décider du traitement de chaque risque :

- **Réduire** : mesures de sécurité supplémentaires.
- **Refuser** : arrêt de l\'activité risquée.
- **Partager ou transférer** : assurance, externalisation.
- **Accepter** : risque résiduel validé par la direction.

Livrables : **PACS** (Plan d\'Amélioration Continue de la Sécurité), **risques résiduels** formalisés, décision homologuée.`,
  },
  {
    id: 'sc-g1-workspace',
    certId: 'sc-200',
    domainId: 'g1',
    title: 'Sentinel : Workspace, RBAC, Data Connectors',
    readMinutes: 3,
    body: `Sentinel repose sur un **Log Analytics Workspace**. Choix structurants :

- **Region** : résidence des données.
- **Retention** : 90 jours par défaut, jusqu\'à 12 ans en archive.
- **RBAC** : Microsoft Sentinel Reader, Responder, Contributor, plus Log Analytics Reader.
- **Data connectors** : AAD, Defender XDR, O365, AWS, GCP, Syslog ou CEF, custom via DCR.

Pour l\'examen, connais la différence **Commitment Tier** versus **Pay as you go**, et la **Content Hub** (solutions prêtes à l\'emploi).`,
  },
  {
    id: 'sc-g2-defender',
    certId: 'sc-200',
    domainId: 'g2',
    title: 'Microsoft Defender XDR : périmètres',
    readMinutes: 3,
    body: `**Defender XDR** regroupe :

- **Defender for Endpoint (MDE)** : EDR sur Windows, macOS, Linux, mobile.
- **Defender for Identity (MDI)** : détection d\'attaques AD et AD FS (Kerberoasting, DCSync, pass the hash).
- **Defender for Office 365 (MDO)** : anti phish, Safe Links, Safe Attachments, ZAP.
- **Defender for Cloud Apps (MDA)** : CASB, session control, app discovery.

Portail unifié : **security.microsoft.com**. Les incidents sont corrélés automatiquement entre signaux.

**Defender for Cloud** (Azure) est distinct : CSPM + CWP pour VM, SQL, containers, serverless.`,
  },
  {
    id: 'sc-g3-kql',
    certId: 'sc-200',
    domainId: 'g3',
    title: 'KQL et analytics rules',
    readMinutes: 3,
    body: `Types de règles analytiques dans Sentinel :

- **Scheduled** : KQL planifié.
- **NRT (Near Real Time)** : environ 1 minute, avec quelques limites.
- **Fusion** : ML multi signal.
- **Microsoft Security** : passe plats des provider alerts.
- **Anomaly** : ML statistique.

Essentiels KQL :

\`\`\`
SecurityEvent
| where TimeGenerated > ago(1d)
| where EventID == 4625
| summarize FailedLogons = count() by Account
| where FailedLogons > 10
\`\`\`

Opérateurs clés : \`where\`, \`project\`, \`extend\`, \`summarize\`, \`join\`, \`union\`, \`make_series\`, \`parse\`, \`mv_expand\`.`,
  },
]

export function sheetsFor(certId: string, domainId?: string) {
  return COURSE_SHEETS.filter(
    (s) => s.certId === certId && (!domainId || s.domainId === domainId)
  )
}
