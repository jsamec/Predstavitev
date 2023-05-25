# :orange_square: Dokument zahtev

|                             |                                                                |
| :-------------------------- | :------------------------------------------------------------- |
| **Naziv projekta**          | JymBud                                |
| **Člani projektne skupine** | Jan Karlovčec, Jan Šraj Miklič, Anže Drmaž, Aljaž Grilc, Jaša Samec |
| **Kraj in datum**           | Ljubljana, 14.03.2023                                   |

## Povzetek projekta

Dokument opisuje zajem zahtev za platformo JymBud, katera je namenjena vsem ljudem, ki si želijo bolje poskrbeti za svojo prehrano in telesno aktivnost.
V dokumentu so naštete vse uporabniške vloge, v njem je slovar uporabljenih pojmov, temu sledi diagram primerov uporabe, ki opisuje, katere funkcionalnosti uporablja določena uporabniška vloga, kasneje pa naštejemo še vse funkcionalnosti, ki jih naša platforma omogoča njenim uporabnikom. Slednje funkcionalnosti tudi razdelimo glede na njihovo nujnost z modelom MoSCoW. Seznam nefunkcionalnih zahtev vsebuje vse lastnosti, ki se nanašajo na samo izvedbo projekta in naših izdelkov, katerim je potrebno ugoditi (odzivnost naše platforme, varno upravljanje s podatki, razdelitev dela, enostavna uporaba naše platforme..). Na koncu pa dokument vsebuje še prototipe zaslonskih mask, razvrščene po funkcionalnostih, ter načrte sistemskih vmesnikov. Platforma bo dostopala do vremena in SendGrid, nudila pa bo zunanji vmesnik za vpogled zadnjih aktivnosti vsakega uporabnika ter listo najboljih aktivnih uporabnikov.

## 1. Uvod

V sodobnem svetu je pomen fizičnih aktivnosti in prehrane vse večji, saj je ljudem njihov vizualni izgled vedno bolj pomemben. Pridobivanje všečkov na socialnih omrežjih je poleg iskanja zdravega načina življenja za ljudi dober motivator, da skrbijo za svojo fizično podobo. Posledično je vse več aplikacij, ki prebivalstvu omogočajo snemanje in analizo svojih fizičnih aktivnosti, štetje korakov, štetje kalorij, sestavljanje zdravega jedilnika, analizo spanca... Žal pa večina slednjih aplikacij nudi zgolj eno izmed zgoraj naštetih funkcionalnosti, kar je za uporabnike nepraktično ter tudi časovno potratno. Naša platforma pa bo pomanjkljivosti teh aplikacij reševala, saj bo vsebovala vse te funkcionalnosti na enem mestu, kar bo uporabniku omogočilo enostavnejše, priročnejše in hitrejše beleženje ter tudi planiranje njihovih aktivnosti, obrokov in spanca. 
Na prvi strani bo naša platforma registriranim uporabnikom omogočila prijavo, neregistriranim uporabnikom registracijo in tistim, ki bi platformo radi uporabljali anonimno neregistrirano prijavo. Neregistrirani uporabniki bodo imeli manj funkcionalnosti, kot prijavljeni uporabniki in sicer: analizo obrokov, iskanje javnih računov ter seznama vadb, prav tako pa bodo vedno imeli možnost polne uporabe funkcionalnosti platforme z registracijo in spremembo statusa v prijavljenega uporabnika. Prijavljeni uporabniki bodo lahko planirali, beležili in analizirali svoje obroke, spanec, korake ter vadbe, iskali druge uporabniške račune, se z njimi primerjali, komentirali in všečkali njihove objave ter se z njimi pogovarjali, organizirali in se prijavili na športne dogodke, dostopali do lestvic, opravljali izzive in imeli možnost obiska sprostitvena kotička. Prijavljeni uporabniki bodo lahko tudi urejali svoj profil in zaprosili za spremenitev svojega profila registriranega uporabnika v profil osebnega trenerja in s tem prodobili možnost analize forme, ustvarjanje svojih planov vadb in prehrane. V primeru velike popularnosti računa bodo administratorji lahko uporabniški račun spremenili tudi v influenerja, kar bo uporabnikove objave prikazalo večjemu številu ljudi in tudi omogočilo možnost kreiranja aktivnosti "meet and greet". Zadnji tip uporabniške vloge bo administrator, ki bo lahko urejal, brisal in zaklenil uporabniške račune, urejal uporabniške podatke / status uporabniških računov, dodajal uporabnike ter administratorje in brisal ter urejal komentarje ter objave vseh uporabnikov.  
Ker mora naša platforma biti na voljo celotnemu prebivalstvu, je dostopnost bistvenega pomena. Do naše platforme bo zagotovljen dostop uporabnikom z računalnikom, tablico in mobilnim telefon. Vsi naši uporabniki nimajo enakega predznanja in enake stopnje računalniške pismenosti, zato je ena izmed glavnih prioritet naše platforme enostavna uporaba.
Naša platforma bo pred vplivi in cenzuro velikih organizacij zaščitena tako, da bodo objave ter komentarje lahko urejali in brisali zgolj naši administratorji. Upoštevali bomo tudi zakon o dostopnosti spletišč in mobilnih aplikacij (ZDSMA), ki bo olajšal uporabniško izkušnjo ljudem z težavami z vidom in sluhom. Naša platforma bo morala biti zmogljiv in zanesljiv, ker predvidevamo dokaj visoko število uporabnikov, zato bo morala podpirati vsaj 1000 sočasnih uporabnikov in biti dosegljiva vsaj 99.8% časa. Sistem pa se mora na uporabnikove zahteve odzvati v največ 2 sekundah. 
Nekatere med bolj pomembnimi prioritetami pri razvoju naše platforme so varnost, legitimnost vadb in dobro počutje uporabnikov. Administrtor bo z odstranjevanjem sumljivih vadb in naprimerne vsebine skrbel, da bo platforma okolje za podajanje konstruktivnih komentarjev in da se po njej ne bo širil sovražni govor, prav tako pa okolje kjer se bodo uporabniki lahko primerjali z resničnimi dosežki drugih uporabnikov. Zagotovljena bo varnost osebnih podatkov z upoštevanjem regulacij, kot sta ZVOP in GDPR.
Naša platforma bo kot zunanja sistema uporabljala Weather in SendGrid. Sistem bo sestavljen iz dveh podatkovnih baz. Prva bo baza bo MongoDB, saj hranimo veliko različnih vrst podatkov - tudi posnetke in slike. Druga pa PostgreSQL v kateri bomo hranili vse ostale vrste podatkov o naših uporabniki.

## 2. Uporabniške vloge

Na naši platformi imamo več različnih vrst uporabniških vlog. Te vloge so: neprijavljen uporabnik, prijavljen uporabnik, trener, influencer in administrator. Glavne funkcionalnosti platforme se med vlogami razlikujejo. 

Neprijavljen uporabnik lahko na začetni strani izbira med funkcionalnostmi, ki so mu na voljo - seznam vadb, analizo obrokov in iskanje javnih uporabniških računov. Prav tako aplikacija omogoča prijavo neprijavljenega uporabnika oziroma registracijo, v kolikor le-ta še nima odprtega računa.

Če se neprijavljen uporabnik prijavi v aplikacijo kot prijavljen uporabnik, ima na voljo vse funkcionalnosti, ki jih ima neprijavljen uporabnik (razen registracije
in prijave). Poleg tega ima tudi možnost planiranja, beleženja ter analiziranja svojih vadb, spanca, korakov in obrokov, spremljanje svojega napredka, organiziranja in iskanja športnih dogodkov, dodajanje prijateljev, primerjanja, deljenja svojih aktivnosti ter tekmovanja z drugimi uporabniki, opravljanja izzivov, dostop do lestvice in obisk sprostitvenega kotička. 

Influencer je registriran uporabnik z veliko sledilci. Njegov račun je enak prijavljenem uporabniku, vendar so njegove objave aktivnosti in obrokov prikazane višje v novicah uporabnikov. Prav tako lahko influencerji organizirajo še poseben tip aktivnosti, ki se imenuje "meet and greet".

Trener je registriran uporabnik, ki za svojo nadgradnjo profila zaprosi administratorje. Na voljo ima vse funkcionalnosti registriranega uporabnika, poleg tega pa še analizo forme ter ustvarjanje planov treniranja in prehrane.

Administrator ima vse funkcionalnosti prijavljenega uporabnika, poleg teh pa še nekaj novih, kot so možnost odstranitve dogodka, brisanje objave oziroma komentarja, v kolikor presodi, da gre za neprimerno vsebino in prav tako brisanje aktivnosti, če presodi, da je uporabnik pri njej goljufal. V primeru hujših kršitev pravil, lahko tudi blokira ali celo izbriše uporabniški račun uporabnika in mu na ta način onemogoči uporabo platforme.


## 3. Slovar pojmov

| Pojem | Opredelitev |
| ----- | ----------- |
| JymBud | Ime naše platforme. |
| Trener | Tip uporabnika, ki lahko poleg navadne uporabe platforme tudi svetuje prijavljenim uporabnikom. |
| Administrator | Tip uporabnika, ki ima nadzor nad platformo in skrbi za legitimnost aktivnosti in primernost objav ter komentarjev. |
| Prijavljen uporabnik | Najpogostejši tip uporabnika, ki ima dostop do večine funkcionalnosti naše platforme. |
| Neprijavljen uporabnik | Tip uporabnika, ki lahko dostopa zgolj do nekaterih funkcionalnosti naše platforme. |
| Influencer | Tip prijavljenega uporabnika, ki je bolj popularen in ima posebne privilegije. |
| Funkcionalnost | Aktivnost, ki jo platforma nudi uporabniku. |
| Registracija | Postopek, s katerim si neregistriran uporabnik ustvari račun. |
| GDPR | General Data Protection Regulation - splošna uredba Evropske unije, s katero so okrepili zaščito osebnih podatkov oseb znotraj Evropske unije. |
| ZVOP | Zakon o varstvu osebnih podatkov. |
| API | Application programming interface - Vmesnik za namensko programiranje je množica rutin, protokolov in orodij za izgradnjo programske opreme in aplikacij.|
| Meet and Greet | Posebna aktivnost, ki jo lahko organizirajo le uporabniki s statusom influencer. |
| Plan treninga | V naprej določen program, po katerem bo uporabnik treniral. |
| Plan prehrane | V naprej določen program, po katerem bo uporabnik nadziral svoje obroke. |
| Analiza forme | Nudena pomoč trenerjev uporabnikom, za izboljšanje njihove forme. |
| MoSCoW | Model, ki prikazuje kako pomembno je implementirati posamično funkcionalnost v končni izdelek. |

