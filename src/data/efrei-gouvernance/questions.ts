import type { Question } from '@/types'

const ANSSI_REF = { label: 'ANSSI : guides et référentiels', url: 'https://cyber.gouv.fr/' }
const ISO_REF = { label: 'ISO/IEC 27001 et 27002', url: 'https://www.iso.org/standard/82875.html' }
const EBIOS_REF = { label: 'EBIOS Risk Manager (ANSSI v1.5)', url: 'https://cyber.gouv.fr/publications/la-methode-ebios-risk-manager' }
const SECNUM_REF = { label: 'SecNumCloud v3.2 (ANSSI)', url: 'https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud' }
const RNCP_REF = { label: 'RNCP39781 BC01 : Gouvernance des infrastructures', url: 'https://www.francecompetences.fr/' }
const HDS_REF = { label: 'Hébergeur de Données de Santé (HDS)', url: 'https://esante.gouv.fr/produits-services/hds' }

/**
 * Banque EFREI Gouvernance, Audit et Risques.
 * Questions originales rédigées à partir des concepts du cours
 * "Infrastructure IT : Gouvernance, Audit et Risques" (M1 CSM EFREI / ERIS).
 * Niveau Bac+5, distracteurs plausibles testant les nuances entre concepts.
 */
export const EFREI_GOUVERNANCE_QUESTIONS: Question[] = [

  // =========================================================
  // G1 : Audits internes et externes (12 QCM)
  // =========================================================
  { id: 'efr-g1-01', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'Une entreprise vient de subir une cyberattaque. Le RSSI souhaite "mesurer le niveau de conformité, de sécurité et de maturité" du SI vis‑à‑vis d\'ISO 27001 avant de relancer la gouvernance. Quel terme décrit LE PLUS précisément cette démarche ?',
    options: [
      { id: 'a', text: 'Un test d\'intrusion exhaustif', rationale: 'Un pentest cible les vulnérabilités exploitables, pas la conformité ni la maturité globale.' },
      { id: 'b', text: 'Un audit de cybersécurité', rationale: 'Définition exacte : évaluation indépendante, structurée et méthodique du niveau de conformité, sécurité ou maturité vis‑à‑vis d\'un référentiel.' },
      { id: 'c', text: 'Un scan de vulnérabilités', rationale: 'Un scan est un outil utilisé éventuellement pendant un audit, pas la démarche elle‑même.' },
      { id: 'd', text: 'Une analyse forensique', rationale: 'La forensique étudie une compromission après coup pour reconstituer les faits.' },
    ],
    correct: ['b'],
    explanation: 'Audit = évaluation **indépendante, structurée et méthodique** du niveau de conformité / sécurité / maturité.',
    references: [ANSSI_REF, ISO_REF], tags: ['définition audit'] },

  { id: 'efr-g1-02', certId: 'efrei-gouvernance', domainId: 'g1', type: 'multi', difficulty: 'medium',
    prompt: 'Quels sont DEUX inconvénients spécifiques d\'un audit interne par rapport à un audit externe ?',
    options: [
      { id: 'a', text: 'Neutralité plus difficile à garantir', rationale: 'L\'auditeur appartient à l\'organisation : risque de complaisance ou d\'angles morts.' },
      { id: 'b', text: 'Compétence variable selon les ressources internes', rationale: 'L\'équipe interne peut manquer d\'expertise pointue (cloud, OT, cryptographie…).' },
      { id: 'c', text: 'Coûts internes plus élevés qu\'un cabinet externe', rationale: 'Au contraire, l\'audit interne est en général moins cher.' },
      { id: 'd', text: 'Mauvaise connaissance du contexte métier', rationale: 'L\'interne connaît au contraire mieux le contexte que l\'externe.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Limites d\'un audit interne : **neutralité** plus difficile et **compétence** variable.',
    references: [ANSSI_REF], tags: ['audit interne vs externe'] },

  { id: 'efr-g1-03', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'hard',
    prompt: 'Un hôpital doit faire certifier son hébergement de données patient. Qui est habilité à délivrer la certification HDS, et sur quelle base ?',
    options: [
      { id: 'a', text: 'Un organisme certificateur accrédité COFRAC sur le référentiel HDS publié par l\'agence du numérique en santé', rationale: 'HDS est délivrée par un organisme accrédité COFRAC sur le référentiel HDS officiel ; l\'ANSSI gère SecNumCloud, pas HDS.' },
      { id: 'b', text: 'L\'ANSSI directement', rationale: 'L\'ANSSI qualifie SecNumCloud, pas HDS. HDS relève de l\'agence du numérique en santé / COFRAC.' },
      { id: 'c', text: 'La CNIL', rationale: 'La CNIL contrôle la conformité RGPD, pas la certification HDS.' },
      { id: 'd', text: 'Le ministère de l\'Intérieur', rationale: 'Pas dans son champ de compétence.' },
    ],
    correct: ['a'],
    explanation: 'HDS = certification par organisme **accrédité COFRAC** sur le référentiel HDS.',
    references: [HDS_REF, ANSSI_REF], tags: ['HDS', 'certification'] },

  { id: 'efr-g1-04', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'Vous voulez vérifier que tous les comptes administrateurs disposent réellement d\'un mot de passe robuste et stocké dans un coffre. Quel type d\'audit cible CE point précis ?',
    options: [
      { id: 'a', text: 'Audit organisationnel', rationale: 'L\'organisationnel vérifierait l\'existence d\'une politique, pas la valeur effective des mots de passe.' },
      { id: 'b', text: 'Audit technique (revue de configuration et test)', rationale: 'C\'est exactement la définition d\'un audit technique : porte sur les actifs SI et se base sur des tests techniques.' },
      { id: 'c', text: 'Audit de conformité RGPD uniquement', rationale: 'La robustesse des mots de passe administrateurs n\'est pas un sujet RGPD au sens premier.' },
      { id: 'd', text: 'Audit financier', rationale: 'Hors sujet.' },
    ],
    correct: ['b'],
    explanation: 'Vérification effective d\'un actif SI = **audit technique**.',
    references: [ANSSI_REF], tags: ['audit technique'] },

  { id: 'efr-g1-05', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'Une PME vient d\'embaucher son premier RSSI et n\'a JAMAIS mené d\'audit. Quelle approche d\'audit est la plus pertinente comme premier exercice ?',
    options: [
      { id: 'a', text: 'Approche ponctuelle pour cartographier le niveau de sécurité de manière exhaustive', rationale: 'L\'approche ponctuelle est recommandée quand on ne connaît pas le niveau de sécurité initial.' },
      { id: 'b', text: 'Approche continue pour vérifier le maintien dans le temps', rationale: 'La continue suppose qu\'on connaît déjà globalement le niveau, ce qui n\'est pas le cas ici.' },
      { id: 'c', text: 'Pas d\'audit, lancer directement un test d\'intrusion red team', rationale: 'Sans cadrage préalable, un red team est inefficace.' },
      { id: 'd', text: 'Acheter immédiatement la certification ISO 27001 sans préparation', rationale: 'On ne s\'achète pas une certification, on la prépare.' },
    ],
    correct: ['a'],
    explanation: 'Premier audit dans une organisation peu mature : **approche ponctuelle exhaustive**.',
    references: [ANSSI_REF], tags: ['approche ponctuelle vs continue'] },

  { id: 'efr-g1-06', certId: 'efrei-gouvernance', domainId: 'g1', type: 'multi', difficulty: 'hard',
    prompt: 'Sélectionnez DEUX livrables typiques produits par tout audit (interne ou externe) en cybersécurité.',
    options: [
      { id: 'a', text: 'Liste de non‑conformités et de risques avec priorisation', rationale: 'Un audit produit toujours un constat de non‑conformités et de risques.' },
      { id: 'b', text: 'Recommandations priorisées (P1/P2/P3) avec deadlines et budget prévisionnel', rationale: 'Le rapport d\'audit alimente directement le plan d\'action.' },
      { id: 'c', text: 'Le code source corrigé des applications', rationale: 'L\'auditeur ne corrige pas, il évalue. C\'est le rôle des équipes opérationnelles.' },
      { id: 'd', text: 'La certification ISO 27001 elle‑même', rationale: 'Seul un organisme accrédité COFRAC peut certifier, et seulement après audit de certification.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Livrables d\'audit : **non‑conformités/risques** et **recommandations priorisées**.',
    references: [ISO_REF], tags: ['livrables audit'] },

  { id: 'efr-g1-07', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'Quel référentiel est PRIORITAIREMENT mobilisé pour la qualification d\'un fournisseur de services cloud par l\'ANSSI ?',
    options: [
      { id: 'a', text: 'SecNumCloud', rationale: 'Référentiel ANSSI dédié à la qualification cloud, évoluant en v3.2 puis 4.x.' },
      { id: 'b', text: 'ISO 27018 uniquement', rationale: 'ISO 27018 est complémentaire mais n\'est pas le référentiel ANSSI de qualification.' },
      { id: 'c', text: 'PCI DSS', rationale: 'Standard cartes bancaires.' },
      { id: 'd', text: 'CSA STAR', rationale: 'Cadre international, pas le référentiel ANSSI.' },
    ],
    correct: ['a'],
    explanation: 'Cloud qualifié ANSSI : **SecNumCloud**.',
    references: [SECNUM_REF], tags: ['SecNumCloud'] },

  { id: 'efr-g1-08', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'hard',
    prompt: 'Pendant un audit organisationnel ISO 27001, vous interrogez les utilisateurs sur leur connaissance de la PSSI. Cette technique est :',
    options: [
      { id: 'a', text: 'Une revue documentaire', rationale: 'La revue documentaire porte sur les politiques et procédures écrites, pas sur les personnes.' },
      { id: 'b', text: 'Un test d\'intrusion', rationale: 'Un pentest est technique, pas un entretien.' },
      { id: 'c', text: 'Une interview des acteurs clés', rationale: 'Les entretiens des utilisateurs et acteurs clés font partie des techniques d\'audit organisationnel reconnues.' },
      { id: 'd', text: 'Un scan de vulnérabilités', rationale: 'Outil technique.' },
    ],
    correct: ['c'],
    explanation: 'Interroger les acteurs = **interviews** d\'audit organisationnel.',
    references: [ISO_REF], tags: ['techniques audit'] },

  { id: 'efr-g1-09', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'Pour un audit technique, le standard de référence international le plus reconnu pour la méthodologie de tests d\'intrusion s\'appelle :',
    options: [
      { id: 'a', text: 'PTES (Penetration Testing Execution Standard)', rationale: 'Référentiel public utilisé par les pentesters et recommandé en complément des guides ANSSI.' },
      { id: 'b', text: 'COBIT', rationale: 'Référentiel de gouvernance IT, pas un standard pentest.' },
      { id: 'c', text: 'ITIL', rationale: 'Service management, pas pentest.' },
      { id: 'd', text: 'CMMI', rationale: 'Maturité de développement logiciel, pas pentest.' },
    ],
    correct: ['a'],
    explanation: 'Méthodologie pentest = **PTES**.',
    references: [ANSSI_REF], tags: ['PTES'] },

  { id: 'efr-g1-10', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'hard',
    prompt: 'Un audit a fait remonter 47 non‑conformités. Que doit ABSOLUMENT contenir le rapport pour être actionnable par la direction ?',
    options: [
      { id: 'a', text: 'Une priorisation P1/P2/P3, des deadlines et un budget prévisionnel', rationale: 'Sans priorisation et budget, la direction ne peut pas arbitrer.' },
      { id: 'b', text: 'La liste brute, sans hiérarchie', rationale: 'Une liste sans priorisation est ingérable.' },
      { id: 'c', text: 'Uniquement les vulnérabilités critiques', rationale: 'Tronquer à P1 prive la direction de visibilité.' },
      { id: 'd', text: 'Aucune deadline pour ne pas mettre la pression', rationale: 'Sans deadline, rien n\'est fait.' },
    ],
    correct: ['a'],
    explanation: 'Rapport actionnable : **priorisation + deadlines + budget**.',
    references: [ANSSI_REF], tags: ['rapport audit'] },

  { id: 'efr-g1-11', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'L\'audit alimente la "roue de Deming" (PDCA) à quel(s) titre(s) ?',
    options: [
      { id: 'a', text: 'Il alimente la revue de direction et le plan d\'action, pour entrer dans le cycle d\'amélioration continue', rationale: 'L\'audit est l\'événement déclencheur des étapes Check / Act dans une démarche ISO 27001.' },
      { id: 'b', text: 'Il remplace totalement la revue de direction', rationale: 'L\'audit est une entrée, pas un substitut.' },
      { id: 'c', text: 'Il sort du cadre PDCA', rationale: 'Faux, il en est un pilier.' },
      { id: 'd', text: 'Il sert uniquement à la phase Plan', rationale: 'Trop restrictif : il alimente surtout Check et Act.' },
    ],
    correct: ['a'],
    explanation: 'Audit = entrée des phases **Check** et **Act** du PDCA.',
    references: [ISO_REF], tags: ['PDCA'] },

  { id: 'efr-g1-12', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'hard',
    prompt: 'Étape "Identifier la maturité" d\'un audit. Une entreprise n\'a JAMAIS audité son SI mais vient de créer un poste de RSSI. Quelle conclusion ?',
    options: [
      { id: 'a', text: 'Le niveau de maturité est probablement faible à moyen, l\'audit doit être large et exhaustif', rationale: 'Pas de précédent + RSSI récent = maturité faible. L\'audit doit balayer largement.' },
      { id: 'b', text: 'La maturité est élevée par défaut', rationale: 'Aucune raison de présumer un haut niveau sans précédent ni équipe étoffée.' },
      { id: 'c', text: 'On peut sauter directement à un audit ISO 27001 de certification', rationale: 'Un audit de certification suppose un système de management déjà mature.' },
      { id: 'd', text: 'Pas besoin d\'audit, le RSSI doit d\'abord rédiger la PSSI', rationale: 'Sans état des lieux, la PSSI sera théorique.' },
    ],
    correct: ['a'],
    explanation: 'RSSI récent + 0 audit = maturité faible, audit **large** prioritaire.',
    references: [ANSSI_REF], tags: ['maturité'] },

  // =========================================================
  // G2 : Analyse de risque EBIOS RM (15 QCM)
  // =========================================================
  { id: 'efr-g2-01', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'medium',
    prompt: 'Selon ISO 31000:2010, un risque est :',
    options: [
      { id: 'a', text: 'L\'effet de l\'incertitude sur l\'atteinte des objectifs, exprimé par la combinaison conséquences × vraisemblance', rationale: 'Définition exacte ISO 31000:2010.' },
      { id: 'b', text: 'Une vulnérabilité exploitée par une menace identifiée', rationale: 'C\'est la définition d\'un incident, pas d\'un risque.' },
      { id: 'c', text: 'Un événement passé documenté', rationale: 'Le risque est prospectif, pas rétrospectif.' },
      { id: 'd', text: 'Un coût direct mesurable', rationale: 'Le risque inclut l\'incertitude, pas seulement le coût.' },
    ],
    correct: ['a'],
    explanation: 'ISO 31000 : **effet de l\'incertitude × conséquences × vraisemblance**.',
    references: [EBIOS_REF], tags: ['ISO 31000'] },

  { id: 'efr-g2-02', certId: 'efrei-gouvernance', domainId: 'g2', type: 'multi', difficulty: 'medium',
    prompt: 'Parmi ces critères, sélectionnez DEUX qui aident PRIORITAIREMENT à estimer la VRAISEMBLANCE d\'un risque (et non la gravité).',
    options: [
      { id: 'a', text: 'Capacité et motivation des attaquants', rationale: 'Détermine la probabilité d\'occurrence du scénario.' },
      { id: 'b', text: 'Facilité d\'exploitation des vulnérabilités', rationale: 'Plus l\'exploitation est facile, plus le scénario est vraisemblable.' },
      { id: 'c', text: 'Importance de l\'objet de l\'étude', rationale: 'Caractérise la gravité (impact si l\'événement survient).' },
      { id: 'd', text: 'Nombre de conséquences identifiées', rationale: 'Caractérise la gravité.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Vraisemblance : **capacité/motivation attaquants** + **facilité d\'exploitation**.',
    references: [EBIOS_REF], tags: ['vraisemblance vs gravité'] },

  { id: 'efr-g2-03', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'medium',
    prompt: 'Une "valeur métier" en EBIOS RM est :',
    options: [
      { id: 'a', text: 'Le patrimoine informationnel ou processus qu\'une source de risque aurait intérêt à attaquer', rationale: 'Définition opérationnelle EBIOS RM. Exemples : informations clients, R&D, savoir‑faire.' },
      { id: 'b', text: 'Un actif physique du SI (serveur, câble, climatisation)', rationale: 'C\'est un bien support, pas une valeur métier.' },
      { id: 'c', text: 'Le coût annuel d\'une mesure de sécurité', rationale: 'Hors champ EBIOS.' },
      { id: 'd', text: 'Une vulnérabilité référencée dans le CVE', rationale: 'Hors champ EBIOS.' },
    ],
    correct: ['a'],
    explanation: 'Valeur métier = **patrimoine informationnel ou processus** à protéger.',
    references: [EBIOS_REF], tags: ['valeur métier'] },

  { id: 'efr-g2-04', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'hard',
    prompt: 'Combien de valeurs métier l\'ANSSI recommande de retenir au final pour rester actionnable ?',
    options: [
      { id: 'a', text: 'Toutes celles identifiées, sans tri', rationale: 'Ingérable et noie l\'analyse.' },
      { id: 'b', text: 'Environ 5 à 10 valeurs métier essentielles, justifiées', rationale: 'Recommandation pratique pour conserver un périmètre maîtrisable.' },
      { id: 'c', text: 'Une seule, la plus importante', rationale: 'Trop restrictif, prive l\'analyse de transversalité.' },
      { id: 'd', text: 'Au minimum 50', rationale: 'Trop dilué.' },
    ],
    correct: ['b'],
    explanation: 'Sélection efficace : **5 à 10 valeurs métier**.',
    references: [EBIOS_REF], tags: ['Atelier 1'] },

  { id: 'efr-g2-05', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'medium',
    prompt: 'Un événement redouté (ER) en EBIOS RM est associé à :',
    options: [
      { id: 'a', text: 'Une valeur métier dont il porte atteinte à un critère DIC', rationale: 'Définition exacte : un ER est lié à une valeur métier et à un besoin de sécurité (D, I, C).' },
      { id: 'b', text: 'Un bien support et sa vulnérabilité technique', rationale: 'Confusion : c\'est un scénario opérationnel, pas un ER.' },
      { id: 'c', text: 'Une partie prenante de l\'écosystème', rationale: 'L\'écosystème est traité en atelier 3, pas dans la définition d\'un ER.' },
      { id: 'd', text: 'Un attaquant identifié nominativement', rationale: 'Confusion avec la source de risque (atelier 2).' },
    ],
    correct: ['a'],
    explanation: 'ER = atteinte à une **valeur métier** sur un critère **DIC**.',
    references: [EBIOS_REF], tags: ['Atelier 1', 'ER'] },

  { id: 'efr-g2-06', certId: 'efrei-gouvernance', domainId: 'g2', type: 'multi', difficulty: 'hard',
    prompt: 'Sélectionnez DEUX impacts à recenser dans l\'identification des événements redoutés en atelier 1.',
    options: [
      { id: 'a', text: 'Impacts sur la gouvernance', rationale: 'Cité explicitement dans la liste ANSSI des impacts à considérer.' },
      { id: 'b', text: 'Impacts sur l\'image et la confiance', rationale: 'Critère majeur d\'évaluation de la gravité.' },
      { id: 'c', text: 'Impact carbone du datacenter', rationale: 'Hors champ ER classique.' },
      { id: 'd', text: 'Coût de la cantine d\'entreprise', rationale: 'Hors sujet.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Impacts ER : missions, humain, **gouvernance**, financier, juridique, **image et confiance**.',
    references: [EBIOS_REF], tags: ['impacts'] },

  { id: 'efr-g2-07', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'medium',
    prompt: 'Le couple SR/OV en EBIOS RM signifie :',
    options: [
      { id: 'a', text: 'Source de Risque et Objectif Visé', rationale: 'Couple central de l\'atelier 2.' },
      { id: 'b', text: 'Service de Référence et Outil de Validation', rationale: 'Invention.' },
      { id: 'c', text: 'Système Référentiel et Organisme de Validation', rationale: 'Invention.' },
      { id: 'd', text: 'Sécurité Réseau et Outil de Vérification', rationale: 'Invention.' },
    ],
    correct: ['a'],
    explanation: 'SR = qui attaque, OV = ce qu\'il vise.',
    references: [EBIOS_REF], tags: ['Atelier 2'] },

  { id: 'efr-g2-08', certId: 'efrei-gouvernance', domainId: 'g2', type: 'multi', difficulty: 'medium',
    prompt: 'Parmi ces critères, sélectionnez DEUX qui servent à évaluer la pertinence d\'un couple SR/OV.',
    options: [
      { id: 'a', text: 'Motivation de la SR à atteindre l\'OV', rationale: 'Critère officiel ANSSI.' },
      { id: 'b', text: 'Ressources financières, compétences et infrastructures d\'attaque', rationale: 'Critère officiel ANSSI.' },
      { id: 'c', text: 'Couleur du logo de l\'attaquant', rationale: 'Hors sujet.' },
      { id: 'd', text: 'Nombre d\'employés dans l\'organisation cible', rationale: 'Pas un critère pertinent isolément.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Pertinence SR/OV : **motivation** + **ressources** (+ activité de la SR).',
    references: [EBIOS_REF], tags: ['Atelier 2'] },

  { id: 'efr-g2-09', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'medium',
    prompt: 'À l\'issue de l\'atelier 2 EBIOS RM, vous gardez idéalement :',
    options: [
      { id: 'a', text: '3 à 6 couples SR/OV pertinents et distincts', rationale: 'Ordre de grandeur recommandé pour conserver des scénarios différenciés sur valeurs métier et biens supports.' },
      { id: 'b', text: 'Tous les couples sans tri', rationale: 'Empêche la priorisation.' },
      { id: 'c', text: 'Un seul couple', rationale: 'Trop restrictif.' },
      { id: 'd', text: 'Au moins 50 couples', rationale: 'Trop dilué.' },
    ],
    correct: ['a'],
    explanation: 'Recommandation : **3 à 6 couples SR/OV**.',
    references: [EBIOS_REF], tags: ['Atelier 2'] },

  { id: 'efr-g2-10', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'hard',
    prompt: 'Dans l\'atelier 3, le terme "PPC" désigne :',
    options: [
      { id: 'a', text: 'Partie Prenante Critique : maillon faible disposant d\'un accès privilégié aux valeurs métier', rationale: 'Définition exacte ANSSI : SR attaquera la PPC dans une logique de moindre effort.' },
      { id: 'b', text: 'Politique de Prévention Cyber', rationale: 'Invention.' },
      { id: 'c', text: 'Plan de Protection Continue', rationale: 'Invention.' },
      { id: 'd', text: 'Processus de Pentest Continu', rationale: 'Invention.' },
    ],
    correct: ['a'],
    explanation: 'PPC = **Partie Prenante Critique**, maillon faible avec accès privilégié.',
    references: [EBIOS_REF], tags: ['Atelier 3', 'PPC'] },

  { id: 'efr-g2-11', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'hard',
    prompt: 'Sur le radar de la menace ANSSI (atelier 3), une partie prenante en zone de DANGER signifie :',
    options: [
      { id: 'a', text: 'Niveau de menace très élevé et difficilement acceptable, exigeant des mesures pour la faire sortir de cette zone', rationale: 'Aucune partie prenante ne devrait rester en zone de danger.' },
      { id: 'b', text: 'Niveau négligeable, hors périmètre', rationale: 'C\'est la zone "Hors périmètre".' },
      { id: 'c', text: 'Niveau tolérable, à surveiller en veille', rationale: 'C\'est la zone de veille.' },
      { id: 'd', text: 'Niveau tolérable sous contrôle', rationale: 'C\'est la zone de contrôle.' },
    ],
    correct: ['a'],
    explanation: 'Zone de danger = **inacceptable**, mesures obligatoires pour en sortir.',
    references: [EBIOS_REF], tags: ['radar menace', 'zones'] },

  { id: 'efr-g2-12', certId: 'efrei-gouvernance', domainId: 'g2', type: 'multi', difficulty: 'hard',
    prompt: 'Selon la métrique ANSSI, le niveau de menace d\'une partie prenante combine DEUX axes. Lesquels ?',
    options: [
      { id: 'a', text: 'Exposition (dépendance + pénétration)', rationale: 'Premier axe officiel : à quel point la PP a accès au SI cible.' },
      { id: 'b', text: 'Fiabilité cyber (maturité cyber + confiance)', rationale: 'Second axe officiel : à quel point on peut compter sur sa résistance.' },
      { id: 'c', text: 'Chiffre d\'affaires de la PP', rationale: 'Pas un axe ANSSI pour la menace.' },
      { id: 'd', text: 'Nombre d\'employés', rationale: 'Pas un axe ANSSI pour la menace.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Menace PP = **Exposition** × **Fiabilité cyber** (formule ANSSI).',
    references: [EBIOS_REF], tags: ['atelier 3', 'métrique menace'] },

  { id: 'efr-g2-13', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'medium',
    prompt: 'Différence essentielle entre scénario STRATÉGIQUE et OPÉRATIONNEL en EBIOS RM :',
    options: [
      { id: 'a', text: 'Le stratégique se concentre sur les parties prenantes de l\'écosystème, l\'opérationnel sur les biens supports techniques', rationale: 'Distinction officielle : niveau d\'abstraction (qui passe / par où techniquement).' },
      { id: 'b', text: 'Le stratégique est obligatoire, l\'opérationnel facultatif', rationale: 'Les deux sont attendus dans une analyse complète.' },
      { id: 'c', text: 'Le stratégique est l\'avis du comité de direction, l\'opérationnel celui du SOC', rationale: 'Confusion : ce sont des objets méthodologiques, pas des opinions.' },
      { id: 'd', text: 'Aucune différence, c\'est synonyme', rationale: 'Faux, ils traitent deux niveaux distincts.' },
    ],
    correct: ['a'],
    explanation: 'Stratégique → écosystème ; opérationnel → **biens supports techniques**.',
    references: [EBIOS_REF], tags: ['ateliers 3 et 4'] },

  { id: 'efr-g2-14', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'hard',
    prompt: 'En atelier 4 EBIOS RM, vous identifiez "absence de MFA pour les administrateurs et serveurs Windows Server 2003 en production". Ces éléments sont :',
    options: [
      { id: 'a', text: 'Des biens supports critiques utilisés pour étoffer les chemins d\'attaque', rationale: 'Caractéristiques exactes des biens supports critiques en atelier 4.' },
      { id: 'b', text: 'Des sources de risque', rationale: 'Confusion avec atelier 2.' },
      { id: 'c', text: 'Des valeurs métier', rationale: 'Confusion avec atelier 1.' },
      { id: 'd', text: 'Des parties prenantes', rationale: 'Confusion avec atelier 3.' },
    ],
    correct: ['a'],
    explanation: 'Vulnérabilités techniques exploitables = **biens supports critiques** (atelier 4).',
    references: [EBIOS_REF], tags: ['atelier 4'] },

  { id: 'efr-g2-15', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'medium',
    prompt: 'L\'analyse de risque EBIOS RM permet :',
    options: [
      { id: 'a', text: 'De faire prendre conscience aux décideurs des risques et de les prioriser, sans pour autant les éliminer', rationale: 'Phrase clé du cours : "une analyse de risque ne protège pas des risques, elle permet d\'en faire prendre conscience aux décideurs".' },
      { id: 'b', text: 'D\'éliminer définitivement les risques', rationale: 'Une analyse n\'élimine rien par elle‑même.' },
      { id: 'c', text: 'De remplacer la mise en œuvre des mesures de sécurité', rationale: 'Faux, elle les justifie et les priorise.' },
      { id: 'd', text: 'De certifier ISO 27001 automatiquement', rationale: 'Sans relation directe.' },
    ],
    correct: ['a'],
    explanation: 'Analyse de risque = **conscience et priorisation**, pas protection automatique.',
    references: [EBIOS_REF], tags: ['finalité analyse de risque'] },

  // =========================================================
  // G3 : Plan d'action et PACS (8 QCM)
  // =========================================================
  { id: 'efr-g3-01', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'medium',
    prompt: 'L\'atelier 5 EBIOS RM produit :',
    options: [
      { id: 'a', text: 'Un Plan d\'Amélioration Continue de la Sécurité (PACS)', rationale: 'Livrable officiel : recensement des mesures, traitement, risques résiduels.' },
      { id: 'b', text: 'Une certification ISO 27001', rationale: 'Hors champ EBIOS.' },
      { id: 'c', text: 'Un rapport d\'incident', rationale: 'Hors champ EBIOS.' },
      { id: 'd', text: 'Un test d\'intrusion', rationale: 'Hors champ EBIOS.' },
    ],
    correct: ['a'],
    explanation: 'Atelier 5 = **PACS** (Plan d\'Amélioration Continue de la Sécurité).',
    references: [EBIOS_REF], tags: ['Atelier 5', 'PACS'] },

  { id: 'efr-g3-02', certId: 'efrei-gouvernance', domainId: 'g3', type: 'multi', difficulty: 'medium',
    prompt: 'Pour bâtir le PACS en atelier 5, il faut DEUX entrées prioritaires. Lesquelles ?',
    options: [
      { id: 'a', text: 'Le socle de sécurité (atelier 1)', rationale: 'Le PACS s\'adosse au socle réglementaire et normatif.' },
      { id: 'b', text: 'Les scénarios stratégiques et opérationnels (ateliers 3 et 4)', rationale: 'Le PACS traite les risques mis en évidence par ces scénarios.' },
      { id: 'c', text: 'Le code source des applications', rationale: 'Hors champ.' },
      { id: 'd', text: 'Le carnet d\'adresses des clients', rationale: 'Hors champ.' },
    ],
    correct: ['a', 'b'],
    explanation: 'PACS s\'appuie sur **socle (atelier 1)** + **scénarios (3 et 4)**.',
    references: [EBIOS_REF], tags: ['atelier 5', 'PACS'] },

  { id: 'efr-g3-03', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'hard',
    prompt: 'Le tableau croisé gravité/vraisemblance produit en atelier 5 doit :',
    options: [
      { id: 'a', text: 'Comporter un niveau d\'acceptabilité défini en amont', rationale: 'Ce niveau (souvent matérialisé par un code couleur) sert d\'arbitrage : au‑delà, des mesures sont obligatoires.' },
      { id: 'b', text: 'Être identique à la matrice utilisée par toutes les autres organisations', rationale: 'Faux : chaque organisation définit ses seuils selon son appétence.' },
      { id: 'c', text: 'Ne contenir que des risques résolus', rationale: 'Faux : c\'est l\'inventaire avant traitement.' },
      { id: 'd', text: 'Être tenu secret par le RSSI uniquement', rationale: 'Au contraire, il alimente le COMEX.' },
    ],
    correct: ['a'],
    explanation: 'Tableau croisé : niveau d\'**acceptabilité** défini en amont.',
    references: [EBIOS_REF], tags: ['atelier 5', 'tableau croisé'] },

  { id: 'efr-g3-04', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'medium',
    prompt: 'Après application des mesures de sécurité du PACS, on doit :',
    options: [
      { id: 'a', text: 'Refaire le tableau croisé gravité/vraisemblance pour mesurer les risques résiduels', rationale: 'C\'est la mesure de l\'efficacité du traitement.' },
      { id: 'b', text: 'Détruire l\'analyse de risque initiale', rationale: 'Au contraire, elle reste référentielle.' },
      { id: 'c', text: 'Désactiver tous les contrôles de sécurité existants', rationale: 'Aberrant.' },
      { id: 'd', text: 'Demander une nouvelle certification ISO 27001', rationale: 'Sans rapport direct.' },
    ],
    correct: ['a'],
    explanation: 'Après mesures = **nouveau tableau croisé** pour les risques résiduels.',
    references: [EBIOS_REF], tags: ['risques résiduels'] },

  { id: 'efr-g3-05', certId: 'efrei-gouvernance', domainId: 'g3', type: 'multi', difficulty: 'hard',
    prompt: 'Sélectionnez DEUX OPTIONS de traitement du risque reconnues dans EBIOS RM (et ISO 27005).',
    options: [
      { id: 'a', text: 'Réduire (mettre en place des mesures pour diminuer la gravité ou la vraisemblance)', rationale: 'Option canonique du traitement.' },
      { id: 'b', text: 'Partager (transférer une partie via assurance ou contrat)', rationale: 'Option canonique du traitement.' },
      { id: 'c', text: 'Augmenter le risque pour mieux le détecter', rationale: 'Aberrant.' },
      { id: 'd', text: 'Ignorer définitivement le risque sans documentation', rationale: 'L\'acceptation existe mais doit être documentée.' },
    ],
    correct: ['a', 'b'],
    explanation: '4 options canoniques : **réduire, partager, refuser, accepter**.',
    references: [EBIOS_REF], tags: ['traitement du risque'] },

  { id: 'efr-g3-06', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'medium',
    prompt: 'Le PACS s\'inscrit dans la méthodologie de gestion de la cybersécurité de Cybermalveillance.gouv. À quelle étape de la "roue" cette construction correspond‑elle ?',
    options: [
      { id: 'a', text: 'Étape 4 : plan d\'action', rationale: 'Le cours indique explicitement Module 3 / étape 4 = plan d\'action.' },
      { id: 'b', text: 'Étape 1 : état des lieux', rationale: 'Faux, c\'est l\'audit initial.' },
      { id: 'c', text: 'Étape 2 : analyse de risque', rationale: 'Faux, c\'est en amont (ateliers 1 à 4).' },
      { id: 'd', text: 'Étape 0 : cartographie', rationale: 'Inexistant dans la roue.' },
    ],
    correct: ['a'],
    explanation: 'Plan d\'action = **étape 4** de la roue de gestion cyber.',
    references: [ANSSI_REF], tags: ['Cybermalveillance'] },

  { id: 'efr-g3-07', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'hard',
    prompt: 'Une recommandation P1 dans un PACS doit comporter, AU MINIMUM :',
    options: [
      { id: 'a', text: 'Une description, un responsable, une deadline et un budget prévisionnel', rationale: 'Sans ces 4 éléments, la mesure n\'est pas pilotable.' },
      { id: 'b', text: 'Uniquement une description technique', rationale: 'Insuffisant pour le pilotage.' },
      { id: 'c', text: 'Le nom du fournisseur exclusif', rationale: 'Pas obligatoire et limitant.' },
      { id: 'd', text: 'Un slogan accrocheur', rationale: 'Hors sujet.' },
    ],
    correct: ['a'],
    explanation: 'Recommandation P1 : **description + responsable + deadline + budget**.',
    references: [ANSSI_REF], tags: ['PACS', 'recommandations'] },

  { id: 'efr-g3-08', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'medium',
    prompt: 'Le plan France Relance 2020-2022 (90 000 € pour les collectivités) exigeait avant versement :',
    options: [
      { id: 'a', text: 'Un état de conformité ET un plan d\'action validé issu d\'un audit externe', rationale: 'Cité dans le cours comme exemple de subvention conditionnée à un audit + PACS.' },
      { id: 'b', text: 'Une certification ISO 27001 préalable', rationale: 'Pas exigée pour France Relance.' },
      { id: 'c', text: 'Un test d\'intrusion publié publiquement', rationale: 'Pas exigé et contraire au secret.' },
      { id: 'd', text: 'Aucun document, uniquement une demande verbale', rationale: 'Faux.' },
    ],
    correct: ['a'],
    explanation: 'France Relance : **audit externe + plan d\'action validé**.',
    references: [ANSSI_REF], tags: ['subventions', 'France Relance'] },

  // =========================================================
  // G4 : Prestataires, SLA et tiers (8 QCM)
  // =========================================================
  { id: 'efr-g4-01', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'medium',
    prompt: 'Un audit "de tierce partie" est :',
    options: [
      { id: 'a', text: 'Un audit réalisé sur un prestataire ou fournisseur, par un organisme indépendant', rationale: 'Définition exacte : tiers ≠ commanditaire ≠ audité.' },
      { id: 'b', text: 'Un audit interne classique', rationale: 'Faux, sans tiers.' },
      { id: 'c', text: 'Un audit fait par le commanditaire lui‑même sur son propre SI', rationale: 'C\'est un audit de première partie.' },
      { id: 'd', text: 'Un audit financier obligatoire', rationale: 'Hors champ cybersécurité.' },
    ],
    correct: ['a'],
    explanation: 'Tierce partie = **organisme indépendant audite un prestataire**.',
    references: [ANSSI_REF], tags: ['audit prestataires'] },

  { id: 'efr-g4-02', certId: 'efrei-gouvernance', domainId: 'g4', type: 'multi', difficulty: 'hard',
    prompt: 'Sélectionnez DEUX clauses ESSENTIELLES à inclure dans un SLA cybersécurité avec un prestataire critique.',
    options: [
      { id: 'a', text: 'Engagement de niveau de service mesurable (disponibilité, MTTR, RTO)', rationale: 'Sans engagement chiffré, le SLA n\'est pas opposable.' },
      { id: 'b', text: 'Droit d\'audit du commanditaire sur le prestataire et clause de notification d\'incident', rationale: 'Indispensable pour vérifier la conformité et réagir aux compromissions chez le tiers.' },
      { id: 'c', text: 'Engagement à utiliser exclusivement Windows', rationale: 'Hors champ SLA cybersécurité standard.' },
      { id: 'd', text: 'Interdiction d\'utiliser le chiffrement', rationale: 'Aberrant.' },
    ],
    correct: ['a', 'b'],
    explanation: 'SLA : **engagement chiffré** + **droit d\'audit + notification d\'incident**.',
    references: [SECNUM_REF], tags: ['SLA'] },

  { id: 'efr-g4-03', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'medium',
    prompt: 'Un KPI typique permettant d\'objectiver le respect d\'un SLA de support est :',
    options: [
      { id: 'a', text: 'MTTR (Mean Time To Repair) par criticité d\'incident', rationale: 'Métrique standard de respect d\'un SLA support.' },
      { id: 'b', text: 'Le nombre de jours fériés du prestataire', rationale: 'Pas un KPI pertinent.' },
      { id: 'c', text: 'La couleur du logo du prestataire', rationale: 'Hors sujet.' },
      { id: 'd', text: 'Le chiffre d\'affaires du commanditaire', rationale: 'Pas une métrique de respect SLA.' },
    ],
    correct: ['a'],
    explanation: 'KPI SLA support : **MTTR** par niveau de criticité.',
    references: [RNCP_REF], tags: ['KPI', 'SLA'] },

  { id: 'efr-g4-04', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'hard',
    prompt: 'Un prestataire ne respecte pas son SLA depuis 6 mois (disponibilité < 99 %). La cause RACINE la plus probable au regard de la compétence C05 du RNCP est :',
    options: [
      { id: 'a', text: 'Sous‑dimensionnement des ressources humaines ou techniques affectées au contrat', rationale: 'Cause structurelle classique : le prestataire a accepté un SLA qu\'il ne peut tenir avec les moyens engagés.' },
      { id: 'b', text: 'Manque d\'enthousiasme du commanditaire', rationale: 'Pas une cause technique.' },
      { id: 'c', text: 'Trop forte conformité ISO 27001 du prestataire', rationale: 'Aberrant.' },
      { id: 'd', text: 'Excès de tests de PCA', rationale: 'Aberrant.' },
    ],
    correct: ['a'],
    explanation: 'Cause racine fréquente : **sous‑dimensionnement** des ressources affectées.',
    references: [RNCP_REF], tags: ['cause non‑respect SLA'] },

  { id: 'efr-g4-05', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'medium',
    prompt: 'La qualification ANSSI "PASSI" concerne :',
    options: [
      { id: 'a', text: 'Les prestataires d\'audit de la sécurité des systèmes d\'information', rationale: 'PASSI = Prestataire d\'Audit de la Sécurité des SI, qualifié par l\'ANSSI.' },
      { id: 'b', text: 'Les hébergeurs cloud uniquement', rationale: 'Confusion avec SecNumCloud.' },
      { id: 'c', text: 'Les fabricants de serveurs', rationale: 'Hors champ ANSSI.' },
      { id: 'd', text: 'Les éditeurs d\'antivirus', rationale: 'Hors qualification PASSI.' },
    ],
    correct: ['a'],
    explanation: 'PASSI = **prestataires d\'audit** SI qualifiés ANSSI.',
    references: [ANSSI_REF], tags: ['PASSI'] },

  { id: 'efr-g4-06', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'hard',
    prompt: 'La qualification ANSSI "PRIS" concerne :',
    options: [
      { id: 'a', text: 'Les prestataires de réponse aux incidents de sécurité', rationale: 'PRIS = Prestataire de Réponse aux Incidents de Sécurité, qualification ANSSI dédiée.' },
      { id: 'b', text: 'Les prestataires d\'identification biométrique', rationale: 'Sans rapport.' },
      { id: 'c', text: 'Les prestataires de PCA exclusivement', rationale: 'Faux.' },
      { id: 'd', text: 'Les fournisseurs d\'antispam', rationale: 'Hors champ.' },
    ],
    correct: ['a'],
    explanation: 'PRIS = **réponse aux incidents** qualifiée ANSSI.',
    references: [ANSSI_REF], tags: ['PRIS'] },

  { id: 'efr-g4-07', certId: 'efrei-gouvernance', domainId: 'g4', type: 'multi', difficulty: 'medium',
    prompt: 'Lors de l\'évaluation d\'un prestataire en atelier 3 EBIOS, vous devez DEUX vérifications distinctes :',
    options: [
      { id: 'a', text: 'Sa maturité cyber (politique de sécurité, certifications, processus)', rationale: 'Composante "fiabilité cyber" du modèle ANSSI.' },
      { id: 'b', text: 'Son niveau d\'exposition (dépendance et pénétration sur votre SI)', rationale: 'Composante "exposition" du modèle ANSSI.' },
      { id: 'c', text: 'Le menu de sa cantine', rationale: 'Hors sujet.' },
      { id: 'd', text: 'La couleur de son site web', rationale: 'Hors sujet.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Évaluation PP : **maturité cyber** + **exposition**.',
    references: [EBIOS_REF], tags: ['évaluation prestataires'] },

  { id: 'efr-g4-08', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'hard',
    prompt: 'Un prestataire SaaS héberge la base de données patients d\'un hôpital. Au minimum, deux exigences de qualification doivent être contractualisées :',
    options: [
      { id: 'a', text: 'Certification HDS du prestataire et contractualisation des modalités d\'audit (notamment droit de regard et notification d\'incident)', rationale: 'Pour des données de santé hébergées par un tiers, HDS est un prérequis légal et l\'audit/notification doit être contractualisé.' },
      { id: 'b', text: 'Aucune obligation, le prestataire fait ce qu\'il veut', rationale: 'Faux, c\'est une obligation légale (Code de la santé publique).' },
      { id: 'c', text: 'Certification PCI DSS uniquement', rationale: 'PCI DSS concerne les cartes bancaires, pas les données de santé.' },
      { id: 'd', text: 'Certification ISO 9001 uniquement', rationale: 'ISO 9001 = qualité, pas sécurité des données de santé.' },
    ],
    correct: ['a'],
    explanation: 'Données de santé tierces : **HDS** + droits d\'audit et de notification contractualisés.',
    references: [HDS_REF], tags: ['HDS', 'sous‑traitance santé'] },

  // =========================================================
  // G5 : RNCP BC01 — Compétences C01 à C10 (7 QCM)
  // =========================================================
  { id: 'efr-g5-01', certId: 'efrei-gouvernance', domainId: 'g5', type: 'single', difficulty: 'medium',
    prompt: 'La compétence C01 du RNCP39781 BC01 ("participer aux politiques de gouvernance IT") est principalement évaluée sur :',
    options: [
      { id: 'a', text: 'La compréhension des enjeux métiers et l\'analyse des besoins et contraintes IT', rationale: 'Critères C01.1 et C01.2 de la grille EC01.' },
      { id: 'b', text: 'La rapidité à compiler du code C++', rationale: 'Hors champ gouvernance.' },
      { id: 'c', text: 'Le nombre de serveurs administrés', rationale: 'Pas un critère d\'évaluation gouvernance.' },
      { id: 'd', text: 'Le niveau d\'anglais en lecture', rationale: 'Pas le critère C01.' },
    ],
    correct: ['a'],
    explanation: 'C01 : **enjeux métiers** + **besoins et contraintes IT**.',
    references: [RNCP_REF], tags: ['C01'] },

  { id: 'efr-g5-02', certId: 'efrei-gouvernance', domainId: 'g5', type: 'single', difficulty: 'medium',
    prompt: 'C07 et C08 du RNCP39781 BC01 traitent respectivement de :',
    options: [
      { id: 'a', text: 'Plan de continuité d\'activité (PCA) et plan de reprise d\'activité (PRA)', rationale: 'C07 = PCA, C08 = PRA. PCA maintient l\'activité ; PRA reprend après sinistre.' },
      { id: 'b', text: 'Politique RH et politique commerciale', rationale: 'Hors champ.' },
      { id: 'c', text: 'Programme de fidélité et plan marketing', rationale: 'Hors champ.' },
      { id: 'd', text: 'Politique de prix et politique d\'achat', rationale: 'Hors champ.' },
    ],
    correct: ['a'],
    explanation: 'C07 = **PCA** ; C08 = **PRA**.',
    references: [RNCP_REF], tags: ['PCA', 'PRA'] },

  { id: 'efr-g5-03', certId: 'efrei-gouvernance', domainId: 'g5', type: 'single', difficulty: 'hard',
    prompt: 'Différence FONDAMENTALE entre PCA et PRA :',
    options: [
      { id: 'a', text: 'Le PCA vise à maintenir une activité minimale en mode dégradé pendant le sinistre ; le PRA vise à restaurer le SI nominal après le sinistre', rationale: 'Distinction officielle ANSSI : PCA = pendant, PRA = après.' },
      { id: 'b', text: 'Le PCA est technique, le PRA est juridique', rationale: 'Faux, les deux sont opérationnels.' },
      { id: 'c', text: 'Le PCA est gratuit, le PRA est payant', rationale: 'Faux.' },
      { id: 'd', text: 'Aucune différence', rationale: 'Faux.' },
    ],
    correct: ['a'],
    explanation: 'PCA = **pendant le sinistre** ; PRA = **après le sinistre**.',
    references: [RNCP_REF], tags: ['PCA vs PRA'] },

  { id: 'efr-g5-04', certId: 'efrei-gouvernance', domainId: 'g5', type: 'multi', difficulty: 'hard',
    prompt: 'C09 du RNCP impose de réaliser des TESTS du PCA. Sélectionnez DEUX TYPES de tests reconnus.',
    options: [
      { id: 'a', text: 'Test sur table (tabletop exercise) impliquant les acteurs sans bascule réelle', rationale: 'Test fréquent, peu coûteux, valide la compréhension du plan.' },
      { id: 'b', text: 'Test de bascule réelle vers le site de secours', rationale: 'Test ultime, valide l\'opérabilité technique de la reprise.' },
      { id: 'c', text: 'Test de personnalité des employés', rationale: 'Hors champ PCA.' },
      { id: 'd', text: 'Test de QI', rationale: 'Hors champ.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Tests PCA : **tabletop** + **bascule réelle**.',
    references: [RNCP_REF], tags: ['tests PCA'] },

  { id: 'efr-g5-05', certId: 'efrei-gouvernance', domainId: 'g5', type: 'single', difficulty: 'medium',
    prompt: 'La compétence C10 "Numérique Responsable" du RNCP39781 BC01 inclut notamment :',
    options: [
      { id: 'a', text: 'Une définition claire des engagements de service (SLA) et la communication / résolution de conflits', rationale: 'Critères C10.1 et C10.2 de la grille EC01.' },
      { id: 'b', text: 'Le développement d\'un firmware pour serveur', rationale: 'Hors champ Numérique Responsable.' },
      { id: 'c', text: 'La gestion d\'un incident de sécurité physique', rationale: 'Hors champ C10.' },
      { id: 'd', text: 'L\'acquisition d\'un nouveau datacenter', rationale: 'Hors champ C10.' },
    ],
    correct: ['a'],
    explanation: 'C10 : **engagements de service** + **communication et conflits**.',
    references: [RNCP_REF], tags: ['C10', 'Numérique Responsable'] },

  { id: 'efr-g5-06', certId: 'efrei-gouvernance', domainId: 'g5', type: 'single', difficulty: 'hard',
    prompt: 'L\'EC01 du RNCP39781 valide les compétences C01 à C10 sous quelle forme :',
    options: [
      { id: 'a', text: 'Mise en situation professionnelle simulée à partir d\'un scénario d\'entreprise fictive, livrables collectifs et soutenance individuelle', rationale: 'Modalité officielle EC01 : collective (livrables) + individuelle (oral).' },
      { id: 'b', text: 'QCM individuel uniquement, en 30 minutes', rationale: 'Faux : EC01 est une mise en situation, pas un QCM rapide.' },
      { id: 'c', text: 'Test de compétences purement techniques sur un serveur', rationale: 'Faux, EC01 est un travail de gouvernance complète.' },
      { id: 'd', text: 'Tirage au sort', rationale: 'Aberrant.' },
    ],
    correct: ['a'],
    explanation: 'EC01 : **mise en situation simulée** + livrables collectifs + soutenance individuelle.',
    references: [RNCP_REF], tags: ['EC01'] },

  { id: 'efr-g5-07', certId: 'efrei-gouvernance', domainId: 'g5', type: 'single', difficulty: 'medium',
    prompt: 'Sur la grille EC01, un critère noté 5 (sur 5) signifie :',
    options: [
      { id: 'a', text: 'Niveau professionnel', rationale: 'Échelle officielle EC01 : 0 non traité, 2 insuffisant, 3 suffisant pouvant être amélioré, 5 professionnel.' },
      { id: 'b', text: 'Niveau insuffisant', rationale: 'Correspond à 2.' },
      { id: 'c', text: 'Niveau suffisant pouvant être amélioré', rationale: 'Correspond à 3.' },
      { id: 'd', text: 'Non traité', rationale: 'Correspond à 0.' },
    ],
    correct: ['a'],
    explanation: 'Échelle EC01 : 0 / 2 / 3 / **5 = professionnel**.',
    references: [RNCP_REF], tags: ['notation EC01'] },
]
