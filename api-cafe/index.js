const express = require('express');
const db = require('./src/db')
const cors = require('cors');
const routes = require('./src/routers')

const app = express();


app.use((req, res, next) => {
    const { teste } = req
    const js = req.rawHeaders
    const ob = js.reduce(function (target, key, index) {
        target[js[index * 2]] = js[index * 2 + 1];

        return target;

    }, {})
    delete ob.undefined
    // console.log(ob)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());

    if (ob.Authorization === "123") {
        next();
    } else {
        res.status(400).json({ "messagem": "Acesso não autorizado" })
    }

});


app.use(express.json());
app.use(routes)

app.listen(3333, () => console.log('listening on PORT 3333'))