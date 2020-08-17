// app.js

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const admin = require('firebase-admin');
const serviceAccount = require("./firebaseService/firebaseServiceAccount.service.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://insurdinary-a02d7.firebaseio.com"
});


app.prepare().then(() => {
    let db = admin.database();
    let date = new Date();
    let dateToString = date.toString();
    let formStore = db.ref("formStore");


    const app = express();
    app.use(express.json());

    app.get("/", (req, res) => {
        app.render(req, res, "/");
    });

    app.get("*", (req, res) => {
        return handle(req, res)
    });

    app.post("/form", (req, res) => {
        let pageRefFormStore = formStore.child('form/' + dateToString);
        req.body;
        console.log('req==>', req.body);
        res.json(req.body);
        // console.log('res===>', res)
        pageRefFormStore.set(req.body);
    });

    app.listen(3000, err => {
        if (err) throw err;
        console.log("now serving localhost:3000")

    })
});
