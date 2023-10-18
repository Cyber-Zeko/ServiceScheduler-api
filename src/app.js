require('dotenv').config()
const mongoose = require("mongoose");
const cors = require('cors');
const express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL, { dbName: "ServiceScheduler" }).then(() => {
    console.log("Connected to DB!")
})

const models = require('./repository/models/index')

const CompanyRepository = require('./repository/CompanyRepository');
const CompanyService = require('./services/CompanyService')
const CompanyController = require('./controllers/CompanyController')

const companyRepository = new CompanyRepository(models.CompanyModel);
const companyService = new CompanyService(companyRepository)
const companyController = new CompanyController(companyService)

const UserRepository = require('./repository/UserRepository');
const UserService = require('./services/UserService')
const UserController = require('./controllers/UserController')

const userRepository = new UserRepository(models.UserModel);
const userService = new UserService(userRepository)
const userController = new UserController(userService)

const ServiceRepository = require('./repository/ServiceRepository');
const ServiceService = require('./services/ServiceService')
const ServiceController = require('./controllers/ServiceController')

const serviceRepository = new ServiceRepository(models.ServiceModel);
const serviceService = new ServiceService(serviceRepository)
const serviceController = new ServiceController(serviceService)

const ServiceScheduleRepository = require('./repository/ServiceScheduleRepository');
const ServiceScheduleService = require('./services/ServiceScheduleService')
const ServiceScheduleController = require('./controllers/ServiceScheduleController')

const serviceScheduleRepository = new ServiceScheduleRepository(models.ServiceScheduleModel);
const serviceScheduleService = new ServiceScheduleService(serviceScheduleRepository)
const serviceScheduleController = new ServiceScheduleController(serviceScheduleService)


app.get('/', function (req, res) {
    res.send('Hello World!');
});


/* ----------- Newsletters ----------- */
app.post('/company', (req, res, next) => {
    companyController.create(req, res, next)
})

app.patch('/company', (req, res, next) => {
    companyController.update(req, res, next)
})

app.get('/companies', (req, res, next) => {
    companyController.getAll(req, res, next)
})

app.post('/company/service', (req, res, next) => {
    serviceController.create(req, res, next)
})

app.patch('/company/service', (req, res, next) => {
    serviceController.update(req, res, next)
})

app.delete('/company/service', (req, res, next) => {
    serviceController.delete(req, res, next)
})

app.post('/user', (req, res, next) => {
    userController.create(req, res, next)
})

app.patch('/user', (req, res, next) => {
    userController.update(req, res, next)
})

app.delete('/user', (req, res, next) => {
    userController.delete(req, res, next)
})

app.post('/service-schedule', (req, res, next) => {
    serviceScheduleController.create(req, res, next)
})

app.patch('/service-schedule/confirm', (req, res, next) => {
    serviceScheduleController.confirm(req, res, next)
})

app.patch('/service-schedule/cancel', (req, res, next) => {
    serviceScheduleController.cancel(req, res, next)
})

app.patch('/service-schedule/finish', (req, res, next) => {
    serviceScheduleController.finish(req, res, next)
})

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});