# Prisijungimo / registracijos forma
Forma buvo kurta praktikuotis CSS bei Javascript sugebėjimus. Forma skirta mobile aplinkai, tačiau įdėjus į container galima būtų pritaikyti desktop aplikacijai.  
Įgyvendinti projektą užtruko apie dvi paras.  

**Baigtą projektą** galima rasti [čia](http://owner-occupied-bag.000webhostapp.com/).

## Planavimas
Pirminis formos planas buvo surašytas į [login-form.txt](https://github.com/vytascepulis/login-register-form/blob/master/login-form.txt) failą.

### Spalvų paletė
Pasirinktos spalvos minimalistinės, išskyrus pagrindinius call-to-action mygtukus "sign in" bei "register". Tos pačios spalvos pasirodo 'užfocusinant' input fieldus.

### Fonas
Background image parinktas neutralus, atitinkantis minimalistinį pačios formos stilių. [Originaliame paveiksliuke](https://github.com/vytascepulis/login-register-form/blob/master/img/bg.jpg) daug spalvų, todėl buvo naudojamas grayscale filtras bei vidinis šešėlis. Kitu atveju background bei content būtų vienas su kitu susimaišęs.

### Call-to-action mygtukai
Naudojamos dvi ryškios, kontrastingos spalvos.  
**Desktop versija** 'Užhoverinus' pasikeičia scale bei mygtuko background 'gradientas'.  
**Mobile versija** Viskas tas pats, tik, žinoma, submitinus.
Background pasikeitimą diktuoja mygtuko pseudo elemento opacity pasikeitimas.

### Ikonos input fielduose
Naudojami [font awesome](https://fontawesome.com/) paveiksliukai. Keičia spalvą į raudoną, jei pateiktoje formoje rasta klaidų.

### Input field placeholderiai
'Užfocusinus' formos laukus, placeholderiai panaudojami kaip 'labeliai'. Taip išvengta bereikalingo dubliavimosi (kai tiek laukelyje, tiek laukelio viršuje parašytą, ką reikia įvesti).

### Slaptažodžio parodymas
Paspaudus font awesome akies paveiksliuką, slaptažodžio lauko input type pasikeičia iš password į text.

### Log in / Register formų keitimas
Esant main formoje (Log in) galime paspausti "Register here" linką, taip pasikeičia dviejų wrapperių ("main" ir "register") opacity bei margin-top savybės.

## Iškilusios kliūtys
Maža Javascript praktika lėmė *spaghetti code*. CSS bei HTML taip pat galėtų būti tvarkingesni ir apvalyti: dubliuojasi klasės, kai kurios net nenaudojamos arba naudojamos minimaliai (kur gali būti kitas sprendimas).  
**Typewriter efektas** paimtas iš [čia](https://code-boxx.com/simple-pure-javascript-typewriter-effect/)
