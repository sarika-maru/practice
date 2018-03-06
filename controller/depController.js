var {Dep} = require('./../model/depModel');

var addDep = (req,res) =>{
    console.log(req.body);
    var dep = new Dep({depName : req.body.depName});
    dep.save().then((dep)=>{
        if(!dep){
            res.status(404).json("insertion fail ");
        }
        res.status(200).json("success");
    }).catch((err)=>{
        res.status(404).json("inside add dep controller : " ,err);
    })
}

var editDep =(req,res)=>{
    var id= req.params.id;
    Dep.findOneAndUpdate({depId:id,isDelete :false},{
        $set: {
            depName: req.body.depName
        }
    }).then((docs)=>{
        if(!docs){
            res.status(404).json("Not Found");
        }
        res.status(200).json("success");
    }).catch((err)=>{
        res.status(404).json("inside edit dep controller : ",err);
    });
}

var removeDep= (req,res)=>{
    id= req.params.id;
    Dep.findOneAndUpdate({_id : id},{
        $set:{
            idDelete : true
        }
    }).then((docs)=>{
        if(!docs){
            res.status(404).json("Not found");
        }
        res.status(200).json("success");
    }).catch((err)=>{
        res.status(404).json("inside remove dep controller : " + err);
    })
}

var getDep = (req,res)=>{
    Dep.find({isDelete : false}).then((docs)=>{
        if(!docs){
            res.status(404).json("Not Found");
        }
        res.status(200).json(docs);
    }).catch((err)=>{
        res.status(404).json("inside get dep controller : ",err);
    });
}

module.exports={ addDep,editDep,removeDep,getDep};