## 4. Diagram primerov uporabe

![DPU](https://teaching.lavbic.net/plantuml/svg/fLR9Rjim4BtpAmZaqXoSdWeKIX70pWONY6iaSNCUYMEPDaKA5AsqRlCn_PZ-LuUIjSJAKiiNGPpbSMRuPiXi9NKA5X8UGhIAhLbh4HbbB7SMT4Ogr8vbjPN0EQoLkySVRgXah1DIyuW-Q5jMwmmZo93_Oho5UrxWFYwaGoytLg0jPKUVhaQVByz92jQQnr8OAl9aJorOY9onevPVQR9hyEA6JE7SSMUubV72SI4jHauQpLWmmTJA9UHgYPglKsCXr78LSCZuP3fZmVGrhLUEzLojKKTe2z5uSiM2UohQTdr_Uyc2eKYabXbLbC8hnCEB6zhu0S4jq0wduvF898NYWHOik4CjhgqKXUZksiiOym63ZXNohp-JqLfGTQiwVoX3X6D-14f66598fqfg3Eg_4s6SGt7gwEGAQUDyYt4HN4GO_H26cfmsm4repSha_K36sGhq4dc66mq9y1n4UCmQ_JVHFyMPnMK1hY1p6cFWgJLpgU2ucqHgSK7SnyDAuOW3KiU75YDLe4tUYgbLZz3NexLHIsLZq78ZhSVuABTOV_yGUvsM2ovCR4JlWxem0fRFa8l-SKWjqZVTJLv2yWI5T9wA1zQVHfUE3gIpq9ZxSgsewNjNwtjgg6S5ry0LPYwNaTaBg1lMtDW4MwSz8rImopPV2bBuqmSkTSEU5jWDekEW1Oyj_VMCwCRGA2vPnlCCGp8lz_EzvHdvnAOpFXYSrTrRhz_eoCgaqv0TJOlxbUgrnca2wRHDhVdVhgaztkw49gQNsDr9PilOZdoNXRN1IynYR5AfgpkXaJmRz8ruTtetcbT6CbrofNw7H8pHTVSSSylLMhuFL-cIt6xp7irgophdMbBnZkqn54-wgV604__fMiwswVldnE3tcNy35CcrriK1LMl_Wc0TD1zQSTM_DqozOVa0s2F-nkbT_2-3mVxujTC_)

**Diagram primerov uporabe** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DPU.puml))

## 5. Funkcionalne zahteve
  
 <details>
  <summary>F1 - Registracija</summary>

### Registracija

#### Povzetek funkcionalnosti

Gost, ki še nima ustvarjenega uporabniškega računa se lahko registrira. Pri registracija mora navesti ime, priimek, elektronski naslov (uporabniško ime) in geslo. Poleg tega pa tudi višino, težo, cilj in datum rojstva.

#### Osnovni tok

1. Na začetni strani neregistriran uporabnik, ki še nima ustvarjenega uporabniškega računa izbere možnost registracije.
2. Prikaže se obrazec za registracijo.
3. Neregistrirani uporabnik vnese zahtevane osebne podatke, si izbere uporabniško ime in geslo. Geslo mora biti sestavljeno iz najmanj 8 znakov in vključevati male in velike črke, številke ter vsaj en poseben znak. (če bomo implementirali..)
4. Neregistiran uporabnik klikne na gumb Registriraj se.
5. Sistem javi sporočilo o uspešni registraciji. 

#### Alternativni tok

 1. Neregistrirani uporabnik želi uporabiti funkcionalnosti, ki jih lahko uporablja samo registrarni uporabnik.
 2. Pojavi se obrazec o potrebni registraciji za koriščenje funkcionalnosti.
 3. Neregistrirani uporabnik vnese zahtevane osebne podatke, si izbere uporabniško ime in geslo. Geslo mora biti sestavljeno iz najmanj 8 znakov in vključevati male in velike črke, številke ter vsaj en poseben znak.
 4. Neregistiran uporabnik klikne na gumb Registriraj se.
 5. Sistem javi sporočilo o uspešni registraciji.


#### Izjemni tokovi

1. Neregistriran uporabnik za registracijo izbere elektronski naslov, ki je že v bazi registriranih uporabnikov. Prikaže se obvestilo o zasedenosti izbranega elektrnoskega naslova in prošnja po izberi drugega.
2. Neregistriran uporabnik pri registraciji ne izpolni vseh zahtevanih polj, oziroma vnese neveljavne vrednosti v polja. Prikaže se obvestilo o izpolnitvi praznih polj in uporabe veljavnih vrednosti.
3. Neregistrirani uporabnik si izbere geslo, ki ne ustreza zahtevam po dolžini in uporabi znakov. Prikaže se obestilo o neustreznem geslu in zahteva po izboljšanju glede na ustrezno dolžino oziroma in uporabljene simbole. 

#### Pogoji

Gost si mora za registracijo izbrati uporabniško geslo, ki še ni zasedeno, kar pomeni da enakega nima še nihče drug.

#### Posledice

Če član uspešno vnese zahtevane podatke, sistem javi o uspešni registraciji in tako dobi status uporabnika. To pomeni, da se v aplikacijo lahko prijavi s svojim uporaniškim imenom in geslom, ki si ga je izbral ob registraciji. S tem dobi dotop do funkcionalnosti, ki jo imajo registrirani uporabniki.

#### Posebnosti

Za hranjene občutlivih podatkov, kot so gesla, se upošteva priporočila dobre prakse hranjenja občutljivih podatkov. To pomeni, da so gesla v bazi shranjena kriptirano. 

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je MUST HAVE.

#### Razširitve, pogostost uporabe

Pogostost uporabe te funkcionalne zahteve je redka, saj se registracijo opravi ponavadi samo enkrat, na začetku, ko si neregistrirani uporabnik ustvari upotabniški račun. 

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Registracija  | Neregistriran uporabnik še ni opravil registracije | Neregistrirani uporabnik uspešno vnese zahtevane podatke | Uspešna registracija |
| Uporaba funkcionalnosti registriranih uporabnikov  | Neregistriran uporabnik še ni opravil registracije | Za koriščenje funkcij najprej  uspešno opravi registracijo | Postane registriran uporabnik in lahko koristi vse njihove funkcionalnosti. |
| Nezmožen vnos že oobstoječege elektronskega naslova | Neregistriran uporabnik še ni opravil registracije | Neregistriran uporabnik pravilno izpolni vsa polja, vendar vnese že obstoječi elektrnoski naslov. | Sistem javi obvestilo o zasedenosti izbranega elektrnoskega naslova in prosi po izberi drugega |
| Preverjanje ali so vsa polja izpolnjena | Neregistriran uporabnik še ni opravil registracije | Neregistriran uporabnik ne izpolni vseh zahtevanih polj za registracijo. | Sistem javi obvestilo o izpolnitvi vseh polj. |
| Preverjanje ali so v polja vnešene veljavne vrednosti | Neregistriran uporabnik še ni opravil registracije | Neregistriran uporabnik v polja vnese neveljavne vrednosti. | Sistem javi obvestilo o uporabi veljavnih vrednosti. |
| Neustrezno geslo | Neregistriran uporabnik še ni opravil registracije | Neregistriran uporabnik vnese geslo, ki ne ustreza po dolžini in uporabi zahtevanih znakov. | Sistem javi obvestilo o neustreznem geslu in zahteva po izboljšanju glede na ustrezno dolžino oziroma in uporabljene simbole. |
  
  
 </details> 
 
  <details>
  <summary>F2 - Prijava</summary>

### Prijava

#### Povzetek funkcionalnosti

Registriran uporabnik se lahko prijavi v aplikacijo s svojim uporabniškim imenom in geslom, ki si ga je izbral pri registraciji in tako dostopa do dodatnih funkcionalnosti, ki jih imajo prijavleni uporabniki. 

#### Osnovni tok

1. Na začetni strani neprijavlen uporabnik izbere možnost prijave.
2. Prikaže se obrazec za prijavo.
3. V obrazec vpiše svoje uporabniško ime in geslo.
4. Sistem javi sporočilo o uspešni prijavi.
5. Prijavlen uporabnik lahko dostopa do dodatnih funkcionalnosti.

#### Alternativni tok
  
1. Neprijavlen uporabnik želi uporabljati funkcionalosti prijavlenih uporabnikov.
2. Prikaže se obvestilo o potrebni prijavi za koriščenje teh funkcionalnosti.
3. Prikaže se obrazec za prijavo.
4. V obrazec vpiše svoje uporabniško ime in geslo.
5. Sistem javi sporočilo o uspešni prijavi.
6. Sedaj prijavlen uporabnik lahko dostopa do željenih funkcionalnosti.

#### Izjemni tokovi
 
1. Neregistriran uporabnik se želi prijaviti. Sistem javi sporočilo o neobstoju uporabniškega računa.
2. Registrirani uporabnik pri prijavi vpiše napačno uporabiško ime oz. geslo. Sistem zavrne prijavo in javi, da je vpisano uporabniško ime oz. geslo napačno.  
  
#### Pogoji

Za uspešno prijavo je potrebna predhodna registracija, kar pomeni, da ima že ustvarjen uporabniški račun.
Registrairani uporabnik mora biti odjavlen, če se želi prijaviti. 

#### Posledice

Po uspešni prijavi lahko prijavlen uporabnik dostopa do dodatnih funkcionalnosti aplikacije, ki so mu na voljo.

#### Posebnosti

Podatki za prijavo se morajo poslati po zavarovani povezavi.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je MUST HAVE.

#### Razširitve, pogostost uporabe

