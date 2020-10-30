# Premier League search - IT2810 - Prosjekt-3

##Innholdsfortegnelse 




###Introduksjon til PL search 

Premier League search er en nettside hvor en kan søke, filtrere og få opp informasjon og statistikk på ulike spillere 
i Premier League. Nettsiden lar deg søke etter spillere basert på navn, og har sorteringsmuligheter for å få spillere 
listet opp alfabetisk etter navn, både stigende og synkende. Tilsvarende funksjonalitet er implementert for å liste opp 
spillere basert på antall mål en spiller har scoret. Brukeren av nettsiden kan filtrere søket sitt etter lagene i Premier
League. For hver spiller kan mån få opp mer informasjon, og legge inn brukergenerert data i databasen i form av upvote
/downvote av en spiller. 





##Oppsett av prosjektet(hvordan starte det)



##Backend 

Vi installerte MongoDB på virtuell maskin. Data hentet vi fra Premier League Fantasy API: 
<br/>https://fantasy.premierleague.com/api/bootstrap-static/
<br/>Ved hjelp av et Python script hentet vi ut det vi mente var relevant informasjon om hver spiller, og slo sammen feltene
fornavn og etternavn, til et felles navnefelt. Dette gjorde vi fordi søkefunksjonaliteten vår matcher søkefeltet med 
substrenger av navn i databasen. For å gjøre resultatet det samme, og jobber vår enklere, valgte vi derfor å slå sammen
navnefeltene. 
(Må begrunne MongoDB)

Vi valgte å bruke MongoDB Compass, som er et GUI for MongoDB, for å gi en visuell oversikt over dataen vår. 
Ved hjelp av Python-scriptet opprettet vi en vil som så ble enkelt lagt inn i MongoDB Compass, slik at vi fikk en database med 
mer enn tilstrekkelig data for å prøve ut prototypen vår. 



- Rest OG Graph


##Frontend 

React biblioteket er brukt for å lage brukergrensesnittet, og ble initialisert med create-react-app og
komponentene er strukturert i et hierarki vi mener er fornuftig. Vi har valgt å benytte oss av funksjonelle
komponeneter da det er mye releveant dokumentasjon tilgjengelig og vi syntes det gjorde koden oversiktlig
og enklere å forstå. 


###Search component 

####Styling

###Teknologier

####State management(context, redux, OG MObX)

##Testing

##Bruk av git

##Pakker brukt


