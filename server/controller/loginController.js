const modelsUsers = require('../models/user')
const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');


var Users = {
    login: function(req, res, next) {
        modelsUsers.find({
            email: req.body.email
        }).then(function(result) {
            if (result.length > 0) {
                if (passwordHash.verify(req.body.password, result[0].password)) {
                    var token = jwt.sign({
                        id: result[0].id,
                        email: result[0].email,
                        expiresIn: '1h'
                    }, "CODEuntukDECODE")
                    res.send({
                        token: token,
                        status: true
                    })
                } else {
                    res.send({
                      msg: "Password Incorrect",
                      status: false
                    })
                }
            } else {
                res.send({
                  msg: "User Belum Terdaftar",
                  status: false
                })
            }
        }).catch(function(err) {
            console.log(err);
        })
    },
    register: function(req, res, next) {
        var register = new modelsUsers({
            name: req.body.name,
            email: req.body.email,
            password: passwordHash.generate(req.body.password),
            articles : []
        })
        register.save(function(err, result) {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    },

    decode: function(req, res, next) {
        jwt.verify(req.body.token, "CODEuntukDECODE", function(err, decoded) {
            if (err) {
              res.send(err.name)
                /*
                  err = {
                    name: 'TokenExpiredError',
                    message: 'jwt expired',
                    expiredAt: 1408621000
                  }
                */
            }else{
              res.send(decoded.email)
            }
        });
    }
}

module.exports = Users