Pogostost uporabe te funkcionalne zahteve je manj pogosta. Prijavljeni uporabniki se načeloma ne odjavijo pogosto iz aplikacije, saj tako ne morejo koristiti dodatnih funkcionalnosti. Ponovno se prijavijo predvsem takrat, ko do aplikacije dostopajo z druge naprave. 


#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Prijava uporabnika | Uporabnik je registriran, ampak odjavljen | Pravilen vnos uporabniškega imena in gesla | Uspešna prijava, možnost dostopa do dodatnih funkcionalnosti, ki jih imajo registrirani uporabniki |
| Prijava uporabnika | Uporabnik je registriran, ampak odjavlen | Pri prijavi ne izpolni obeh polj | Neuspešna prijava, sistem javi sporočilo o izpolnitvi vseh polj |
| Uporaba funkcionalnosti prijavlenih uporabnikov | Uporabnik je registriran, ampak neprijavlen | Neprijavlen uporabnik poskuša koristiti funkcionalnosti prijavlenih, zahtevana prijava| Uspešna prijava možnost koriščenja dodatnih funkcionalnosti |
| Prijava neregistriranega uporabnka | Neregistriran uporabnik se poskuša prijaviti | Vnese neobstoječ uporabniški račun | Sistem zavrne prijavo in javi sporočilo o neobstoju uporbniškega računa |
| Nepravilen vpis uporabniškega imena | Uporabnik je registriran, ampak odjavlen |  Pri prijavi vpiše nepravilen uporabniški račun | Sistem zavrne prijavo in javi sporočilo o napačnem vpisu |
| Vpis napačnega gesla | Uporabnik je registriran, ampak odjavlen | Pri prijavi vpiše napačno geslo | Sistem zavrne prijavo in javi sporočilo o napačnem geslu |

  
  
 </details>
 
<details>
  <summary>F3 - Odjava</summary>
 
### Odjava

#### Povzetek funkcionalnosti

Prijavljen uporabnik se lahko odjavi iz aplikacije.

#### Osnovni tok

1. Prijavlen uporabnik na prvotni strani klikne na gumb Odjava.
2. Uporablnik je odjavlen iz aplikacije in ima dostop samo do funkcionalnosti, ki jih imajo neprijavljeni uporabniki.

#### Alternativni tok

Ta funkcionalnost nima alternativnih tokov.

#### Izjemni tok
  
Ta funkcionalnost nima izjemnih tokov.
  
#### Pogoji

Uporabnik mora biti prijavljen.

#### Posledice

Uporabvnika se odjavi iz sistema, tako nima več dostopa do funkcionalnosti prijavljenih uporabnikov.

#### Posebnosti

Za to funkcionalnost ni posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti ne MUST HAVE.

#### Razširitve, pogostost uporabe

Pogostost uporabe te funkcionalne zahteve je manj pogosta, saj se prijavljeni uporabniki načeloma ne oddjavljajo, saj s tem izgubijo dodatne funkcionalnosti. 

#### Sprejemni testi
| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Odjava prijavljenega uporabnika | Prijavljen uporabnik | Izbere gumb za odjavo | Uspešna odjava, neprijavljen uprabnik nima več dostopa do funkcionalnsoti prijavljenih uporabnikov |
| Uporaba dodatnih funkcionalnosti po odjavi | Prijavljen uporabnik | Se odjavi iz sistema | Uporaba dodatnih funkcionalnosti ni več mogoča |

</details>

<details>
  <summary>F4 - Analiza obrokov</summary>
  
  ### Analiza obrokov

#### Povzetek funkcionalnosti

Registrirani, kot tudi neregistriranu uporabniki lahko izberejo funkcionalnost Analiza obrokov. Funkcionalnost analize obrokov se nanaša na možnost spremljanja in analiziranja hranilne vrednosti obrokov v prehrani uporabnika.

#### Osnovni tok

1. Registrirani uporabnik v aplikaciji izbere področje Analiza obrokov.
2. Uporabniku se prikaže obrazec kjer lahko vnese podatke o hrani in količini, ki jo je pojedel.
3. Sistem izračuna hranilno vrednost obroka, vključno z vsebnostjo kalorij, beljakovin, maščob in ogljikovih hidratov.
4. Sistem shrani podatke o obroku v bazo podatkov
5. Uporabnik lahko preveri skupno vrednost hranil za določeno obdobje, kot so dnevni, tedenski ali meseci.
6. Izbere želeno obdobje in dobi rezultate.


#### Alternativni tok

1. Neregistriran oz. neprijavlen uporabnik v aplikaciji izbere področje Analiza obrokov.
2. Uporabniku se prikaže obrazec kjer lahko vnese podatke o hrani in količini, ki jo je pojedel.
3. Sistem izračuna hranilno vrednost obroka, vključno z vsebnostjo kalorij, beljakovin, maščob in ogljikovih hidratov.
4. Sistem shrani podatke o obroku v bazo podatkov
5. Uporabnik lahko preveri skupno vrednost hranil za določeno obdobje, kot so dnevni, tedenski ali meseci. 
6. Izbere želeno obdobje in dobi rezultate.
  
#### Izjemni tokovi
 
1. Uporabnik želi izračunati hranilno vrednost obroka, vendar ne vnese podatkov o hrani in količini, ki jo je pojedel. Sistem javi sporočilo o potrebni izpolnitvi obraza za izračun. 
2. Uporabnik želi preveriti skupno vrednost hranil za določenje obdobje, ampak ne vnaša svojih obrokov. Sistem javi sporočilo da v izbranem obdobju ni vnešenih obrokov. 

#### Pogoji

 Uporabnik mora vnesti podatke o obroku, če želi izračunati hranilno vrednost obroka.
 Uporabnik mora vnašati svoje obroke, če želi preveriti skupno vrednost hranil za določeno obdobje. 

#### Posledice

Uporabnik dobi informacije o hranilni vrednosti obroka in informacijo o skupni vrednosti hranil za določeno obdobje.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je MUST HAVE.

#### Razširitve, pogostost uporabe

Pogostost uporabe te funkcionalne zahteve je zelo pogosta. Uporabniki lahko tudi večkrat na dan preverjajo hranilne vrednosti obroka in jih vnašajo sistem. 

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Izračun hranilne vrednosti obroka | Registriran uporabnik izbere področje Analiza obrokov | Vnese podatke o hrani in količini, ki jo je pojedel | Sistem izračuna hranilno vrednost obroka |
| Izračun hranilne vrednosti obroka | Neregistriran uporabnik izbere področje Analiza obrokov | Vnese podatke o hrani in količini, ki jo je pojedel | Sistem izračuna hranilno vrednost obroka |
| Vpogled v skupno vrednost hranil za določeno obdobje | Registriran uporabnik izbere področje Analiza obrokov | Izbere želeno obdobje | Sistem vrne skupno vrednost hranil za določeno obdobje |
| Vpogled v skupno vrednost hranil za določeno obdobje | Neregistriran uporabnik izbere področje Analiza obrokov | Izbere želeno obdobje | Sistem vrne skupno vrednost hranil za določeno obdobje |
| Neizpolnjen obrazec za izračun | Uporabnik izbere področje Analiza obrokov | Ne izpolni vseh podatkov o hrani in količini, ki jo je pojedel | Sistem javi sporočilo o potrebni izpolnitvi obraza za izračun |
| Nezmožnost pregleda skupne vrednosti hranil za določeno obdboje | Uporabnik izbere področje Analiza obrokov | Uporabnik za izbrano obdobje ni vnesel obroka | Sistem javi sporočilo da v izbranem obdobju ni vnešenih obrokov |  
   
  </details>
  
<details>
  <summary>F5 - Analiza treningov</summary>
  
  ### Analiza treningov

#### Povzetek funkcionalnosti

Prijevljeni upoorabniki lahko spremljajo in analizirajo svoj trening ter tako izboljšajo svoje rezultate.

#### Osnovni tok

1. Prijavljen uporabnik izbere področje Analiza treningov.
2. Pokaže se mu zgodovina treningov. 
3. Uporabnik lahko spremlja svoje dosežke skozi čas, primerja rezultate med različnimi treningi in oceni svoj napredek. Odvisno katero možnost izbere.

#### Izjemni tokovi

1. Prijavljen uporabnik si želi videti zgodovino treningov, vendar nima objavlenega še nobenega treninga. Sistem javi, da analiza treningov ni možna, saj v zgodovini treningov nima še nobenega. 


#### Pogoji

Uporabnik mora bit prijavljen. Neprijavljeni uporabniki nimajo dostopa do te funkcionalnosti.

#### Posledice

Prijavlen uporabnik vidi svoje dosežke skozi čas, primerja rezultate med različnimi treninigi in oceni svoj napredek.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je MUST HAVE.

#### Razširitve, pogostost uporabe

Pogostost uporabe te funkcinalne zahteve je srednje pogosta. Prijavljeni uporabniki vsake toliko časa pogledajo svojo analizu treningov in primerja treninge s preteklimi. Možne razširitve so, da bi sistem sam na podlagi preteklih treningov predlagal prihajojoče treninge.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Prikaz zgodovine treningov | Uporabnik je prijavljen v aplikacijo | Izbere področje Analiza treningov | Prikažejo se mu zgodovina preteklih treningov |
| Primerjava rezultatov med trenigi | Uporabnik je prijavljen v aplikacijo | Izbere področje Analiza treningov -> primerjava | Prikaže se primerjava rezultatov med preteklimi treningi |
| Zgodovina neobstoječih treningov | Uporabnik je prijavljen v aplikacijo | Izbere področje Analiza treningov -> zgodovina | Sistem javi, da analiza treningov ni možna, saj v zgodovini treningov še  ni nobenega |
| Primerjava neobstoječih treningpv | Uporabnik je prijavljen v aplikacijo | Izbere področje Analiza treningov -> primerjava | Sistem javi, da primerjava treniingov ni možna, saj v zgodovini treningov še ni nobenega |

</details>

<details>
  <summary>F6 - Analiza spanca</summary>
  
  ### Analiza spanca

#### Povzetek funkcionalnosti

Prijavlen uporabnik lahko pogleda svojo analizo spanja v zadnjem obdobju. Vpiše lahko dolžino spanja na določen dan in tako primerja s pretekimi dnevi. Sistem mu tudi javi ali je dosegel svoj cilj glede dolžine spanja. 

