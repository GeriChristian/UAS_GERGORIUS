const georgerius = require("../model/georgerius");

const createGeorgerius = (req, res) =>{
    const georgerius = new Georgerius({
        nama : req.body.nama,
        kota : req.body.kota,
    });
    georgerius.save().then((createdGeorgerius)=>{
        res.status(201).json({
            message : "Data berhasil disimpan",

        });
    });
};

const readGeorgerius = (req,res)=>{
    Georgerius.find()
    .then((documents)=>{
        res.status(201).json({
            
        });
    });
};

module.export = {createGeorgerius, readGeorgerius}