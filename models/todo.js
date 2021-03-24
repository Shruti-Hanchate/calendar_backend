var db=require('../dbConnection');
var Todo={
    getAllEvents:function(callback){
        return db.query('select * from cal',callback);
    },
    addEvent:function(object, callback){
        
        return db.query('insert into cal (id,end,start,title) values(?,?,?,?)',
        [object.id, object.end, object.start, object.title],callback);
        
    },

    deleteEvent:function(id, callback){
        return db.query('delete from cal where id=?',[id],callback);
    },
    editEvent:function(object, id, callback){
       
        return db.query('update cal set start=?, end=?, title=?, allDay=? where id=?',
        [ object.end,object.start, object.title,object.allDay, id],callback);
    }
};


module.exports=Todo;