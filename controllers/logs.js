const {
    log,
    Sequelize
} = require('../models')
const {raw} = require("express");
const Op=Sequelize.Op;

let self={};

module.exports = {
    list : async (req, res, next) => {
        try{
            let logs = await log.findAll();
            res.json({
                status: "ok",
                data: logs
            })
        }catch (error){
            console.log(error)
        }
    },
    show :async (req, res, next) => {
        let log_id=req.params.log
        let logs=await log.findByPk(log_id)
        res.json({
            data: logs
        })
    },
    update : async (req, res, next) => {
        let log_id=req.params.log
        let result=(await log.findByPk(log_id)).update(req.body);
        try{
            res.json({
                data:result
            })
        }catch (error){
            console.log(error)
        }
    },
    store : async (req, res, next) => {
        try{
            let requestBody=req.body;
            let result=await log.create(requestBody)
            res.json({
                status: "ok",
                data: result
            })
        }catch (error){
            res.send(error,500)
        }
    },
    delete : async (req, res, next) => {
        let log_id=req.params.log
        let result=(await log.findByPk(log_id)).destroy()
        res.json({
            data: "Log deleted successfully"
        })
    },
}