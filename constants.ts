import { Candidate } from './types';

export const CANDIDATES_LIST: Candidate[] = [
  { 
    name: "Joyce Huurman", 
    spot: "Lijsttrekker",
    defaultPhotoUrl: "/images/VVD-Amersfoort-1-Joyce.jpg"
  },
  { 
    name: "Dirk Dekker", 
    spot: "2",
    defaultPhotoUrl: "/images/VVD-Amersfoort-2-Dirk.jpg"
  },
  { 
    name: "Robbert Wagemaker", 
    spot: "3",
    defaultPhotoUrl: "/images/VVD-Amersfoort-3-Robbert.jpg"
  },
  { 
    name: "Gerrit van Nieuwenhuizen", 
    spot: "4",
    defaultPhotoUrl: "/images/VVD-Amersfoort-4-Gerrit.jpg"
  },
  { 
    name: "Jean Martin van Hardeveld", 
    spot: "5",
    // Let op: hernoem dit bestand in je map naar JeanMartin.jpg (zonder spatie)
    defaultPhotoUrl: "/images/VVD-Amersfoort-5-JeanMartin.jpg"
  },
  { 
    name: "Vincent Vivié", 
    spot: "6",
    defaultPhotoUrl: "/images/VVD-Amersfoort-6-Vincent.jpg"
  },
  { 
    name: "Marjanne Brouwer-Luinstra", 
    spot: "7",
    defaultPhotoUrl: "/images/VVD-Amersfoort-7-Marjanne.jpg"
  },
  { 
    name: "Frank Tielens", 
    spot: "8",
    defaultPhotoUrl: "/images/VVD-Amersfoort-8-Frank.jpg"
  },
  { 
    name: "Sjoerd Jansma", 
    spot: "9", 
    defaultPhotoUrl: "/images/VVD-Amersfoort-9-Sjoerd.jpg"
  },
  { 
    name: "Astrid Ens", 
    spot: "10",
    defaultPhotoUrl: "/images/VVD-Amersfoort-10-Astrid.jpg"
  },
];

// --- LOGO UPDATE ---
// We gebruiken nu overal dezelfde verwijzing om zeker te weten dat hij laadt.
export const LOGO_STANDARD = "/images/Amersfoort_Oranje_Blauw.png";

// Voor backward compatibility verwijzen deze nu ook naar de standaard
export const LOGO_WHITE_ORANGE = LOGO_STANDARD;
export const LOGO_WHITE_BLUE = LOGO_STANDARD;

export const DEFAULT_QUOTE = "Stem op 18 maart. VVD Amersfoort.";

export const ELECTION_PROGRAM_TEXT = `
SAMENVATTING PROGRAMMA:
1. Het nieuwe parkeerbeleid terugdraaien.
2. Meer boa’s op straat.
3. Geen windturbines op Isselt.
4. Bouwen voor verschillende doelgroepen.
5. Woonurgentie voor vitale beroepen.
6. Minder regeldruk voor ondernemers.
7. Bereikbaarheid Amersfoort optimaliseren.
8. Netcongestie aanpakken.

VERKEER EN PARKEREN:
Het nieuwe parkeerbeleid terugdraaien en per wijk de juiste oplossing bepalen.
Groene golf voor autoverkeer: doorstroming verbeteren en geluidsoverlast en uitstoot verminderen.
De rondweg om Amersfoort aantrekkelijker maken, waardoor doorgaand verkeer niet onnodig dwars door de stad gaat.
Veiliger maken van de infrastructuur, bijvoorbeeld door een zebrapad nabij elke school.
Bij grotere nieuwbouwprojecten vasthouden aan een realistische parkeernorm.

VEILIGHEID EN BOA'S:
Het aantal BOA’s verhogen, tenminste 1 BOA per 3500 inwoners (i.p.v. 5000), primair ingezet voor veiligheid.
Blijven investeren in preventie, zoals jongerenwerkers, Buurtvaders en samenwerking met scholen.
Versterken van het Team Ondermijning.
Veilige opvang bij partnergeweld, bijvoorbeeld door een Filomenahuis in Amersfoort.
Zorgvuldige inpassing van eventuele AZC’s, afgestemd met en op de directe omgeving.

WONEN:
Extra gemeentelijke eisen met betrekking tot woningbouw grondig beperken.
Regels voor nieuwe woonvormen versoepelen, mét oog voor leefbaarheid.
Bouwen voor specifieke doelgroepen en doorstroming bevorderen.
Het bestaande systeem voor urgentiebepalingen kritisch beoordelen en ruimte bieden voor werkenden in de publieke sector (woonurgentie voor vitale beroepen).
Veel starters zijn op zoek naar een studio of appartement. Veel gezinnen willen graag een (grondgebonden) woning met een tuin.

WERKEN EN ONDERNEMEN:
Nadrukkelijk de belangen van winkeliers en bedrijven meewegen bij toekomstige keuzes over onder meer bereikbaarheid.
Minder regeldruk voor ondernemers.
Iedereen die kán werken, naar betaald werk helpen door te ondersteunen bij her- of omscholing.
Amersfoort, centraal gelegen, is een aantrekkelijke plek om te vestigen.
Ondernemers in de binnenstad maken zich zorgen over autoluwe plannen en parkeerbeleid ivm terugloop bezoekers.
ENERGIE EN DUURZAAMHEID:
Geen windturbines op Isselt.
Vaart maken met de uitrol van nieuwe transformatorstations (tegen netcongestie).
Stimuleren van energieopslag, om piekgebruik af te vlakken.
Geen nieuwe biomassa-installaties in de stad.
Zonnepanelen bij veel zon worden nu uitgezet door netcongestie, dat moet opgelost worden.

SPORT EN CULTUUR:
Aandacht voor zwemvaardigheid.
Een tweede schaatsbaan, bij voorkeur in Vathorst.
Kritisch kijken naar subsidies aan culturele initiatieven als er commerciële alternatieven bestaan.
Voor culturele instellingen een toekomstvast en betaalbaar onderkomen.

BESTUUR:
Gezond financieel beleid, door het werken met meetbare doelen.
Heldere communicatie vanuit de gemeente welke mogelijkheden tot inspraak er zijn.
Contracten met hulpverleningsorganisaties afsluiten die wachtlijsten daadwerkelijk korter maken.
`;