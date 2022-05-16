const {
    Project,
    Sequelize
} = require('../models')
const Op=Sequelize.Op;

let self={};

module.exports = {
    list:async (req,res,next)=>{
        try{
            res.json({
                status:"Ok",
                data:await Project.findAll()
            })
        }catch (error){
            console.log(error)
        }
    },
    store:async (req,res,next)=>{
        let data={
            name: req.body.name,
            description:req.body.description
        }
        let project=await Project.create(data)
        try{
            res.json({
                status:"Ok",
                data:project
            },201)
        }catch (error){
            console.log(error)
        }
    },
    show: async (req,res,next)=>{
        let project=await Project.findByPk(req.params.project)
        res.json({
            status:"ok",
            data:project
        })
    },
    update: async (req,res,next)=>{
        let data=req.body;
        let project=await (await Project.findByPk(req.params.project)).update(data)
        res.json({
            status:"ok",
            data:project
        })
    },
    delete: async (req,res,next)=>{
        let project=await (await Project.findByPk(req.params.project)).destroy()
        res.json({
            status:"ok",
        })
    }
}