#### Osnovni tok

1. Prijavlen uporavnik izbere področje Analiza spanca.
2. Prikaže se stran, kjer lahko izbere dan in vpiše dolžino spanja.
3. Sistem javi ali je dosegel svoj cilj glede dolžine spanja. 
4. Na grafu lahko opazuje trend dolžine spanja preteklih dni. 

#### Izjemni tok

1. Prijavljen uporabnik želi primerjati dolžino spanja po dnveih, vendar nima vnesenih nobenih podatkov o dolžini spanja preteklih dneh. Sistem zaradi tega prikazuje prazen graf.

#### Pogoji

 Uporabnik mora biti prijavljen za uporabo te funkcionalnosti.

#### Posledice

Prijavlen uporabnik vidi trend svojega spanja zadnjih dni.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je MUST HAVE.

#### Razširitve, pogostost uporabe

Pogostost uporabe te funkcionalne zahteve je pogosta. Prijavlen uporabnik to funkcionalnost v povprečju uporablja enkrat dnevno. Možne razširitve so, da bi uporabnik nosil napravno npr. uro za spremlanje spanja med nočjo in bi potem bili izmerjeni podatki prikazani v aplikaciji.


#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Doseženost cilja glede na dolžino spanja | Prijavlen uporabnik izbere področje Analiza spanja | Prijavljen uporabnik vpiše dolžino spanja za določen dan| Sistem javi ali je dosegel zastavljen cilj glede dolžine spanja ali ne |
| Prikaz dolžine spanja na grafu | Prijavlen uporabnik izbere področje Analiza spanja | Prijavljen uporabnik vpiše dolžino spanja za določen dan | Sistem prikaže dolžino spanja za ta dan na grafu, vključno s preteklimi dnevi |
| Grafični prikaz spanja preteklih dni | Prijavlen uporabnik izbere področje Analiza spanja | Prijavlen uporabnik nima vnesene dolžine spanja za noben dan | Sistem prikaže prazen graf |
  
</details>  

<details>
  <summary>F7 - Analiza korakov</summary>

### Analiza korakov

#### Povzetek funkcionalnosti

Prijavlen uporabnik lahko pogleda svojo analizo korakov v zadnjem obdobju. Vpiše lahko število korakov na določen dan in tako primerja številko s pretekimi dnevi. Sistem mu tudi javi ali je dosegel svoj cilj glede dnevnega števila korakov.

#### Osnovni tok

1. Prijavlen uporavnik izbere področje Analiza korakov.
2. Prikaže se stran, kjer lahko izbere dan in vpiše število opravljenih korakov.
3. Sistem javi ali je dosegel svoj dnevni cilj števila korakov. 
4. Na grafu lahko opazuje trend števila narejenih korakov preteklih dni. 

#### Izjemni tok

1. Prijavljen uporabnik želi primerjati število opravljenih korakov po dnveih, vendar še nima vnesenih število korakov za noben dan. Sistem zaradi tega prikazuje prazen graf.

#### Pogoji

Uporabnik mora biti prijavljen za uporabo te funkcionalnosti.

#### Posledice

Prijavlen uporabnik vidi trend števila opravljenih korakov zadnjih dni.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je MUST HAVE.

#### Razširitve, pogostost uporabe

Pogostost uporabe te funkcionalne zahteve je pogosta. Prijavlen uporabnik to funkcionalnost v povprečju uporablja enkrat dnevno, ko vnese število korakov za trenutni dan. Možne razširitve so, da bi uporabnik nosil napravno npr. uro, ki bi merila število korakov. Izmerjeni podatki bi bili prikazani v aplikaciji.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Doseženost dnevega cilja glede števila korakov | Prijavlen uporabnik izbere področje Analiza korakov | Prijavljen uporabnik vpiše število korakov za določen dan| Sistem javi ali je dosegel zastavljen cilj glede števila korakov ali ne |
| Prikaz števila korakov na grafu | Prijavlen uporabnik izbere področje Analiza korakov | Prijavljen uporabnik vpiše število korakov na določen dan | Sistem prikaže število  dnevnih korakov, vključno s preteklimi dnevi |
| Grafični prikaz števila korakov preteklih dni | Prijavlen uporabnik izbere področje Analiza korakov | Prijavlen uporabnik nima vnesenega števila korakov za noben dan | Sistem prikaže prazen graf |
  
 
</details> 

<details>
  <summary>F8 - Organiziranje/iskanje športnih dogodkov</summary>
  
### Organiziranje/iskanje športnih dogodkov

#### Povzetek funkcionalnosti

Prijavljen uporabnik lahko išče ali organizira športne dogodke. Aplikacija prikazuje seznam dogodkov, njihov opis, zasedenost in lokacijo. V primeru, da dogodek še ni zaseden se prijavljen uporabnik lahko prijavi nanj.

#### Osnovni tok

1. Prijavljen uporabnik izbere področje Pregled dogodkov.
2. Prikaže se stran s seznamom dogodkov. Dogodke je mogoče filtrirati glede na lokacijo, datum, zasedenost, s klikom na gumb filtriraj.
3. Za vsak dogodek je prikazan opis, trenutna zasedenost in lokacija izvajanja. 
4. V primeru, da dogodek še ni zaseden se uporabnik lahko prijavi s klikom na gumb Prijavi me.
5. Število kandidatov za dogodek se tako poveča za 1.

#### Alternativni tok

1. Prijavljen uporabnik izbere področje Pregled dogodkov.
2. Prikaže se stran s seznamom dogodkov.
3. Prijavljen uporabnik klikne na gumb Ustvari dogodek.
4. Prikaže se obrazec, kamor je potrebno vpisati naslov dogodka, opis, število prostih mest in lokaciijo.
5. Postopek se zaključi s klikom na Dodaj.
6. Novo ustvarjen dogodek se prikaže na seznamu dogodkov.

#### Izjemni tok

1. Prijavljen uporabnik želi ustvariti dogodek, vendar ne izpolni ustrezno obrazca za kreiranje dogodka. Sistem javi sporočilo o pravilni zpolnitvi polj.


#### Pogoji

Uporabnik mora biti za iskanje in ustvarjanje dogodkov prijavlen v aplikacijo.

#### Posledice

Prijavljen uporabniku se prikaže seznam dogodkov, na katere se lahko tudi prijavi.
Prijavljen uporabnik uspešno ustvari nov dogodek.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je MUST HAVE.

#### Razširitve, pogostost uporabe

Prijavljeni uporabniki to funkcionalnost uporabljajo srednje pogosto, kar v povprečju pomeni nekajkrat na teden, ko pregledujejo dogodke, oziroma ustvarijo svoje. MOžna razširitev za to funkcionalnost bi bila, da bi pri ustvarjanju dogodka lahko dodal slike za boljšo predstavo uporabnikov.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Iskanje dogodkov |  Prijavlen uporabnik izbere področje Pregled dogodkov | Prijavlen uporabnik izbere želene filtre | Sistem vrne zadetke dogodkov na podlagi izbranega filtra |
| Prijava na dogodek | Prijavlen uporabnik izbere področje Pregled dogodkov | Prijavlen uporabnik izbere želen dogodek in klikne na gumb Prijavi me | V primeru uspešne prijave se zasedenost dogodka poveča za 1 |
| Organiziranje dogodka |  Prijavlen uporabnik izbere področje Pregled dogodkov | Klikne na gumb ustvari dogodek in uspešno vnese zahtevane podatke | Sistem javi sporočilo o uspešno ustvarjenem dogodku |
| Prikaz novo ustvarjenega dogodka na seznamu | Prijavlen uporabnik izbere področje Pregled dogodkov | Klikne na gumb ustvari dogodek in uspešno vnese zahtevane podatke | Novo ustvarjen dogodek se prikaže na seznamu dogodkov|
| Neizpolnjenost vseh zahtevih polj | Prijavlen uporabnik izbere področje Pregled dogodkov | Klikne na gumb ustvari dogodek, vendar ne vnese vseh zahtevanih podatkov | Sistem javi sporočilo o izpolnitvi vseh zahtevanih polj |
| Neustrezen vnos v polja | Prijavlen uporabnik izbere področje Pregled dogodkov | Klikne na gumb ustvari dogodek, vendar neustrezno izpolni polja | Sistem javi sporočilo o pravilni izpolnitvi polj |
  
</details> 

<details>
  <summary>F9 - Dodajanje/iskanje prijateljev</summary>
  
### Dodajanje/iskanje prijateljev

#### Povzetek funkcionalnosti

Prijavlen uporabnik lahko išče in dodaja prijatelje ter sprejema prošnje od drugih. 

#### Osnovni tok

1. Prijavljen uporabnik izbere področje Dodajanje/iskanje prijateljev
2. Prikaže se mu stran kjer vidi seznam svojih prijateljev.
3. Poleg tega lahko sprejme ali zavrne nove poršnje za prijateljstvo s klikom na kjukico oz. križek.
4. Prijatelja doda tako, da v obrazec vnese njegovo ime in ID.

#### Izjemni tok

1. Prijavlje uporabnik želi dodati noega prijatelja vendar ne vnese ID-ja. Sistem javi napako in prekine postopek.
2. Prijavljen uporabnik želi pregledati seznam prijateljev vendar ni dodal še nobenega, oz. sprejel prošnje za prijateljstvo od drugih. Sistem mu prikaže prazen seznam in javi, da nima dodanih prijateljev.

#### Pogoji

Za iskanje in dodajanje prijateljev mora biti biti uporabnik prijavljen v aplikacijo.

#### Posledice

Prijavljen uporabnik uspešno doda novega prijatelja in vidi seznamvseh svojih prijateljev.

#### Posebnosti

Zagotovljena mora biti varnost osebnih podatkov v skladu z Zakonom o varstvu podatkov in GDPR.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je MUST HAVE.

#### Razširitve, pogostost uporabe

