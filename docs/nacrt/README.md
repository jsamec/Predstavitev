# :green_square: Načrt sistema

|                             |                                                                |
| :-------------------------- | :------------------------------------------------------------- |
| **Naziv projekta**          | JymBud                               |
| **Člani projektne skupine** | Jan Karlovčec, Jan Šraj Miklič, Aljaž Grilc, Anže Drmaž, Jaša Samec |
| **Kraj in datum**           | Ljubljana, 11.4.2023                                 |

## Povzetek

V tem dokumentu je predstavljen načrt arhitekture, načrt strukture in načrt obnašanja aplikacije JymBud. Načrt arhitekture prikažemo s pomočjo arhitekturnih vzorcev ter opišemo, kako je sistem organiziran kot sklop delujočih komponent. Na začetku dokumenta prikažemo logični, razvojni in fizični pogled / diagram našega projekta. Načrt strukture predstavimo z razrednim diagramom, opisom razredov in povezav med njimi. V opisu razredov so za lažje razumevanje celotnega delovanja aplikacije podrobno opisani vsi razredi z imeni, atributi in nesamoumevnimi metodami. S pomočjo razrednih diagramov smo izpeljali strukturo bodočih podatkovnih baz. Načrt obnašanja prikažemo s številnimi diagrami zaporedij, kjer podrobno opišemo potek uporabe aplikacije na podlagi vseh možnih tokov, ki se lahko zgodijo. Slednji vsebujejo tudi vse funkcionalnosti, ki so prikazane na diagramu primerov uporabe. Za vsako funkcionalnost smo določili razrede in njihovo vrsto, klicane funkcije, ter vse skupaj uredili v pravilno zaporedje. Vsak diagram vsebuje poleg osnovnih še alternativne in izjemne tokove.

## 1. Načrt arhitekture

### Logični pogled

