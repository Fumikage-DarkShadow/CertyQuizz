import type { Question } from '@/types'

const ISO_REF = {
  label: 'ISO/IEC 42001:2023 (page officielle)',
  url: 'https://www.iso.org/standard/81230.html',
}
const PECB_REF = {
  label: 'PECB ISO 42001 Lead Implementer',
  url: 'https://pecb.com/fr/education-and-certification-for-individuals/iso-42001',
}
const AIACT_REF = {
  label: 'AI Act (règlement UE 2024/1689)',
  url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
}

/**
 * Banque ISO/IEC 42001 Lead Implementer PECB.
 * Questions rédigées à partir de la structure publique de la norme et du programme PECB.
 */
export const ISO_42001_QUESTIONS: Question[] = [
  // ===== c1 : Fondamentaux =====
  {
    id: 'iso-c1-01', certId: 'iso-42001', domainId: 'c1', type: 'single', difficulty: 'easy',
    prompt: 'Que couvre ISO/IEC 42001 publiée en décembre 2023 ?',
    options: [
      { id: 'a', text: 'Un système de management pour l\'intelligence artificielle (AIMS)', rationale: 'Premier standard mondial de management des IA. Applicable à toute organisation qui conçoit, fournit ou utilise des systèmes d\'IA.' },
      { id: 'b', text: 'Les spécifications techniques des algorithmes de deep learning', rationale: 'ISO 42001 ne normalise pas les algorithmes, elle encadre le management.' },
      { id: 'c', text: 'La classification des données personnelles', rationale: 'C\'est plutôt le domaine d\'ISO 27701 et du RGPD.' },
      { id: 'd', text: 'L\'architecture matérielle des GPU', rationale: 'Hors périmètre de la norme.' },
    ],
    correct: ['a'],
    explanation: 'ISO 42001 définit les exigences d\'un **AI Management System**.',
    references: [ISO_REF], tags: ['fondamentaux', 'AIMS'],
  },
  {
    id: 'iso-c1-02', certId: 'iso-42001', domainId: 'c1', type: 'single', difficulty: 'medium',
    prompt: 'ISO 42001 repose sur la même structure de haut niveau (HLS) que :',
    options: [
      { id: 'a', text: 'ISO 27001, ISO 9001, ISO 14001', rationale: 'HLS Annexe SL partagée, intégration facile avec un SMSI ou un SMQ existant.' },
      { id: 'b', text: 'Uniquement les normes ISO automobile', rationale: 'Faux.' },
      { id: 'c', text: 'Un cadre spécifique à l\'IA sans ancrage HLS', rationale: 'Au contraire, c\'est une volonté forte d\'ISO.' },
      { id: 'd', text: 'Les standards IEEE 802.x réseau', rationale: 'Pas une HLS management ISO.' },
    ],
    correct: ['a'],
    explanation: 'HLS commune avec **27001, 9001, 14001**, facilitant l\'intégration.',
    references: [ISO_REF, PECB_REF], tags: ['fondamentaux', 'HLS'],
  },
  {
    id: 'iso-c1-03', certId: 'iso-42001', domainId: 'c1', type: 'single', difficulty: 'medium',
    prompt: 'Quel est le principal apport d\'ISO 42001 par rapport à ISO 27001 ?',
    options: [
      { id: 'a', text: 'Elle ajoute des exigences spécifiques aux enjeux propres à l\'IA (biais, transparence, explicabilité, autonomie)', rationale: 'ISO 27001 traite la sécurité de l\'information, ISO 42001 cible le cycle de vie IA.' },
      { id: 'b', text: 'Elle remplace ISO 27001', rationale: 'Elles sont complémentaires.' },
      { id: 'c', text: 'Elle interdit tout système d\'IA générative', rationale: 'Aucune interdiction, elle encadre.' },
      { id: 'd', text: 'Elle impose l\'open source', rationale: 'Ne mentionne pas ce choix.' },
    ],
    correct: ['a'],
    explanation: 'Focus AI : biais, transparence, explicabilité, autonomie, cycle de vie du modèle.',
    references: [ISO_REF], tags: ['fondamentaux', 'ISO 27001'],
  },
  {
    id: 'iso-c1-04', certId: 'iso-42001', domainId: 'c1', type: 'multi', difficulty: 'medium',
    prompt: 'Quelles parties prenantes sont clairement dans le périmètre d\'une AIMS ? (DEUX réponses)',
    options: [
      { id: 'a', text: 'Les développeurs et data scientists qui conçoivent les modèles', rationale: 'Acteurs directs du cycle de vie du modèle.' },
      { id: 'b', text: 'Les utilisateurs finaux impactés par une décision automatique', rationale: 'Au cœur des enjeux d\'équité, d\'explicabilité et de recours.' },
      { id: 'c', text: 'Les employés des fournisseurs d\'électricité uniquement', rationale: 'Hors périmètre.' },
      { id: 'd', text: 'Les fabricants d\'écrans plats', rationale: 'Hors périmètre.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Concepteurs et personnes impactées sont deux populations centrales.',
    references: [ISO_REF], tags: ['parties prenantes'],
  },
  {
    id: 'iso-c1-05', certId: 'iso-42001', domainId: 'c1', type: 'single', difficulty: 'hard',
    prompt: 'Comment ISO 42001 et l\'AI Act européen se positionnent ?',
    options: [
      { id: 'a', text: 'Complémentaires : ISO 42001 est un standard volontaire de management, l\'AI Act est un règlement contraignant', rationale: 'Adopter ISO 42001 aide à démontrer la conformité à certaines exigences de l\'AI Act, sans la remplacer.' },
      { id: 'b', text: 'Identiques dans leur portée juridique', rationale: 'Non, l\'un est un règlement UE, l\'autre une norme ISO.' },
      { id: 'c', text: 'ISO 42001 annule l\'AI Act', rationale: 'Contresens.' },
      { id: 'd', text: 'L\'AI Act interdit d\'utiliser ISO 42001', rationale: 'Faux.' },
    ],
    correct: ['a'],
    explanation: 'Standard volontaire plus règlement contraignant. Bonne pratique : utiliser les deux.',
    references: [ISO_REF, AIACT_REF], tags: ['AI Act', 'conformité'],
  },

  // ===== c2 : Structure de la norme =====
  {
    id: 'iso-c2-01', certId: 'iso-42001', domainId: 'c2', type: 'single', difficulty: 'medium',
    prompt: 'Quelle clause de l\'ISO 42001 porte sur le contexte de l\'organisation et les parties intéressées ?',
    options: [
      { id: 'a', text: 'Clause 4', rationale: 'Comprendre l\'organisation, son contexte, les attentes des parties intéressées, déterminer le périmètre de l\'AIMS.' },
      { id: 'b', text: 'Clause 5', rationale: 'Leadership et politique AIMS.' },
      { id: 'c', text: 'Clause 7', rationale: 'Support : ressources, compétences, communication, information documentée.' },
      { id: 'd', text: 'Clause 10', rationale: 'Amélioration.' },
    ],
    correct: ['a'],
    explanation: 'Le contexte de l\'organisation vit dans la **clause 4**.',
    references: [ISO_REF], tags: ['clauses'],
  },
  {
    id: 'iso-c2-02', certId: 'iso-42001', domainId: 'c2', type: 'single', difficulty: 'medium',
    prompt: 'Quel est le rôle de l\'Annexe A dans ISO 42001 ?',
    options: [
      { id: 'a', text: 'Lister les objectifs de contrôle et les mesures applicables à un AIMS', rationale: 'Annexe A de référence pour la déclaration d\'applicabilité.' },
      { id: 'b', text: 'Fixer les sanctions pénales', rationale: 'Hors scope d\'ISO.' },
      { id: 'c', text: 'Décrire les algorithmes à utiliser', rationale: 'La norme ne normalise pas les algorithmes.' },
      { id: 'd', text: 'Imposer un budget minimum', rationale: 'Aucun budget imposé.' },
    ],
    correct: ['a'],
    explanation: 'Annexe A : objectifs et mesures, base de la déclaration d\'applicabilité (SoA).',
    references: [ISO_REF, PECB_REF], tags: ['annexes'],
  },
  {
    id: 'iso-c2-03', certId: 'iso-42001', domainId: 'c2', type: 'single', difficulty: 'hard',
    prompt: 'L\'Annexe C de la norme offre :',
    options: [
      { id: 'a', text: 'Des exemples de risques et de sources de risque spécifiques à l\'IA', rationale: 'Utile pour la phase d\'évaluation des risques.' },
      { id: 'b', text: 'Les polices d\'écriture recommandées pour un rapport', rationale: 'Absurde.' },
      { id: 'c', text: 'Un code de conduite pour l\'auditeur', rationale: 'Relève plutôt d\'ISO 19011.' },
      { id: 'd', text: 'La liste des pays non éligibles à la certification', rationale: 'N\'existe pas.' },
    ],
    correct: ['a'],
    explanation: 'Annexe C : risques et sources de risque propres à l\'IA.',
    references: [ISO_REF], tags: ['annexes', 'risques'],
  },
  {
    id: 'iso-c2-04', certId: 'iso-42001', domainId: 'c2', type: 'multi', difficulty: 'medium',
    prompt: 'Quelles activités sont couvertes par la clause 9 "Évaluation des performances" ? (DEUX réponses)',
    options: [
      { id: 'a', text: 'Surveillance, mesure, analyse et évaluation des indicateurs de l\'AIMS', rationale: 'Fondement de la clause 9.' },
      { id: 'b', text: 'Audits internes de l\'AIMS', rationale: 'Également dans la clause 9.' },
      { id: 'c', text: 'Définition du budget marketing', rationale: 'Hors scope.' },
      { id: 'd', text: 'Recrutement du personnel de nettoyage', rationale: 'Hors scope.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Clause 9 : surveillance et audits internes.',
    references: [ISO_REF], tags: ['clause 9'],
  },
  {
    id: 'iso-c2-05', certId: 'iso-42001', domainId: 'c2', type: 'single', difficulty: 'easy',
    prompt: 'Quel cycle d\'amélioration structure l\'ensemble des normes de management ISO, y compris ISO 42001 ?',
    options: [
      { id: 'a', text: 'PDCA (Plan, Do, Check, Act)', rationale: 'Boucle d\'amélioration continue traditionnelle ISO.' },
      { id: 'b', text: 'V Model', rationale: 'Cycle logiciel, pas un cycle management ISO.' },
      { id: 'c', text: 'OODA loop', rationale: 'Modèle militaire et opérationnel.' },
      { id: 'd', text: 'SDLC', rationale: 'Cycle de développement logiciel.' },
    ],
    correct: ['a'],
    explanation: 'Toute norme ISO de management suit la boucle **PDCA**.',
    references: [ISO_REF], tags: ['PDCA'],
  },

  // ===== c3 : Gestion des risques IA =====
  {
    id: 'iso-c3-01', certId: 'iso-42001', domainId: 'c3', type: 'single', difficulty: 'medium',
    prompt: 'Quel est un risque typique propre aux systèmes d\'IA à évaluer dans l\'AIMS ?',
    options: [
      { id: 'a', text: 'Biais algorithmique avec effet discriminatoire', rationale: 'Risque central identifié par la norme et par l\'AI Act.' },
      { id: 'b', text: 'Coût de la lumière électrique', rationale: 'Hors scope.' },
      { id: 'c', text: 'Prix du papier pour l\'imprimante', rationale: 'Hors scope.' },
      { id: 'd', text: 'Choix du fournisseur de café', rationale: 'Hors scope.' },
    ],
    correct: ['a'],
    explanation: 'Le **biais** est un risque clef des systèmes d\'IA, avec impacts éthiques et légaux.',
    references: [ISO_REF], tags: ['risques IA', 'biais'],
  },
  {
    id: 'iso-c3-02', certId: 'iso-42001', domainId: 'c3', type: 'single', difficulty: 'hard',
    prompt: 'Un système de sélection automatisée de CV refuse systématiquement les candidats d\'une région. Quelle exigence de l\'AIMS est principalement en jeu ?',
    options: [
      { id: 'a', text: 'Équité et prévention des biais, avec traçabilité des décisions', rationale: 'Évaluation d\'impact, surveillance et mesures pour détecter et corriger ce type de dérive.' },
      { id: 'b', text: 'Disponibilité du cluster GPU', rationale: 'Pas la problématique principale ici.' },
      { id: 'c', text: 'Puissance de calcul du modèle', rationale: 'Pas la racine du problème.' },
      { id: 'd', text: 'Consommation énergétique', rationale: 'Enjeu distinct, non central ici.' },
    ],
    correct: ['a'],
    explanation: 'Biais à l\'embauche : équité, transparence, traçabilité et mesures correctives.',
    references: [ISO_REF, AIACT_REF], tags: ['biais', 'équité'],
  },
  {
    id: 'iso-c3-03', certId: 'iso-42001', domainId: 'c3', type: 'multi', difficulty: 'medium',
    prompt: 'Quelles dimensions sont explicitement poussées par ISO 42001 pour les systèmes d\'IA ? (DEUX réponses)',
    options: [
      { id: 'a', text: 'Transparence et explicabilité', rationale: 'Demande de documenter le fonctionnement et les décisions.' },
      { id: 'b', text: 'Robustesse et résilience', rationale: 'Les modèles doivent résister aux attaques adverses et aux dérives.' },
      { id: 'c', text: 'Volume maximal de code commenté', rationale: 'Non pertinent.' },
      { id: 'd', text: 'Nombre de pixels à l\'écran', rationale: 'Non pertinent.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Transparence et robustesse font partie des piliers.',
    references: [ISO_REF], tags: ['transparence', 'robustesse'],
  },
  {
    id: 'iso-c3-04', certId: 'iso-42001', domainId: 'c3', type: 'single', difficulty: 'medium',
    prompt: 'Quelle démarche le standard recommande pour les systèmes IA à fort impact sur les individus ?',
    options: [
      { id: 'a', text: 'Conduire une évaluation d\'impact AI (AI Impact Assessment) documentée', rationale: 'Pratique attendue pour qualifier risques et parties impactées.' },
      { id: 'b', text: 'Supprimer l\'IA à la moindre plainte', rationale: 'Ni pratique ni prescrit.' },
      { id: 'c', text: 'Laisser la décision à l\'intuition du chef de projet', rationale: 'Pas conforme à un système de management.' },
      { id: 'd', text: 'Publier le code source sur Internet', rationale: 'Non exigé.' },
    ],
    correct: ['a'],
    explanation: 'AI Impact Assessment documenté pour les systèmes à fort impact.',
    references: [ISO_REF], tags: ['AIIA', 'impact'],
  },
  {
    id: 'iso-c3-05', certId: 'iso-42001', domainId: 'c3', type: 'single', difficulty: 'hard',
    prompt: 'Quel lien entre ISO 42001 et ISO 23894 (gestion du risque IA) ?',
    options: [
      { id: 'a', text: 'Complémentaires : ISO 42001 encadre le management, ISO 23894 détaille les techniques de gestion du risque spécifiques à l\'IA', rationale: 'ISO 23894 donne des lignes directrices fines sur l\'évaluation des risques IA.' },
      { id: 'b', text: 'ISO 23894 annule ISO 42001', rationale: 'Faux.' },
      { id: 'c', text: 'Aucun rapport entre les deux', rationale: 'Faux.' },
      { id: 'd', text: 'ISO 42001 remplace entièrement ISO 23894', rationale: 'Faux.' },
    ],
    correct: ['a'],
    explanation: 'ISO 42001 (management) plus **ISO 23894** (risques IA) : couple naturel.',
    references: [ISO_REF], tags: ['ISO 23894'],
  },

  // ===== c4 : Implémentation et amélioration =====
  {
    id: 'iso-c4-01', certId: 'iso-42001', domainId: 'c4', type: 'single', difficulty: 'easy',
    prompt: 'Quel document formalise la décision de mettre en œuvre ou non chaque mesure de l\'Annexe A ?',
    options: [
      { id: 'a', text: 'La déclaration d\'applicabilité (SoA)', rationale: 'Mesures applicables, mesures écartées avec justification.' },
      { id: 'b', text: 'Le budget prévisionnel', rationale: 'Document financier, pas SoA.' },
      { id: 'c', text: 'La charte graphique', rationale: 'Hors sujet.' },
      { id: 'd', text: 'La feuille de paie', rationale: 'Hors sujet.' },
    ],
    correct: ['a'],
    explanation: 'La **SoA** formalise le traitement des mesures de l\'Annexe A.',
    references: [ISO_REF], tags: ['SoA'],
  },
  {
    id: 'iso-c4-02', certId: 'iso-42001', domainId: 'c4', type: 'single', difficulty: 'medium',
    prompt: 'Quel audit conditionne la certification initiale ISO 42001 d\'une organisation ?',
    options: [
      { id: 'a', text: 'Audit de certification en deux étapes (stade 1 documentaire puis stade 2 opérationnel)', rationale: 'Modèle ISO standard pour une première certification.' },
      { id: 'b', text: 'Un simple questionnaire en ligne', rationale: 'Non suffisant.' },
      { id: 'c', text: 'Un vote interne du comité d\'entreprise', rationale: 'Hors processus de certification.' },
      { id: 'd', text: 'Un selfie du DSI', rationale: 'Hors sujet.' },
    ],
    correct: ['a'],
    explanation: 'Certification ISO : audit stade 1 puis stade 2 par un organisme accrédité.',
    references: [PECB_REF], tags: ['certification'],
  },
  {
    id: 'iso-c4-03', certId: 'iso-42001', domainId: 'c4', type: 'single', difficulty: 'medium',
    prompt: 'L\'amélioration continue dans l\'AIMS repose notamment sur :',
    options: [
      { id: 'a', text: 'La gestion des non conformités et des actions correctives tracées', rationale: 'Exigence de la clause 10.' },
      { id: 'b', text: 'L\'absence totale de procédures', rationale: 'Contraire à ISO.' },
      { id: 'c', text: 'La destruction annuelle des enregistrements', rationale: 'Va à l\'encontre de la traçabilité.' },
      { id: 'd', text: 'L\'interdiction d\'auditer l\'AIMS', rationale: 'Faux.' },
    ],
    correct: ['a'],
    explanation: 'Amélioration continue : NC plus actions correctives documentées.',
    references: [ISO_REF], tags: ['clause 10'],
  },
  {
    id: 'iso-c4-04', certId: 'iso-42001', domainId: 'c4', type: 'multi', difficulty: 'medium',
    prompt: 'Quels livrables concrets un Lead Implementer produit typiquement ? (DEUX réponses)',
    options: [
      { id: 'a', text: 'Politique AIMS validée par la direction', rationale: 'Document stratégique clef de la clause 5.' },
      { id: 'b', text: 'Registre des systèmes d\'IA de l\'organisation', rationale: 'Inventaire des systèmes avec criticité, usages, responsables.' },
      { id: 'c', text: 'Menu de la cantine', rationale: 'Hors sujet.' },
      { id: 'd', text: 'Plan de parking', rationale: 'Hors sujet.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Politique plus registre des systèmes IA sont des livrables clefs.',
    references: [PECB_REF], tags: ['livrables'],
  },
  {
    id: 'iso-c4-05', certId: 'iso-42001', domainId: 'c4', type: 'single', difficulty: 'hard',
    prompt: 'À quelle fréquence une revue de direction est elle typiquement planifiée dans un AIMS mature ?',
    options: [
      { id: 'a', text: 'Au moins une fois par an, avec revues ad hoc sur changements majeurs', rationale: 'Fréquence minimale classique en ISO management systems.' },
      { id: 'b', text: 'Une seule fois à vie', rationale: 'Incompatible avec l\'amélioration continue.' },
      { id: 'c', text: 'Tous les jours, sans exception', rationale: 'Intenable.' },
      { id: 'd', text: 'Uniquement en cas d\'amende', rationale: 'Passif et insuffisant.' },
    ],
    correct: ['a'],
    explanation: 'Revue annuelle au minimum, plus revues événementielles.',
    references: [ISO_REF], tags: ['revue direction'],
  },
]