Pogostost upoorabe te funkcionalnosti je majhna do srednje pogosta. Uporabniki v povprečju do 1 krat na teden dodajajo nove prijatelje in sprejemajo nove prošnje. Možna razširitev te funkcionalnosti bi bila, da bi si prijatelji med sabo lahko pošiljaji slike med športanjem in tako spodbujali drug drugega.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Dodajanje prijateljev | Prijavlen uporabnik izbere področje Dodajanje/iskanje prijateljev | Uspešno vnese zahtevane podatke (Ime, ID) | Sistem doda novega prijatelja na seznam prijateljev |
| Sprejemanje prošnje za prijateljstvo |  Prijavlen uporabnik izbere področje Dodajanje/iskanje prijateljev | Sprejme prošnjo za prijateljstvo | Sistem novega prijatelja prikaže na seznamu prijateljev |
| Pomanjkljiv vnos pri dodajanju prijatelja | Prijavlen uporabnik izbere področje Dodajanje/iskanje prijateljev | Uporabnik pri dodajanu ne vnese ID-ja | Sistem javi napako in prekine postopek |
| Prazen seznam prijateljev |  Prijavlen uporabnik izbere področje Dodajanje/iskanje prijateljev | Uporabnik ne doda nobenega priatelja in sprejme prošnje za prijateljstvo | Sistem mu prikaže prazen seznam in javi, da nima dodanih prijateljev |
  
</details> 

<details>
  <summary>F10- Vpogled na lestvico</summary>
  
### Vpogled na lestvico

#### Povzetek funkcionalnosti

Prijavlen uporabnik se lahko za določeno aktivnost primerja z ostalimi uporabniki in vidi kje na lestvici se nahaja. Na primer njegov čas v primerjavi z ostalimi pri teku na 10 kilometrov.

#### Osnovni tok

1. Prijavlen uporabnik izbere področje Vpogled na lestvico
2. Izbere aktinost za katero želi izvedeti kako visoko na lestvici se nahaja.
3. Prikaže se seznam uporabnikov z imenom in priimkom ter dosežene vrednosti od najboljšega proti slabšim.
4. Na seznamu je označeno kje na lestvici se nahaja prijavljen uporabnik. 

#### Izjemni tok
  
1. Prijavlen uporabnik izbere vpogled na lestvico za aktivnost, ki je ni še nikoli izvedel. Sistem zato uporabnika ne prikaže na lestvici in javi, da za izbrano aktivnost nima zabeleženih dosežkov.

#### Pogoji

Uporabnik mora biti za dostop do te funkcionalnosti prijavljen v aplikacijo.
Za vpogled na zasedeno mestno na lestvici mora imeti zabeležene dosežke za izbrano aktivnost.

#### Posledice

Prijavljen uporabnik dobi povratno informacijo, kako dober je v določeni aktivnosti (npr. tek na 10km), v primerjavi z drugimi.

#### Posebnosti

Ta funkcionalnost je brez posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je MUST HAVE.

#### Razširitve, pogostost uporabe
  
Stopnja pogostosti uporabe te funkcionalnosti je srednje pogosto. Uporabnik to funkcionalnost v povprečju uporabi nekajkrat na teden.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Vpogled na lestvico | Prijavlen uporabnik izbere področje Vpogled na lestvico | Izbere aktivnost za katero ga zanima doseženo mesto | Aplikacija prikaže lestvico od najboljšega proti slabšim in prikaže na katerem mestu se nahaja registriran uporabnik |
| Vpogled na zasedeno mesto na lestvici | Prijavlen uporabnik izbere področje Vpogled na lestvico | Izbere aktivnost za katero še nima zabeleženih dosežkov | Sistem uporabnika ne prikaže na lestvici in javi, da za izbrano aktivnost nima zabeleženih dosežkov |
  
 </details> 
 
 
<details>
  <summary>F11 - Objava treningov</summary>
  
### Objava treningov

#### Povzetek funkcionalnosti

Prijavlen uporabnik lahko objavi trening. Zapišejo se podatki o vrsti treninga, trajnju, tipu vadbe, številu ponovitev itd. Na koncu uporabnik shrani trening in ga tudi objavi, če želi.

#### Osnovni tok

1. Prijavljen uporabnik v aplikacijii izbere področje Objava treningov.
2. Prikaže se mu obrazec za vnos treninga, kjer najprej določi tip treninga, datumn in trajanje.
2. Za tem opredeli vadbo tako da določi naziv, tip vadbe, mišično skupino, število ponovitev, število setov, uporabljena teža.
3. Na koncu shrani trening s klikom na gumb Shrani trening.
4. S klikom na gumb Dodaj lahko doda nov trening.

#### Izjemni tok

1. Prijavlen uporabnik želi shraniti trenig, vendar ne izpolni polj za vnos podatkov o treningu. Sistem javi napako in prekliče proces ter sporoči, da je potrebno vpisati podatke.
2. Prijavljen uporabnik želi dodati nov trening, vendar ne izpolni polj za vnos podatkov o treningu. Sistem javi napako in prekliče proces ter sporoči, da je potrebno vnesti podatke o treningu. 

#### Pogoji

Uporabnik mora biti prijavljen v aplikacijo, kar pomeni da mora imeti ustvarjen uporabniški račun.
Prijavlen uporabnik mora v aplikaciji izbrati področje Objava treningov.

#### Posledice

Prijavlen uporabnik shrani, objavi trening z opisom vadbe.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prrioriteta te funkcionalnosti je SHOULD HAVE.

#### Razširitve, pogostost uporabe

Stopnja pogostosti uporabe te funkcionalnosti je srednje pogosta. Prijavlen uporabnik v poprečju nekajkrat na teden objavi, oziroma doda trening.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Shranjevanje treninga | Prijavlen uporabnik izbere področje Objava treningov | Uporabnik vpiše vse podatke o treningu in klikne na gumb Shrani | Sistem sporoči, da je trening uspešno shranjen |
| Dodajanje treninga | Prijavlen uporabnik izbere področje Objava treningov | Uporabnik vpiše vse podatke o treningu in klikne na gumb Shrani | Med treninge je dodan nov trening |
| Shranjevanje treninga | Prijavlen uporabnik izbere področje Objava treningov | Polja za vnos podatkov o treningu niso izpolnjena | Sistem javi napako in prekliče proces ter sporoči, da je potrebno vnesti podatke |
| Dodajanje treninga | Prijavlen uporabnik izbere področje Objava treningov | Polja za vnos podatkov o treningu niso izpolnjena  | Sistem javi napako in prekliče proces ter sporoči, da je potrebno vnesti podatke o treningu | 
  
 </details> 
 
 
 <details>
  <summary>F12 - Iskanje seznama vadb</summary>
  
### Iskanje seznama vadb

#### Povzetek funkcionalnosti

Neprijavlen uporabnik lahko v aplikaciji dostopa do seznama vadb, kjer dobi opis posameznih treningov, kot na primer 30 Day Workout Plan. Za hitrejše in bolj prilagojeno iskanje lahko uporabi različne filtre.

#### Osnovni tok

1. Neprijavlen uporabnik v aplikaciji izbere področje Iskanje seznama vadb.
2. Prikaže se mu seznam vadb z njihovimi opisi.
3. S pomočjo filtra lahko omeji zadetke.
4. S klikom na izbrano vadbo pridobi podrobnejše inforamacije o njej. 

#### Alternativni tok

1. Prijavlen uporabnik v aplikaciji izbere področje Iskanje seznama vadb.
2. Prikaže se mu seznam vadb z njihovimi opisi.
3. S pomočjo filtra lahko omeji zadetke.
4. S klikom na izbrano vadbo pridobi podrobnejše inforamacije o njej. 

#### Izjemni tok

Ta funkcionalnost nima izjemnih tokov.

#### Pogoji

Neprijavlen ali prijavlen uporabnik mora v aplikaciji izbrati področje Iskanje seznama vadb.

#### Posledice

Uporabnik pridobi podrobne informacije o izbrani vadbi.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je SHOULD HAVE.

#### Razširitve, pogostost uporabe

Stopnja pogostosti uporabe te funkcionalnosti je manj do srednje pogosta. Uporabnik v poprečju do 1 krat na teden išče po seznamu vadb. Možna razširitev te funkcionalnosti bi bila, da bi bili poleg opisov poteka vadbe tudi videoposnetki izvedbe.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Dostop do opisa vadbe | Neprijavlen uporabnik v aplikaciji izbere področje Iskanje seznama vadb | Neprijavlen uporabnik klikne na izbrano vadbo | Pokaže se podrobnejši opis izvajanja vadbe |
| Dostop do opisa vadbe | Prijavlen uporabnik v aplikaciji izbere področje Iskanje seznama vadb | Prijavlen uporabnik klikne na izbrano vadbo | Pokaže se podrobnejši opis izvajanja vadbe |
| Filtriranje zadetkov | Neprijavlen uporabnik v aplikaciji izbere področje Iskanje seznama vadb | Uporabi filter za filtriranje zadetkov | Sistem vrne seznam vadb na podlagi nastvavljenih filtrov |
| Filtriranje zadetkov | Prijavlen uporabnik v aplikaciji izbere področje Iskanje seznama vadb | Uporabi filter za filtriranje zadetkov | Sistem vrne seznam vadb na podlagi nastvavljenih filtrov |
  
 </details>
  
  
 <details>
  <summary>F13 - Iskanje planov prehrane</summary>
  
### Iskanje planov prehrane

#### Povzetek funkcionalnosti

Prijavlen uporabnik lahko v aplikaciji išče razne plane prehrane, kot npr. Low Fat Diet. Za hitrejše in bolj prilagojeno iskanje lahko uporabi različne filtre. S klikom na izbran plan prehrane dobi podrobnejše informacije.

#### Osnovni tok

1. Prijavlen uporabnik v aplikaciji izbere področje Iskanje planov prehrane.
2. Prikaže se mu seznam različnih planov prehran z krajšim opisom.
3. S pomočjo filtra lahko omeji zadetke.
4. S klikom na izbran plan prehrane dobi podrobnejše inforamacije o njem. 

#### Izjemni tok

Ta funkcionalnost nima izjemnih tokov.

#### Pogoji

Uporabnik mora biti prijavlen v aplikacijo, kar posledično pomeni da mora imeti ustvarjem uporabniški račun.

#### Posledice

Prijavlen uporabnik pridobi podrobne informacije o izbranem planu prehrane.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je SHOULD HAVE.

