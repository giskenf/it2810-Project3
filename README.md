# Premier League search - IT2810 - Prosjekt-3


### Introduksjon til PL search

Premier League search er en nettside hvor en kan søke, filtrere og få opp informasjon og statistikk på ulike spillere  
i Premier League. Nettsiden lar deg søke etter spillere basert på navn, og har sorteringsmuligheter for å få spillere  
listet opp alfabetisk etter navn, både stigende og synkende. Tilsvarende funksjonalitet er implementert for å liste opp  
spillere basert på antall mål en spiller har scoret. Brukeren av nettsiden kan filtrere søket sitt etter lagene i Premier  
League. For hver spiller kan mån få opp mer informasjon, og legge inn brukergenerert data i databasen i form av upvote
/downvote av en spiller.

## Oppsett av prosjektet(hvordan starte det)

Etter å ha klonet repoet:

1. Kjør "npm i" i både backend-og frontendmappen
2. I frontendmappen, kjør "npm install @material-ui/lab"
3. Opprett en .env fil hvor du legger inn DB_URL=mongodb://myusername:mypassword@it2810-76.idi.ntnu.no:27017/test?authSource=test
4. Ha deretter to terminaler åpne, naviger deg inn i de to mappene og kjør "npm start" i frontendmappen og "node App.ts run" i backend.

## Hvordan interagere med applikasjonen

##### Search-knappen:

Denne knappen trykkes hver gang en bruker vil hente data. Man kan da velge hvilke filtre og/eller sorteringer som 
skal gjelde. Dersom den trykkes uten filtre og/eller sortering, hentes alle spillerne i databasen. 

##### Sorteringsknapper:
	- Sort by name
	- Sort by goals
	- Sort ascending

Disse knappene brukes for å bestemme hvilken rekkefølge datasettet skal presenteres. Knappene trykkes, før brukeren
så trykker på Search-knappen for å hente data.

##### Nedtrekksmenyen:

Verdien i denne nedtrekksmenyen filtrerer datasettet ved søk. Brukeren velger et lag(eller feltet All teams for å velge
alle lag). Deretter trykker brukeren på Search-knappen for å hente data.

## Backend

Vi installerte MongoDB på virtuell maskin. Data hentet vi fra Premier League Fantasy API:
<br/>https://fantasy.premierleague.com/api/bootstrap-static/
<br/>Ved hjelp av et Python script hentet vi ut det vi mente var relevant informasjon om hver spiller, og slo sammen feltene
fornavn og etternavn, til et felles navnefelt. Dette gjorde vi fordi søkefunksjonaliteten vår matcher søkefeltet med  
substrenger av navn i databasen.

Som database brukte vi mongoDB da det som en noSQL-database er mer fleksibelt enn f.eks. graphQL som bruker SQL. Vi hadde heller  
ikke behov for relasjoner som er en funskjonalitet graphQL tilbyr.

Vi valgte å bruke MongoDB Compass, som er et GUI for MongoDB, for å gi en visuell oversikt over dataen vår.
Ved hjelp av Python-scriptet opprettet vi en vil som så ble enkelt lagt inn i MongoDB Compass, slik at vi fikk en database med
mer enn tilstrekkelig data for å prøve ut prototypen vår.

Vi valgte å bygge API-et basert på REST fremfor GraphQL da det virket mer etablert og veldokumentert, som var nyttig ettersom  
gruppa har lite erfaring med APIer fra før. Ved hjelp av kall fra Axios vil vår express-baserte router håndtere requester og logikk  
for søk, filtrering og sortering av kall. For å unngå at undøvendig store mengder data blir hentet, er hver side begrenset til  
15 resultater der kun de aktuelle 15 blir hentet fra databasen. Dette er gjort ved å integrere page-valgets logikk i backend.

Vi bruker to endepunkter. For henting av data sender vi med et søkefilter, grense for antall objekter som skal hentes og en sorteringsrekkefølge.
Når vi oppdaterer et objekt med votes finner vi objektet etter id før votes oppdateres.

## Frontend

React biblioteket er brukt for å lage brukergrensesnittet, og ble initialisert med create-react-app og
komponentene er strukturert i et hierarki vi mener er fornuftig. Vi har valgt å benytte oss av funksjonelle
komponeneter da det er mye releveant dokumentasjon tilgjengelig og vi syntes det gjorde koden oversiktlig
og enklere å forstå.

Sentralt i vår nettside er SearchComponent. Her ligger mye av logikken for å interagere med databasen, som
søk, filtrering og sortering. Under ser vi et tabell av de ulike metodene i komponenten.


#### Styling

- Styled Components
For å gjøre filhieriakiet enklere har vi tatt i bruk tredjepartsbiblioteket **styled-components** for å srive CSS. 
**styled-components** gjør det mulig å skrive CSS-code direkte inn i typeScript-filene, slik at man unngår
å måtte lage separate CSS-filer. 

### Teknologier



#### State management

**Redux** ble benyttet til state managament i applikasjonen. Hvor prinsippet er å ha en store for lagring av tilstander. 
Dette gjør at en kan flytte tilstander ut av komponenter, til en egen «enhet». 
Actions for å beskrive hendelser som fører til en endring, og reducers som beskriver hvordan tilstandene endres av actions. 

