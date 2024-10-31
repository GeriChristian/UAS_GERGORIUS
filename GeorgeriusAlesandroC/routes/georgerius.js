var express = require ('express');
var router = express.Router();

const georgerius = require ("../model/buku");
router.get('/', function(req,res, next){
    res.send('respond dari georgerius router');
});

router.post('/',(req,res)=>{
    const pariwisata =new Pariwisata({
        nama : req.body.nama,
        kota : req.body.kota,
    });
})

routes.post('path', (req,res)=>{
    res.status(201).json({
        message : "Data berhasil disimpan"
    });
});

module.export=router;