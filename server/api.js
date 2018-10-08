const api = module.exports = require('express').Router()
const exercises = require('./exercises');
// import exercise from './exercise';
api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/exercises', exercises)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
