db = db.getSiblingDB('authentication-srv');
 
db.createCollection('auth_request');
db.createCollection('user');
db = db.getSiblingDB('user');
 
db.user.insertOne({
    "registerId": "abcdefghi",
    "name": "quentin",
    "lastname": "melis",
    "birthdate": new Date("1999-11-10T00:00:00Z"),
    "genre": "H",
    "phoneNumber": "041234567",
    "pinCode": 1234,
    "cardNumber": "1234",
    "password": "$2y$10$vheS0L6gW8jwtwNG/EgKL.dRKfqumVfwnIkQhoSvqDAU3Vh3s/PDu",
    "enable": true,
    "email": "quentin.melis@student.hepl.be"
});