#### Razširitve, pogostost uporabe

Stopnja pogostosti uporabe te funkcionalnosti: manj do srednje pogostO. Uporabnik v poprečju do 1 krat na teden išče po seznamu planov prehran. Možna razširitev te funkcionalnosti bi bila, da bi bili poleg opisov planov prehran tudi recepti za zdrave obroke s posnetki prirave. 

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Dostop do opisa plana prehrane | Prijavlen uporabnik v aplikaciji izbere področje Iskanje planov prehrane | Prijavlen uporabnik klikne na izbran plan prehrane | Pokaže se podrobnejši opis plana prehrane |
| Filtriranje zadetkov | Prijavlen uporabnik v aplikaciji izbere področje Iskanje planov prehrane | Uporabi filter za filtriranje zadetkov | Sistem vrne seznam planov prehran na podlagi nastvavljenih filtrov |

 </details>
 
  <details>
  <summary>F14 - Analiza prehrane</summary>
  
### Analiza prehrane

#### Povzetek funkcionalnosti

Prijavlen uporabnik lahko v aplikaciji analizirajo svojo prehrano za določeno obdobje. Vpogled ima o vnosu dnevnih kalorij, preseganju dnevnega limita kalorij, vnos kalorij po obrokih itd. Podatke sistem grafično prikaže za lažjo primerjavo po dnevih in za spremljanje napredka.  

#### Osnovni tok

1. Prijavlen uporabnik v aplikaciji izbere področje Analiza prehrane.
2. Izbere časovno oobdobje, za katerega želi pregledati analizo svoje prehrane.
3. Uporabniku se grafično prikaže vnos kalorij po dnevih, vnos kalorij po obrokih in vnos posameznih makrohranil (beljakovine, oklikovi hidrt, maščobe itd.)


#### Izjemni tok

1.  Prijavlen uporabnik si želi pregledati analizo svojega dnevnega vnosa kalorij, za obdobje v katerem nima vnesenih obrokov. Sistem javi, da v izbranem obdobju ni mogoče prikazati dnevnega vnosa kalorij.
2. Prijavlen uporabnik si želi pregedati analizo vnosa posameznih mikrohranil, za obdobje v katerem nima vnesenih obrokov. Sistem javi, da v izbranem obdobju ni vnešenih zaužitih makrohranil. 

#### Pogoji

Uporabnik se mora prijaviti, da lahko uporablja to funkcionalnost aplikacije.

#### Posledice

Prijavlen uporabnik dobi vpogled v vnos kalorij po dnevih, vnos kalorij po obrokih in vnos posameznih makrohranil (beljakovine, oklikovi hidrt, maščobe itd.)

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Stopnja prioritete te funkcionalnosti je SHOULD HAVE.

#### Razširitve, pogostost uporabe

Stopnja pogostosti uporabe te funkcionalnosti je: zelo pogosto. Uporabniki v povprečju večkrat na dan uporabijo to funkcionalnost. Priporočjivo je za vsak obrok vnesti število zaužitih kalorij in mikrohranil, za boljšo primerjavo in spremljanje trenda. Možna razširitev te funkcionalnosti bi bila, da bi sistem na podlagi vnesenih podatkov opozoril na npr. prekomeren vnos maščob, sladkorja v telo.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Analiza vnosa kalorij v izbranem obdobju | Prijavlen upoorabnik v aplikaciji izbere področje Analiza prehrane | Izbere časovno obdobje za pregled, od-do | Aplikacija grafično prikaže vnos kalorij po dnevih za izbrano obdobje |
| Analiza vnosa makrohranil v izbranem obdobju | Prijavlen upoorabnik v aplikaciji izbere področje Analiza prehrane |  Izbere časovno obdobje za pregled, od-do | Aplikacija grafično prikaže vnos makrohranil po dnevih za izbrano obdobje |
| Analiza vnosa kalorij | Prijavlen upoorabnik v aplikaciji izbere področje Analiza prehrane | Izbere analizo svojega dnevnega vnosa kalorij, za obdobje v katerem nima vnesenih obrokov | Sistem javi, da v izbranem obdobju ni mogoče prikazati dnevnega vnosa kalorij |
| Analiza vnosa makrohranil |  Prijavlen upoorabnik v aplikaciji izbere področje Analiza prehrane | Izbere analizo vnosa makrohranil, za obdobje v katerem nima vnesenih obrokov | Sistem javi, da v izbranem obdobju ni vnešenih zaužitih makrohranil |
  
 </details>
 
 <details>
  <summary>F15 - Analiza forme</summary>
  
### Analiza forme

#### Povzetek funkcionalnosti

Prijavlen uporabnik lahko naloži posnetek svojega treninga. Nato lahko izbere kdo naj oceni njegovo formo, ali izbere možnost avtomatskega ocenjevanja. Poleg tega lahko trener prijavlenem uporabnikom poda oceno in komenta ter svoje strokovno mnenje. 

#### Osnovni tok

1. Prijavlen uporabnik v aplikaciji izbere področje Analiza forme.
2. Pojavi se okno, kamor lahko naloži svoj posntek vadbe, treniga.
3. Izbere kdo naj oceni formo (npr. prijatelj, trener ali avtomatska ocena).
4. Pod posnetkom vidi prejeto oceno in komentarje.

#### Alternativni tok

1. Trener v aplikaciji izbere področje Analiza forme.
2. Prikaže se mu okno s posntekom določenega uporabnika.
3. Uporabniku dodeli oceno in napiše komentar, poda svoje strokovno mnenje, v polje za vnos komentarja pod posnetkom.
  
#### Izjemni tok

1. Prijavlen uporabnik naloži datoteko, ki ni v pravem formatu. Sistem javi, da prilžena datoteka ni v ustreznem formatu.
2. Prijavlen uporabnik ne naloži posnetka. Sistem javi, da ocena forme ni možna.

#### Pogoji

Uporabnik in trener morata biti za uporabo te funkcionalnosti prijavljena v aplikacijo.

#### Posledice

Trener dodeli oceno in komentar določenemu uporabniku.
Uporabnik prejme oceno in komentar oz. strokovno menje glede forme od trenerja.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Stopnja prioritete te funkcionalnosti je COULD HAVE.

#### Razširitve, pogostost uporabe
  
Stopnja pogostosti uporabe te funkcionalnosti je: manj pogosto. Uporabniki v povprečju nekajkrat na mesec objavijo svoj posnetek za analizo forme. Razširitve za to funkcionalst se ne zdijo potrebne.
  
#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| objava posnetka |  Prijavlen uporabnik v aplikaciji izbere področje Analiza forme | Naloži posnetek v pravem formatu | Posnetek se prikaže v aplikaciji |
| Izbira ocenjevalca | Prijavlen uporabnik v aplikaciji izbere področje Analiza forme | Izbere kdo naj oceni posnetek | Izbrana oseba oceni posnetek |
| Dodeljevanje ocene trenerja | Trener v aplikaciji izbere področe Analiza forme | Oceni posnetek  uporabnika | Prijavleni uporabnik prejme oceno |
| Dodeljevanje komentarja trenerja | Trener v aplikaciji izbere področe Analiza forme | Izbranemu uporabniku napiše komentar v polje za vnos | Uporabniku se izpiše komentar trenerja |
| Nalaganje posnetka | Prijavlen uporabnik v aplikaciji izbere področje Analiza forme | V sistem naloži posnetek, ki ni v pravem formatu | Sistem javi, da prilžena datoteka ni v ustreznem formatu |
| Manjkajoč posnetek | Prijavlen uporabnik v aplikaciji izbere področje Analiza forme | V sistem ne naloži posnetka | Sistem javi, da ocena forme ni možna |

 </details>
 
 
  <details>
  <summary>F16 - Ustvarjanje planov treniranja in prehrane</summary>
  
### Ustvarjanje planov treniranja in prehrane

#### Povzetek funkcionalnosti

Trener lahko ustvari plan treninga, oziroma prehrane s klikom na gumb Ustvari trenig ali dieto. Prikaže se mu okno kjer najprej označi ali gre za plan treninga ali diete in nato v prostor za teks doda podroben opis.

#### Osnovni tok

1. Trener v aplikaciji izbere področje Ustvarjanje planov treniranja in prehrane.
2. Klikne na gumb Ustvari trening ali Dieto.
3. Določi ime plana treninga oz. prehrane.
4. Označi ali gre za plan treninga ali diete.
5. V polje za besedilo doda podrben opis plana treninga oz. diete.
6. Na koncu objavi plan treninga oz. diete s klikom na gumb Objavi.

#### Izjemni tok

1. Trener želi objaviti plan treninga oz. prehrane, vendar ne izpolni polj za vnos. Sistemn ne objavi plana in sporoči, da je potrebno izpolniti polja.
2. Trener ne označi ali gre za plan treninga ali diete. Sistem javi, da je potrebno izbrati za katero vrsto plana gre.

#### Pogoji

Za koriščenje te funkcionalnosti moraš imeti status trenerja.

#### Posledice

Trener uspešno objavi plan treniranja oz. prehrane.

#### Posebnosti

Ta funkcionalnsot nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je COULD HAVE.

#### Razširitve, pogostost uporabe

Stopnja pogostosti uporabe te funkcionalnosti: manj do srednje pogosto. Trener v povprečju 1 krat na teden objavi plan treniranja, oziroma prehrane. Dodatne razširitve te funkcionalnosti se ne zdijo potrebne.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Objava plana treninga | Trener v aplikaciji izbere področje Ustvarjanje planov treniranja in prehrane | Označi, da gre za plan treninga in vnese vse potrebne informacije ter klikne na gumb Objavi | Sistem uspešno objavi nov plan treninga |
| Objava plana prehrane | Trener v aplikaciji izbere področje Ustvarjanje planov treniranja in prehrane |  Označi, da gre za plan prehrane in vnese vse potrebne informacije ter klikne na gumb Objavi | Sistem uspešno objavi nov plan prehrane |
| Objava plana brez vnosa podatkov | Trener v aplikaciji izbere področje Ustvarjanje planov treniranja in prehrane | Ne vnese nobenih podatkov in pritisne na gumb objava | Sistemn ne objavi plana in sporoči, da je potrebno izpolniti polja |
| Objava plana brez določitve vrste | Trener v aplikaciji izbere področje Ustvarjanje planov treniranja in prehrane | Ne označi ali gre za plan treninga ali diete | Sistem javi, da je potrebno izbrati za katero vrsto plana gre | 
  
 </details>
 
 <details>
  <summary>F17 - Urejanje lastnega profila</summary>
  
