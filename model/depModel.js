var {mongoose}= require('./../config/db');
var Schema= mongoose.Schema;

var depSchema = new Schema({
    depName :{
        type: String,
        required: true
    },isDelete :{
        type: Boolean,
        default: false
    }
});

var Dep= mongoose.model("Dep", depSchema);

module.exports={Dep};