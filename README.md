# Premier League search - IT2810 - Prosjekt-3

## Innholdsfortegnelse

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

## Frontend

React biblioteket er brukt for å lage brukergrensesnittet, og ble initialisert med create-react-app og
komponentene er strukturert i et hierarki vi mener er fornuftig. Vi har valgt å benytte oss av funksjonelle
komponeneter da det er mye releveant dokumentasjon tilgjengelig og vi syntes det gjorde koden oversiktlig
og enklere å forstå.

Sentralt i vår nettside er SearchComponent. Her ligger mye av logikken for å interagere med databasen, som
søk, filtrering og sortering. Under ser vi et tabell av de ulike metodene i komponenten.

TABELL MED METODER I SEARCHCOMPONENT

Material UI

- Popup
- Pagination
- Select(DropDownComponent)

FooterComponent:

- Count context

###Search component

####Styling

- Styled Components

###Teknologier

- State management(context, redux, OG MObX)

##Testing

##Bruk av git

##Pakker brukt
