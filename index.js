const { table } = require('console');
var express = require('express');
var path = require('path');
const { title } = require('process');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   res.send('<h1>hello! this is manjusha</h1>')
//   //res.sendFile(path.resolve('public/Text formatting.html'))

// })
router.get('/textformatting', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send('<h1>hello! this is manjusha</h1>')
  res.sendFile(path.resolve('public/Text formatting.html'))

})
router.get('/index1', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send('<h1>hello! this is manjusha</h1>')
  res.sendFile(path.resolve('public/index1.html'))

})
router.get('/login', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send('<h1>hello! this is manjusha</h1>')
  res.sendFile(path.resolve('public/login.html'))

})
router.get('/signup', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send('<h1>hello! this is manjusha</h1>')
  res.sendFile(path.resolve('public/signup.html'))

})
router.get('/contactus', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send('<h1>hello! this is manjusha</h1>')
  res.sendFile(path.resolve('public/contactus.html'))

});
router.post('/loginsubmit', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send('<h1>hello! this is manjusha</h1>')
  res.send(req.body)

});
router.post('/lsubmit', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send('<h1>hello! this is manjusha</h1>')
  // res.send(req.body)
  if(req.body.singing){
    b = req.body.singing
  }
  else if(req.body.dancing){
    b = req.body.dancing
  }
  else{
    b = req.body.dancing + req.body.singing
  }
  obj = {'Name' : req.body.name, 'D.O.B' : req.body.dob, 'Gender' : req.body.g, 'Hobbies' : b}
  // res.send('Name : '+req.body.name)
  // res.send('D.O.B : '+req.body.dob)
  // res.send('Hobbies : '+req.body.singing+','+req.body.dancing)
  // res.send('Gender : ' + req.body.g)
  result = '<table border=1>'
  for(i in obj){
    result += "<tr><td>" + i + "</td><td>" + obj[i] + "</td></tr>";
  }
  result += '</table>';
  res.send(result)

});
// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send('<h1>hello! this is manjusha</h1>')
//   res.sendFile(path.resolve('public/rough.html'))

// });
// router.get('/expressdemo', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send('<h1>hello! this is manjusha</h1>')
//   // res.sendFile(path.resolve('public/rough.html'))
//   res.render('index',{title:'Express'});
// });
// router.get('/toposts', function(req, res) {
//   var posts = [
//     {title:'HBD',message:'Happy birthday to you'},
//     {title:'casual',message:'heyaa!!'},
//     {title:'Announcements',message:'Sarkaru vari pata release'},
//     {title:'Greetings',message:'Greetings of the day'},
//   ];
//   res.render('index',{title:'Facebook posts',posts:posts});
// });

router.get('/toposts', function(req, res) {
  res.render('datadisplay',{title:'Student Data'});
});

// router.get('/', function(req, res) {
 
// mysql.getConnection((err, connection) => {
//   if(err) throw err;
//   connection.query('SELECT * FROM student limit 2', (err, rows)=> {
//     connection.release();
//     if(err) throw err;
//     //res.render('index', {rows:rows});
//     res.send(rows);
//   });
// });
// });




module.exports = router;
