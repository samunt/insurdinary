// initialize firebase
// get database info for firebase
const axios = require('axios');
const admin = require('firebase-admin');
const moment = require('moment');
const serviceAccount = require("../../firebaseService/firebaseServiceAccount.service.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://insurdinary-a02d7.firebaseio.com"
});

export default (req, res) => {
    // set up database references
    let db = admin.database();
    let date = new Date();
    let dateToString = date.toString();
    let formStore = db.ref("formStore");
    // build the path for the object to be stored
    let pageRefFormStore = formStore.child('form/' + req.body.form.id + '__' + dateToString);

    // prep data for winquote
    const destinationUrl = "https://www.winquote.net/compete.pl";
    const monthUrl = "month=" + moment().month(req.body.form.dob) + "&";
    const dayUrl = "day=" + moment().day(req.body.form.dob) + "&";
    const yearUrl = "year=" + moment().year(req.body.form.dob) + "&";
    const genderUrl = "First+Client+Gender=" + req.body.form.sex === 'Male' ? 1:2 + "&";
    const tobaccoUrl = "First+Client+Tobacco+Use=" + req.body.form.tobacco === true ? 100:0 + "&";
    const smokerCigaretteUrl = "fp_smoker_cigarette=" + req.body.form.tobacco === true ? 100:0 + "&";
    const smokerSnuffUrl = "fp_smoker_snuff=" + req.body.form.tobacco === true ? 100:0 + "&";
    const smokerPipeUrl = "fp_smoker_snuff=" + req.body.form.tobacco === true ? 100:0 + "&";
    const smokerCigarUrl = "fp_smoker_cigar=" + req.body.form.tobacco === true ? 100:0 + "&";
    const smokerCigarelloUrl = "fp_smoker_cigarello=" + req.body.form.tobacco === true ? 100:0 + "&";
    const smokerChewUrl = "fp_smoker_chew=" + req.body.form.tobacco === true ? 100:0 + "&";
    const smokerMarijuanaUrl = "fp_smoker_marijuana=" + req.body.form.tobacco === true ? 100:0 + "&";
    const prescriptionMarijuanaUrl = "fp_smoker_prescribe=" + req.body.form.tobacco === true ? 100:0 + "&";
    const provinceUrl = "Province=" + 13 + "&";
    const premiumUrl = "First+Client+Premium=" + 500000 + "&Payment+Mode=0&";
    const coverageTypeUrl = "First+Client+Coverage+Type=" + 0o4 + "&";
    const underwritingRiskUrl = "First+Client+Risk=" + 1 + "&";
    const middleOfUrl = "First+Client+Plan+Type+OT=0&First+Client+Plan+Type+LB=0&" ;
    const endOfUrl = "type=single&co_code=ca1122573208&co_name=WinQuote&report_type=rank&version_code=ca%3Ase%3A1.3&lang_code=en";
    const constructedBody = monthUrl + dayUrl + yearUrl + genderUrl + tobaccoUrl + smokerCigaretteUrl + smokerCigarUrl + smokerPipeUrl + smokerSnuffUrl + smokerCigarelloUrl + smokerChewUrl + smokerMarijuanaUrl + prescriptionMarijuanaUrl + provinceUrl + premiumUrl + coverageTypeUrl + middleOfUrl + underwritingRiskUrl + endOfUrl;
    const httpOptions = {
        headers: new HttpHeaders({
            contentType: "text/html",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }),
        mode: "cors",
    };

    if (req.method === 'POST') {
        try {
            // push the data to the database
            pageRefFormStore.set(req.body.form);
            // respond to the client
            res.setHeader('Content-Type', 'application/json');
            res.json(req.body);

        } catch(error) {
            console.log('ERROR===>', error)
        }
        try {
            axios({
                method: 'post',
                url: destinationUrl,
                constructedBody,
                httpOptions
            })
        } catch(error) {
            console.log(error)
        }
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ response: 'Invalid Request Method' }))
    }
}
