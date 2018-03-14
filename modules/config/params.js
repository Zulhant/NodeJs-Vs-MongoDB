`user strict`;

let randomName = Math.random().toString(36).replace('0.', '');
let Nik = Math.random().toString().replace('0.', '');
let depan = randomName.substr(0, 5)
let belakang = randomName.substr(5, randomName.length)

module.exports = { randomName, Nik, depan, belakang }

