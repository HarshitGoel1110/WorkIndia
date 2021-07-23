var express = require('express');

var router = express.Router();




router.get('/', function(req, res, next) {
    con.query("SELECT * FROM tasks order by due_date asc", function (err, result, fields) {
    if (err) throw err;
    res.send({
        message: 'tasks',
        Total_record:result.length,
        result:result
        });
    });
});

router.post('/', function(req, res, next) {
    // console.log(req.body);
    // res.send({
    //     message : 'okk'
    // })
    title = req.body.title;
    description = req.body.description;
    category = req.body.category;
    due_date = req.body.due_date;

    print(title);

    var sql = "INSERT INTO tasks (title , description , category , due_date) VALUES ?";
    var values = [[title , description , category , due_date]]
    con.query(sql,[values], function (err, result, fields) {
        if (err) throw err;
        res.send({
            status : 'success',
            status_code : '200'
        });
    });
});

module.exports = router;