### Urejanje lastnega profila

#### Povzetek funkcionalnosti

Prijavlen uporabnik lahko uredi svoj profil. Poleg osebnikh podatkov lahko spremeni še email, svoj opis, geslo ter zaprosi za status trenerja ali influencerja. 

#### Osnovni tok

1. Prijavlen uporabnik v aplikaciji izbere področje urejanje lastnega profila.
2. Prikaže se mu lasten profil, kjer lahko nato spreminja podatke.
3. S klikom na kvadratek lahko zaprosi za status trenerja oz. influencerja.
4. Spremenjene podatke na koncu shrani s klikom na gumb Shrani.

#### Izjemni tok

1. Prijavlen uporabnik pri spreminjanju e-maila vnese neveljavno obliko elektronske pošte. Sistem javi sporočilo o neveljavnem zapisu elektronskega naslova.
2. Prijavlen uporabnik si izbere novo geslo, ki ne ustreza zahtevam po dolžini in uporabi znakov. Prikaže se obestilo o neustreznem geslu in zahteva po izboljšanju na ustrezno dolžino oziroma uporabljene simbole.
3. Prijavlen uporabnik ponastavi geslo. Novo izbrano geslo mora za potrditev še enkrat ponoviti. Zapisani gesli se ne ujemata. Sistem javi sporočilo o neujemanju gesla.

#### Pogoji

Uporabnik mora biti za urejanje lastnega profila prijavlen v aplikacijo.

#### Posledice

Prijavlen uporabnik uspešno spremneni svoje osebne podatke, email ali geslo.
Prijavlen uporabnik pošje administratorju prošnjo za odobritev statusa trenjerja, oziroma influencerja.

#### Posebnosti

Za hranjene občutlivih podatkov, kot so gesla, se upošteva priporočila dobre prakse hranjenja občutljivih podatkov. To pomeni, da so gesla v bazi shranjena kriptirano.
Zagotovljena mora biti varnost osebnih podatkov v skladu z Zakonom o varstvu podatkov in GDPR.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je COULD HAVE.

#### Razširitve, pogostost uporabe

Pogostost uporabe te funkcionalnosti je: redko. Prijavleni uporabniki v povprečju do max 1 krat mesečno spreminjajo svoje osebne podatke, email, gesla itd. Možna razširitev te funkcionalnosti bi bila, da bi prijavlen uporabnik lahko objaviil in spreminjal tudi svojo sliko profila.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Spreminjajne osebnih podatkov | Prijavlen uporabnik izbere področje Urejanje lastnega profila | Spremeni svoje osebne podatke in pritisne na gumb Shrani | Sistem uspešno spremeni posodobljene podatke |
| Ponastavljanje gesla | Prijavlen uporabnik izbere področje Urejanje lastnega profila | Ponastavi geslo in pritisne na gumb Shrani | Sistem uspešno shrani novo nastavljeno geslo |
| Spreminjanje elektronskega naslova | Prijavlen uporabnik izbere področje Urejanje lastnega profila | V polje vnese neveljavno obliko elektornske pošte | Sistem javi sporočilo o neveljavnem zapisu elektronskega naslova |
| Spreminjanje gesla | Prijavlen uporabnik izbere področje Urejanje lastnega profila | Izbere si novo geslo, ki ne ustreza zahtevam po dolžini in uporabi znakov | Prikaže se obestilo o neustreznem geslu in zahteva po izboljšanju na ustrezno dolžino oziroma uporabljene simbole |
| Ponastavljanje gesla | Prijavlen uporabnik izbere področje Urejanje lastnega profila | Za potrditev vnese drugačno geslo, kot predhodno izbrano | Sistem javi sporočilo o neujemanju gesla |
  
 </details>
  

 <details>
  <summary>F18 - Moderiranje vsebine in profilov</summary>
  
### Moderiranje vsebine in profilov

#### Povzetek funkcionalnosti

Prijavljen admin lahko odstranjuje neprimerne komentarje vseh uporabnikov in po potrebi tudi odstrani iz platforme. To velja za navadne uporabnike, influencerje in pa tudi trenerje.

#### Osnovni tok

1. Prijavlen admin v aplikaciji izbere področje za moderiranje vsebine in profilov.
2. Prikažejo se mu vsi komentarji, ki so bili označeni za dodaten pregled in pa profili teh uporabnikov.
3. Izbere komentar, ki ga želi podrobneje pogledati.
4. S klikom na gumb x lahko izbriše komentar, če je to potrebno in se odloči kaj bo naredil z uporabniškim profilom.
5. Potrdi svojo odločitev in hkrati napiše komentar o razlogu za odločitev.
6. Izbran komentar se izbriše in sankcija profila se izvede.

#### Izjemni tok

1. Admin želi izbrisati komentar, ki ni primeren a ne napiše komentarja o odločitvi. Sistem javi opozorilo, da se akcija ne bo izvedla, če ne podamo potrebne komentarje
2. Admin želi deaktivirati uporabniški račun, ki ni primeren a ne napiše komentarja o odločitvi. Sistem javi opozorilo, da se akcija ne bo izvedla, če ne podamo potrebne komentarje
  
#### Pogoji

Admin mora biti za moderiranje uspešno prijavljen v aplikacijo.

#### Posledice

Prijavlen admin uspešno odstrani neprimeren komentar.
Prijavlen admin uspešno suspendira uporabniški račun.

#### Posebnosti

Ta funkcionalnsot nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je COULD HAVE.

#### Razširitve, pogostost uporabe

Stopnja pogostosti uporabe te funkcionalnosti je: pogosto. Admini v povprečju enkrat na dan uporabijo to funkcionalnost. Priporočjivo je vsaj enkratno dnevno moderirati in preverjati komentarje na platformi. Možna razširitev te funkcionalnosti bi bila, da bi sistem na podlagi vnesenih podatkov avtomatsko moderiral in odstranjeval neprimerne komentarje.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Brisanje neprimernega komentarja | Objavljen komentar je viden uporabnikom | Prijavljen admin izbere neprimeren komentar in ga z gumbom na x ter dodanim komentarjem izbriše | Komentar je izbrisan. |
| Brisanje uporabniškega računa | Uporabniški račun je viden, ter ga uporabnik lahko uporablja | Prijavljen admin izbere račun in ga z gumbom na x ter dodanim komentarjem izbriše | Uporabniški račun je izbrisan, ni več viden drugim uporabnikom, ter lastnik ga ne more več dostopati. |
| Opomnik brisanja brez komentarja | Neprimeren komentar je viden | Prijavljen admin izbere neprimeren komentar in ga z gumbom na x, a ne doda komentarja za izbris | Admin je opozorjen, da brez komentarja, neprimeren komentar ne bo izbrisan. Komentar ni izbrisan. |

  
 </details>
 
 
 
 <details>
  <summary>F19 - Izvajanje meditacije</summary>
  
### Izvajanje meditacije

#### Povzetek funkcionalnosti

Prijavlen uporabnik lahko v aplikaciji izbere področje Izvajanje meditacije. Prijavlenemu uporabniku se prikaže stran, kjer lahko nastavi čas meditacije in štoparica začne odštevati. Če želi si lahko predvaja tudi umirjeno glasbo za meditacijo. 

#### Osnovni tok

1. Prijavljen uporabnik v aplikaciji izbere področje Izvajanje meditacije.
2. Prikaže se mu štoparica, kjer lahko naštima čas meditacije.
3. S klikom na gumb Predvajaj lahko zraven predvaja umirjeno glasbo. 

#### Izjemni tok

Ta funkcionalnost nima izjemnih tokov.

#### Pogoji

Uporabnik mora biti za uporabo te funkcionalnosti prijavlen v aplikacijo.

#### Posledice

Štoparica začne odštevati nastavlen čas meditacije.
V odzadju se predvaja umirjena glasba.

#### Posebnosti

Predvajnaja glasba ne sme kršiti avtorskih pravic.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je WOULD HAVE.

#### Razširitve, pogostost uporabe

Stopnja pogostosti uporabe funkcionalnosti: manj pogosto. Prijavlen uporabnik v povprečju nejkakrat na mesec uporabi to funkcionalnost. Možna razširitev te funkcionalnosti bi bila, da bi bila dodana tehnika dihanja za še večjo sprostitev.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Nastavitev štoparice | Prijavlen uporabnik izbere področje Izvajanje meditacije | Nastavi željen čas meditacije na štoparici | Štoparica začne odštevati čas |
| Predvajanje glasbe | Prijavlen uporabnik izbere področje Izvajanje meditacije | Klikne na gumb Predvajaj | Sistem začne predvajati glasbo za meditacijo |
  
 </details>
 
 
 <details>
  <summary>F20 - Meet and greet</summary>
  
### Meet and greet

#### Povzetek funkcionalnosti

Influencer lahko organizira Meet and greet dogodek. Platforma mu omogoča organizirati nov dogodek, kjer pa ima za razliko od prijavljenega uporabnika možnost izbire, da bo ta dogodek Meet and greet.

#### Osnovni tok

1. Prijavljen uporabnik izbere področje Pregled dogodkov.
2. Prikaže se stran s seznamom dogodkov. Dogodke je mogoče filtrirati glede na lokacijo, datum, zasedenost, s klikom na gumb filtriraj.
3. Za vsak dogodek je prikazan opis, trenutna zasedenost in lokacija izvajanja. 
4. V primeru, da dogodek še ni zaseden se uporabnik lahko prijavi s klikom na gumb Prijavi me.
5. Število kandidatov za dogodek se tako poveča za 1.

#### Alternativni tok

