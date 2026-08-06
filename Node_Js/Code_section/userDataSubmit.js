const queryString = require('querystring');

function userDataSubmit(req, resp) {
    let dataBody = [];

    req.on('data', (chunk) => {
        dataBody.push(chunk);
    });

    req.on('end', () => {
        let rawData = Buffer.concat(dataBody).toString();

        let readableData = queryString.parse(rawData);

        let dataString = "My name is " + readableData.name;

        console.log(dataString);

        resp.write(`
            <h1>Hello ${readableData.name}</h1>
            <p>${dataString}</p>
        `);

        resp.end();
    });
}

module.exports = userDataSubmit;