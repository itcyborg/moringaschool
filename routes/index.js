var express = require('express');
var router = express.Router();
const {
    issue,
    Project,
    log,
    Sequelize
} = require('../models')

router.get('/stats',async function(req,res){
    let issues=await issue.findAndCountAll();
    let logs=await log.findAndCountAll();
    let projects=await Project.findAndCountAll();

    res.json({
        issues:issues.count,
        projects:projects.count,
        logs:logs.count
    })
})

module.exports = router;
