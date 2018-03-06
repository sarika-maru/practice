var {addDep,editDep,removeDep,getDep}= require('./../controller/depController');


var route =(app)=>{

    app.post('/dep', addDep);

    app.get('/dep',getDep);

    app.put('/dep/:id',editDep);

    app.patch('/dep/: ',removeDep);
}

module.exports={route};