import type { Question } from '@/types'

const ANSSI_REF = { label: 'ANSSI : guides et référentiels', url: 'https://cyber.gouv.fr/' }
const ISO_REF = { label: 'ISO/IEC 27001 et 27002', url: 'https://www.iso.org/standard/82875.html' }
const EBIOS_REF = { label: 'EBIOS Risk Manager (ANSSI v1.5)', url: 'https://cyber.gouv.fr/publications/la-methode-ebios-risk-manager' }
const SECNUM_REF = { label: 'SecNumCloud v3.2 (ANSSI)', url: 'https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud' }
const RNCP_REF = { label: 'RNCP39781 BC01 : Gouvernance des infrastructures', url: 'https://www.francecompetences.fr/' }
const HDS_REF = { label: 'Hébergeur de Données de Santé (HDS)', url: 'https://esante.gouv.fr/produits-services/hds' }
const RGPD_REF = { label: 'RGPD, texte consolidé (CNIL)', url: 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees' }
const DORA_REF = { label: 'DORA, Règlement (UE) 2022/2554', url: 'https://eur-lex.europa.eu/eli/reg/2022/2554/oj' }
const NIS2_REF = { label: 'NIS2, Directive (UE) 2022/2555', url: 'https://eur-lex.europa.eu/eli/dir/2022/2555/oj' }
const ISO19011_REF = { label: 'ISO 19011:2018, lignes directrices audit', url: 'https://www.iso.org/standard/70017.html' }

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

  // =========================================================
  // G1 (extension) : Three Lines, COBIT, ITIL, ISO 19011 (8 QCM)
  // =========================================================

  { id: 'efr-g1-13', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'hard',
    prompt: 'Dans le modèle Three Lines of Defense imposé en banque par l\'ACPR, qui occupe la 3ème ligne ?',
    options: [
      { id: 'a', text: 'Audit interne et commissaires aux comptes (assurance indépendante)', rationale: 'Définition : la 3ème ligne fournit une assurance indépendante au COMEX et au conseil.' },
      { id: 'b', text: 'Conformité (CCO) et RSSI', rationale: 'Faux : ce sont la 2ème ligne (surveillance et défi).' },
      { id: 'c', text: 'Opérationnels métiers et CRO', rationale: 'Faux : 1ère ligne (propriétaire du risque).' },
      { id: 'd', text: 'L\'ACPR elle-même', rationale: 'L\'ACPR est l\'autorité externe, pas une ligne interne du modèle.' },
    ],
    correct: ['a'],
    explanation: '**3LoD** : 1ère opérationnels+CRO, 2ème conformité+RSSI, **3ème audit interne+CAC**.',
    references: [{ label: 'ACPR : modèle Three Lines of Defense', url: 'https://acpr.banque-france.fr/' }],
    tags: ['Three Lines of Defense', 'gouvernance bancaire'] },

  { id: 'efr-g1-14', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'Quelle est la différence fondamentale entre un audit et un contrôle interne ?',
    options: [
      { id: 'a', text: 'Le contrôle est continu et opérationnel ; l\'audit est ponctuel, indépendant et formalisé', rationale: 'Distinction classique testée en QCM : continuité vs ponctualité, opérationnel vs indépendant.' },
      { id: 'b', text: 'Le contrôle est externe et l\'audit est interne', rationale: 'Faux : les deux peuvent être internes ou externes selon le contexte.' },
      { id: 'c', text: 'L\'audit produit des KPI et le contrôle produit un rapport', rationale: 'Inversé et confus : l\'audit produit un rapport formalisé.' },
      { id: 'd', text: 'Il n\'y a pas de différence, ce sont des synonymes', rationale: 'Faux, ce sont deux activités distinctes.' },
    ],
    correct: ['a'],
    explanation: '**Contrôle = continu et opérationnel**, **audit = ponctuel, indépendant, formalisé**.',
    references: [ISO19011_REF],
    tags: ['audit vs contrôle'] },

  { id: 'efr-g1-15', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'Quel référentiel de l\'ISACA fournit un cadre de gouvernance des SI orienté objectifs de contrôle ?',
    options: [
      { id: 'a', text: 'COBIT 2019', rationale: 'Control Objectives for Information and related Technology, édité par l\'ISACA, version 2019.' },
      { id: 'b', text: 'ITIL v4', rationale: 'Faux : ITIL est centré sur la gestion des services IT, pas la gouvernance objectifs de contrôle.' },
      { id: 'c', text: 'ISO 19011', rationale: 'Faux : ISO 19011 concerne l\'audit des systèmes de management.' },
      { id: 'd', text: 'CMMI', rationale: 'Faux : CMMI est un modèle de maturité de processus.' },
    ],
    correct: ['a'],
    explanation: '**COBIT 2019** = ISACA, gouvernance et management du SI par objectifs de contrôle.',
    references: [{ label: 'ISACA COBIT 2019', url: 'https://www.isaca.org/resources/cobit' }],
    tags: ['COBIT', 'ISACA'] },

  { id: 'efr-g1-16', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'ITIL v4 est principalement utilisé pour :',
    options: [
      { id: 'a', text: 'Codifier la gestion des services IT (incidents, problèmes, changements, configurations)', rationale: 'ITIL v4 = bonnes pratiques de Service Management : ITSM, value streams, 4 dimensions.' },
      { id: 'b', text: 'Auditer un SMSI selon ISO 27001', rationale: 'Faux : pour cela on utilise ISO 19011 et l\'annexe ISO 27007.' },
      { id: 'c', text: 'Mesurer la maturité des processus métiers', rationale: 'Confusion avec CMMI.' },
      { id: 'd', text: 'Notifier les incidents NIS2', rationale: 'Hors champ ITIL.' },
    ],
    correct: ['a'],
    explanation: '**ITIL v4** = Service Management. COBIT couvre la gouvernance, ITIL couvre les services.',
    references: [{ label: 'AXELOS ITIL', url: 'https://www.axelos.com/certifications/itil-service-management' }],
    tags: ['ITIL', 'service management'] },

  { id: 'efr-g1-17', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'hard',
    prompt: 'Quel texte donne la définition normative d\'un audit (« processus systématique, indépendant et documenté pour obtenir des preuves d\'audit ») ?',
    options: [
      { id: 'a', text: 'ISO 19011:2018', rationale: 'ISO 19011 : lignes directrices pour l\'audit des systèmes de management. Source de la définition apprise.' },
      { id: 'b', text: 'ISO 27001:2022', rationale: 'Faux : 27001 cadre le SMSI, pas la méthode d\'audit.' },
      { id: 'c', text: 'COBIT 2019', rationale: 'COBIT propose un cadre de gouvernance, pas la définition normative d\'un audit.' },
      { id: 'd', text: 'RGPD article 28', rationale: 'Hors sujet : 28 RGPD encadre la sous-traitance.' },
    ],
    correct: ['a'],
    explanation: 'La définition d\'un audit se trouve dans **ISO 19011:2018**.',
    references: [ISO19011_REF],
    tags: ['ISO 19011', 'définition audit'] },

  { id: 'efr-g1-18', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'Un audit de certification ISO 27001 est conduit par :',
    options: [
      { id: 'a', text: 'Un organisme de certification accrédité par le COFRAC, avec cycle triennal et surveillance annuelle', rationale: 'Modèle officiel ISO : audit initial puis 2 audits de surveillance, recertification à 3 ans.' },
      { id: 'b', text: 'L\'audit interne de l\'entreprise', rationale: 'Faux : un audit de certification doit être indépendant et accrédité.' },
      { id: 'c', text: 'L\'ANSSI directement', rationale: 'L\'ANSSI qualifie (PASSI, SecNumCloud), elle ne certifie pas ISO 27001.' },
      { id: 'd', text: 'Le commissaire aux comptes', rationale: 'Le CAC fait de l\'audit légal financier, pas de la certification ISO.' },
    ],
    correct: ['a'],
    explanation: 'ISO 27001 : organisme **accrédité COFRAC**, **triennal** + 2 surveillances.',
    references: [{ label: 'COFRAC accréditations', url: 'https://www.cofrac.fr/' }],
    tags: ['certification ISO 27001', 'COFRAC'] },

  { id: 'efr-g1-19', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'hard',
    prompt: 'Le référentiel CMMI évalue la maturité des processus selon combien de niveaux ?',
    options: [
      { id: 'a', text: '5 (Initial, Reproductible, Défini, Maîtrisé, Optimisé)', rationale: 'CMMI : échelle 1 à 5, où 5 = optimisation continue.' },
      { id: 'b', text: '4 (Partial, Risk Informed, Repeatable, Adaptive)', rationale: 'Ce sont les 4 niveaux du **NIST CSF**, pas de CMMI.' },
      { id: 'c', text: '6', rationale: 'Confusion avec ISO 33020 (6 niveaux d\'évaluation des processus).' },
      { id: 'd', text: '3', rationale: 'Aucun référentiel reconnu n\'utilise 3 niveaux.' },
    ],
    correct: ['a'],
    explanation: '**CMMI = 5 niveaux**. NIST CSF = 4. ISO 33020 = 6.',
    references: [{ label: 'CMMI Institute', url: 'https://cmmiinstitute.com/' }],
    tags: ['CMMI', 'maturité'] },

  { id: 'efr-g1-20', certId: 'efrei-gouvernance', domainId: 'g1', type: 'single', difficulty: 'medium',
    prompt: 'Parmi les étapes d\'un audit, à quel moment se situent les entretiens, l\'examen documentaire et les tests techniques ?',
    options: [
      { id: 'a', text: 'Étape 3 : Collecte', rationale: 'Cadrage (1) → Pré-audit (2) → **Collecte (3)** → Analyse (4) → Restitution (5) → Plan d\'action (6).' },
      { id: 'b', text: 'Étape 1 : Cadrage', rationale: 'Cadrage = définir objectif, périmètre, méthodologie, interlocuteurs.' },
      { id: 'c', text: 'Étape 5 : Restitution', rationale: 'Restitution = remise du rapport et présentation des écarts.' },
      { id: 'd', text: 'Étape 6 : Plan d\'action', rationale: 'Le plan d\'action suit la restitution.' },
    ],
    correct: ['a'],
    explanation: 'Cycle audit en 6 étapes ; collecte = **étape 3**.',
    references: [ISO19011_REF],
    tags: ['étapes audit'] },

  // =========================================================
  // G2 (extension) : échelles V/G, vraisemblance vs gravité (5 QCM)
  // =========================================================

  { id: 'efr-g2-16', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'hard',
    prompt: 'Une mesure de sécurité technique (par exemple un EDR sur les postes) agit en EBIOS RM principalement sur :',
    options: [
      { id: 'a', text: 'La vraisemblance du scénario uniquement', rationale: 'Mémo fondamental EBIOS RM : les mesures réduisent la **vraisemblance**, pas la gravité.' },
      { id: 'b', text: 'La gravité de l\'événement redouté', rationale: 'Faux : la gravité est intrinsèque à l\'enjeu métier, on ne la réduit pas par une mesure technique.' },
      { id: 'c', text: 'À la fois la gravité et la vraisemblance, à parts égales', rationale: 'Erreur classique en QCM. Seule la vraisemblance baisse.' },
      { id: 'd', text: 'Aucun des deux, l\'EDR n\'a pas d\'effet sur la cotation', rationale: 'Faux : un EDR diminue la probabilité de réussite d\'un scénario malware.' },
    ],
    correct: ['a'],
    explanation: 'Les mesures EBIOS RM réduisent la **vraisemblance**, jamais la gravité.',
    references: [EBIOS_REF],
    tags: ['vraisemblance vs gravité', 'piège classique'] },

  { id: 'efr-g2-17', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'medium',
    prompt: 'L\'échelle de vraisemblance EBIOS RM utilisée dans le cours comporte combien de niveaux ?',
    options: [
      { id: 'a', text: '5 niveaux : V0 Invraisemblable à V4 Quasi-certain', rationale: 'Échelle officielle V0 V1 V2 V3 V4 (5 niveaux).' },
      { id: 'b', text: '4 niveaux : V1 à V4', rationale: 'Faux : V0 existe pour le risque résiduel maîtrisé.' },
      { id: 'c', text: '3 niveaux : Faible, Moyen, Fort', rationale: 'Échelle simplifiée non utilisée par EBIOS RM.' },
      { id: 'd', text: '6 niveaux pour aligner sur ISO 33020', rationale: 'Aucune référence à ISO 33020 dans EBIOS RM.' },
    ],
    correct: ['a'],
    explanation: 'Vraisemblance EBIOS RM = **5 niveaux V0 à V4**.',
    references: [EBIOS_REF],
    tags: ['vraisemblance V0 V4'] },

  { id: 'efr-g2-18', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'medium',
    prompt: 'L\'échelle de gravité EBIOS RM utilisée dans le cours comporte combien de niveaux ?',
    options: [
      { id: 'a', text: '4 niveaux : G1 Mineur à G4 Catastrophique', rationale: 'Échelle officielle G1 G2 G3 G4.' },
      { id: 'b', text: '5 niveaux : G0 à G4', rationale: 'Confusion avec la vraisemblance V0 à V4.' },
      { id: 'c', text: '3 niveaux : Mineur, Moyen, Catastrophique', rationale: 'Échelle réduite non utilisée.' },
      { id: 'd', text: '10 niveaux pour aligner sur CVSS', rationale: 'Hors sujet : CVSS sert aux vulnérabilités, pas à EBIOS.' },
    ],
    correct: ['a'],
    explanation: 'Gravité EBIOS RM = **4 niveaux G1 à G4** (Mineur, Significatif, Grave, Catastrophique).',
    references: [EBIOS_REF],
    tags: ['gravité G1 G4'] },

  { id: 'efr-g2-19', certId: 'efrei-gouvernance', domainId: 'g2', type: 'multi', difficulty: 'hard',
    prompt: 'Sélectionnez les deux affirmations VRAIES sur les scénarios EBIOS RM (Atelier 3 vs Atelier 4) :',
    options: [
      { id: 'a', text: 'Le scénario stratégique présente qui attaque, pourquoi et par où, sans détail technique', rationale: 'Atelier 3 = vue de haut niveau, parties prenantes critiques, chemins d\'attaque.' },
      { id: 'b', text: 'Le scénario opérationnel détaille les modes opératoires sur les biens supports concrets', rationale: 'Atelier 4 = mode opératoire technique, exploitation, déplacement latéral.' },
      { id: 'c', text: 'Le scénario stratégique est rédigé après le scénario opérationnel', rationale: 'Faux : 3 vient avant 4.' },
      { id: 'd', text: 'Les scénarios opérationnels sont produits avant l\'atelier 1', rationale: 'Faux : tout cadrage est dans l\'atelier 1.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Stratégique = **A3 (qui/pourquoi/par où)**, Opérationnel = **A4 (comment techniquement)**.',
    references: [EBIOS_REF],
    tags: ['scénario stratégique vs opérationnel'] },

  { id: 'efr-g2-20', certId: 'efrei-gouvernance', domainId: 'g2', type: 'single', difficulty: 'hard',
    prompt: 'Comment la gravité d\'un risque G4 catastrophique peut-elle être réellement réduite (et pas seulement la vraisemblance) ?',
    options: [
      { id: 'a', text: 'Par une transformation métier : suppression de l\'activité, externalisation, ou transfert via assurance cyber', rationale: 'Seule façon de baisser la gravité : changer l\'enjeu métier lui-même.' },
      { id: 'b', text: 'En déployant un EDR sur tous les postes', rationale: 'Faux : l\'EDR baisse la vraisemblance, pas la gravité.' },
      { id: 'c', text: 'En durcissant les mots de passe', rationale: 'Vraisemblance, pas gravité.' },
      { id: 'd', text: 'En faisant un audit annuel', rationale: 'L\'audit ne change pas la gravité d\'un événement redouté.' },
    ],
    correct: ['a'],
    explanation: 'Gravité = intrinsèque à l\'enjeu. On la réduit par **transformation métier** ou **transfert** (assurance).',
    references: [EBIOS_REF],
    tags: ['gravité', 'transfert risque'] },

  // =========================================================
  // G3 (extension) : contenu PACS, sponsor, documents (6 QCM)
  // =========================================================

  { id: 'efr-g3-09', certId: 'efrei-gouvernance', domainId: 'g3', type: 'multi', difficulty: 'medium',
    prompt: 'Sélectionnez les rubriques OBLIGATOIRES d\'un PACS conforme au cours EFREI :',
    options: [
      { id: 'a', text: 'Liste exhaustive des mesures de sécurité (objectif minimal 20 mesures)', rationale: 'Rubrique « Mesures » du PACS.' },
      { id: 'b', text: 'Quick wins identifiés, priorisation P1/P2/P3, planification court/moyen/long terme', rationale: 'Trois rubriques explicitement listées dans le format type Excel du PACS.' },
      { id: 'c', text: 'Les CV de tous les collaborateurs', rationale: 'Aucune rubrique RH individuelle dans un PACS.' },
      { id: 'd', text: 'Le plan marketing de l\'entreprise', rationale: 'Hors sujet : un PACS est un document sécurité.' },
    ],
    correct: ['a', 'b'],
    explanation: 'PACS = **mesures + quick wins + priorisation + budget + planning + KPI + statut + responsable**.',
    references: [EBIOS_REF],
    tags: ['contenu PACS'] },

  { id: 'efr-g3-10', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'hard',
    prompt: 'Le sponsor obligatoire d\'un PACS est :',
    options: [
      { id: 'a', text: 'Un sponsor exécutif (DSI, Directeur des Risques, ou DG) qui arbitre les conflits de priorité et garantit le budget', rationale: 'Règle d\'or du PACS : sans sponsor exécutif, les arbitrages budgétaires bloquent.' },
      { id: 'b', text: 'Un opérationnel sécurité junior', rationale: 'Faux : insuffisant pour arbitrer.' },
      { id: 'c', text: 'Le délégué à la protection des données', rationale: 'Le DPO a un rôle limité au RGPD, pas l\'ensemble du PACS.' },
      { id: 'd', text: 'Aucun, le PACS est auto-porté', rationale: 'Faux : un sponsor exécutif est explicitement requis.' },
    ],
    correct: ['a'],
    explanation: '**Sponsor exécutif obligatoire** (DSI / CRO / DG).',
    references: [EBIOS_REF],
    tags: ['sponsor PACS'] },

  { id: 'efr-g3-11', certId: 'efrei-gouvernance', domainId: 'g3', type: 'multi', difficulty: 'medium',
    prompt: 'Quels documents sont systématiquement associés à un PACS complet ?',
    options: [
      { id: 'a', text: 'PSSI, politique de mots de passe, politique d\'habilitation', rationale: 'Trois documents structurants imposés par tout PACS sérieux.' },
      { id: 'b', text: 'Procédures de sauvegarde, gestion des incidents, registre RGPD art. 30 et registre DORA art. 28', rationale: 'Documents de continuité et de conformité prestataires/RGPD.' },
      { id: 'c', text: 'Plan marketing du trimestre', rationale: 'Hors sujet.' },
      { id: 'd', text: 'Bulletins de paie', rationale: 'Aucun lien avec un PACS.' },
    ],
    correct: ['a', 'b'],
    explanation: '**PSSI + politiques + procédures + registres + PCA/PRA** = tous associés au PACS.',
    references: [EBIOS_REF],
    tags: ['documents PACS'] },

  { id: 'efr-g3-12', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'medium',
    prompt: 'Que désigne la règle 3 2 1 1 0 dans une procédure de sauvegarde ?',
    options: [
      { id: 'a', text: '3 copies, 2 supports différents, 1 hors site, 1 hors ligne (immutable), 0 erreur après vérification', rationale: 'Règle 3-2-1-1-0 = évolution moderne intégrant copie immutable + zéro erreur de restauration.' },
      { id: 'b', text: '3 jours par mois, 2 employés, 1 prestataire', rationale: 'Aberrant.' },
      { id: 'c', text: '3 PCA, 2 PRA, 1 RTO, 1 RPO, 0 SLA', rationale: 'Mélange incohérent d\'acronymes.' },
      { id: 'd', text: '3 audits annuels, 2 internes, 1 externe', rationale: 'Aucun lien avec une règle de sauvegarde.' },
    ],
    correct: ['a'],
    explanation: '**3-2-1-1-0** : 3 copies, 2 supports, 1 hors site, **1 immutable**, **0 erreur** restauration.',
    references: [{ label: 'Veeam : règle 3-2-1-1-0', url: 'https://www.veeam.com/' }],
    tags: ['sauvegarde 3-2-1-1-0'] },

  { id: 'efr-g3-13', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'medium',
    prompt: 'Dans le PACS, la priorisation P1 désigne :',
    options: [
      { id: 'a', text: 'Mesures prioritaires (impact élevé, faisabilité bonne, court terme)', rationale: 'Définition métier du P1 : à exécuter en premier dans le plan d\'action.' },
      { id: 'b', text: 'Mesures à étudier ultérieurement', rationale: 'Plutôt P3 ou statut « À étudier ».' },
      { id: 'c', text: 'Mesures abandonnées', rationale: 'Faux : un PACS ne « priorise » pas une mesure abandonnée.' },
      { id: 'd', text: 'Mesures en doublon', rationale: 'Hors sujet.' },
    ],
    correct: ['a'],
    explanation: '**P1 = priorité maximale**, à lancer en premier (court terme < 6 mois).',
    references: [EBIOS_REF],
    tags: ['priorisation PACS'] },

  { id: 'efr-g3-14', certId: 'efrei-gouvernance', domainId: 'g3', type: 'single', difficulty: 'easy',
    prompt: 'Le format type d\'un PACS livré en entreprise est généralement :',
    options: [
      { id: 'a', text: 'Un tableur (Excel) listant mesures, priorités, budgets et statuts', rationale: 'Format standard du livrable d\'atelier 5.' },
      { id: 'b', text: 'Un document Word de 200 pages narratives', rationale: 'Trop dense pour un suivi opérationnel.' },
      { id: 'c', text: 'Une présentation PowerPoint sans tableau', rationale: 'Insuffisant pour piloter les mesures.' },
      { id: 'd', text: 'Un schéma réseau Visio', rationale: 'Hors sujet : un schéma n\'est pas un PACS.' },
    ],
    correct: ['a'],
    explanation: 'PACS = **tableur Excel** (mesures, priorités, statuts, KPI).',
    references: [EBIOS_REF],
    tags: ['format PACS'] },

  // =========================================================
  // G4 (extension) : SLA détaillé, GTI/GTR, BCR/DPA/MTO (8 QCM)
  // =========================================================

  { id: 'efr-g4-09', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'hard',
    prompt: 'Selon le cours EFREI, un SLA conforme se structure en combien de parties et lesquelles ?',
    options: [
      { id: 'a', text: '4 parties : RGPD, Gestion incidents et continuité, KPI, Contractuelle', rationale: 'Structure officielle du cours : 1 RGPD, 2 incidents+continuité, 3 KPI, 4 contractuelle.' },
      { id: 'b', text: '3 parties : Technique, Financière, Juridique', rationale: 'Découpage trop générique, ne correspond pas au cours.' },
      { id: 'c', text: '5 parties : RGPD, NIS2, DORA, ISO, contractuelle', rationale: 'Mélange réglementations et structure SLA, faux.' },
      { id: 'd', text: '2 parties : technique et juridique', rationale: 'Insuffisant : oublie KPI et continuité.' },
    ],
    correct: ['a'],
    explanation: 'SLA = **4 parties : RGPD + Incidents/Continuité + KPI + Contractuelle**.',
    references: [{ label: 'Cours EFREI Gouvernance, structure SLA', url: 'https://www.efrei.fr/' }],
    tags: ['structure SLA'] },

  { id: 'efr-g4-10', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'hard',
    prompt: 'Quelle est la différence précise entre GTI et GTR ?',
    options: [
      { id: 'a', text: 'GTI = délai pour COMMENCER à traiter (à partir de la notification) ; GTR = durée totale jusqu\'à la remise en service (équivalent contractuel du RTO)', rationale: 'Distinction critique : GTI = démarrage intervention, GTR = fin de l\'incident.' },
      { id: 'b', text: 'GTI = durée totale, GTR = délai pour commencer', rationale: 'Inversé.' },
      { id: 'c', text: 'GTI et GTR sont synonymes', rationale: 'Faux : ils mesurent deux temps différents et figurent tous les deux dans un SLA.' },
      { id: 'd', text: 'GTI concerne la disponibilité, GTR concerne la confidentialité', rationale: 'Aucun lien avec les critères DICT.' },
    ],
    correct: ['a'],
    explanation: '**GTI = démarrage** (à partir de la notification), **GTR = rétablissement complet** (≈ RTO contractuel).',
    references: [{ label: 'CNIL et SLA, bonnes pratiques', url: 'https://www.cnil.fr/' }],
    tags: ['GTI vs GTR', 'piège classique'] },

  { id: 'efr-g4-11', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'medium',
    prompt: 'À quoi correspond un DPA dans le contexte d\'un contrat de prestation IT ?',
    options: [
      { id: 'a', text: 'Data Processing Agreement, contrat de sous-traitance imposé par l\'article 28 du RGPD', rationale: 'DPA = clauses obligatoires : objet, durée, MTO, sous-traitants ultérieurs, droit d\'audit.' },
      { id: 'b', text: 'Data Protection Authority', rationale: 'L\'autorité c\'est la CNIL (DPA est un acronyme courant aux US, mais ici contexte RGPD).' },
      { id: 'c', text: 'Disaster Plan Agreement', rationale: 'N\'existe pas comme acronyme officiel.' },
      { id: 'd', text: 'Database Performance Audit', rationale: 'Aberrant.' },
    ],
    correct: ['a'],
    explanation: '**DPA** = **Data Processing Agreement** (RGPD art. 28).',
    references: [RGPD_REF],
    tags: ['DPA', 'sous-traitance RGPD'] },

  { id: 'efr-g4-12', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'medium',
    prompt: 'Que désigne BCR dans une clause de transfert international de données ?',
    options: [
      { id: 'a', text: 'Binding Corporate Rules, règles d\'entreprise contraignantes pour les transferts intra-groupe hors UE', rationale: 'BCR = mécanisme RGPD validé par la CNIL/EDPB pour les groupes multinationaux.' },
      { id: 'b', text: 'Backup Continuous Replication', rationale: 'Aberrant.' },
      { id: 'c', text: 'Business Continuity Recovery', rationale: 'Confusion avec PCA/PRA.' },
      { id: 'd', text: 'Bank Compliance Rules', rationale: 'N\'existe pas comme acronyme RGPD.' },
    ],
    correct: ['a'],
    explanation: '**BCR** = **Binding Corporate Rules** (transferts intra-groupe hors UE).',
    references: [RGPD_REF],
    tags: ['BCR', 'transferts internationaux'] },

  { id: 'efr-g4-13', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'easy',
    prompt: 'À quelle fréquence un SLA doit-il être révisé selon le cours ?',
    options: [
      { id: 'a', text: 'Annuelle, en atelier conjoint client/prestataire', rationale: 'Règle officielle : révision annuelle pour suivre l\'évolution des besoins, de la techno et de la réglementation.' },
      { id: 'b', text: 'Tous les 5 ans uniquement', rationale: 'Trop espacé, la réglementation change plus vite.' },
      { id: 'c', text: 'Jamais, un SLA est figé', rationale: 'Faux : le besoin commercial évolue.' },
      { id: 'd', text: 'À chaque incident', rationale: 'Trop fréquent, ce serait un avenant et pas une révision globale.' },
    ],
    correct: ['a'],
    explanation: 'Révision SLA = **annuelle**, atelier conjoint.',
    references: [{ label: 'Cours EFREI, révision SLA', url: 'https://www.efrei.fr/' }],
    tags: ['révision SLA'] },

  { id: 'efr-g4-14', certId: 'efrei-gouvernance', domainId: 'g4', type: 'multi', difficulty: 'hard',
    prompt: 'Quelles certifications sont pertinentes à exiger d\'un prestataire avant signature d\'un SLA pour un service cloud sensible ?',
    options: [
      { id: 'a', text: 'ISO 27001 et SOC 2 Type II', rationale: 'Standards internationaux SMSI et contrôles opérationnels.' },
      { id: 'b', text: 'SecNumCloud (si données souveraines) ou HDS (si données de santé)', rationale: 'Qualifications ANSSI/ASIP-Santé spécifiques aux contextes sensibles.' },
      { id: 'c', text: 'PCI-DSS uniquement, même si pas de paiements en jeu', rationale: 'PCI-DSS est uniquement pertinent si CB.' },
      { id: 'd', text: 'Aucune, la confiance suffit', rationale: 'Pratique non conforme à RGPD/NIS2/DORA.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Certifications attendues : **ISO 27001, SOC 2, HDS, SecNumCloud** selon le contexte.',
    references: [SECNUM_REF, HDS_REF],
    tags: ['certifications prestataires'] },

  { id: 'efr-g4-15', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'medium',
    prompt: 'Selon NIS2, le non-respect d\'obligations par un OSE peut entraîner une sanction administrative pouvant aller jusqu\'à :',
    options: [
      { id: 'a', text: '10 M€ ou 2 % du CA mondial annuel (le plus élevé)', rationale: 'Plafond NIS2 explicite dans le texte.' },
      { id: 'b', text: '20 M€ ou 4 % du CA (RGPD)', rationale: 'Confusion avec RGPD. NIS2 a son propre plafond.' },
      { id: 'c', text: '1 % du CA (DORA)', rationale: 'Plafond DORA, pas NIS2.' },
      { id: 'd', text: 'Aucune sanction', rationale: 'Faux : NIS2 prévoit explicitement des sanctions administratives.' },
    ],
    correct: ['a'],
    explanation: 'Sanctions **NIS2 = 10 M€ ou 2 % CA**.',
    references: [NIS2_REF],
    tags: ['sanctions NIS2'] },

  { id: 'efr-g4-16', certId: 'efrei-gouvernance', domainId: 'g4', type: 'single', difficulty: 'hard',
    prompt: 'Quelle norme ISO est dédiée à la sécurité des relations fournisseurs (chaîne d\'approvisionnement) ?',
    options: [
      { id: 'a', text: 'ISO/IEC 27036', rationale: 'Norme spécifique : Information security for supplier relationships, en complément de l\'annexe A.5.19 à A.5.23 d\'ISO 27001.' },
      { id: 'b', text: 'ISO 27001', rationale: 'Référentiel SMSI général : ISO 27036 le complète sur le volet fournisseurs.' },
      { id: 'c', text: 'ISO 27005', rationale: 'Concerne la gestion des risques.' },
      { id: 'd', text: 'ISO 19011', rationale: 'Concerne l\'audit, pas les relations fournisseurs.' },
    ],
    correct: ['a'],
    explanation: '**ISO/IEC 27036** = sécurité des relations fournisseurs (supply chain).',
    references: [{ label: 'ISO 27036', url: 'https://www.iso.org/standard/59648.html' }],
    tags: ['ISO 27036', 'supply chain'] },

  // =========================================================
  // G6 (NOUVEAU) : Réglementations RGPD / DORA / NIS2 (15 QCM)
  // =========================================================

  { id: 'efr-g6-01', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'medium',
    prompt: 'Le RGPD s\'applique en France depuis :',
    options: [
      { id: 'a', text: 'Le 25 mai 2018', rationale: 'Date d\'entrée en application du Règlement (UE) 2016/679.' },
      { id: 'b', text: 'Le 1er janvier 2020', rationale: 'Faux, antérieur de presque 2 ans.' },
      { id: 'c', text: 'Le 17 janvier 2025', rationale: 'Date d\'application de DORA, pas du RGPD.' },
      { id: 'd', text: 'Le 18 octobre 2024', rationale: 'Date de transposition NIS2, pas du RGPD.' },
    ],
    correct: ['a'],
    explanation: 'RGPD applicable depuis le **25 mai 2018**.',
    references: [RGPD_REF],
    tags: ['RGPD', 'date application'] },

  { id: 'efr-g6-02', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'medium',
    prompt: 'Quel article du RGPD définit les Données à Caractère Personnel ?',
    options: [
      { id: 'a', text: 'Article 4-1', rationale: 'Définition légale : « toute information se rapportant à une personne physique identifiée ou identifiable ».' },
      { id: 'b', text: 'Article 9', rationale: 'Concerne les **données sensibles**, pas la définition générale.' },
      { id: 'c', text: 'Article 32', rationale: 'Concerne la sécurité du traitement (MTO).' },
      { id: 'd', text: 'Article 28', rationale: 'Concerne la sous-traitance.' },
    ],
    correct: ['a'],
    explanation: 'DCP définies à l\'**article 4-1 RGPD**.',
    references: [RGPD_REF],
    tags: ['RGPD art. 4', 'DCP'] },

  { id: 'efr-g6-03', certId: 'efrei-gouvernance', domainId: 'g6', type: 'multi', difficulty: 'hard',
    prompt: 'Parmi ces données, lesquelles sont des données SENSIBLES au sens de l\'article 9 RGPD ?',
    options: [
      { id: 'a', text: 'Données biométriques traitées aux fins d\'identifier une personne', rationale: 'Explicitement listées à l\'art. 9, traitement interdit par principe.' },
      { id: 'b', text: 'Données de santé', rationale: 'Listées à l\'art. 9 : santé, génétique, vie sexuelle.' },
      { id: 'c', text: 'Numéro IBAN d\'un client', rationale: 'C\'est une DCP courante, pas une donnée sensible.' },
      { id: 'd', text: 'Adresse IP d\'un visiteur', rationale: 'DCP au sens de la jurisprudence Breyer (CJUE 2016), pas sensible.' },
    ],
    correct: ['a', 'b'],
    explanation: 'Art. 9 = **biométrie d\'identification, santé, origine, opinions, religion, syndicat, génétique, vie sexuelle**.',
    references: [RGPD_REF],
    tags: ['RGPD art. 9', 'données sensibles'] },

  { id: 'efr-g6-04', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'medium',
    prompt: 'Le délai maximal de notification d\'une violation de données à la CNIL est :',
    options: [
      { id: 'a', text: '72 heures à compter de la prise de connaissance (RGPD art. 33)', rationale: 'Délai officiel et fréquemment testé.' },
      { id: 'b', text: '24 heures', rationale: 'Confusion avec NIS2 (24h alerte précoce).' },
      { id: 'c', text: '4 heures', rationale: 'Délai DORA pour incident TIC majeur, pas RGPD.' },
      { id: 'd', text: '30 jours', rationale: 'Trop long, non conforme.' },
    ],
    correct: ['a'],
    explanation: 'Notification CNIL = **72 heures (RGPD art. 33)**.',
    references: [RGPD_REF],
    tags: ['RGPD art. 33', 'notification 72h'] },

  { id: 'efr-g6-05', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'hard',
    prompt: 'Quelle est la différence entre Responsable de traitement et Sous-traitant au sens du RGPD ?',
    options: [
      { id: 'a', text: 'Le Responsable détermine les finalités et les moyens (art. 4-7) ; le Sous-traitant traite au nom du Responsable (art. 4-8)', rationale: 'Distinction fondamentale. Le DPA (art. 28) encadre la relation.' },
      { id: 'b', text: 'Le Responsable est la CNIL', rationale: 'Faux : la CNIL est l\'autorité de contrôle, pas un responsable de traitement.' },
      { id: 'c', text: 'Les deux notions sont synonymes', rationale: 'Faux et grave : régimes juridiques distincts.' },
      { id: 'd', text: 'Le Sous-traitant est toujours le DPO', rationale: 'Aucun rapport avec le DPO.' },
    ],
    correct: ['a'],
    explanation: '**Responsable** (art. 4-7) **détermine** ; **Sous-traitant** (art. 4-8) **exécute au nom**.',
    references: [RGPD_REF],
    tags: ['RGPD art. 4', 'responsable vs sous-traitant'] },

  { id: 'efr-g6-06', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'medium',
    prompt: 'La sanction maximale prévue par le RGPD pour un manquement grave est :',
    options: [
      { id: 'a', text: '20 M€ ou 4 % du chiffre d\'affaires mondial annuel (le plus élevé)', rationale: 'Plafond du « tier 2 » des sanctions RGPD (manquements aux principes ou aux droits).' },
      { id: 'b', text: '10 M€ ou 2 % du CA (NIS2)', rationale: 'Plafond NIS2.' },
      { id: 'c', text: '1 % du CA (DORA)', rationale: 'Plafond DORA.' },
      { id: 'd', text: '500 € forfaitaires', rationale: 'Aberrant.' },
    ],
    correct: ['a'],
    explanation: 'Sanction max RGPD = **20 M€ ou 4 % CA**.',
    references: [RGPD_REF],
    tags: ['sanctions RGPD'] },

  { id: 'efr-g6-07', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'medium',
    prompt: 'Le Règlement DORA (UE 2022/2554) est applicable depuis :',
    options: [
      { id: 'a', text: 'Le 17 janvier 2025', rationale: 'Date butoir explicite du règlement.' },
      { id: 'b', text: 'Le 25 mai 2018', rationale: 'Date du RGPD.' },
      { id: 'c', text: 'Le 18 octobre 2024', rationale: 'Date NIS2.' },
      { id: 'd', text: 'Le 1er janvier 2027', rationale: 'Date inventée, hors texte.' },
    ],
    correct: ['a'],
    explanation: 'DORA applicable depuis le **17 janvier 2025**.',
    references: [DORA_REF],
    tags: ['DORA', 'date application'] },

  { id: 'efr-g6-08', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'hard',
    prompt: 'Selon DORA, un incident TIC majeur doit faire l\'objet d\'une alerte initiale auprès de l\'ACPR dans un délai de :',
    options: [
      { id: 'a', text: '4 heures (alerte initiale), puis rapport intermédiaire à 72h et rapport final à 1 mois', rationale: 'Article 19 DORA : trois jalons de notification.' },
      { id: 'b', text: '72 heures (RGPD art. 33)', rationale: 'Confusion avec RGPD : ce n\'est pas le même délai.' },
      { id: 'c', text: '24 heures (NIS2)', rationale: 'Confusion avec NIS2.' },
      { id: 'd', text: '30 jours', rationale: 'Beaucoup trop long.' },
    ],
    correct: ['a'],
    explanation: 'DORA art. 19 : **4h alerte + 72h rapport intermédiaire + 1 mois rapport final**.',
    references: [DORA_REF],
    tags: ['DORA art. 19', 'notification incident'] },

  { id: 'efr-g6-09', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'hard',
    prompt: 'Le TLPT prévu par DORA (article 26) désigne :',
    options: [
      { id: 'a', text: 'Threat-Led Penetration Testing : test d\'intrusion fondé sur le renseignement, exigé tous les 3 ans pour les entités significatives', rationale: 'TLPT = méthodologie inspirée de TIBER-EU, supervisée par l\'autorité.' },
      { id: 'b', text: 'Test Logiciel de Production Temporaire', rationale: 'Aberrant.' },
      { id: 'c', text: 'Threat List Protection Tool', rationale: 'N\'existe pas.' },
      { id: 'd', text: 'Trade Lifecycle Performance Test', rationale: 'Hors sujet.' },
    ],
    correct: ['a'],
    explanation: 'TLPT = **Threat-Led Penetration Testing**, DORA art. 26, **tous les 3 ans**.',
    references: [DORA_REF],
    tags: ['DORA art. 26', 'TLPT'] },

  { id: 'efr-g6-10', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'medium',
    prompt: 'Que désigne FCT dans le contexte DORA ?',
    options: [
      { id: 'a', text: 'Fournisseur Critique Tiers : prestataire TIC soumis à une surveillance directe par les autorités européennes (art. 31 à 44)', rationale: 'Statut introduit par DORA pour les hyperscalers, processeurs critiques, etc.' },
      { id: 'b', text: 'Fonds Commun de Trésorerie', rationale: 'Hors sujet financier classique.' },
      { id: 'c', text: 'Formation Continue Technique', rationale: 'Aucun lien avec DORA.' },
      { id: 'd', text: 'Filtre Centralisé de Traçabilité', rationale: 'N\'existe pas.' },
    ],
    correct: ['a'],
    explanation: 'FCT = **Fournisseur Critique Tiers** (DORA art. 31 à 44).',
    references: [DORA_REF],
    tags: ['DORA FCT'] },

  { id: 'efr-g6-11', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'medium',
    prompt: 'La directive NIS2 (UE 2022/2555) couvre combien de secteurs critiques ?',
    options: [
      { id: 'a', text: '18 secteurs (essentiels et importants)', rationale: 'NIS2 élargit le champ par rapport à NIS1 (qui n\'en couvrait que 7).' },
      { id: 'b', text: '7 secteurs', rationale: 'Périmètre NIS1, pas NIS2.' },
      { id: 'c', text: '3 secteurs', rationale: 'Trop restrictif.' },
      { id: 'd', text: 'Aucun, NIS2 est sectoriel uniquement banque', rationale: 'Confusion avec DORA.' },
    ],
    correct: ['a'],
    explanation: 'NIS2 = **18 secteurs critiques** (essentiels + importants).',
    references: [NIS2_REF],
    tags: ['NIS2 secteurs'] },

  { id: 'efr-g6-12', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'hard',
    prompt: 'L\'autorité française désignée pour la mise en œuvre de NIS2 est :',
    options: [
      { id: 'a', text: 'L\'ANSSI', rationale: 'Autorité compétente, point de contact unique et CSIRT pour la France.' },
      { id: 'b', text: 'La CNIL', rationale: 'CNIL = autorité RGPD, pas NIS2.' },
      { id: 'c', text: 'L\'ACPR', rationale: 'ACPR = autorité bancaire, compétente pour DORA, pas NIS2.' },
      { id: 'd', text: 'L\'AMF', rationale: 'AMF = marchés financiers, hors champ NIS2.' },
    ],
    correct: ['a'],
    explanation: 'NIS2 en France = **ANSSI**.',
    references: [NIS2_REF],
    tags: ['NIS2 ANSSI'] },

  { id: 'efr-g6-13', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'hard',
    prompt: 'Sous NIS2, le délai d\'alerte précoce d\'un incident significatif est :',
    options: [
      { id: 'a', text: '24 heures pour l\'alerte initiale, puis 72 heures pour le rapport', rationale: 'Article 23 NIS2 : alerte précoce 24h, rapport 72h, rapport final 1 mois.' },
      { id: 'b', text: '72 heures (RGPD)', rationale: 'Confusion avec RGPD art. 33.' },
      { id: 'c', text: '4 heures (DORA)', rationale: 'Confusion avec DORA art. 19.' },
      { id: 'd', text: 'Aucun délai imposé', rationale: 'Faux.' },
    ],
    correct: ['a'],
    explanation: 'NIS2 = **24h alerte précoce + 72h rapport** + 1 mois rapport final.',
    references: [NIS2_REF],
    tags: ['NIS2 délais'] },

  { id: 'efr-g6-14', certId: 'efrei-gouvernance', domainId: 'g6', type: 'multi', difficulty: 'hard',
    prompt: 'Vous comparez RGPD, DORA et NIS2. Sélectionnez les deux affirmations VRAIES :',
    options: [
      { id: 'a', text: 'RGPD protège les DCP, NIS2 vise la résilience cyber des secteurs critiques, DORA cible la résilience opérationnelle TIC du secteur financier', rationale: 'Triptyque officiel : champs distincts mais complémentaires.' },
      { id: 'b', text: 'Les sanctions max sont différentes : 20M€ ou 4% (RGPD), 10M€ ou 2% (NIS2), 1% (DORA)', rationale: 'Plafonds officiels documentés.' },
      { id: 'c', text: 'RGPD remplace DORA et NIS2', rationale: 'Faux : ce sont des textes complémentaires, pas substituables.' },
      { id: 'd', text: 'DORA n\'impose aucun registre des prestataires', rationale: 'Faux : DORA art. 28 impose un registre.' },
    ],
    correct: ['a', 'b'],
    explanation: 'RGPD = DCP, NIS2 = secteurs critiques, DORA = finance ; sanctions distinctes.',
    references: [RGPD_REF, DORA_REF, NIS2_REF],
    tags: ['comparaison RGPD/DORA/NIS2'] },

  { id: 'efr-g6-15', certId: 'efrei-gouvernance', domainId: 'g6', type: 'single', difficulty: 'medium',
    prompt: 'L\'article 30 du RGPD impose la tenue de :',
    options: [
      { id: 'a', text: 'Un registre des activités de traitement', rationale: 'Document central exigé pour tout responsable de traitement (sauf petites entités sans risque).' },
      { id: 'b', text: 'Un registre des prestataires TIC', rationale: 'C\'est l\'art. 28 DORA, pas l\'art. 30 RGPD.' },
      { id: 'c', text: 'Un journal d\'incidents', rationale: 'Bonne pratique mais pas l\'objet de l\'art. 30.' },
      { id: 'd', text: 'Un PCA', rationale: 'Hors champ RGPD strict.' },
    ],
    correct: ['a'],
    explanation: 'RGPD art. 30 = **registre des activités de traitement**.',
    references: [RGPD_REF],
    tags: ['RGPD art. 30', 'registre traitements'] },

]
