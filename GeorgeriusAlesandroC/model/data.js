const mongoose = require ("mongoose");

const dataSchema = new mongoose.Schema({
    nama_wisata : {type, String, required : true},
    kota_wisata : {type, String, required : true},

});

module.exports = mongoose.model("data", dataSchema);
