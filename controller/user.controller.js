'use strict'

const { models } = require('mongoose');
const UserModel = require('../model/user.model')



function createUser(req,res){
    let body = req.body;
    let dateuser = new UserModel({
        ci : body.ci,
        name : body.name,
        lastname : body.lastname,
        number : body.number,
        gender : body.gender,
        Fnc : body.Fnc,
        city : body.city
    });
    dateuser.save((err, data) => {
        if (err) {
            return res.status(400).json({ ok:false, error: err})
        }
        
        return res.json({ ok:true, data: data })
    })
}



function getUsers (req, res) {
    UserModel.find().exec((err, users) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            })
        }
        res.json({
            ok:true,
            users
        })
    })
}
 

function getUser(req, res) {
    let id = req.params.id;
    UserModel.findById(id).exec((err, user) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            })
        }
        if (!user) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'ID no existe'
                }
            });
        }
        res.json({
            ok: true,
            user
        })
    })
}

function deleteUser(req, res) {
    let id = req.params.id;
    UserModel.findByIdAndRemove(id,(err, user) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            })
        }
        if (!user) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'ID no existe'
                }
            });
        }
        res.json({
            ok: true,
            message: 'Usuario Eliminado'
        });
    })
}

function updateUser(req, res) {
    let id = req.params.id;
    let body = req.body;
    let userbody = {
        ci : body.ci,
        name : body.name,
        lastname : body.lastname,
        number : body.number,
        gender : body.gender,
        Fnc : body.Fnc,
        city : body.city
    }
    UserModel.findByIdAndUpdate(id,userbody,{new:true,runValidators:true},(err, user) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            })
        }
        if (!user) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'ID no existe'
                }
            });
        }
        res.json({
            ok: true,
            user
        })
    })
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}