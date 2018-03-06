var {mongoose}= require('./../config/db');
var Schema= mongoose.Schema;

var empSchema = new Schema({
   empName :{
       type: String,
       required: true
   },gender :{
       type:String
    },hobby:{
       type:String
    },salary : {
       type : Number
    },depId :{
       type: Schema.Types.ObjectId,
       ref :['Dep']
    },isDelete :{
        type: Boolean,
        default: false
    }
});

var Emp= mongoose.model("Emp", empSchema);

module.exports={Emp};