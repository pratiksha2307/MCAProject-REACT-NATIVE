const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
const PORT = 4000
const { mogoUrl } = require('./keys')

require('./models/Update');

require('./models/Business');

require('./models/Agriculture');
require('./models/Agriculture/AgricultureCensus');
require('./models/Agriculture/AgricultureMarketing');
require('./models/Agriculture/AgricultureBudget');
require('./models/Agriculture/AgricultureCredit');
require('./models/Agriculture/AgricultureCrops');
require('./models/Agriculture/AgricultureDigital');


require('./models/Women');
require('./models/Women/WomenEducation');
require('./models/Women/WomenEmployment');

require('./models/Education');
require('./models/Education/EducationKid');
require('./models/Education/EducationJunior');
require('./models/Education/EducationHigher');
require('./models/Education/EducationGraduation');
require('./models/Education/EducationPostGraduation');
require('./models/Education/EducationForeign');
require('./models/Education/EducationPhd');
require('./models/Education/EducationJob');

require('./models/Health');
require('./models/Health/HealthCancer');
require('./models/Health/HealthBrain');
require('./models/Health/HealthChild');
require('./models/Health/HealthEsophagus');
require('./models/Health/HealthHeart');
require('./models/Health/HealthKidney');

require('./models/Sports');
require('./models/Sports/SportsBadminton');
require('./models/Sports/SportsBasketball');
require('./models/Sports/SportsBoxing');
require('./models/Sports/SportsBicycle');
require('./models/Sports/SportsCricket');



app.use('/photo', express.static('photo'));

const requireToken = require('./middle/token');
const authRoutes = require('./route/route');
app.use(bodyParser.json())
app.use(authRoutes)

mongoose.connect(mogoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("connected to mongo yeahh")
})

mongoose.connection.on('error', (err) => {
    console.log("this is error", err)
})

app.listen(PORT, () => {
    console.log("server running " + PORT)
})