Dette skiller seg fra **Mobx**, hvor en har flere stores for lagring av tilstander. 
Dette kan gi fordeler som at en kan ha en store til domenetilstander, og en til UI-tilstander, og at en da kan bruke elementer i andre applikasjoner. 

Vi valgte å bruke **Redux** fremfor **Mobx**, da **Redux** fremstår som et mer utbredt bibliotek og er bedre rustet for oppskalering. 
For dette prosjektet var ikke det en nødvendighet, men med tanke på fremtidige prosjekter så vi det som mest nyttig å lære **Redux**.
**Context** brukes for å holde oversikt over hvilket sidetall brukeren er på, antall sidetall som skal vises og om sidenavigeringen skal vises. 
Med en GlobalProvider, samler vi all logikken i en provider, som så pakkes rundt App-komponenten. 
Vi så **context** som nyttig her, da vi hadde behov for å sende variabler og funksjoner på tvers av komponenter som ikke var direkte koblet sammen. 



#### Material UI
Vi valgte å benytte Material UI til følgende komponenter:
- Popup
- Pagination
- Select

Popup brukes i popup-komponenten, hvor vi enkelt kan liste hver enkelt spiller og åpne
en popup med mer informasjon. Pagination brukes i FooterComponent for å ha en enkel sidenavigering,
og Select brukes i DropDownComponent for å hente frem en dropdown-meny for valg av lag. 


## Testing

### Enhetstesting
For systematisk enhetstesting har vi tatt i bruk Jest og Enzyme. Vi valge å teste enhetene ganske overordnet og brukte 
Enzyme med Shallow-rendering for å child-komponenter. Alle testene kjøres i App.test.tsx. De tester at komponentene 
rendrer, samt at enekltkomponenter eksisterer. Grunnen til at vi valgte Jest var at vi hadde erfaring fra det fra 
prosjekter. Vi valgte å ikke ta i bruk snapshot-testing, da SVG-elementet vi hadde i applikasjonen gjorde at snapshot-
testene failet. 

#### Hvordan kjøre enhetstestene
Start alle testene:
npm test
a

### End-to-End testing

For end-to-end testing har vi tatt i bruk Cypress. Dette var noe vi ikke hadde gjort før, men vi valgte Cypress da den 
hadde en god dokumentasjon som var enkel å forstå. Cypress visualiserer godt, slik at det erneklt å følge med på hva 
testene gjør. 

Våre e2e-tester tar hovedsaklig for seg alle de interaktive komponentene, og tester funksjonaliteten fra ende til ende. 
Funksjonaliteten som testes innebærer bl.a. søke-input og -resultat, ulike sorteringsresulttater og interaksjon med 
ulike knapper. Testing av DropDownComponent og pagination-komponenten i FooterComponent viste seg å være vanskelig, 
da disse komponente var 3.parts komponenter. For å teste i Cypress burde man ha innblikk i hele oppbygningen av hver 
komponent. Derfor er testingen av disse komponentene noe mangelfull. 

#### Hvordan kjøre e2e-testene
npx cypress open

Etter en stund vil et vindu åpne seg, og man trykker på "Run all specs". 



## Pakker brukt
##### Frontend pakker:

- Redux 
Brukes til state management
- Redux Thunk
Brukes til state managament
- Materials UI
Brukes til frontend-komponenter
- Styled components
Alternativ måte å implementere CSS
- Axios
Brukes til å hente data til frontend fra endepunkter backend
- Cypress 
Brukes til end-to-End testing
- Jest BRUKES TIL
Brukes til enhetstesting
- Enzyme BRUKES TIL
Gir mulighet for shallow-rendering

  
##### Backend pakker:
- Cors
Brukes til tilgangsstyring
- Dotenv
Brukes til å skjule database-URLen
- Express
Brukes til routing, sette opp REST API
- Mongoose
Modellering av objekter 

## Kilder:
- https://material-ui.com/components/dialogs/?fbclid=IwAR2fmQBEEYrmZpiUKCfcBlgwqtFC1W7W4eLNzGyMeNaIp0W4hpCkx5C5mZQ
- https://material-ui.com/components/pagination/?fbclid=IwAR2RhLkItCoDwZBLa_oinbhSJa4jN02mi4dP54Ci1NfWhX5jDeCSSffpYik
- https://github.com/daryanka/typescript-with-redux?fbclid=IwAR3WXPzX7TUaOHkMum9ZROeNJzYG0FJsavBqa3kpMhXgLqbMSMogBgyJ27c
- https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6?fbclid=IwAR0cMncQ29j0NbEuBzXdm_eJNwtnp2NJeP78Fsj4e1xQFZJ-ZzrkBdUxinw
- https://worldvectorlogo.com/logo/premier-league-1
- https://medium.com/react-courses/the-mern-stack-login-system-with-mongodb-express-react-w-redux-toolkit-middleware-c274269b64cf
- https://www.geeksforgeeks.org/mern-stack/?fbclid=IwAR37PhXKTlwboS--DlgXUtqmyrTX6qI35wvvAAQuVkdUtIWASLKIjJ2j3TY


