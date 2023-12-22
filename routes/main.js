module.exports = function (app, shopData) {

    app.get('/', function (req, res) {
        res.render('index.ejs', shopData);
    });

    app.get('/register', function (req, res) {
        res.render('register.ejs', shopData);
    });

    app.post('/registered', function (req, res) {

        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const plainPassword = req.body.password;

        bcrypt.hash(plainPassword, saltRounds, function (err, hashedPassword) {
            //store hashed password in database
            let sqlquery = "INSERT INTO userdetails (username, first_name, last_name,  email, hashedPassword) VALUES (?, ?, ?, ?, ?)";
            //response
            let newrecord = [req.body.username, req.body.first, req.body.last, req.body.email, hashedPassword];
            db.query(sqlquery, newrecord, (err, result) => {
                if (err) {
                    return console.error(err.message);
                }
                else
                    // saving data in database
                    result = ' Hello ' + req.body.first + ' ' + req.body.last + ' You are now registered! We will send you an email at ' + req.body.email
                //result = 'Hello' + req.body.first_name + ' ' + req.body.last_name + ' you are now registered! We will send an email to you at ' + req.body.email;
                //result += ' Your password is: '+ req.body.hashedPassword + ' and your hashed password is '+ hashedPassword;
                //res.send(result);
            })
        })
    });
}