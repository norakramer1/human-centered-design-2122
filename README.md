# Human Centered Design

## table of contents
-[Description](#Description)
-[Over Eric](#over-eric)
-[Eric's Scenario](#eric's-scenario)
-[Concept](#concept)
-[Features](#features)
-[Exclusive design principles](#exclusive-design-principles)
-[Testverslag](#testverslag)
-[Reflectie](#reflectie)
-[Wishlist](#wishlist)


## Description
De opdracht in dit vak is om een applicatie te ontwerpen voor 1 mens. Die mens is Eric. Hij heeft moeite met toetsenbord combinaties en kopieëren en plakken van tekst. Zijn vraag is om dit met spraakcommando's op te kunnen lossen

## Over Eric
Eric heeft Interaction Design gestudeerd en is ontwerper. Op dit moment werkt hij met onder andere de Gemeente Amsterdam, waar hij woont, aan de toegangkelijkheid van openbare ruimtes. Verder houd hij van lezen, muziek, films kijken en vooral heel hard rondrijden.

## Eric's scenario
Zelf zit Eric in een electrische rolstoel en heeft hij niet de beschikking over fijne motoriek. Dit maakt dingen als het selecteren van tekst en toetsenbord combinaties lastig. De opdracht is daarom ook om een copy & paste met spraak voor Eric te maken. 

## Concept
Tijdens het testen kwam ik erachter dat het probleem van Eric niet zozeer ligt bij het kopieëren en plakken, maar bij het selecteren van tekst. Hij gaf aan dat hij prima met een muis of trackpad op zijn laptop kan werken. Hij heeft voorbeeldteksten die hij vaak gebruikt om bijvoorbeeld brieven of e-mails op te stellen, hij zou hier graag woorden in willen veranderen zonder dat hij alles met de hand moet selecteren. Verder werkt hij ook veel in excel en wil graag veel voorkomende dingen aanpassen zonder dat hij elke cel hoeft te selecteren. 

In mijn uiteindelijke concept kun je doormiddel van spraak zoeken in een stuk tekst naar een specifiek woord. Vervolgens springt de applicatie over naar een volgend inputveld en kun je daar het vervangende woord invullen en word bij alle instanties van dit woord het veranderd in de andere.

### Features
- Woorden selecteren doormiddel van de Web Speech API
- Gezegde woorden kopieëren
- Alle instanties van een woord verangen door een ander woord

## Exclusive Design Principles
In dit vak werk je leren met Exlusive Design Principles. Dit is het omgekeerde van Inclusive design. In plaats van te kijken naar hoe je kunt zorgen dat je een website kunt laten werken voor zo veel mogelijk gebruikers richt je je op een iemand. Aan de hand van deze 4 principes kom je hopelijk op een product wat echt voor een iemand gemaakt is,

### Study Situation
In de situatie van Eric vind hij het moeilijk om toetsenbord combinaties te maken waarbij je vingers ver uit elkaar moeten bewegen. Ook heeft hij soms moeite met heel precies zijn in het gebruik van zijn muis, met bijvoorbeeld hele specifieke kleine knoppen of sprecieze selectie tussen woorden. Maar de meeste dingen gaan voor Eric eigenlijk prima. Hij kan zijn muis goed gebruiken en hij gebruikt zijn toetsenbord ook. Maar toch wilde hij als ontwerper deze website ook toegankelijk maken voor mensen die hun toetsenbord of muis minder goed kunnen gebruiken. Vandaar dat hij geïtresseerd was in Spraak naar Tekst. 

Uiteindelijk heb ik me gefocust op het selecteren en veranderen van woorden binnen in een teskt zodat Eric snel met spraak teksten en e-mails zou kunnen veranderen. Zo zou hij namen, data en fout gespelde woorden kunnen aanpassen zonder dat hij heel specifiek met zijn muis 1 woord moet selecteren.

### Priotize identity
Tijdens de eerste test kwam ik erachter dat Eric graag snel werkt. Hij heeft geen tijd om aandachtig te onderzoeken maar wil vooral alles uitproberen en testen. Ik ben begonnen met selecteren en het aan en uitzetten van spraak met knoppen maar kwam er uiteindelijk achter dat het niet zo fijn werkte om elke keer op spraak te moeten wachten.

### Ignore conventions
Knippen en plakken doen de meeste mensen met CMD/CTRL+C en CMD/CTRL+V of de rechter muisknop, en selecteren door te 'draggen' over een aantal regels tekst Maar voor Eric is dit dus erg onhandig. Daarom heb ik gebruik gemaakt van de Speech Recognition API die gesproken tekst kan omzetten in geschreven woorden en zinnen. Zo kan hij kan hij toch snel woorden aanpassen zonder voor hem soms moeilijke handelingen uit te voeren.

### Add nonsense
Ik kwam er tijdens het werken met de web API achter dat het nog best wel een kunst is om te weten wanneer het naar je luistert en wanneer het stopt, maar vooral ook of het het juiste hoort. Ik had een aantal ideeën om nonsense toe te voegen en dit samen te doen met feedback over of het gelukt is. Ik wilde een audio fragment af laten spelen als je klaar bent (dit kan vanwege security niet meer in Chrome). Of een leuke animatie toevoegen maar ik ben hier niet meer aan toe gekomen.

## Testverslag

### Week 1
![week 1](https://github.com/norakramer1/human-centered-design-2122/blob/main/v3/img/week1.png)

- Prototype v1
In de eerste week wist ik nog niks over Eric en wat hij wilde en nodig had. Ik wist alleen dat ik een applicatie waar in je kon kopieëren met spraak ging maken. Ik ben begonnen met een tekst aan de linkerkant, je kunt praten als de microfoon aan staat en een transcript word getypt in de textarea zodat je deze kunt kopieëren en gebruiken. Op deze manier kun je tekst selecteren en kopieëren.

- Features om te testen
    - Is een transcript van een tekst spreken de juiste manier om tekst te kopieëren?
    - Zijn er knoppen nodig of is met makkelijker om de microfoon meteen aan te zetten als je de pagina laad?

- Testverslag
    - Transcript
Een zin zeggen met de API en die dan in een tekstveld krijgen is niet heel handig. Het is moeilijk om er punctuatie van van zinnen toe te passen en je krijgt veel woordfouten in de tekst. Daardoor start het probleem zicht opnieuw met het selecteren. Ook is het onhandig dat de API nu in het engels ingesteld staat.

    - Knoppen
Eric wilde zo snel mogelijk aan de gang. Als je de pagina laad kun je niet meteen zien of je kan beginnen of dat je een knop moet indrukken.

- Notities 
    - Voor gebruiksvriendelijkheid geen knop om te activeren
    - spreadsheet data kopiëren en plakken
    - gebruik je de tekst letterlijk opnieuw?
    - Hoe kun je verschillende soorten informatie selecteren binnen het document (headings, links)
    - opmaak verschillen tussen documenten 
    - Websites met styling/ formatting wordt meegenomen
    - Misschien een Chrome Extention om het overal te laten werken

- Aanpassingen voor de volgende keer
    - Focussen op tekst selecteren en aanpassen voor in emails en brieven
    - Knoppen weghalen waar dat nodig is.
    - Feedback toevoegen voor als er iets gebeurd
    - Ook in het Nederlands kunnen selecteren


### Week 2
![week 2](https://github.com/norakramer1/human-centered-design-2122/blob/main/v3/img/week2.png)

- Prototype v2
In de tweede week heb ik me gefocust op 'hoe kan ik tekst selecteren?' Ik heb de spraak naar tekst voor later gelaten en wilde eerst selecteren.

- Features om te testen
    - Is tekst zoeken die je kunt selecteren en veranderen een betere manier van werken?
    - Zou dit ook nog met spraak kunnen?

- Testverslag
    - Meerdere woorden kopiëren?
    - Werkt het nog steeds als er een woord fout spelt?
    - door de verschillende instanties van een woord heen tabben
    - zou het met spraak naar tekst kunnen

- Notities
    - hand over muis om te selecteren, knippen en plakken
    - knop indrukken gaat goed
    - navigeren op een andere manier
    - hoe kom je op een andere manier naar plekken op het scherm
    - grote teksten bijv.
    - toetsenbord gebruik is niet mogelijk
    - spraak alleen na drukken op knop
    - microfoon eerst uit, of als aan is feedback geven over dat het aan is
    - feedback over of iets juist geselecteerd is, is het de juiste tekst? zo niet, hoe kun je het veranderen? selecteren en kopiëren te gelijkertijd.
    
- Aanpassingen voor de volgende keer
    - Proberen om van..tot kunnen kopieëren
    - Tabben door verschillende instanties van een woord
    - Zorgen dat je het woord met spraak kunt veranderen
    - Nadenken over knoppen toevoegen als je begint

### Week 3
![week 3](https://github.com/norakramer1/human-centered-design-2122/blob/main/v3/img/week3.png)

- Prototype v3
In de laatste week heb ik gewerkt om zonder knoppen maar met alleen spraak een woord in de tekst te kunnen veranderen naar een ander woord. Dit is uiteindelijk ook gelukt. Eric kan nu een woord zeggen wat in een inputveld terecht komt, daarna focust het zich op een tweede inputveld van het woord waar het in veranderd moet worden, hier kun je ook een woord in zeggen. Als laatste kun je 'Verander' zeggen en het woord wordt veranderd.

- Features om te testen
    - Zonder knoppen de website bedienen
    - textvelden automatisch laten focussen
    - tekstvelden invullen met spraak

- Testverslag
    - kunnen kiezen of je alle instanties van een woord vervangt of 1
    - feedback toevoegen (die is er nu wel als je praat)
    - andere focusstates
    - een knop tussen alle de selecteer en verangknoppen
    - highlighted waar de tekst veranderd is
    - Hoofdletters zien
    
- Notities
    - feedback toevoegen, wat gebeurd er
    - selecteren door lang vast te houden en de tekst te slepen
    - veel kleur groen/geel
    - selecteren doormiddel van lang klikken ipv twee keer klikken was handig geweest

### Reflectie
Er zijn nog een hoop dingen die moeten gebeuren om dit goed te laten werken. De website vind het nog moeilijk om te bepalen wanneer iemand praat waardoor je lang moet wachten en geen feedback kunt krijgen. Ook zou ik nog willen kijken naar selecteren van een bepaald woord tot een ander woord. Ik zag in de test ook dat je niet goed weet of een woord veranderd is omdat het woord niet meer bestaat, een oplossing zou zijn om de tekst te highlighten. Ook had ik nog meer identiteit toe willen voegen. 

## Wishlist 
- Van...tot kunnen selecteren
- Meer feedback toevoegen in het vervangen, misschien vervangen tekst higlighten
- Een manier om terug te gaan naar een van de inputvelden
- Een knop toevoegen om van het zoeken naar het vervangen te gaan
- Een duidelijker woord voor 'vervangen' bedenken om te kijken of het beter opgevangen wordt
- Meer nonsense