const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');

const Update = mongoose.model('Update');

const Education = mongoose.model('Education');
const Business = mongoose.model('Business');

const Agriculture = mongoose.model('Agriculture');
const AgricultureBudget = mongoose.model('AgricultureBudget');
const AgricultureCensus = mongoose.model('AgricultureCensus');
const AgricultureCredit = mongoose.model('AgricultureCredit');
const AgricultureCrops = mongoose.model('AgricultureCrops');
const AgricultureDigital = mongoose.model('AgricultureDigital');
const AgricultureMarketing = mongoose.model('AgricultureMarketing');


const Women = mongoose.model('Women');
const WomenEducation = mongoose.model('WomenEducation');
const WomenEmployment = mongoose.model('WomenEmployment');

const EducationKid = mongoose.model('EducationKid');
const EducationJunior = mongoose.model('EducationJunior');
const EducationHigher = mongoose.model('EducationHigher');
const EducationGraduation = mongoose.model('EducationGraduation');
const EducationPostGraduation = mongoose.model('EducationPostGraduation');
const EducationForeign = mongoose.model('EducationForeign');
const EducationPhd = mongoose.model('EducationPhd');
const EducationJob = mongoose.model('EducationJob');
const Health = mongoose.model('Health');
const HealthCancer = mongoose.model('HealthCancer');
const HealthBrain = mongoose.model('HealthBrain');
const HealthChild = mongoose.model('HealthChild');
const HealthEsophagus = mongoose.model('HealthEsophagus');
const HealthHeart = mongoose.model('HealthHeart');
const HealthKidney = mongoose.model('HealthKidney');

const Sports = mongoose.model('Sports');
const SportsBadminton = mongoose.model('SportsBadminton');
const SportsBasketball = mongoose.model('SportsBasketball');
const SportsBicycle = mongoose.model('SportsBicycle');
const SportsBoxing = mongoose.model('SportsBoxing');
const SportsCricket = mongoose.model('SportsCricket');



router.post('/category', function (req, res) {
    const { name } = req.body;
    if (name == 'Education') {
        const data = Education.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var subedu = [];
                value.forEach(function (row) {
                    subedu.push({
                        image: row.subeduimage,
                        name: row.subeducation
                    });
                });
                res.json(subedu);
            }
        })
    }
    else if (name == 'Business') {
        const data = Business.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var subbus = [];
                value.forEach(function (row) {
                    subbus.push({
                        image: row.subbusimage,
                        name: row.subbusiness
                    });
                });
                res.json(subbus);
            }
        });
    }
    else if (name == 'Agriculture') {
        const data = Agriculture.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var subagr = [];
                value.forEach(function (row) {
                    subagr.push({
                        image: row.subagrimage,
                        name: row.subagriculture
                    });
                });
            } res.json(subagr);
        }
        );
    }
    else if (name == 'Women') {
        const data = Women.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var subwom = [];
                value.forEach(function (row) {
                    subwom.push({
                        image: row.subwomimage,
                        name: row.subwomen
                    });
                });
            } res.json(subwom);
        }
        );
    }
    else if (name == 'Sports') {
        const data = Sports.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var subspo = [];
                value.forEach(function (row) {
                    subspo.push({
                        image: row.subspoimage,
                        name: row.subsports
                    });
                });
            } res.json(subspo);
        }
        );
    }
    else if (name == 'Health') {
        const data = Health.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var subhea = [];
                value.forEach(function (row) {
                    subhea.push({
                        image: row.subheaimage,
                        name: row.subhealth
                    });
                });
            } res.json(subhea);
        }
        );
    }
    else {
        res.send({ message: 'Not Found' });
    }
});

var filestorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'document/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const fileupload = multer({ storage: filestorage });

router.post('/fileupload', fileupload.single("document"), (req, res, next) => {
    res.send({ 'message': 'Success' });
})

router.post('/update', function (req, res) {
    const { fullname, email, phoneno, category, subcat, filename } = req.body;
    const data = new Update({
        userid: shortid.generate(),
        userfullname: fullname,
        useremail: email,
        userphone: phoneno,
        category: category,
        subcategory: subcat,
        filename: filename
    });
    data.save();
    res.send({ 'message': 'Success' });
});

