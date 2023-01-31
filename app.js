const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

let transporter = nodemailer.createTransport({
    host: 'test.plastprom62.ru',
    port: 25,
    secure: false,
    auth: {
        user: 'info@test.plastprom62.ru',
        pass: 'GvnSdWjQ9771488'
    },
    tls: {
        rejectUnauthorized: false
    }
});

let mailOptions = {
    from: '"xxx" <xxx@test.plastprom62.ru>',
    to: 'Sharky121@mail.ru',
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
};

app.get('/', (req, res) => {
    res.send('Hello World!');

});

app.get('/contacts', (req, res) => {

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
