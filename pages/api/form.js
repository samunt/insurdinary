
export default (req, res) => {
    // get database info for firebase
    const serviceAccount = require("../../firebaseService/firebaseServiceAccount.service.json");
    const admin = require('firebase-admin');
    // initialize firebase
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://insurdinary-a02d7.firebaseio.com"
    });
    // set up database references
    let db = admin.database();
    let date = new Date();
    let dateToString = date.toString();
    let formStore = db.ref("formStore");
    // build the path for the object to be stored
    let pageRefFormStore = formStore.child('form/' + req.body.form.id + '__' + dateToString);

    if (req.method === 'POST') {
        try {
            // push the data to the database
            pageRefFormStore.set(req.body.form);
            res.setHeader('Content-Type', 'application/json');
            res.json(req.body);

        } catch(error) {
            console.log('ERROR===>', error)
        }
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ response: 'Invalid Request' }))
    }
}