![RD](https://teaching.lavbic.net/plantuml/png/fLPRRjim4FmMJo7etpS83AGrYWQr4pUfyx-MDWfbXXGeHWLIw0YzLGzMKczBf6Kf_lJkp2mvorsb49uWHZ_OYGXPuFyX35-KhuGlQVog_8XA31KLd92qJjq97elD5__cPWCAZf3XUgrndfUsNEzCqJUCQ0A6qQz_NS8t8TzGXuesLf2Y5TYBJCKIdtvk1ng-v-dK5jFIRKGieXCz8so3UwdBo3krhef3AYGSENKXdtHS_FjB6JYO6N2wb_WgWUCTVuReQ4zyE4hX4lckmGx-Nn8vvR43QEGSm9s-UWKXJT1rC5rmQ8_zq7TIr-ePKphVWw-2AoaOGsbSRU-n-plJVjthFYgz8kV4joT5SwwTfUVvZxgzWCUiQgAcd0PT35Xgfw-YS75ORBl4vsAHueMopvobQanun9XcIXgxu24o_omuNUbKrneKVsVDooFZgikufkQrLyJsP1Io95CvcEH09qjB7SCZ1GU92V04jv0fZZ5KUbTm5CHYyrIT1rEVB0KhXCXdLTkJcQhE6_VnL7Mt71ZzWFBnpooiXjO3O1dOFF8GbY3B4R1Cj7bMIx3bKfZfNmIb-yikwZaLEYEwXotgHgAXc8M--yWhyMxQpcrpooGwRwhnoxGZveW6phbJZur1HtVxie-ufDfTrbXrDguhRGfMRIlIV9witjDLVpUHtcV5A4R8LTDujLhxbw-FZFT21MhdBh7iC9FIdtd4lYrDsc3-a8bjLeexskm_)



### Razvojni pogled

![RD](https://teaching.lavbic.net/plantuml/png/bLVHRjiW57tdA_Y1F7JhOsMfMZQfMjTMsvBt6vkus0xNmipLElNVPpk9ZG43VWoS0zp3uLmdnLEDWWb5NoeG_4MoLmc2FOWzP0TwTqURFuVcRwFOYIO9_KSeJNsCFMTlFMi29Kc8ymM5abXLJ3RE3IdbGZ5vX9JvwHtsWmJGNqLMOuS87MeB2ho5x6gKS12yv3tqiuKb7uHeEqWyyYgaf-G5A5OLZMeXgEHEiW94mHwXKOBbSDuYp3lZLebkC6oT1u1JshbCjm6Pxal5Mu6DuW6fxWLK_1sU3nBBSCaNz6_911Svjh64NpM8D7hvxrsbPVpYLx_5uh-XF8N13-yj3BRumJAk8EL5cBElCQzOzWIFh7CUJp78s69stcM5fEFLhh6UYsNPRm8vBJXDhtpKdopipAnRp34hGqxTzOzP3cAT2H5QNLQEnQqHrA9OQbuGJYalSojrlF7hECHU2pzPpXibUyl2SzQFnCHbH52U5ml2zFqZGdJXpEjoDRY8TJkZilwqTTvGfpfPQdKRoVDNjKcyFTFiUPkA7KCSpnpTPFWct7nDH-ATzYtINoCXnliVAtN4Xld-hmKweFRGU19dr17Nw4Gn-raKN6yXKOInXqIXP-4UnT1QO1H-Qh1--49NyvESRSrFSVSrGdeRK8Lqi0xDk6IfuYW8CODkD9UPedfoNbsrWB7yPCSyiOP6y4A_yJ2qRgCLD7yhTknO8zD3ZCX64W4o5nmEk8Pd9legyjGrp5k-dN9l_jqx_waTt_ZW9kR8l5Bz7y0orFFv_ny0)

### Fizični pogled

![RD](https://teaching.lavbic.net/plantuml/png/VPBFRe904CRFvIaszkofCV5WI9IsIKriZVJePMG7N5bsoR3-IHiVeQ_KK_jU7H0jOZGaG6Q-x_lD3XIfCZaGP681KPgGNHiPMMr9R9VAeLUS-X9ZM6ltZZitr2en6Hed8huXUGtPaCXkWofXeJcoqG9oAeR8YKzFNE3kiH_tObbsB4cakjfx7lMV0c_VY35MuY6YASI7yZeJId2mWEAMsDCOE-6i89KidP2AC7BA6i-hA9qtkS8CD6VE3S7Frzg0DYhj22X4e5MvWi50uaP5wFiLv-0BSutEi6b1HLfRMiAxqpewC-J7k12GQvL2f5PGgezztsVrlXosbLqumj_lupWXqWQfJVc7lB9v7CvD4yAs5oDnTqvZqcbrdQdbzzHk3F1XuEDWcewkSsQeotG-zjpa5-PXA5XG-QyH9_oNgGpbHOOuyIUt1fXOazZ7KSKACwu7rZWgMsrclRBkEkzsVJvKgy0Kh_x8PSMlL_m7)

## 2. Načrt strukture

### 2.1 Razredni diagram

# RAZREDNI DIAGRAM
![RD_NOV](https://teaching.lavbic.net/plantuml/png/vHlPRjj8yddu5GtFmzAG5Am74qpM60IW9IL3MnO5ITO2irWORR9jjqIn1P9MDbxC9yn7x8_iqyv_RHyy-Y8jEJuoo4jWDQlhhkggwawsmia6fd0DmXXc6VYt0y0L35StARbBeZw9IGe-tU8SiNMIHYWLQz-__N3oRjYdgp1DoIUnU1NJdSvlZfEfM7_--OfXW-ddz--j5Bw__k4wHEzq6Zz6xtuw-i6AC2H9dfAu4H_5PkBx6pfwU_JMYWybESuRsKFlhjzUX-h66YZaG7aAaun-efYSMnmX4E8qZ97ZzBbY3oOfNi8SnSiity85HfyEW3S3awb_wis7erF_Sk4F_muCLVNkDYI5LmbU-T4nm1GvNSDhT0ncUOgJ6_PpasAwifANChgBX3Wcyt_b6gZWeiRMYKW4bnLxq9MmTu5E_l0OR0cEsBvjck1g6t8ja1Vb4WR_-2VRiY5v6c69LWjwV7-LuZ_-ioFqXcJn4izAiLsR0hf05xz4y5jbfiM6tCGe6iCHeeR28QbCDHhEvWk_xpKPQWUZv9Sv2LUL6TUK1AdCmDHP4dKF9POcCMIAHhVKmv2VB61qLJ7bpywyyUdmSZBoni6YXJM61ChCBD6S-YhzSKo3XCHYQO1H3kk53TqKR70cxzicHFxTkMF-d6A6tzNfT856XIr8DAX1D0go_RCLJ9O2OIczowbNe8fcc5uGTRDQSVxz5YuPZdCKuHo6U8agnPqF1_xSwzFeQr9Q2BCI0MKtfx8rXAC8e8e6CToq2qnSfkTTf8WpEu9Pdg0RAZEvnd6TAYwcmrDXwsdmmHzvJvimq1hYMCiWoky8vdVhAU7fwnWCQ1JnaExTe2mcCY2Xvgm2NtCvFxc-Yr4IebJsEkOYqWgBPHAHAnna2TacQ4mL0hSutoAt-4BJJLAHaDACd7BAX2DGpV6cviar6IazjVojOQgjD20t95hXoYg3u6CmE6lCtX43Hx8fRERHOugdgIqSmu7OxgfeMhEo73Oy95mPEmKiS2fINV0Wvkud12JRskzeslEcmlM4jCs99e7K6RO21TITmhASvUSqurLwYCcAHP02OWku8kUKsh5IxG8BpIwGA7Q1JgzPiRMgl0J6-1u6LocHjUIDlP7_gtSPd4o35WKHjiq8gsCGLV6Km7ky_HLlQUZBS2iIun2pr5heYldgpI954RLkhK5oQonTqUEEBTR73in2UQ6JiVo9kKIkmc0NAEn9NYQs_4B_8Qw5uovG-Eq2arjgdrjjGU6q2nG-JKCCMDPb7ijFc1l95eDWu0b_dK-7Ot_yiTaUYhqlwX_iMuutnU453OjLfnhJ30TE1JFrIS7LmYDGtasHqZLbQOspsUfkeyR5XD3SH-lkRMMsB9-XdDI_SqIzC2NH4ge7KQKIohThaK44XhVACKiCEROQMue4IIzTe8fvg10LsKQ5w09J3HIBgWHgQbK5B4nL1R2LMlok9lkX6P-5r9O8VT0d2ZLKHnolp6ReFe7hGOAs2RwjaBiABFNHuWjMicl1qcm3an0Q_CmcthYvgjIPeUSoqsuVPfMdSVu43S8PfCM3e6MmnvPHAAJYTfjnRAw6j37hdL57i6Mzis3gdUskKUhB1IQb-fLbmBS5X243NyUo32KoLqNRA4LLCUfYJAR3NwRUUDWgHn39al2b0T7TfH2bgbkrdKMirViehpp_MXtd0qdN9hCVWkbv8wVNT0kKAWmI8chWBOn3BBTbGWRsiJvOQCcKe9nLX_ICFQ4fFFtCf5f5P0HlLoIWmDXjnCTJ0lkA6TV4hN4Vbhev8slQ9DDo0xaoczBfmirQWhK2JGfcNGlNflsdw0PdD46nCx_IvtJuqP_Dfwszm2FgPwbU9lBvRjJBMvp9vpfBRTKFsi0kvS8m5G9WccEbSjQMgfK6KfIJwj1XqIYi8OhECgrFqHQb-9p2kGhqeLJ42vYFR6yB4ECCIx8ea5sWa9RRVO5zbbCjPtO555HgDGIHeeLWqAA43k70JPWrloeKBBkN8DONOweOfMA447pqnvVzO3oV1YEWJx6UqykUpcHs5rHcHXhZjFfhC-eB-S7-DcNjjsP0qNetM_1Fttj_auF3hspOy8JJp69QeNbnERFOoutDISOpDFiDmyKNRFHVQFe2r3glQiOqItbdStyn3cRpNOsbjR1IHsTlKlzqFQxPI-nKb3zzGMoESbv-ShFxZDhik6oDv9SCibzZ_60X_Of322M3hE0V_osxmA8Pnv5qZ9GDaGPQDOox0DTAj8D_USkcdjaFDsxquCsOtYNEOFddSxTvJz1vFthMiySGjN36Pv-NQaQLjMkUO1HvPNJ6Yp29Lc-3PvxJlCmaotARgXVv8s_irxCWsh4jlC59QzlsBTwkcfzjscEg6mBjWSMtgh8wBMhLdQ4WFMlkcLobcxqgqOlBl4amzKx6_fb1icExQ5DxruxPktRqthMZzQwTXjwrOqme6dlNZhLtxPYzwoFxqTx-_MXlZtwqjrS_sclkHysalTVKHJPCSIPfPj76BA9ICqrYjAkz9xzbvnDlxh1yogtwwdTgCV-ThTujkb39Yugo7d48pZQlpOkAfYf3oozreR704I9yySdFqrfWtkh_xtTQ4d2fPpHCWxu_ydQAqeQPJSSoi-bzsMIX29P51aiCLb-ka49ZI8ga2RHvBkmqU7XCWswVYyZJ48ENbtdBy7MCF1xrQ4IKpMAMpbuzc2fyyBN3tayFQkfbzStf5tUw_auEzOKpZro0w7FGL-XxQsNK3zpKnsrcX3ttgpQDCT44SARu7R5feQ_bRbWq54NsfPLhVmTEN-KgdZsw4QS4gx0zIzvwfGT4h_eQY6KjeHNMSJHevPLUuxp-JAhMq-ddzSbT1Bo9Vm1W1axf7-hjvpUGDrjlVRxQAjlM_wawjKmWomVbSr9NvZGPceMt-GhYuEZDcwC3qElrtfT_A_VNZlACu45e-Rgz0cw0TVJ_5c5kK6zY7VlZw0UtEUgZVeiGvWsCepyTDwbODbdVXzRqUhsuTNlZaqOPnIxq6xVlibb-ghQNrChxC8dbNVQgZxBst2mzajfDL9uGPQMsWpkEyW2ysbZ-fLsrEisFgKrzwdkT1mQJ5c-tpE8Sn_P_HXxSgn5Z8QeyXJ0HrAEcMadDq0L41IhP01pyzSsRvA1i6Xtr5KqxOSi5QflZxWRFdKh63IpSYdBt0Q2wKBS3bd1bVzCE9UhMTXZHgL6_bIQ11tynCHNp1mLCXvBq9eE9ZpIXrKbN6Cu6rMltLQVeB4tYlFXrgiRF1E1ruFy1
)

**Razredni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/RD.puml))

### 2.2 Opis razredov
  
<details>
<summary><strong>DodgodkiView</strong></summary>

### Opis: 
To je mejni razred, kateri omogoča uporabniku prijavo na dogodek.

### Atributi:
- `dogodekId` - int
- `uporabnikId` - int
- `vnos` - string

### Metode:	
- `prijavaNaDogodek(dogodekId: int, uporabnikId: int)`
  - parametri: `dogodekId` - int, `uporabnikId` - int
  - tip rezultata: void
  
- `iskanjePlanaVadbe(vnos: string)`
  - parametri: `vnos` - string
  - tip rezultata: Dogodek[]

</details>

<details>
<summary><strong>UstvarjanjeDogodekovView</strong></summary>

### Opis: 
To je mejni razred, kateri omogoča uporabniku ustvarjanje dogodka.

### Atributi:
- `naslovDogodka` - string
- `opisDogodka` - string
- `stMest` - int
- `lokacija` - string
- `uporabnikId` - int

### Metode:	
- `ustvariDogodek(naslovDogodka: string, opisDogodka: string, stMest: int, lokacija: string, uporabnikId: int)`
  - parametri: `naslovDogodka` - string, `opisDogodka` - string, `stMest` - int, `lokacija` - string, `uporabnikId` - int
  - tip rezultata: void

</details>

<details>
<summary><strong>DogodkiController</strong></summary>

### Opis: 
To je kontrolni razred, preko katerega se vmesniki povežejo na entitetni razred Dogodki.
### Atributi:
- `uporabnikId` - int
- `dogodekId` - int
- `naslovDogodka` - string
- `opisDogodka` - string
- `stMest` - int
- `lokacija` - string
- `vnos` - string

### Metode:	
- `ustvariDogodek(naslovDogodka: string, opisDogodka: string, stMest: int, lokacija: string, uporabnikId: int)`
  - parametri: `naslovDogodka` - string, `opisDogodka` - string, `stMest` - int, `lokacija` - string, `uporabnikId` - int
  - tip rezultata: void

- `prijavaNaDogodek(dogodekId: int, uporabnikId: int)`
  - parametri: `dogodekId` - int, `uporabnikId` - int
  - tip rezultata: void
  
- `iskanjePlanaVadbe(vnos: string)`
  - parametri: `vnos` - string
  - tip rezultata: Dogodek[]
  
</details>

<details>
<summary><strong>Dogodki</strong></summary>

### Opis:
Entitetni razred, ki predstavlja dogodek.

### Atributi:
- `naslovDogodka` - string
- `opisDogodka` - string
- `stMest` - int
- `lokacija` - string
- `uporabnik` - int
- `vnos` - string

### Metode:
- `ustvariDogodek(naslovDogodka: string, opisDogodka: string, stMest: int, lokacija: string, uporabnikId: int)`
  - parametri: `naslovDogodka` - string, `opisDogodka` - string, `stMest` - int, `lokacija` - string, `uporabnikId` - int
  - tip rezultata: void
  
- `iskanjePlanaVadbe(vnos: string)`
  - parametri: `vnos` - string
  - tip rezultata: Dogodek[]

</details>

<details>
<summary><strong>Prijave</strong></summary>

### Opis:
Entitetni razred, ki predstavlja prijave na dogodek.

### Atributi:
- `uporabnikId` - int
- `dogodekId` - int

### Metode:
- `prijavaNaDogodek(dogodekId: int, uporabnikId: int)`
  - parametri: `dogodekId` - int, `uporabnikId` - int
  - tip rezultata: void

</details>

<details>
<summary><strong>UrejanjeLastnegaProfilaView</strong></summary>

### Opis: 
To je mejni razred, ki omogoča urejanje lastnega profila v aplikaciji.

### Atributi:
- `uporabnikId` - int
- `ime` - string
- `priimek` - string
- `email` - string
- `spol` - string
- `datumRojstva` - Date[]
- `geslo` - string
- `opisUporabnik` - string
- `jeInfluencer` - bool
- `jeTrener` - bool

### Metode:	
- `posodobiOsnovneNastavitve(posodobljenUporabnik: Uporabnik)`
  - parametri: `posodobljenUporabnik` - Uporabnik
  - tip rezultata: Uporabnik[]
  
- `posodobiTipUporabnika(jeInfluencer: bool, jeTrener: bool)`
  - parametri: `jeInfluencer` - bool, `jeTrener` - bool
  - tip rezultata: Uporabnik[]

</details>

<details>
<summary><strong>PrijateljstvaView</strong></summary>

### Opis: 
To je mejni razred, ki omogoča upravljanje s prijatelji.

### Atributi:
- `uporabnikId` - int
- `ime` - string
- `priimek` - string
- `sporociloTxt` - string
- `prijateljId` - int

### Metode:	
- `dodajPrijatelja(ime: string, uporabnikId: int)`
  - parametri: `ime` - string, `uporabnikId` - int
  - tip rezultata: void
  
- `vrniPrijatelja(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: Uporabniki[]
  
- `potrdiPrijatelja(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: void
  
- `izbrišiPrijatelja(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: void
  
- `posljiSporocilo(sporociloTxt: string, prijateljId: int)`
  - parametri: `sporociloTxt` - string, `prijateljId` - int
  - tip rezultata: void

</details>

<details>
<summary><strong>ProfilController</strong></summary>

### Opis: 
To je kontrolni razred, preko katerega se vmesnik poveže na entitetni razred Uporabniki.

### Atributi:
- `uporabnikId` - int
- `ime` - string
- `priimek` - string
- `email` - string
- `spol` - string
- `datumRojstva` - Date[]
- `geslo` - string
- `opisUporabnika` - string
- `jeInfluencer` - bool
- `jeTrener` - bool
- `sporociloTxt` - string
- `prijateljId` - int

### Metode:	
- `dodajPrijatelja(ime: string, uporabnikId: int)`
  - parametri: `ime` - string, `uporabnikId` - int
  - tip rezultata: void

- `vrniPrijatelje(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: Uporabniki[]
  
- `potrdiPrijatelja(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: void
  
- `izbrišiPrijatelja(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: void
  
- `posodobiOsnovneNastavitve(posodobljenUporabnik: Uporabnik)`
  - parametri: `posodobljenUporabnik` - Uporabnik
  - tip rezultata: Uporabik[]
  
- `posodobiTipUporabnika(jeInfluencer: bool, jeTrener: bool)`
  - parametri: `jeInfluencer` - bool, `jeTrener` - bool
  - tip rezultata: Uporabnik[]
  
- `posljiSporocilo(sporociloTxt: string, prijateljId: int)`
  - parametri: `sporociloTxt` - string, `prijateljId` - int
  - tip rezultata: void
  
</details>

<details>
<summary><strong>PrijavaView</strong></summary>

### Opis: 
To je mejni razred, ki omogoča uporabniku prijavo v aplikacijo.

### Atributi:
- `email` - string
- `geslo` - string

### Metode:	
- `preveriMail(email: string)`
  - parametri: `email` - string
  - tip rezultata: bool
  
- `preveriGeslo(email: string)`
  - parametri: `email` - string
  - tip rezultata: bool
  
- `prijaviUporabnika(email: string, geslo: string)`
  - parametri: `email` - string, `geslo` - string
  - tip rezultata: void
  
- `preveriStatus(uporabnik: Uporabnik)`
  - parametri: `uporabnik` - Uporabnik
  - tip rezultata: bool

</details>

<details>
<summary><strong>RegistracijaView</strong></summary>

### Opis: 
To je mejni razred, ki omogoča uporabniku registracijo v aplikacijo.

### Atributi:
- `ime` - string
- `priimek` - string
- `email` - string
- `datumRojstvo` - date[]
- `geslo` - string
- `visina` - int
- `teza` - int
- `cilj` - string

### Metode:	
- `registrirajUporabnika(uporabnik: Uporabnik)`
  - parametri: `uporabnik` - Uporabnik
  - tip rezultata: void

</details>

<details>
<summary><strong>OdjavaView</strong></summary>

### Opis: 
To je mejni razred, ki omogoča uporabniku odjavo iz aplikacije.

### Atributi:
Ni atributov

### Metode:	
- `odjava(uporabnik: Uporabnik)`
  - parametri: `uporabnik` - Uporabnik
  - tip rezultata: void
</details>

<details>
<summary><strong>PrijavaRegistracijaOdjavaController</strong></summary>

### Opis:
To je kontrolni razred, preko katerega se vmesniki povežejo na entitetni razred Uporabniki.

### Atributi:
  - `ime` - string 
  - `priimek` - string
  - `email` - string
  - `datumRojstvo` - date[]
  - `geslo` - string

### Metode:
  - `preveriMail(email: String)`
    - parametri: `email` - string
    - tip rezultata: `bool`

  - `preveriGeslo(email: String)`
    - parametri: `email` - string
    - tip rezultata: `bool`

  - `registrirajUporabnika(ime: String, priimek: String, email: String, geslo: String)`
    - parametri: `ime` - string, `priimek` - string, `email` - string, `geslo` - string,
    - tip rezultata: void
  
  - `prijaviUporabnika(email: String, geslo: String)`
    - parametri: `email` - string, `geslo` - string
    - tip rezultata: `void`
  
  - `preveriStatus(uporabnik: Uporabnik)`
    - parametri: `uporabnik` - Uporabnik
    - tip rezultata: `bool`
  
  - `odjava(uporabnik: Uporabnik)`
    - parametri: `uporabnik` - Uporabnik
    - tip rezultata: `void`

</details>

<details>
<summary><strong>Uporabniki</strong></summary>

### Opis: 
Entitetni razred, ki predstavlja uporabnike sistema in omogoča upravljanje s prijatelji in urejanje lastnega prfila.

### Atributi:
- `uporabnikId` - int
- `ime` - string
- `priimek` - string
- `email` - string
- `spol` - string
- `datumRojstva` - Date[]
- `geslo` - string
- `opisUporabnika` - string
- `jeInfluencer` - bool
- `jeTrener` - bool

### Metode:	
- `dodajPrijatelja(ime: string, uporabnikId: int)`
  - parametri: `ime` - string, `uporabnikId` - int
  - tip rezultata: void

- `vrniPrijatelje(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: Uporabniki[]
  
- `potrdiPrijatelja(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: void
  
- `izbrišiPrijatelja(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: void
  
- `posodobiOsnovneNastavitve(uporabnikId: int, ime: string, priimek: string, email: string, spol: string, datumRojstva: Date[], geslo: string, opisUporabnika: string)`
  - parametri: `uporabnikId` - int, `ime` - string, `priimek` - string, `email` - string, `spol` - string, `datumRojstva` - Date[], `geslo` - string, `opisUporabnika` - string
  - tip rezultata: Uporabnik[]
  
- `posodobiTipUporabnika(jeInfluencer: bool, jeTrener: bool)`
  - parametri: `jeInfluencer` - bool, `jeTrener` - bool
  - tip rezultata: Uporabnik[]

</details>

<details>
<summary><strong>PlaniPrehraneInVadbView</strong></summary>

### Opis: 
To je mejni razred, ki omogoča uporabnikom upravljanje planov prehrane in vadb.
### Atributi:
- `imePlana` - string
- `jeTrening` - bool
- `jeDieta` - bool
- `planOpis` - string
- `vnos` - string

### Metode:	
- `ustvariPlan(imePlana: string, jeTrening: bool, jeDieta: bool, planOpis: string)`
  - parametri: `imePlana` - string, `jeTrening` - bool, `jeDieta` - bool, `planOpis` - string
  - tip rezultata: void
  
- `iskanjePlanaPrehrane(vnos: string)`
  - parametri: `vnos` - string
  - tip rezultata: PlaniPrehraneVadbe[]
  
</details>

<details>
<summary><strong>PlaniPrehraneInVadbController</strong></summary>

### Opis: 
To je kontrolni razred, preko katerega se vmesnik povežejo na entitetni razred PlaniPrehraneVadbe.
### Atributi:
- `imePlana` - string
- `jeTrening` - bool
- `jeDieta` - bool
- `planOpis` - string
- `vnos` - string

### Metode:	
- `ustvariPlan(imePlana: string, jeTrening: bool, jeDieta: bool, planOpis: string)`
  - parametri: `imePlana` - string, `jeTrening` - bool, `jeDieta` - bool, `planOpis` - string
  - tip rezultata: void
  
- `iskanjePlanaPrehrane(vnos: string)`
  - parametri: `vnos` - string
  - tip rezultata: PlaniPrehraneVadbe[]
  
</details>

<details>
<summary><strong>PlaniPrehraneVadbe</strong></summary>

### Opis: 
To je entitetni razred, ki skrbi za ustvarjanje planov prehrane in vadbe.
### Atributi:
- `imePlana` - string
- `jeTrening` - bool
- `jeDieta` - bool
- `planOpis` - string
- `vnos` - string

### Metode:	
- `ustvariPlan(imePlana: string, jeTrening: bool, jeDieta: bool, planOpis: string)`
  - parametri: `imePlana` - string, `jeTrening` - bool, `jeDieta` - bool, `planOpis` - string
  - tip rezultata: void
  
- `iskanjePlanaPrehrane(vnos: string)`
  - parametri: `vnos` - string
  - tip rezultata: PlaniPrehraneVadbe[]
  
</details>

<details>
<summary><strong>Sporočila</strong></summary>

### Opis: 
To je entitetni razred, ki skrbi za pošiljanje sporočil.
### Atributi:
- `uporabnikId` - int
- `sporociloTxt` - string
- `prijateljId` - int

### Metode:	
- `posljiSporocilo(sporociloTxt: string, prijateljId: int)`
  - parametri: `sporociloTxt` - string, `prijateljId` - int
  - tip rezultata: void
  
- `vrniVsaSporocila(uporabnikId: int)`
  - parametri: `uporabnikId` - int
  - tip rezultata: json
  
</details>

<details>
<summary><strong>DodjanjeTreningovView</strong></summary>

### Opis:
To je mejni razred, ki omogoča dodajanje treningov.

### Atributi:
  - `uporabnikId` - UporabnikId
  - `tipTreninga` - string
  - `datumTreninga` - date
  - `trajanjeTrening` - time
  - `nazivVadbe` - string
  - `tpiVadbe` - string
  - `misicnaSkupina` - string
  - `stPonovitev` - int
  - `stSetov` - int
  - `tezaOrodja` - int
  
### Metode:
  - `dodajanjeTreninga(tipTreninga: string, opisAktivnosti: string, datum: date, uporabnik: Uporabnik, trajanje: time)`
    - parametri: `tipTreninga` - string, `opisAktivnosti` - string, `datum` - date, `uporabnik` - Uporabnik, `trajanje` - time
    - tip rezultata: void

  - `dodajanjeVadbe(trajanje: time, nazivVadbe: string, tipVadbe: string, misicnaSkupina: string, stPonovitev: int, stSetov: int, tezaOrodja: int)`
    - parametri: `trajanje` - time, `nazivVadbe` - string, `tipVadbe` - string, `misicnaSkupina` - string, `stPonovitev` - int, `stSetov` - int, `tezaOrodja` - int
    - tip rezultata: void

</details>

<details>
<summary><strong>AnalizaTreningovView</strong></summary>

### Opis: 
To je mejni razred, ki omogoča analizo treningov.
### Atributi:
- `datum` - Date[]

### Metode:	
- `vrniSeznamDnevnihTreningov(datum: Date[])`
  - parametri: `datum` - Date[]
  - tip rezultata:Treningi[]
  
</details>

<details>
<summary><strong>AnalizaSpancaView</strong></summary>

### Opis: 
To je mejni razred, ki omogoča uporabnikom analizo spanca.
### Atributi:
- `datum` - Date[]
- `spanjeCas` - time

### Metode:	
- `vrniAnalizoDnevnegaSpanca(datum: Date[])`
  - parametri: `datum` - Date[]
  - tip rezultata: Spanec[]
  
- `dodajSpanje(spanjeCas: time)`
  - parametri: `spanjeCas` - time
  - tip rezultata: void

</details>

<details>
<summary><strong>AnalizaKorakovView</strong></summary>

### Opis: 
To je mejni razred, ki omogoča uporabnikom analizo korakov.

### Atributi:
- `datum` - Date[]
- `stKorakov` - int

### Metode:	
- `vrniAnalizoDnevnihKorakov(datum: Date[])`
  - parametri: `datum` - Date[]
  - tip rezultata: Koraki[]
  
- `dodajSteviloKorakov(stKorakov: int)`
  - parametri: `stKorakov` - int
  - tip rezultata: void
  
</details>

<details>
<summary><strong>AnalizaPrehraneView</strong></summary>

### Opis: 
To je mejni razred, ki uporabnikom omogoča analizo prehrane.

### Atributi:
- `datumOd` - Date[]
- `datumDo` - Date[]

### Metode:	
- `vrniAnalizoPrehrane(datumOd: Date[], datumDo: Date[])`
  - parametri: `datumOd` - Date[], `datumDo` - Date[]
  - tip rezultata: Obroki[]
  
</details>

<details>
<summary><strong>AnalizaFormeView</strong></summary>

### Opis: 
To je mejni razred, ki uporabnikom omogoča analizo forme.

### Atributi:
- `formaId` - int
- `ocenjevalci` - Uporabniki[]
- `ocena` - int
- `posnetek` - varBinary

### Metode:	
- `kdoLahkoOceni(ocenjevalci: Uporabniki[])`
  - parametri: `ocenjevalci` - Uporabniki[]
  - tip rezultata: Uporabnik[]
  
- `oceniFormo(ocena: int)`
  - parametri: `ocena` - int
  - tip rezultata: void
  
- `vrniKomentarje(formaId: int)`
  - parametri: `formaId` - int
  - tip rezultata: json
  
- `dodajKomentar(formaId: int)`
  - parametri: `formaId` - int
  - tip rezultata: void
  
- `dodajPosnetek(posnetek: varBinary)`
  - parametri: `posnetek` - varBinary
  - tip rezultata: void
  
</details>

<details>
<summary><strong>VpogledNaLestvicoView</strong></summary>

### Opis: 
To je mejni razred, ki uporabnikom omogoča vpogled na lestvico.

### Atributi:
- `ime` - string
- `priimek` - string
- `st_tock` - int
- `mesto` - int

### Metode:	
- `vrniLestvico()`
  - parametri: metoda nima parametrov.
  - tip rezultata: json
  
</details>

<details>
<summary><strong>IzvajanjeMeditacijeView</strong></summary>

### Opis: 
To je mejni razred, ki uporabnikom omogoča izvajanje meditacije.

### Atributi:
- `casIzvajanja` - time
- `uporabnikId` - int

### Metode:	
- `dodajMeditacijo(uporabnikId: int, casIzvajanja: time)`
  - parametri: `uporabnikId` - int, `casIzvajanja` - time
  - tip rezultata: void
  
</details>

<details>
<summary><strong>AnalizaObrokovView</strong></summary>

### Opis: 
To je mejni razred, ki uporabnikom omogoča analizo obrokov.

### Atributi:
- `obrok` - string
- `datum` - date[]
- `nazivZivila` - string
- `kolicina` - int
- `energVrednost` - int
- `ohVrednost` - int - vrednost ogljikovih hidratov
- `beljVred` - int - vrednost beljakovin
- `mascVred` - int - vrednost maščob

### Metode:	
- `shraniObrok(obrok: string, datum: date[])`
  - parametri: `obrok` - string, `datum` - date[]
  - tip rezultata: void
  
- `shraniHrano(nazivZivila: string, kolicina: int, energVrednost: int, ohVrednost: int, beljVred: int, mascVred: int)`
  - parametri: `nazivZivila` - string, `kolicina` - int, `energVrednost` - int, `ohVrednost` - int, `beljVred` - int, `mascVred` - int
  - tip rezultata: void
  
</details>

<details>
<summary><strong>AktivnostiController</strong></summary>

### Opis: 
To je kontrolni razred, preko katerega se vmesniki povežejo na entitetni razred Aktivnosti in entitetni razred Forme.
### Atributi:
- `uporabnikId` - UporabnikId
- `datum` - date
- `trajanje` - time
- `tipTreninga` - string
- `datumTrening` - date
- `trajanjeTrening` - time
- `nazivVadbe` - string
- `tipVadbe` - string
- `misSkup` - string - mišična skupina
- `stPonovitev` - int
- `stSetov` - int
- `tezaOrodja` - int
- `datum` - Date[]
- `datumOd` - Date[]
- `datumDo` - Date[]
- `formaId` - int
- `ocenjevalci` - Uporabniki[]
- `ocena` - int
- `posnetek` - varBinary
- `obrok` - string
- `nazivZivila` - string
- `kolicina` - int
- `energVrednost` - int
- `ohVrednost` - int - vrednost ogljikovih hidratov
- `beljVred` - int - vrednost beljakovin
- `mascVred` - int - vrednost maščob
- `casIzvajanja` - time
- `uporabnikId` - int
- `stKorakov` - int
- `spanjeCas` - time

### Metode:	
- `dodajMeditacijo(uporabnikId: int, casIzvajanja: time)`
  - parametri: `uporabnikId` - int, `casIzvajanja` - time
  - tip rezultata: void
  
- `dodajanjeTreninga(tipTreninga: string, opisAktivnosti: string, datum: date, uporabnik: Uporabnik, trajanje: time)`
    - parametri: `tipTreninga` - string, `opisAktivnosti` - string, `datum` - date, `uporabnik` - Uporabnik, `trajanje` - time
    - tip rezultata: void
  
- `dodajanjeVadbe(trajanje: time, nazivVadbe: string, tipVadbe: string, misSkup: string, stPonovitev: int, stSetov: int, tezaOrodja: int)`
    - parametri: `trajanje` - time, `nazivVadbe` - string, `tipVadbe` - string, `misSkup` - string, `stPonovitev` - int, `stSetov` - int, `tezaOrodja` - int
    - tip rezultata: void
  
- `prikažiAnalizoSpanca(idUporabnik: int)`
  - parametri: `idUporabnik` - int
  - tip rezultata: json
  
- `prikažiAnalizoPrehrane(idUporabnik: int)`
  - parametri: `idUporabnik` - int
  - tip rezultata: json
  
- `prikažiAnalizoAktivnosti(idUporabnik: int)`
  - parametri: `idUporabnik` - int
  - tip rezultata: json
  
- `kdoLahkoOceni(ocenjevalci: Uporabniki[])`
  - parametri: `ocenjevalci` - Uporabniki[]
  - tip rezultata: Uporabniki[]
  
- `oceniFormo(ocena: int)`
  - parametri: `ocena` - int
  - tip rezultata: void
  
- `vrniKomentarje(formaId: int)`
  - parametri: `formaId` - int
  - tip rezultata: json
  
- `brisanjeAktivnosti(aktivnostId: int)`
  - parametri: `aktivnostId` - int
  - tip rezultata: void
  
- `dodajKomentar(formaId: int)`
  - parametri: `formaId` - int
  - tip rezultata: void
  
- `dodajPosnetek(posnetek: varBinary)`
  - parametri: `posnetek` - varBinary
  - tip rezultata: void
  
- `vrniAnalizoPrehrane(datumOd: Date[], datumDo: Date[])`
  - parametri: `datumOd` - Date[], `datumDo` - Date[]
  - tip rezultata: Obroki[]
  
- `vrniSeznamDnevnihTreningov(datum: Date[])`
  - parametri: `datum` - Date[]
  - tip rezultata:Treningi[]
  
- `shraniObrok(obrok: string, datum: date[], nazivZivila: String, kolicina: int, energVrednost: int, ohVrednost: int, beljVred: int, mascVred: int)`
  - parametri: `obrok` - string, `datum` - date[], `nazivZivila` - String, `kolicina` - int, `energVrednost` - int, `ohVrednost` - int, `beljVred` - int, `mascVred` - int
  - tip rezultata: void
  
- `vrniAnalizoDnevnihKorakov(datum: Date[])`
  - parametri: `datum` - Date[]
  - tip rezultata: Koraki[]
  
- `dodajSteviloKorakov(stKorakov: int)`
  - parametri: `stKorakov` - int
  - tip rezultata: void
  
- `vrniAnalizoDnevnegaSpanca(datum: Date[])`
  - parametri: `datum` - Date[]
  - tip rezultata: Spanec[]
  
- `dodajSpanje(spanjeCas: time)`
  - parametri: `spanjeCas` - time
  - tip rezultata: void
  
</details>

<details>
<summary><strong>Aktivnosti</strong></summary>

### Opis: 
To je entitetni razred, ki se poveže na aktivnosti, kot so obroki, treningi, meditacije, koraki in spanec
### Atributi:
Ta entitetni razred nima atributov

### Metode:	
Ta entitetni razred nima metod.

</details>

<details>
<summary><strong>Forme</strong></summary>

### Opis: 
To je entitetni razred, ki uporabnikom omogoča ocenjevanje forme.

### Atributi:
- `foramId` - int
- `uporabnikId` - int
- `opis` - string
- `ocene` - int
- `komentarji` - string
- `posnetek` - video

### Metode:	
- `oceniFormo(formaId: int, uporabnikId: int, ocena: int, komentarji: string)`
  - parametri: `formaId` - int, `uporabnikId` - int, `ocena` - int, `komentarji` - string
  - tip rezultata: void
  
</details>

<details>
<summary><strong>Obroki</strong></summary>

### Opis: 
To je entitetni razred, ki uporabnikom omogoča shranjevanje obrokov in se poveže na entitetni razred Hrana.

### Atributi:
- `obrok` - string
- `datum` - date[]

### Metode:	
- `shraniObrok(obrok: string, datum: date[])`
  - parametri: `obrok` - string, `datum` - date[]
  - tip rezultata: void
  
</details>

<details>
<summary><strong>Hrana</strong></summary>

### Opis: 
To je entitetni razred, ki uporabnikom omogoča shranjevanje zaužitih hranilnih vrednosti pri obroku.

### Atributi:
- `nazivZivila` - string
- `kolicina` - int
- `energVrednost` - int - energijska vrednost
- `ohVrednost` - int - vrednost ogljikovih hidratov
- `beljVred` - int - vrednost beljakovin
- `mascVred` - int - vrednost maščob

### Metode:	 
- `shraniHrano(nazivZivila: string, kolicina: int, energVrednost: int, ohVrednost: int, beljVred: int, mascVred: int)`
  - parametri: `nazivZivila` - string, `kolicina` - int, `energVrednost` - int, `ohVrednost` - int, `beljVred` - int, `mascVred` - int
  - tip rezultata: void
  
</details>

<details>
<summary><strong>Treningi</strong></summary>

### Opis:
To je entitetni razred, ki uporabnikom omogoča dodajanje treningov in se poveže na entitetni razred Vadbda.

### Atributi:
  - `uporabnikId` - UporabnikId
  - `tipTrening` - string
  - `datumTreninga` - date
  - `trajanjeTreninga` - time
  - `treningId` - string
  
### Metode:
  - `dodajanjeTreninga(tipTreninga: string, opisAktivnosti: string, datum: date, uporabnik: Uporabnik, trajanje: time)`
    - parametri: `tipTreninga` - string, `opisAktivnosti` - string, `datum` - date, `uporabnik` - Uporabnik, `trajanje` - time
    - tip rezultata: void

</details>

<details>
<summary><strong>Vadba</strong></summary>

### Opis:
To je entitetni razred, ki uporabnikom omogoča dodajanje vadbe.

### Atributi:
  - `nazivVadbe` - string
  - `tpiVadbe` - string
  - `misSkup` - string - mišična skupina
  - `stPonovitev` - int
  - `stSetov` - int
  - `tezaOrodja` - int
  
### Metode:
  - `dodajanjeVadbe(trajanje: time, nazivVadbe: string, tipVadbe: string, misSkup: string, stPonovitev: int, stSetov: int, tezaOrodja: int)`
    - parametri: `trajanje` - time, `nazivVadbe` - string, `tipVadbe` - string, `misSkup` - string, `stPonovitev` - int, `stSetov` - int, `tezaOrodja` - int
    - tip rezultata: void

</details>

<details>
<summary><strong>Meditacije</strong></summary>

### Opis: 
To je entitetni razred, ki uporabnikom omogoča dodajanje meditacije.

### Atributi:
- `casIzvajanja` - time
- `uporabnikId` - int

### Metode:	
- `dodajMeditacijo(uporabnikId: int, casIzvajanja: time)`
  - parametri: `uporabnikId` - int, `casIzvajanja` - time
  - tip rezultata: void
  
</details>

<details>
<summary><strong>Koraki</strong></summary>

### Opis: 
To je entitetni razred, ki uporabnikom omogoča analizo korakov.

### Atributi:
- `datum` - Date[]
- `stKorakov` - int

### Metode:	
- `vrniAnalizoDnevnihKorakov(datum: Date[])`
  - parametri: `datum` - Date[]
  - tip rezultata: Koraki[]
  
- `dodajSteviloKorakov(stKorakov: int)`
  - parametri: `stKorakov` - int
  - tip rezultata: void
  
</details>

<details>
<summary><strong>Spanec</strong></summary>

### Opis: 
To je entitetni razred, ki uporabnikom omogoča analizo spanca.
### Atributi:
- `datum` - Date[]
- `spanjeCas` - time

### Metode:	
- `vrniAnalizoDnevnegaSpanca(datum: Date[])`
  - parametri: `datum` - Date[]
  - tip rezultata: Spanec[]
  
- `dodajSpanje(spanjeCas: time)`
  - parametri: `spanjeCas` - time
  - tip rezultata: void

</details>

<details>
<summary><strong>JymBudApi</strong></summary>

### Opis: 
Ta razred predstavlja metode za JymBudApi
### Atributi:
- `uporabnikId` - int
- `tipTreninga` - string
- `datumTreniga` - date
- `trajanje` - time
- `treningId` - int

### Metode:	
- `dodajanjeTreninga(tipTreninga: string, opisAktivnosti: string, datum: date, uporabnik: Uporabnik, trajanje: time)`
  - parametri: `tipTreninga` - string, `opisAktivnosti` - string, `datum` - date, `uporabnik` - Uporabnik, `trajanje` - time
  - tip rezultata: void
  
- `posodobiOsnovneNastavitve(uporabnikId: int, ime: string, priimek: string, email: string, spol: string, datumRojstva: Date[], geslo: string, opisUporabnika: string)`
  - parametri: `uporabnikId` - int, `ime` - string, `priimek` - string, `email` - string, `spol` - string, `datumRojstva` - Date[], `geslo` - string, `opisUporabnika` - string
  - tip rezultata: Uporabnik[]
  
- `brisanjeAktivnosti(aktivnostId: int)`
  - parametri: `aktivnostId` - int
  - tip rezultata: void
  
- `prikažiLestvicoTopUporabnikov()`
  - parametri: ta metoda nima parametrov
  - tip rezultata: Uporabnik[]
  

</details>

<details>
<summary><strong>WeatherApi</strong></summary>

### Opis: Metoda za klicanje zunanjega APIja

### Atributi:
- parametri: `kraj` - String


### Metode:	

- `vrniNapoved(kraj: String)`
- parametri: `kraj` - String
- tip rezultata: JSON

</details>

<details>
<summary><strong>sendGridApi</strong></summary>

### Opis: Metoda za klicanje zunanjega APIja sendGrid (mail)

### Atributi:
`posiljatelj` - String
`prejemnik` - String
`besedilo` - String

### Metode:	

- `posljiSporocilo(posiljatelj: String, prejemnik: String, besedilo: String )`

- parametri: `posiljatelj` - String
             `prejemnik` - String
             `besedilo` - String
- tip rezultata: void

</details>

## 3. Načrt obnašanja

### Diagrami zaporedja

<details>
  <summary>F1 - Registracija</summary>
  
**Diagram zaporedja - Registracija** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ1.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/rLNDRjf04BxxALRaqXuYJf6gA48AAEI2IbIL7gfUnlPW5Y-pxkuQKjwX3z4NoQcyLyS6_1DR5gsSGv50OkQRxvlvPZ0h6Q9OQkry_UnvDfQKW86Dy2688wDJ2WEjj17E05bE8RaAAiGbfCfzncTthsH46qwBW3_GL50GE6t6seHe9ZcPhvYz0IWKZw3TIZgiWepHkqgz49ManUyfKe0pkUGtOLNjwcOw_l0mQK4_WN4oa0cGgnMCN_NNXc_jriid4HynCN8DMxL6aek48s35uEukpuv6twW642aZm2SP3xoaL12VC9AMVGyO-KNYxaJYPw9WVcGyho43SJMJqSez6aIgaJtbUb0jc6XoHYk5v_Q2Oo0ZRe7FmonI5h7MT7hFhvhEuZpBYPDlGRgyro9pRd8yIzcnfbVNrwF6xBTYE9o78Qo5zWtiCH1x4AO4wSnvkGM7ZLAluMCcqEd7xPbQ6bWNVSExzwLAPxtNxNQcNx1Ue5L4lTBT2sOO3XSsmSClgZa55pJNvduxLwktZPLczQmQm-552ii1_VkdL5feaHvPPPLLyiz8rS-_jolfynPwMN8l6msnvLR-WpMZiiWqAKTmZoIsfEq_zlqLLWwtlFaaQs0lTABtsaW5h4ud1S9DBf7-nJpp8mzpb4cCe7ncjmkymHI75pofvZri12gCcP1ip5y8hDBRtYUxJFHDTiR13PfCCqAhqkgHTpzyUrzkHoUDFniFAVm3)
  
</details> 

<details>
  <summary>F2 - Prijava</summary>

**Diagram zaporedja - Prijava** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ2.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/tLN1Rjf04BtxArRaqXuYJfMgA48AgEH2IrGrFLIzZEq1ZrbstDsrIVqFV4H_f2VoNrqRC9lW80IfL1K996RUl7apymm9nIWcp3RaXo0mCr8PQ9YB4ABPL7EkueWbQs4rAEDIgAo7Yd42kRHVyC7UI9ggkKkBo7sWzb0GMTPzrZ7gGKqMIiU-1sWwha6BX2pw8ArvuTKBuIKD_iXHHJYYYNihzBjTl1lsttyOjA3lG5kAA0DbdnJqd-bhmxUg3Uf9n2VCDALGo1GLtMSk0aPqhg_hRA_tNVc0AW-Xebado7Ryugu6m5V2nQOwhBg1_baHUDcEk1ZHDB6t6b6rKNp6AHbtlyXz6yTLPC3AQfOIjyAYTS1ZFbJaEWw7D-xrf5ipnuRJkO1iBNOtuKPgVvIxNUrlwVAovyzz9RhTSHn3AZZKK68aIX3h6gusJGLOz0i2VsaUsQ5XhXmZ5gZf8v1yytQFzr3jMVrkqKXs3K_ag43KR1PsH0VFNJLeYjffcWKqqM1tsgC5Thlt9iF7NsfxCJXQtpC7lCJJB6pFHrML0ytWyJS9umAyMf9amI9VSz5sSFV0okOv4MLrcjpCtN5iGIcVwT1NCEF_wA_NCLECBJxz9ns6qg1Zo9qYB569Gh4vLUatI2mMpcvPrRmKd779cYIupWevD9PJN2rnBZIibhdAZnjblAPn5BiaJa7apTrUvFyxa-GfpY6jbfg8Z6EmCqhyav_ostpEv4VggV-30bJn7m00)
</details> 

<details>
  <summary>F3 - Odjava</summary>
  
**Diagram zaporedja - Odjava** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ3.puml)
   
![DZ](https://teaching.lavbic.net/plantuml/png/bLBTQi8m5BxFKmIzsIx4gy4O8ZYPOo1CXkxAczFsj4RJa-uqLVSGUuYzo_PUI-jFCrU65bAIVhyvTA4YbB4nDZ1R8VALeWmOKXb0k4hO51I5HXkMbe5o1o5PZnLX38MsKzpQWLO9fGwMeNiXUom8hU5xmn7oi38Bj7F_GpWcxaYRXRBeavZDnjDBwO4vlXL88OvLx1QXdzQ-6TtVFWmRs1DWgqAL0TdB1OrrHNKLEM6rXBLU8gbPviwGorQlLs7z_fmyM1OEXu3KQaw3A5MaSZTgnvlJ4yMwIdNxgHiySajaTG7v73aJU5MusVi7PHlWzpAY1bkoFLR9mZuo8lqosDM05qogqD2TThAX8Sj6Qpmq3tSVwkx_YbpYQ3HmZn2dW-Xq-bxlEscg_TLrEJUr1eiUAhmBbhepafiCpv29SoPnMhtRdUKPVdyIx4D5X1U5DbxlEAeguF1lWCmOYpn5LjBbHIQ5hmyZIsloOslB7m00)
</details>

<details>
  <summary>F4 - Analiza obrokov</summary>
  
**Diagram zaporedja - Analiza obrokov** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ4.puml)
 
![DZ](https://teaching.lavbic.net/plantuml/png/jLLDRzf04BtxLwp8fJr4d2fLLOG4ABILeWQf7uUgbx4zuBMN7NUzXeJ_aB_KK_g_EZO6RBmG71KaRDapxysRjplhI8OePaJMfmVFonAfKp2m43u4oTnGhiE051bX3UYCGwXjBIl46UJAViC7ErHohXSS5W5VqDIo8B1aHcH2DEEIp5VCtahOLTmahI9fiPva3ArgU25gmGn_vwW3l9Cp_ckiLxjwDnczlnqxigTWh0na2jes0AC3VQvyfrglx4HCZOnXgMBKydlApv29tirD6HiCVkbQMEGS1r_Bf5TXls1w6jr8gEFJlJenrA3a6kvzGmajVqXSLJH-8HdCOy7KJkg9gpivZ-n7WwYRX8cLIqsPbMFIrf1Ik5KMR5wKZ8uivfnCXlnpyrKal6UaVMnmRCMCLCxE7dfwVJrmTFb1i3a9_FqZDp6gOc_U5lRA9LXqe3o7NIM_evspAZXmdjF1Ortq-v_rZCm20XcZ8455C3-cyy2R0ZwjH0f-fkSdgMZFShQNMSHJByjNt5utr2U-4ACwMTii-0hehkfHixU1msBjnUj0qYfxGcY__xN0i8qef6kHG-oanRbxNYZnYdsKdMRaeq_jZXrH4NljmwppsFwVqRpWyBLwV77yK6N8i3op1jUeHI6igyAV45bSGhnfUIqefJKPgO3hB7YX4eYBkX4B2C4cCkgmvlSRBg5hdU4Szj-QuqKkraR1oJVUMvR4ynDan6_OqP3y69qZqpXxBzZx-ShQtnqFTVWF)
</details> 

<details>
  <summary>F5 - Analiza treningov</summary>
  
**Diagram zaporedja - Analiza treningov** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ5.puml)

![DZ](https://teaching.lavbic.net/plantuml/png/hLJ1Rjim3BtxAuJqiXsAdWeCGn4WIPTXGB4LMBTJBhJDn8mLqgCLfyq_x2Fs8pkj_pNPQHCxKuEqgm7RaFZq-4G-AQCKpLJ4nN8RHMLEN832miIGv3EL9QU9M57Z5BZq8MJNGgKuXQLrDtZh1fPclF1Xa_WFQWi5YHCTYgQeeuOijfxz7y0sumQqoiXX6wGggzPwOrh14dyiaHEyegb_6TlPJix7mtSVHW7qDQYZX0fWrramtDCNmWVLHirEpBNI72exHwPlXHz3QNeN5qsitvzmAsoMFWunKpxX6rzSr0b_ugbjqcalAdOPpO31qXfgc2-rLDy9Lm_KSIq4zAvc3y5wvkIAPfdxg8ZS9SqTLIobev6mKx4M7_Kccuc6Cu3odEFnm3zXlWSIxmLoTnsEHp53lyiesg_LwMa_kDFtfbAchxXcM5moLanP4-UPL6_UreMd2Xm6rqR1qZMP0XixEbDWRHIiPoVJi-btd0SadvrvsuWk8A4v6Z6mHHsG52ppFfFRYAFiwIhkzR3cy5CvtFycuyVovoTPwL15OBU6DbzYbLogrxB2QpRxlzjvNEy-mpprXz_u2-7-b_z9N8zQFKpna2-ERUoBqdJS_H87b3iBh0r30NdjXQq0CX9lhyCdj8JET8IS_WK0)
</details> 

<details>
  <summary>F6 - Analiza spanca</summary>
  
**Diagram zaporedja - Analiza spanca** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ6.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/pLJ1Qjj04BthAnRdqXv2JeLIWi5swb889T2q9rz6qiWUQJtZZjPoad_eH_H7Uch-gol9IMHtRUpIq0WaMCsRzzxEFcb6APfCnCLo4qLbGRm0XRc98IccAajE4x6YnYbmwKl8heDACOEbTTTuumQMfZptPPFu1se71OaJ7OgcgAE6BBQU_G_0es8BMit8OHUaAgjElp6TOedVbiW9NbBcRyQksicRyV3j-r40VGNgAA45iDje66xv2-63RgDc9-PAAOVAviZqPU7NK9hU-NbJw_Sdt2cRfQz3p5HC-DeF5tN27pcpZPpseiMJeXamMBg36kP7BTLNmjMQEgwDWDxMx6lOPz-JG8tfcPDBcixS1qNaJSR2KSLIEXe9EnLhyS5iqhve20CeppaU3_mLvbkJ-22GkztWU30pz5kCekr1dPxsWzjyPofbQYjomLWnJjSxVFMw7ZfLu33OUeH6AYdaDMkEdZKuxgOvC8z33GPQZnNQSXawmetcOwqTHBd3n1xRPsS-rw9pI2X78wQi7IptY0MFQ1VBhX5k7NvDu5yLSF-JZ5_Bh-zavOad0lludPbsHlyeeoyWXVyrPyyLga-GfrWh6VyplV-1XYLkrsLxV2aU5V4TgVihcOC-yhq9LRX3DbE5p413W26zq5ylGav_0m00)
</details> 

<details>
  <summary>F7 - Analiza korakov</summary>
  
**Diagram zaporedja - Analiza korakov** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ7.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/pLHDQzj04BthLopEfJs4d0gb18Fjrg4qb43JddmPIIDffFMiErhBIVv3VqJ_I4_D_-hg8udih8q5BOr1XjMyUU_Dw4aPnQWIOsneReAWB8XN8B1K8KH5AcRDSMIq4MK5k7GbPDj3nPZ0MjjhlB4JJIalNLb5xW-bXuB86faQYL5c3Lce7VipmADY2zfaPB4F4Z6RNhzIlMA9tzV84LvIuYx6ljh9c_dqxOUP1tq5OYcY5R3TQfZk-FFXlMw3PX9r9PH3fNDa-hfoPoZLwFoygOt72-wLrThL8MGg5dpjbekou8-Sw4PEHi7gIL5D63JTGGrpgpRLDy9DHntMHa1kQ_OEzidn5Yref4ukAStiXI3oDcLXgM9JMfePjcAqnWUtKNkZOVIW7ETyFd4_Frz7uf90zdQBuy7CrCqO1BkREZqTU-TyfofXQYlcFMF5b7KJldfTRvqgiEXj7Q0HcnZoB_Q9sBlofj-pacCzUbg72ZqtwdkGM_r3tHr5kT_70VDdPoxXHfOGKOxAgABkfko0eFTXxQNPjygT7DGCxbO1zxz8kRFv_OEqwH45e1zVEjMD-9S2-p8Y-Rz3zmyJzXdos4sLAVU9lV-9YatO78lkCSOuAF5x0jYgO0f3P8vwxGzcLU0EMQK2YOA60Bs2lczXW1p_0G00)
</details> 

<details>
  <summary>F8 - Organiziranje/Iskanje športnih dogodkov</summary>
  
**Diagram zaporedja - Organiziranje/Iskanje športnih dogodkov** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ8.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/hPPDRzim38Rl-XL2UzaEHKy3Xg0eq8zr252i1TRjCFH2sqoYs24zMN5R_xZTzhyc-IDnOybfYWL8W4ZaG_5zPIOBbQ2SCPk8duKeKaKvQ5Z92E9qhdbDISmPQsaqK66ta4mlAi4Ph3FpWC_c8bDpMjbj6TiFrBqeY0thIzO9wgiQ5cMMFWZOL6o2dXRAO3z8QtxgvKlPsopmznefnbiris_2VhNZJpUNdxzSUQBlGHiLgnp879xWFQweMv7tMYsXp9P8waTklqCXZyxEwhtpyqVgRSkrtOU8LFf83rPTr8yqfLbMbzD78jzMbDCY1LhYDSyvIRdygV2f9KVk7A1V7DmJTIIFRzLyORvgH7g5lDDp85Kf_GPmC3QCRng5Rr27OneW-yB2qAQqkc8ochCCEtdZPi411o6MTdDpOLz34gPjlhssohniqZ7jZd1ftH1YrzEJatEV8nDPQbBViI9OTUiVFhfxeKemw4iHFcCTVj36FlWWGGp5se0nVHCEKz7f53ZJwMc3a6M12vcqe41fhsG1GaYN7IjSlbrAuUyVvGWj04M2ex9xBVNTnOdCTrRxAlaoXFVc1_JpmFVO5ieOy-YU2quuSjsYL3HZlO9OBL5ogzSwKDMlo9k0GHL23bP08FCj66JXVdbwo9wdNk45P3jZJNQcU_qEJhM992vRybsaeSAuxtemJuHdQi0RNvqz5o2OCde3QeMLv2P5Lk0uZRBTKpueEQBFNkAu4gDteB6zQiWnhdRHXtgvBam9McsVbuDT6X3sMEIF7_Dd-kePijtQjZtN_lhzVerL-0zcMQ3gWBmI0ZCxZ0cj4Xeh95aI5-yvzYzO62nXwUQUBIavvugroi0rqUB9jkBuGwbU_HuUtELTKwiTkVMmcyFsNzlU8uJdX41A_W40)
</details>

<details>
  <summary>F9 - Dodajanje/Iskanje prijateljev</summary>
  
**Diagram zaporedja - Dodajanje/Iskanje prijateljev** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ9.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/vLPBRjj03Dth58Daqow2h0eKHH0WTkeYG11aaNJb3INHDkKnHnsDbTHto25yaQxYUvMIVr8wLIGRNTM0BMj8FfAFZx8d5ACQ6UD2ynm4sPGu1Gip5K8q7LipvpWosbZbB70c9cHNyOfn17Fj7l3PNMaQyqpCAf8Fj1KlY9onFMDZjFqIBDI2_eV3BkFQwMb23gjErfgdIhnI5ME6F-R84TxIIDwCrModdmQzpr_x7kzxi8uYIe5TBQ3tfZwVlxVQeEn4tLjA8DS9CZscSW-PEhcuA6sNbqEkcDLSx10oJOVy8EIY7V8DZtIPpfu4wJwZkcBGj832JQWs-NV2fmrqM1G2zkSEtQ5ECfT3uNEYJczfF77VB2BN4QUESZQPexvXPutMk2qsMX-i0Ss8zDv3y0Q3AtdviJO08W9oPK6FsnPfMqbF-Wk2jooTdLrwU_oYSikqQmi-V2nefbpklFw1bwWItTDl8xh7F_2ILaDl1Rd7QIZj_5p4OEmC8afG6PLkCMdIK8UNmqQeln7sPaG5YXnDOVMBP2aMBBknmy5SvA-TkZOnC4tKQebA15wpj-lv3f9OLc4CHJoRSFrzjodGlVNt4GzYG0xCwmjf8tmwbCTX1NFJ_mpg3237NPGV2vb9JKaTnUq1QA7VXgWkQZMPXb82PhNaXDIYGeOydSpH6du_mI5pJOspyNggxsSeDNy7ARo-57v2d9jITR_c_vVii_BevleiaGlBbCBCGGATbP-b5fCP7QDzBqGBzJV6TT1_YOFk7ov0cmn7Ra2B55t6IelGqcfvr5pz62q6snpOOR8bK0QCineLyo36fb_wmuRSALdjdygHes-Ls9FZDm00)
</details> 

<details>
  <summary>F10 - Vpogled na lestvico</summary>
  
**Diagram zaporedja - Vpogled na lestvico** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ10.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/dPF1Rjf048RlVeeHkRHIevmgLLM41AX4aL2KGv8Jbx4zcC7BZBjUJ99tw4FqHNfgtgjh4mURRX0A4aZi_FlDFx_7Iqu95gekriSeAdEM0Ysk8SOapwnk94tKg0LdKKfV8d4TLKeBt1XtHuzkP3YJjIz3ud_8TbIOEBLZjIdPIGEBZQV_9tZhk1Djb-oeAx9Mjvtx09rYIJyt90dDUE6_GjrkPr-dusy_9W7rBLh72HSehdTXVE0lf0-wZPf9uDRo2Ykp8k7xml_74WQNbqrjE9nBfmmRNyTOE9_BdG-Nx5okPM6QTdOG5VkEC18q_8orp4UjrGFJzXKTrqRGFjNqXq8pG-aDpgXq5ITQwmPmDkDiwQuiaVIfkUDAj7GyKN5MZQ7MSB8xgA4XbMTEfoF_2VDU8NuPs3tr6QsRiPypYWxJEZyV1cVz3fKLRgVwzBaEcojq55H7mRWQTc2M8-o0EWg6rcEV0DnJZjYwkF3he7QD2Qy85CoEo4Si1ADxd_DUJ0UFfKRuennV_d1xM_t26mVtxGuZlFmcy5ijk6zmufWtk4hz_jUtyKtI0wLqBCDJO_XOdzx3_qXYfJ_Glx_Og0_VqVeBfBX_-TlSjB1OiUawOu4CuHcT7WRRzHbw0IAIz1y0)
</details> 

<details>
  <summary>F11 - Objava treningov</summary>
  
**Diagram zaporedja - Objava treningov** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ11.puml)

![DZ](https://teaching.lavbic.net/plantuml/png/dPFFQjj04CRl-nI3SqcX8QT2AS5WEtKfXE13sfCl8sbiZxIUKLShESaxz9LwQj-hApb_96UJD1L8e9rlV_FDfzM6CuALga_qsfYgO2dHuHOIJ8krqrgoLAqwy0wb2YKItrDbjCBQ-YkwzXFBQzc6CgJXGQwdmjIhcwhBoCqwM683_OdWeUDUjDkmfxx8ETtrzWFqYXNzg4bIkk1Lk8NwtOu-pASVFyyYwWKwpocNA7wmONhWBwQFkZNT9B1md6DZSnB-LePth61qTjRLnkEbzCfGXpecmiLIhaAuv9RoLLQsQ-T6fdpi21D1oxVOoaBKsdndsjsXazO8kfkMVguPvYWvTK9PxuKZEBhWzSP_SKGon1QU6z7Ayqp5ExMMxXsd-uMM6bC5vdm-2LUSTmS9fu7zpP1nxsOQ1ZNcCAwJat5qs4-G7So6n-_QoBb1Jz4j9XfQro0oq6iD8bjCDBv1Wt-bFg9UC7Xw6ew7kYscd1De-2yxOcqoUedun5mqtcVXpwPuyEbQH5WgyCyl1ewp35eFbrZYxvyaqBepR_Uv28dwWdjS4AuKcf8h58wcCVXg_pEGbdghZgs-XmoXV8E5sCaq9DbV)
</details> 

<details>
  <summary>F12 - Iskanje seznama vadb</summary>
  
**Diagram zaporedja - Iskanje seznama vadb** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ12.puml)

![DZ](https://teaching.lavbic.net/plantuml/png/fPF1Rjim38RlUWeXlMo7egS1mr04I89bA50CFdGzvKBRJC9OeJnQJhezt6vxhz5kkjYDuWsD0VjW_VpqYp-rfXpjqlkG-YTZgeAu186jJI4hLk9hpZFllDWWm9Kk8OUEAiSbr2uyu5EOE5hnLfTjfX-KZWgou6Ng9KUPjR3KAVr4y7V7Pz5-JG6x8X6_xzHRsrciy7kDdE4zBVLbxEvszM4-_VXv5b4d884oAe53hs3wobzC7tLhsfFOhrWARM3dDiZqhTG_KDdHxMsxEXulk2UmjIeWPIfaT00am-L9h7Z13veEoeBlUEbQlyehZvRjXC7HJsXacfNVFHBk3-YqEGd8ZvRkW2aHN6laUCUFaAUDScIlxccr3by4aVlS8j2EVHLevZc8TmvVB6VFFnhi9C8zwfK-dq_qYPCFE9qi2kTClXYSwk6DEStW-deSRS4dIrK1lC662GtftVic1zf1m6Y5YNQovKTQyGz-fC94EzhZ_oVqI1gmTtEZ4-Db2nbjq7fRAhAsEsNYW9De9mTHvvfs4bN3qHaluFSlidGMQC25pbMnWShZTG1Zaai6uFA8tnZYfOdbE3G6bySOu_TczrpZaZU5tDqkTXKDSlu7)
</details> 

<details>
  <summary>F13 - Iskanje planov prehrane</summary>
  
**Diagram zaporedja - Iskanje planov prehrane** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ13.puml)

![DZ](https://teaching.lavbic.net/plantuml/png/bPB1JiCm38RlUOfeNE20E24XX2Pj4qD877O0JhkuhRTvpPpYfXtmSDnuBzp2MBS519LQgV7lxtV-P44Psfdt8V7FnfGvSG42Avj0ci_5LvobtdcnGO1BBI67ZYh36LGktEDp63YQyqhBDjKFIaS5QV0oz9AXZ5fOufH-8FXs_1Ij5nImAnBnwqw_jPrYYKyLSeftDDENiUjsT3uUNboF8ke9IA2K2k2mqp3Sco-cZqvhsftOYT0IQhT4feT2_w6qlQkhjjRlJxbJjfNM8M7AftoluQ9C-PPdhhMJdYcsZdR0uEWL6fb6xUj7mlKNEca60NbfwGwO9e8BFJ6yvKV8aaRPiqTtD5-46q7aNMuUg6PV1Xfv3kATmyt8wUT2Wnr4k5kzqiVZWJvnyXTEBmQ5duRS33ZKpHkp7-7fQJyQmAMbCWTUOaE43V7uf3a9gY5WjCj4ismz8c7ymIFIPQAvxdZy0xob_JBcsPdU7IyhI6c9rjj2iPMjDLmq6Vu6FHWn6lL_-Jjf_9JutaatBhgKm_iRMVgJNOJy0G00)
</details> 

<details>
  <summary>F14 - Analiza prehrane</summary>
  
**Diagram zaporedja - Analiza prehrane** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ14.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/pLNRQjj047tNLop9ImiDUIgK4WosgKiX54FJFlbb98tjqML6NQtanF_GZ-YFvAd-huxaIsLtuzgqb0WiLfepvvoP7Qtd5AEPYhXGxeEWJ8aBi92R4A9qPgNYE99Ch74MkDGGikkWOfn2bRaxl7VzZ6QSQzX4UaFRGK7an0x4ncY7BLcOAVjlW9tY6hIOayCko5fPTFADwGHB_5eXHtXBK_qnTjKkNuy6RzuDFUWnM4SH5S1kBs5muC-7zxeDsahCs582TPOWq-T2dw4q5pStRQpNct0dR2gDGyYKJlXEcujsmXzuchLozY8eVYcQFaD6IsXWscgfln0kDjHXOmJiGyE-WOqjpdNFi45TcCjRcitTUul8-vofevgbT3GKTbQo3BTse_MBbjA3KixHgA-Ndsz3egD0xc6FOsjce4K6mM6hhgvwtaBVcjeohIEohUt5owRXL8D3Rz8Px8Mb55QF7WLlsriYJrV-RDEJTAx44Q--xTmZEjtWIMGdM3bIoFMrphhO729Aq8YojUbqHDgxUK_pFDNOWy5eACQRKem-ouzlb4cNAO1izmMQRPb_FRtFPZwVmGJ-Zt7x24ciXwpHWvSbR5R5TYjZz7m2vm_YMe7cEmbTIcWbbVgiQVn4fSFSw6jwPM8mjQ5bs1ZDbIwMCAaQXPfnzRtLM4AbVN6woY6rqWvjzc_j-pfqqYbsGdagbylgaMMznKjmP696hM-cjQiIc1JqVvQIFHk-Cpz0Zdy2)
</details> 

<details>
  <summary>F15 - Analiza forme</summary>
  
**Diagram zaporedja - Analiza forme** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ15.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/hLJDQXj13BxlKmZdqa93JeLIGY0sTIaDnT2qfrpaNTcMTppQpipQITuX3z4NoIbvhshNFzbrngvTQh31qgTFqZVVp8GpWf586CfjalYSRO4EPp34D1yxAMsMYX47mQ7rcY8R6gYCHbYQS4stuTBmsCuq3Qd-a6kWC0tYkk8oShsQR6YK_HLWqt49MamuK1Fad2mQzG2DfATV9TcKhdYaNqlDRYVl-zqFdteHz01Tu9GBjA5LqDsQBuQFJflKcy30yHJdPagMVnJw7prqpi_htCN5ZMsaeTGy3YtdD_QB7PcwZUkiUAvLRdfLlensak9b6hYqQFWUgvGUWyn_CYrMTSDgI7HtLUaArXStemhIWPCh7a_2PqTasuHvuBaL7xWdDZWnPZD8kWpKV16KSlRxb_g9ywr8r2CSxbeSws6wgaAIR6juUdeHtV8ZP9BXT23UKg3ypTjAEvvZe2WyYIfLaqTssKSUWITHrLhaXp2-qEmPxEnC_QBdYAdg10AbB-ZvjwMPMie8PkMUOQ8o7a2uIxgjiwguD9JZyoE3ru0yFR2HA6U2PkDUg7sPh5o_UrBH5uOhhAXyVqNNUd-Lwcb2fmL76g3Lx5_CqsnzW3tQ_GxrKwp9yUPXm7f1Xb5z4Xb5pFcVVBNTQwUqomEkUBwp3seTjHe3RpXbDsT2nXDyez87H_Tawp06AEhRb-FngwplBKm9vc2nmAU7oivBuZAgMEk1EE8ADTPz1nbkfWRTSoRFZrRMwpeC2l4uFMIisAEOaCt-0000)
</details> 

<details>
  <summary>F16 - Ustvarjanje planov treniranja in prehrane</summary>
  
**Diagram zaporedja - Ustvarjanje planov treniranje in prehrane** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ16.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/hPF1Qjj048Rl-nI3SscX8QT2AS5Wcxe4Gj4XzQcNaJIsHrxFgAkLdFeTyaezfU_LbHB7ihDEQAX0WjtvzvjV_qXBpWdcgZxLMsEg5Kk93jUGOhPQEAqbpzIg0-zGgb0YyJrLJdEihR-XMp-ol91rA4CM7kHwAioykh6wdDoaWwKsq9y9dZe-Y3PBzjGNEQURtdc0Nh6YdpL9HjSy3xTGlzlPn-duqvT9H9sWyvnnYU8F3eoF_CNqKRUcUnD871VOs8A4lvTXZHKCBY-xsd3uGsv2YkG6fjpZO2HeUOjjAUIepOnfytWkRRkW-zKUJImA9uwMOHnq9JFCqrOvWBDhNYpzLqSaXzoLvqQqyZnHyKwjfPsVx66ZnOuYtBq-qAVJKRZYv4TSc3hxKoPt1iUs3YaTvtD-Fem6y1dgoZVek2M-Uz-comrwYefDDC8E7SdWD3eYDj4K3z2ly_QG5qnTN5p9NDqQCou85Cf0gqrEB-6UUOec6IN3wT2EPjG2mjOA__ncu1Z9eFNm3KkyloE1rfdvTu-9sW9XY-2vxC08mg1RwQZwDhjLsD3xExRw0NA4jJei55Bst6kpw_46qxCAeUoC2rSAl0qB2KumEhY3x-e_lqxpvEI4YTX_OqZolm00)  
</details> 

<details>
  <summary>F17 - Urejanje lastnega profila</summary>
  
**Diagram zaporedja - Urejanje lastnega profila** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ17.puml)

![DZ](https://teaching.lavbic.net/plantuml/png/hPJ1Jjj048RlVeeLN5gfY5EbgaAHagYWIeZc03tbCh4dOUpDZBkxTYZlm2lrHD-hOpiXJbWGK28bKdPclldddxMlAKCp5mapkKaINn2Nu61fPf0M2oSLPwbOSIOuOAyXvD3Bod0EbGsNU1E6bXQyrB19zGTTBmlI86uaBaCtRc4pg_H72GyTkwJLDGNi9padgrwzCRsWnryLSehdDDSlOx_RuUVJqPTluqZs15oWb4hWi5CmsjCNou-gJTf9pCHH3hNDaUcgrF_WpS79IHiR3ARS2vjAup1ZAgPygUQYc_9tdjksdJj8ocr7CsImT0jDcbejzK_2rHezQuI0-ztGhnpcm3cUWm-C2vWucPE59ll079xJuZgSEKJUPHU1QXOVQ2mSd5YB6zbfTz09Rr3R3EMTdWxr4sUj0NeTA7JIDiFIHib89qsIVR-EZWRHQR-QKhnaCgCVNeyOBtH6g2dK-E5ZuptL431QcaJTQnj5HdzfeqXf4hLofz5hwLlaCuAFZoSTjBjNfMGG2ZAolM5Lak5py4TwenjuIPydlTvRT4jpLC3VFxJnf0dY6ekxs0HiC1TGmlqTicaq9szHtmc-1OCM2orXVT0DWxTI6oOlfdIw3ClqjZcy7iZz7LbHzG6Ndqm63pQzfElhPpf3nPXSRNDOE6qaxoXTiOkMluN_b-iTpAFHDLSvBY6NwCNSUQRURHgF_LrqMfuG4dkB9CZPFm00) 
</details> 

<details>
  <summary>F18 - Moderiranje vsebine in profilov</summary>
  
**Diagram zaporedja - Moderiranje vsebine in profilov** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ18.puml)
  
</details> 

<details>
  <summary>F19 - Izvajanje meditacija</summary>
  
**Diagram zaporedja - Izvajanje meditacije** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ19.puml)

![DZ](https://teaching.lavbic.net/plantuml/png/ZPB1Ji9048Rl-nGRlEY1U38nXf004MEYYGVrn6NQ3Z3jCeFJfGWFvyttSbj52wx49ctIdN--_UVVdLE6TYhY4tarfYo8bw2mi0canKnbnLagJjHw1Iv32TctL1bEOUNy8xxwWQCPBqBPfk63sb91waM7eXdgg84bBj1_2Rvt_1Ijv-InBLALTQlVsbQnn9SLSeftD0qlOtktaulnyF9w554_W7fAQGdizng61_vY-gXRqqnY7vHog5oEJ4_By0-bxVHwJQtVdt2hR5UX3WbJCU7742xgX6zvwfhjj6EMFplQ0OEZBTIo4BLKpuJhBtHI6m7TrFJRRGKvS8xtc967b7AibHrxSaUpkRzHHDxd5fugbjBJIDYhE8Sxo-ddGesDgG9pF1w49yxxWeJhG7wppzYv6OP9ZJdCgzljHwUzifbaa7yF9gTdTU9KWSTeWubcrk0Zunp7HnfCDBez_F-OFw0ZvixFmyqGNJH7QiKkTamo6HvZ_Z8NZVO8_iyK3mwkXeIb0jxVoD9Vj0y0)  
</details> 

<details>
  <summary>F20 - Meet and Greet</summary>
  
**Diagram zaporedja - Meet and Greet** - Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ20.puml)
  
![DZ](https://teaching.lavbic.net/plantuml/png/fPRFRjim3CRlVWgYlMo7egS1Gr0KQBjr2D2r1TRrCEH2sqoYsA4yMNPRFznkUw_9Vn8xiHJ7NO06g4J-A7qV9MKfGeAvbDgNhvwNHe8JLBW67uDeeMJ6OI1ZgK0hvDHC4UjEL4Xpp6BzHA_wAXOBNfjf2CmNgKuK1bggQwb2KZSLp8yDlHUmhLW7lIo5fcwGKlAbam_GcKpfTqOSq9sOcp-cRhNJJxVNdx_UMA8VKMaHY0HPZq-mBjUhjWAFIgmmZrV4ucTY_iSKJYukghdBonbtfY4py-YpY6RyPDGbDUCfp-Egd3ffUEt8FgeRcxIhWsaQ8Q_eYrp8C9Bviw2N9jKlrupghShkHvt0wPrOBFKtHSGxo0UrG1Q5K4U0dR5kV2qAtcCLJf63R0jpG-lIuaQoLZAEj_e5zK09x8KOsktjbVdqIHGr-QR5XNxRfbEqMSArSSFpzlq_ExkqEJA1NB7uGGNZUZF-uMFfkSXHaot5inbRudlR68Bt4ho-M5imHKVXAF8sEZdMT7vU8o1FQGbX0uBlH1gGGoWjr8wLM1Ky3kXIRS-e4cU68lpxHvJ0XaVxk90EUcJrtzQu4qZsHhkIsZ8ywp5nY6s13tZioZXawADCPIZzShS4WkTIhJ4GAmBPo9STPwzTeFVmdHgvx2wG4PAs3a9QFdZk2fq6iBhaORntOJRQOQypswkzNA7pufm0oxmfyU0hB2ZezeepptDVsmv7RNK6siQPSh1lAkK5o3e52YmvjU8cxwYUEI3Ns0A7TMfjscsQka-AkaP0wu4Y8-pEKfsZ4kr176raZp3WeZt-a8NJdTDezcq463unEq_5E4j75Fm_FmrQRD1otREHOlCut9DHJ5513Cyiq_VivnSkDUMuAYzUimAGYIoa4Z6MkslmRFQO6txMqt3dzHwptuUwJ7FTLpVh0jkVeeFLtRUDHnp-0m00)
</details> 
