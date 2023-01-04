if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
// const axios = require('axios')
const bodyParse = require("body-parser")
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOveride = require('method-override')

const initializePassport = require('../views/passport-config') 
initializePassport(passport, email => users.find(user => user.email === email),
     id => users.find(user => user.id === id)
)

const users = []

const {
    seed,
    getQuestions,
    getDoctorCards,
    getResources,
    postDoctors
    // deleteDoctors
} = require("./controler");

// const passport = require('passport')

app.set('view-engine', 'ejs')
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOveride('_method'))

app.get('/login',checkAuthenticated, (req, res) => {
    res.render('login.ejs')
})

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})
app.get('/', checkAuthenticated, (req, res) =>{
    res.render('index.ejs', { name: req.user.name })
})

app.get(`/api/quiz`, getQuestions);
app.get(`/api/doctors`, getDoctorCards);
app.get(`/api/resources`, getResources);
app.post(`/api/doctors`, postDoctors);
// app.delete(`/api/doctors`, deleteDoctors);

app.post('/register',checkNotAuthenticated, async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10) //await b4 bcrypt
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
            
        })
        res.redirect('/login')
    }catch{
        res.redirect('/register')
    }
    console.log(users);//isnt working
})

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

// app.post('/api/doctors', (req, res) =>  {
//     console.log(req.body);
//     res.status(201).send("Created Doctors Card");
// });

function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect('/login' )
}

function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
       return res.redirect('/')
    }
    next()
}

app.listen(4000, () => {
    console.log(`Listening on 4000`)
})