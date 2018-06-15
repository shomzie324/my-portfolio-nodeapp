const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

//Set up variables for nodemail
const user_name     = 'shomarimalcolm@gmail.com';
    const refresh_token = '1/T3UrDwBvkXQX0gKiDI9LvJqoDnuA4LJTnN7GfqY291M';
    const access_token  = 'ya29.GluTBShhzy349xKfkPz171b8gygFI6Hh5hFjrtyyWtsKbN8bLbPydWXstgjxYaQqVWDisXZvL848iBfmGDbPfThOhjoeyo7XaVdF3ABzdPt7OU3A3iSsR8QEWZeK';
    const client_id     = '395031305706-sgr1c0s3sgmhkn2g8hs497hid5i5o7le.apps.googleusercontent.com';
    const client_secret = 'YNIMDiGaHEyIhRiLCrrMKMV6';

    const email_to = 'shomarimalcolm@gmail.com';

//Set up view engine to use handle bars middle ware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Set up Static folder for client side css and js
//note: __dirname is the path for the current directory, sets public as the static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//Set up Body Parser middle ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//home page route
app.get('/', (req, res) => {
    res.render('home');
});

//contact form route
app.get('/contact', (req, res) => {
    res.render('contact');
});

// body parser allows this object to be extracted easily
//back ticks is es6 template syntax
app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name:${req.body.name}</li>
        <li>Company:${req.body.company}</li>
        <li>Email:${req.body.email}</li>
        <li>Phone:${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    //Set up email authentication and config options
    let transporter = nodemailer
    .createTransport({
        service: 'Gmail',
        auth: {
            type: 'OAuth2',
            clientId: client_id,
            clientSecret: client_secret
        }
    });
    transporter.on('token', token => {
        console.log('A new access token was generated');
        console.log('User: %s', token.user);
        console.log('Access Token: %s', token.accessToken);
        console.log('Expires: %s', new Date(token.expires));
    });
    // setup e-mail data with unicode symbols
    let mailOptions = {
        from: user_name, // sender address
        to: email_to, // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world ?', // plaintext body
        html: output, // html body

        auth : {
            user         : user_name,
            refreshToken : refresh_token,
            accessToken  : access_token,
            expires      : 1494388182480
        }
    };

    // send mail with defined transport object
    // set a value to msg variable when re rendering contact view
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        res.render('contact', {msg:'Email has been sent'});
    });
});

app.listen(80, () => console.log('Server Started...'));
