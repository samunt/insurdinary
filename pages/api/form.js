const admin = require('firebase-admin');
const serviceAccount = require("../../firebaseService/firebaseServiceAccount.service.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://insurdinary-a02d7.firebaseio.com"
});
let db = admin.database();
let date = new Date();
let dateToString = date.toString();
let formStore = db.ref("formStore");
export const config = {
    api: {
        bodyParser: false,
    },
};
export default (req, res) => {
    if (req.method === 'POST') {
        let pageRefFormStore = formStore.child('form/' + req.body.form.id + '__' + dateToString);
        req.body;
        res.json(req.body);
        try {
            pageRefFormStore.set(req.body.form);
        } catch(error) {
            console.log('ERROR===>', error)
        }

    } else {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ name: 'John Doe' }))
        console.log('not a post')
    }
}

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
