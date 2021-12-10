var express = require('express');
var router = express.Router();
const courseCards=[{
  tittle:"Introduction",
  discription:"Web Development Challenge is an initiative by Team Crossroads to create skilled Full Stack Developers. Who is Capable of entering a new job or work as a freelance Web Developer.",
  src:"https://www.youtube.com/embed/pDmEYRhyusU?list=PLY-ecO2csVHeKaBI7lAM1jbIPU8K6fUxY"
},
{
  tittle:"Web Development",
  discription:"Web Development Challenge is an initiative by  Team Crossroads to create skilled Full Stack Developers. Who is Capable of entering a new job or work as a freelance Web Developer.",
  src:"https://www.youtube.com/embed/M3ni_jDqY6E?list=PLY-ecO2csVHcUlBVvIMAa3dbja12TFJiN"
},
{
  tittle:"Data Structure",
  discription:"In the video, we are introducing the team who all are joining this time in the Data structure Tutorial series, uncovering the important topics you are going to learn in the coming days.",
  src:"https://www.youtube.com/embed/SeFji-HeTOM?list=PLY-ecO2csVHc5kajCd3fHU6MhkTABkRh9"
},
{
  tittle:"ReactJs",
  discription:"React JavaScript Challenge is an initiative by  Team Crossroads to create skilled React Developers. React is an open-source library used to create faster and interactive user interfaces.",
  src:"https://www.youtube.com/embed/jSWwKABiFik?list=PLY-ecO2csVHfgVM9sChmUirqK7BXUBX9P"
},
{
  tittle:"Fluttur",
  discription:"Finally, the Part 1 of Flutter Malayalam Free Tutorial Series is here. Get ready to learn to develop an Android and iOS mobile Application of your own. Flutter Challenge is a series of 30 videos. ",
  src:"https://www.youtube.com/embed/Y_cI7L6818U"
},
{
  tittle:"NodeJs",
  discription:"Web Development Challenge is an initiative by  Team Crossroads to create skilled Full Stack Developers. Who is Capable of entering a new job or work as a freelance Web Developer.",
  src:"https://www.youtube.com/embed/njIawfssBjw"
}]
var uName
var pWord
var mob 
var valFail=""
const fUser = 'crossroads'
const passWord = '123456'
var mytt = ""
var lognFail = "Please enter your login details."
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.loggedIn){

    var menuItems = {home:'Home', about:'About',vision:'Vision', mission:'Mission', courses:'Courses', contact:'Contact' }
    res.render('home', { title: sess,  default:'User name', menuItems,courseCards});

  }else{
    var sess = req.session.username
    const validation = {title: 'Successfully loged out',  default:'User name', myTitle:mytt}
    res.render('index', {validation});

  }
  
});

router.post('/register', function(req, res, next) {
  uName = req.body.fName
  pWord = req.body.sName
  mob = req.body.mobile
  if(uName.length <=3)
  {
    valFail = "Name min 4 Charector"
    lognFail = "Login fails"
    res.redirect('/');
  }
  else if(uName == fUser && pWord == passWord){
    req.session.loggedIn = true
    req.session.username = fUser
    req.session.cPassWord = passWord
    var sess = req.session.username
    var menuItems = {home:'Home', about:'About',vision:'Vision', mission:'Mission', courses:'Courses', contact:'Contact' }
    res.render('home', { title: sess,  default:'User name', menuItems,courseCards});
  }
  else{
    mytt = "Login Failed"
    res.redirect('/');
  }

});

router.get('/logout', function(req, res, next) {
  req.session.destroy()
  const validation = {title: 'Successfully loged out',  default:'User name', myTitle:mytt}
  res.render('index', {validation});
});


module.exports = router;
