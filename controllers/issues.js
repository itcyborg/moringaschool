const {
    issue,
    Project,
    Sequelize
} = require('../models')
const {raw} = require("express");
const Op=Sequelize.Op;

let self={};

module.exports = {
    list : async (req, res, next) => {
        try{
            let issues = await issue.findAll();
            res.json({
                status: "ok",
                data: issues
            })
        }catch (error){
            console.log(error)
        }
    },
    show :async (req, res, next) => {
        let issue_id=req.params.issue
        let issueS=await issue.findByPk(issue_id)
        res.json({
            data: issueS
        })
    },
    update : async (req, res, next) => {
        let issue_id=req.params.issue
        let issuesE=(await issue.findByPk(issue_id)).update(req.body);
        try{
            res.json({
                data:issuesE
            })
        }catch (error){
            console.log(error)
        }
    },
    store : async (req, res, next) => {
        try{
            let requestBody=req.body;

            if( requestBody.project_id ==null || Number.parseInt(requestBody.project_id) < 1){
                res.send('project_id is missing',422)
                return
            }

            let project= await Project.findByPk(requestBody.project_id)
            if(!project){
                res.send('Specified project not found',404)
                return
            }

            let issues=await issue.create(requestBody)
            res.json({
                status: "ok",
                data: issues
            })
        }catch (error){
            res.send(error,500)
        }
    },
    delete : async (req, res, next) => {
        let issue_id=req.params.issue
        let issueD=(await issue.findByPk(issue_id)).destroy()
        res.json({
            data: "Issue deleted successfully"
        })
    },
}