1. Influencer izbere področje Pregled dogodkov.
2. Prikaže se stran s seznamom dogodkov.
3. Influencer klikne na gumb Ustvari dogodek.
4. Prikaže se obrazec, kamor je potrebno vpisati naslov dogodka, opis, število prostih mest in lokaciijo, prav tako pa polje kjer mora influencer označiti, da gre za posebni tip dogodka Meet and greet.
5. Postopek se zaključi s klikom na Dodaj.
6. Novo ustvarjen dogodek se prikaže na seznamu dogodkov.

#### Izjemni tok

1. Influencer želi ustvariti dogodek, vendar ne izpolni ustrezno obrazca za kreiranje dogodka. Sistem javi sporočilo o pravilni zpolnitvi polj. OPOZORILO: Sistem ne javi napake, če influencer ne izbere polja Meet and Greet, saj lahko slednji organizira tudi normalen športni dogodek.

#### Pogoji

Uporabnik mora biti za iskanje in ustvarjanje dogodkov prijavlen v aplikacijo in imeti status influencer.

#### Posledice

Prijavljen uporabniku se prikaže seznam dogodkov, na katere se lahko tudi prijavi.
Influencer uspešno ustvari nov dogodek.

#### Posebnosti

Ta funkcionalnost nima posebnosti.

#### Prioritete identificiranih funkcionalnosti

Prioriteta te funkcionalnosti je WOULD HAVE.

#### Razširitve, pogostost uporabe

Influencerji to funkcijo ne uporabljajo tako pogosto - verjetno nekajkrat na mesec. Možna razširitev za to funkcionalnost bi bila, da bi pri ustvarjanju dogodka lahko dodal slike za boljšo predstavo uporabnikov.

#### Sprejemni testi

| Funkcija, ki se testira | Začetno stanje sistema | Vhod | Pričakovan rezultat |
| --- | --- | --- | --- |
| Iskanje dogodkov |  Prijavlen uporabnik izbere področje Pregled dogodkov | Prijavlen uporabnik izbere želene filtre | Sistem vrne zadetke dogodkov na podlagi izbranega filtra |
| Prijava na dogodek | Prijavlen uporabnik izbere področje Pregled dogodkov | Prijavlen uporabnik izbere želen dogodek in klikne na gumb Prijavi me | V primeru uspešne prijave se zasedenost dogodka poveča za 1 |
| Organiziranje dogodka |  Influencer izbere področje Pregled dogodkov | Klikne na gumb ustvari dogodek in uspešno vnese zahtevane podatke | Sistem javi sporočilo o uspešno ustvarjenem dogodku |
| Prikaz novo ustvarjenega dogodka na seznamu | Influencer izbere področje Pregled dogodkov | Klikne na gumb ustvari dogodek in uspešno vnese zahtevane podatke | Novo ustvarjen dogodek se prikaže na seznamu dogodkov|
| Neizpolnjenost vseh zahtevih polj | Influencer izbere področje Pregled dogodkov | Klikne na gumb ustvari dogodek, vendar ne vnese vseh zahtevanih podatkov | Sistem javi sporočilo o izpolnitvi vseh zahtevanih polj |
| Neustrezen vnos v polja | Influencer izbere področje Pregled dogodkov | Klikne na gumb ustvari dogodek, vendar neustrezno izpolni polja | Sistem javi sporočilo o pravilni izpolnitvi polj |

  
 </details>


## 6. Nefunkcionalne zahteve

**ZAHTEVE IZDELKA (6)**:
1. Aplikacija mora biti enostavna za uporabo in je namenjena uporabnikom z osnovnim računalniškim znanjem.
2. Aplikacija mora omogočati jasen mobilni pogled (resposnive design).
3. Font pisave in velikost gumbov morata biti dovolj velika in pregledna ter razumljiva za starejše ljudi.
4. Sistem se mora odzvati v roku dveh sekund.
5. Sistem mora biti tak, da podpira vsaj 1000 sočasnih uporabnikov.
6. Aplikacija mora biti na voljo 99,8 % časa.

**ORGANIZACIJSKE ZAHTEVE (3)**:
1. Za razvoj in za pregled preteklih verzij dokumenta oz. dokumentov naj bo uporabljen Git.
2. Tekom razvijanja aplikacije naj poteka testiranje implementiranih novosti.
3. Na koncu bo izvorna koda na voljo na spletu. (Open source)

**ZUNANJE ZAHTEVE (3)**:
1. Podatki morajo biti shranjeni skladno po GDPR in ZVOP (zahteve za varovanje osebnih podatkov.
2. Člani skupine morajo biti na voljo za komunikacijo in za podporo uporabnikom.
3. Aplikacija je brezplačna in na voljo vsem uporabnikom, ki bi se želeli registrirati.

## 7. Prototipi vmesnikov

### Login in registracija
![](zaslonske-maske/login.png)

### Analiza obrokov
![](zaslonske-maske/dod_hrane.png)

### Analiza prehrane
![](zaslonske-maske/an_hrane.png)

### Ustvarjanje planov treniranja in prehrane
![](zaslonske-maske/dod_plana_diete.png)

### Iskanje seznama vadb in planov prehrane
![](zaslonske-maske/pregled_planov_diet.png)

### Analiza forme
![](zaslonske-maske/an_forme.png)

### Analiza spanca in dnevnih korakov
![](zaslonske-maske/dod_korakov_spanca.png)

### Dodajanje/iskanje prijateljev
![](zaslonske-maske/dod_prijateljev.png)

### Objava treningov
![](zaslonske-maske/dod_treniga.png)

### Vpogled na lestvico
![](zaslonske-maske/leaderboard.png)

### Izvajanje meditacije
![](zaslonske-maske/meditacija.png)

### Organiziranje/iskanje športnih dogodkov (in dodajanje Meet and Greet)
![](zaslonske-maske/pregled_dogodkov.png)
![](zaslonske-maske/dod_dogodkov.png)

### Analiza treningov
![](zaslonske-maske/pregled_tren.png)

### Urejanje lastnega profila in moderiranje vsebine in profilov
![](zaslonske-maske/urejanje_profila.png)


## VMESNIKI DO ZUNANJIH SISTEMOV

### Weatherapi

- Pri izdelavi naše aplikacije bomo za zunanji vir uporabili WeatherAPI. Ta bo namenjen za prikaz napovedi vremena uporabnikom.

- Route: GET https://www.weatherapi.com/docs/forecast.json
- Primer klica:

```
  {https://www.weatherapi.com/docs/forecast.json?key=<YOUR_API_KEY>&q=Ljubljana&days=5}
```

- Metoda vrne status 200 in podatke vremenske napovedi v JSONu (ker je JSON zelo obsežen, smo se odločili, da bomo prikazali le del odgovora)

```

{
"location": {
"name": "Ljubljana",
"country": "Slovenia",
"lat": 51.52,
"lon": -0.11,
"tz_id": "Europe/Ljubljana",
},
"current": {
"temp_c": 9,
"temp_f": 48.2,
},
"wind_mph": 6.9,
"gust_mph": 16.3,
"gust_kph": 26.3
},
"forecast": {
"forecastday": [
{
"date": "2019-11-03",
"date_epoch": 1572739200,
"day": {
"maxtemp_c": 13.2,
"maxtemp_f": 55.8,
"condition": {
"text": "Heavy rain at times",
},
"uv": 1
},
"hour": [
{
"time_epoch": 1572739200,
"time": "2019-11-03 00:00",
"condition": {
"text": "Partly cloudy",
"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
"code": 1003
},
"wind_mph": 12.1,
"wind_kph": 19.4,
"wind_degree": 229,
}
...
]

```

### SendGrid

- Za pošiljanje notifikaciji za prijavo na dogodke, bomo uporabljali SendGrid API.

- Route: POST https://api.sendgrid.com/v3/mail/send
- Za avtorizacijo bomo uporabili naš API ključ
- Primer uporabe API-ja

```
{
  "personalizations": [
    {
      "to": [
        {
          "email": "uporabnik@example.com"
        }
      ],
      "subject": "Prihajajoč dogodek"
    }
  ],
  "from": {
    "email": "gymbud@example.com"
  },
  "content": [
    {
      "type": "text/plain",
      "value": "Obveščamo vas, da bo dogodek, na katerega ste se prijavili potekal jutri 24.03.2023 ob 17.00."
    }
  ]
}
```

## Naš zunanji vmesnik

Naš API bo ponujal izpis najbolj aktivnih uporabnikov in izpis posameznikovih aktivnosti. Na ta način bomo omogočili uporabniku prikaz svojih aktivnosti tudi na njegovi osebni strani (npr. blog ...).

### Izpis najbolj aktivnih uporabnikov

- Route: GET /aktivnosti/top-uporabniki
- Klic nam vrne status 200 in podatke top 3 uporabnikov v JSONu

```

{
  {
  "id_user":"42",
  "first_name":"Micka",
  "last_name":"Kovač",
  "zadnja_aktivnost":
  {"datum":"23.03.2023"},
  "tip_zadnje_aktivnosti": "Kolesarstvo",
  "st_aktivnosti": 100
  },
  {
  "id_user":"43",
  "first_name":"Janez",
  "last_name":"Novak",
  "zadnja_aktivnost":
  {"datum":"22.03.2023"},
  "tip_zadnje_aktivnosti": "Tek",
  "st_aktivnosti": 99
  },
  {
  "id_user":"45",
  "first_name":"Martin",
  "last_name":"Krpan",
  "zadnja_aktivnost":
  {"datum":"21.03.2023"},
  "tip_zadnje_aktivnosti": "Smučanje",
  "st_aktivnosti": 29
  }
}

```

### Vpogled v aktivnosti uporabnika

- Route: GET /uporabnik/:uporabnikId
- Za parameter vpišemo id uporabnika
- Klic nam vrne status 200 in podatke aktivnosti uporabnika v JSONu

```

{
  {
  "id_aktivnosti":"41",
  "datum":"21.03.2023",
  "tip_aktivnosti_aktivnosti": "Kolesarstvo",
  "trajanje": "30min"
  },
  {
  "id_aktivnosti":"43",
  "datum":"22.03.2023",
  "tip_aktivnosti_aktivnosti": "Tek",
  "trajanje": "30min"
  },
  {
  "id_aktivnosti":"46",
  "datum":"24.03.2023",
  "tip_aktivnosti_aktivnosti": "Tek",
  "trajanje": "30min"
  },
...
}

```

