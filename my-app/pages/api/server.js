const userService = require("@/user-service.js");
const jwt = require('jsonwebtoken');
const passport = require("passport");
const passportJWT = require("passport-jwt");

// JSON Web Token Setup
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

// Configure its options
let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: '&0y7$noP#5rt99&GB%Pz7j2b1vkzaB0RKs%^N^0zOP89NT04mPuaM!&G8cbNZOtH',
};

// IMPORTANT - this secret should be a long, unguessable string
// (ideally stored in a "protected storage" area on the web server).
// We suggest that you generate a random 50-character string
// using the following online tool:
// https://lastpass.com/generatepassword.php

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);

    if (jwt_payload) {
        // The following will ensure that all routes using 
        // passport.authenticate have a req.user._id, req.user.userName, req.user.fullName & req.user.role values 
        // that matches the request payload data
        next(null, { _id: jwt_payload._id, 
            userName: jwt_payload.userName, 
            fullName: jwt_payload.fullName, 
            role: jwt_payload.role }); 
    } else {
        next(null, false);
    }
});

// tell passport to use our "strategy"
passport.use(strategy);

// add passport as application-level middleware
passport.initialize()

export default async function handler(req, res) {
    try{
        await userService.connect()
        if (req.method === 'POST'){
            await userService.checkUser(req.body)
            .then((user) => {
    
                let payload = { 
                    _id: user._id,
                    userName: user.userName,
                    fullName: user.fullName,
                    role: user.role
                };
                
                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                res.json({ "message": "login successful", "token": token });
            }).catch((msg) => {
                res.status(422).json({ "message": msg });
            });
        }
    }catch(err){
        console.log(err)
    }
    
};