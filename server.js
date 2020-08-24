// server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// const admin = require('firebase-admin');

// let db = admin.database();
// let date = new Date();
// let dateToString = date.toString();
// let formStore = db.ref("formStore");

app.prepare().then(() => {
    const server = express();
    server.use(express.json());
    server.get("/", (req, res) => {
        app.render(req, res, "/");
    });
    server.get("*", (req, res) => {
        return handle(req, res)
    });
    // server.post("/form", (req, res) => {
    //     let pageRefFormStore = formStore.child('form/' + req.body.form.id + '__' + dateToString);
    //     req.body;
    //     res.json(req.body);
    //     try {
    //         pageRefFormStore.set(req.body.form);
    //     } catch(error) {
    //         console.log('ERROR===>', error)
    //     }
    //
    // });
    server.listen(3000, err => {
        if (err) throw err;
        console.log("now serving localhost:3000")
    })
});
