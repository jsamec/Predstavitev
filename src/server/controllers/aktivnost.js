const authToken = require('../middleware/session')
const checkSession = require('../middleware/session')
const Uporabnik = require('../models/Uporabnik')
const Aktivnost = require('../models/aktivnost')
const Hrana = require('../models/hrana')
const Obrok = require('../models/obroki')
JWT_SECRET = 'mysecretkey123'

const aktivnosti = {}

aktivnosti.ustvari = async (req, res) => {
  const { payload } = req.body
  const { id: userId } = await checkSession(req, res)
  const aktivnost = await Aktivnost.ustvari(payload, userId)
  if (aktivnost) return res.status(200).json(aktivnost)
}

aktivnosti.vrniPoId = async (req, res) => {
  const { id: userId } = await checkSession(req, res)
  if (userId) {
    const aktivnosti = await Aktivnost.vrniPoId(userId)
    if (aktivnosti) return res.status(200).json(aktivnosti)
  }
}

aktivnosti.vrniVse = async (req, res) => {
  const { id: userId } = await checkSession(req, res)
  if (userId) {
    const aktivnosti = await Aktivnost.vrniVse()
    if (aktivnosti) return res.status(200).json(aktivnosti)
  }
}

aktivnosti.ustvari_hrana = async (req, res) => {
  const { payload } = req.body

  const { id: userId } = await checkSession(req, res)

  //combine 3 numbers into date
  const datum = new Date(payload.year, payload.month, payload.day)
  const obrok_ime = payload.obrok

  //check if aktivnost exists
  //if not, create it
  let aktivni_dan = await Aktivnost.vrni_aktivni_dan(userId, datum)

  if (aktivni_dan.length === 0) {
    aktivni_dan = await Aktivnost.ustvari_aktivni_dan(userId, datum)
    aktivni_dan = await Aktivnost.vrni_aktivni_dan(userId, datum)
  }

  //create obrok
  const obrok = await Obrok.ustvari_obrok(userId, obrok_ime, datum);

  //create hrana
  for (let i = 0; i < payload.hranaArray.length; i++) {
    const hrana = payload.hranaArray[i];
    const hrana_id = await Hrana.ustvari_hrana(userId, hrana.imeHrane, datum, obrok_ime, hrana.kolicina, hrana.energija, hrana.ogljikoviHidrati, hrana.mascobe, hrana.beljakovine) 
  }

  //convert string to number
  const prev_tocke = Number(aktivni_dan[0].tocke)
  console.log(prev_tocke + payload.hranaArray.length)
  const tocke = await Aktivnost.posodobi_aktivni_dan(userId, prev_tocke + payload.hranaArray.length, datum)

  res.status(201).json(obrok)
}

aktivnosti.vrniLeaderboard = async (req, res) => {
  const { id: userId } = await checkSession(req, res)
  if (userId) {
    const uporabniki = await Uporabnik.vrniVse();
    let leaderboard = [];
    for (let i = 0; i < uporabniki.length; i++) {
      const uporabnik = uporabniki[i];
      let tocke = await Aktivnost.vrniTocke(uporabnik.id);
      tocke = tocke.rows[0].tocke
      if (tocke === null){
        tocke = 0;
      }else{
        tocke = Number(tocke);
      }
      leaderboard.push({uporabnik, tocke})
    }

    //determine rank
    leaderboard.sort((a, b) => {
      return b.tocke - a.tocke;
    }
    )

    for (let i = 0; i < leaderboard.length; i++) {
      const uporabnik = leaderboard[i];
      uporabnik.mesto = i + 1;
      uporabnik.napredek = 0;
      uporabnik.ime = uporabnik.uporabnik.ime;
    }
    res.status(200).json(leaderboard) 
  }
}

module.exports = aktivnosti
