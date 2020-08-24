import bodyParser from "body-parser";

export const config = {
    api: {
        bodyParser: false,
    },
};
export default (req, res) => {
    const serviceAccount = require("../../firebaseService/firebaseServiceAccount.service.json");
    const admin = require('firebase-admin');

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://insurdinary-a02d7.firebaseio.com"
    });

    let db = admin.database();
    let date = new Date();
    let dateToString = date.toString();
    let formStore = db.ref("formStore");
    let jsonBody = bodyParser.json(req.body);
    console.log('JSONBODY====>', jsonBody);
    let pageRefFormStore = formStore.child('form/' + jsonBody.form.id + '__' + dateToString);

    if (req.method === 'POST') {
        console.log('REQBODY===>', req.body);
        res.json(req.body);
        try {
            pageRefFormStore.set(req.body.form);
        } catch(error) {
            console.log('ERROR===>', error)
        }

    } else {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ response: 'Invalid Request' }))
        console.log('not a post')
    }
}