router.post('/subcategory', function (req, res) {
    const { name } = req.body;
    if (name == 'WomenEducation') {
        const data = WomenEducation.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var womenedu = [];
                value.forEach(function (row) {
                    womenedu.push({
                        name: row.womeduname,
                        description: row.womedudescription,
                        link: row.womedulink,
                    });
                });
                res.json(womenedu);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/subcategory2', function (req, res) {
    const { name } = req.body;
    if (name == 'WomenEmployment') {
        const data = WomenEmployment.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var womenemp = [];
                value.forEach(function (row) {
                    womenemp.push({
                        name: row.womempname,
                        description: row.womempdescription,
                        link: row.womemplink,
                    });
                });
                res.json(womenemp);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/educationkid', function (req, res) {
    const { name } = req.body;
    if (name == 'EducationKid') {
        const data = EducationKid.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var edukid = [];
                value.forEach(function (row) {
                    edukid.push({
                        name: row.edukidname,
                        description: row.edukiddescription,
                        link: row.edukidlink,
                    });
                });
                res.json(edukid);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/educationjunior', function (req, res) {
    const { name } = req.body;
    if (name == 'EducationJunior') {
        const data = EducationJunior.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var edujun = [];
                value.forEach(function (row) {
                    edujun.push({
                        name: row.edujunname,
                        description: row.edujundescription,
                        link: row.edujunlink,
                    });
                });
                res.json(edujun);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/educationhigher', function (req, res) {
    const { name } = req.body;
    if (name == 'Educationhigher') {
        const data = EducationHigher.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var eduhig = [];
                value.forEach(function (row) {
                    eduhig.push({
                        name: row.eduhigname,
                        description: row.eduhigdescription,
                        link: row.eduhiglink,
                    });
                });
                res.json(eduhig);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/educationgraduation', function (req, res) {
    const { name } = req.body;
    if (name == 'EducationGraduation') {
        const data = EducationGraduation.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var edugra = [];
                value.forEach(function (row) {
                    edugra.push({
                        name: row.edugraname,
                        description: row.edugradescription,
                        link: row.edugralink,
                    });
                });
                res.json(edugra);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/educationpostgraduation', function (req, res) {
    const { name } = req.body;
    if (name == 'EducationPostGraduation') {
        const data = EducationPostGraduation.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var edupos = [];
                value.forEach(function (row) {
                    edupos.push({
                        name: row.eduposname,
                        description: row.eduposdescription,
                        link: row.eduposlink,
                    });
                });
                res.json(edupos);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/educationforeign', function (req, res) {
    const { name } = req.body;
    if (name == 'EducationForeign') {
        const data = EducationForeign.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var edufor = [];
                value.forEach(function (row) {
                    edufor.push({
                        name: row.eduforname,
                        description: row.edufordescription,
                        link: row.eduforlink,
                    });
                });
                res.json(edufor);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/educationphd', function (req, res) {
    const { name } = req.body;
    if (name == 'EducationPhd') {
        const data = EducationPhd.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var eduphd = [];
                value.forEach(function (row) {
                    eduphd.push({
                        name: row.eduphdname,
                        description: row.eduphddescription,
                        link: row.eduphdlink,
                    });
                });
                res.json(eduphd);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/educationjob', function (req, res) {
    const { name } = req.body;
    if (name == 'EducationJob') {
        const data = EducationJob.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var edujob = [];
                value.forEach(function (row) {
                    edujob.push({
                        name: row.edujobname,
                        description: row.edujobdescription,
                        link: row.edujoblink,
                    });
                });
                res.json(edujob);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});

router.post('/healthcancer', function (req, res) {
    const { name } = req.body;
    if (name == 'HealthCancer') {
        const data = HealthCancer.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var healcan = [];
                value.forEach(function (row) {
                    healcan.push({
                        name: row.healcanname,
                        description: row.healcandescription,
                        link: row.healcanlink,
                    });
                });
                res.json(healcan);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/healthbrain', function (req, res) {
    const { name } = req.body;
    if (name == 'HealthBrain') {
        const data = HealthBrain.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var healbra = [];
                value.forEach(function (row) {
                    healbra.push({
                        name: row.healbraname,
                        description: row.healbradescription,
                        link: row.healbralink,
                    });
                });
                res.json(healbra);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/healthchild', function (req, res) {
    const { name } = req.body;
    if (name == 'HealthChild') {
        const data = HealthChild.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var healchi = [];
                value.forEach(function (row) {
                    healchi.push({
                        name: row.healchiname,
                        description: row.healchidescription,
                        link: row.healchilink,
                    });
                });
                res.json(healchi);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/healthesophagus', function (req, res) {
    const { name } = req.body;
    if (name == 'HealthEsophagus') {
        const data = HealthEsophagus.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var healeso = [];
                value.forEach(function (row) {
                    healeso.push({
                        name: row.healesoname,
                        description: row.healesodescription,
                        link: row.healesolink,
                    });
                });
                res.json(healeso);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/healthheart', function (req, res) {
    const { name } = req.body;
    if (name == 'HealthHeart') {
        const data = HealthHeart.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var healhea = [];
                value.forEach(function (row) {
                    healhea.push({
                        name: row.healheaname,
                        description: row.healheadescription,
                        link: row.healhealink,
                    });
                });
                res.json(healhea);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/healthkidney', function (req, res) {
    const { name } = req.body;
    if (name == 'HealthKidney') {
        const data = HealthKidney.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var healkid = [];
                value.forEach(function (row) {
                    healkid.push({
                        name: row.healkidname,
                        description: row.healkiddescription,
                        link: row.healkidlink,
                    });
                });
                res.json(healkid);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/sportsbadminton', function (req, res) {
    const { name } = req.body;
    if (name == 'SportsBadminton') {
        const data = SportsBadminton.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var spobad = [];
                value.forEach(function (row) {
                    spobad.push({
                        name: row.spobadname,
                        description: row.spobaddescription,
                        link: row.spobadlink,
                    });
                });
                res.json(spobad);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/sportsbasketball', function (req, res) {
    const { name } = req.body;
    if (name == 'SportsBasketball') {
        const data = SportsBasketball.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var spobas = [];
                value.forEach(function (row) {
                    spobas.push({
                        name: row.spobasname,
                        description: row.spobasdescription,
                        link: row.spobaslink,
                    });
                });
                res.json(spobas);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});
router.post('/sportsbicycle', function (req, res) {
    const { name } = req.body;
    if (name == 'SportsBicycle') {
        const data = SportsBicycle.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var spobic = [];
                value.forEach(function (row) {
                    spobic.push({
                        name: row.spobicname,
                        description: row.spobicdescription,
                        link: row.spobiclink,
                    });
                });
                res.json(spobic);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});

router.post('/sportsboxing', function (req, res) {
    const { name } = req.body;
    if (name == 'SportsBoxing') {
        const data = SportsBoxing.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var spobox = [];
                value.forEach(function (row) {
                    spobox.push({
                        name: row.spoboxname,
                        description: row.spoboxdescription,
                        link: row.spoboxlink,
                    });
                });
                res.json(spobox);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});


router.post('/sportscricket', function (req, res) {
    const { name } = req.body;
    if (name == 'SportsCricket') {
        const data = SportsCricket.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var spocri = [];
                value.forEach(function (row) {
                    spocri.push({
                        name: row.spocriname,
                        description: row.spocridescription,
                        link: row.spocrilink,
                    });
                });
                res.json(spocri);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});


router.post('/agriculturebudget', function (req, res) {
    const { name } = req.body;
    if (name == 'AgricultureBudget') {
        const data = AgricultureBudget.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var agrbud = [];
                value.forEach(function (row) {
                    agrbud.push({
                        name: row.agrbudname,
                        description: row.agrbuddescription,
                        link: row.agrbudlink,
                    });
                });
                res.json(agrbud);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});

router.post('/agriculturecensus', function (req, res) {
    const { name } = req.body;
    if (name == 'AgricultureCensus') {
        const data = AgricultureCensus.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var agrcen = [];
                value.forEach(function (row) {
                    agrcen.push({
                        name: row.agrcenname,
                        description: row.agrcendescription,
                        link: row.agrcenlink,
                    });
                });
                res.json(agrcen);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});

router.post('/agriculturecredit', function (req, res) {
    const { name } = req.body;
    if (name == 'AgricultureCredit') {
        const data = AgricultureCredit.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var agrcre = [];
                value.forEach(function (row) {
                    agrcre.push({
                        name: row.agrcrename,
                        description: row.agrcredescription,
                        link: row.agrcrelink,
                    });
                });
                res.json(agrcre);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});

router.post('/agriculturecrops', function (req, res) {
    const { name } = req.body;
    if (name == 'AgricultureCrops') {
        const data = AgricultureCrops.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var agrcro = [];
                value.forEach(function (row) {
                    agrcro.push({
                        name: row.agrcroname,
                        description: row.agrcrodescription,
                        link: row.agrcrolink,
                    });
                });
                res.json(agrcro);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});


router.post('/agriculturedigital', function (req, res) {
    const { name } = req.body;
    if (name == 'AgricultureDigital') {
        const data = AgricultureDigital.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var agrdig = [];
                value.forEach(function (row) {
                    agrdig.push({
                        name: row.agrdigname,
                        description: row.agrdigdescription,
                        link: row.agrdiglink,
                    });
                });
                res.json(agrdig);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});


router.post('/agriculturemarketing', function (req, res) {
    const { name } = req.body;
    if (name == 'AgricultureMarketing') {
        const data = AgricultureMarketing.find({});
        data.exec(function (err, data) {
            const value = data;
            if (value.length > 0) {
                var agrmar = [];
                value.forEach(function (row) {
                    agrmar.push({
                        name: row.agrmarname,
                        description: row.agrmardescription,
                        link: row.agrmarlink,
                    });
                });
                res.json(agrmar);
            }
        })
    }
    else {
        res.send({ message: 'Not Found' });
    }
});



module.exports = router
