// use to create an API
const express = require('express');
const cors = require('cors');

const app = express();

// // use to create post API service
const multer = require("multer");
//
// use to process database using sqlite
const sqlite = require('sqlite');

// use to process database using sqlite
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('case.db', (err) => {
  if (err) {
    console.log("Error Occurred - " + err.message);
  } else {
    console.log("DataBase Connected");
  }
})

const db2 = new sqlite3.Database('fnish.db', (err) => {
  if (err) {
    console.log("Error Occurred - " + err.message);
  } else {
    console.log("DataBase Connected");
  }
})
//
// for application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
//
// for application/json
app.use(express.json());
//
// for multipart/form-data (required with FormData)
app.use(multer().none());
app.use(cors());

app.post('/case', async (req, res) => {
  try {
    let school = req.body.school;
    let conselor = req.body.conselor;
    let age = req.body.age;
    let gender = req.body.gender;
    let summary = req.body.summary;
    let detail = req.body.detail;
    let newQry = 'INSERT INTO "case" (school, consulor, age, gender, summary, detail) VALUES (?, ?, ?, ?, ?, ?)';
    await db.run(newQry, [school, conselor, age, gender, summary, detail]);
    res.status(200).send({message: 'done'})
  } catch (err) {
    handleErr(res);
  }
});

app.post('/fnish', async (req, res) => {
  try {
    let referral = req.body.referral;
    let name = req.body.name;
    let age = req.body.age;
    let grade = req.body.grade;
    let address = req.body.address;
    let city = req.body.city;
    let zip = req.body.zip;
    let parent = req.body.parent;
    let email = req.body.email;
    let phone = req.body.phone;
    let reason = req.body.reason;
    let newQry = 'INSERT INTO "fnish" (referral, name, age, grade, address, city, zip, parent, email, phone, reason) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    await db2.run(newQry, [referral, name, age, grade, address, city, zip, parent, email, phone, reason]);
    res.status(200).send({message: 'done'})
  } catch (err) {
    handleErr(res);
  }
});

function handleErr(res) {
  res.status(500);
  res.type('text');
  res.send('An error occurred on the server. Try again later.');
}



app.use(express.static('public'));
const PORT = process.env.PORT || 5000;
app.listen(PORT);