export const config = {
    api: {
        bodyParser: false,
    },
};
export default (req, res) => {
    if (req.method === 'POST') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ name: 'John Doe' }))

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
