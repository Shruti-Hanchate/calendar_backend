var express=require('express');
const Todo = require('../models/todo');
// const todo = require('../models/todo');
var router=express.Router();
var todo=require('../models/todo');

router.get('/:id?', function(req,res, next){

    if(req.params.id){
        todo.getAllEvents(req.params.id, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
        todo.getAllEvents(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
}

});


router.post('/', function(req,res,next){
    todo.addEvent(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:id', function(req,res,next){
    todo.deleteEvent(req.params.id, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/', function(req,res,next){
    var id=req.body.id;
    const Str =   {
        "id" : req.body.id,
       "end": req.body.end,
       "start": req.body.start,
       "title": req.body.title,
       "allDay": req.body.allDay
   }
    todo.editEvent(Str, function(err,rows){
        if(err){
            res.json(err)
        }
        else{
            res.json(rows);
        }
    });
});




module.exports=router;