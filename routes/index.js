var express = require('express');
var router = express.Router();
var  fs=require('fs');
var ct=0;
var zj=0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sg',function (req,res,next) {
    res.render('sg',{title:'sgjade'})

})
router.get('/array',function (req,res,next) {
    // res.render('array',{title:'hello',data:[1,2,3]})
    fs.readFile('./lxz.txt',function (err,data) {
        res.render('array',{title:data,data:[1,2,3]})


    })
})
router.get('/xr',function (req,res,next) {

    res.render('xr',{title:'写入的内容为'})
    fs.writeFile('lxz2.txt',function () {
        console.log(err)
        
    })
    
})


router.get('/count',function (req,res,next) {
    ct++;
    fs.readFile('public/lxz2.txt','utf-8',function (err,data) {
        if(err){
            console.log(err)
        }else{
            console.log(data);
            fs.writeFile('public/lxz2.txt','index页面被访问的次数:'+ct,function (err) {
                if(err){
                    console.log(err)
                }
                
            })
            res.render('count', { title: data});
        }
        
    })

})

router.get('/zj',function (req,res,next) {
    zj++;
    fs.readFile('public/zj.txt','utf-8',function (err,data) {
        if(err){
            console.log(err)
        }else{
            console.log(data)
            fs.writeFile('public/zj.txt','页面:'+zj,function (err) {
                if(err){
                    console.log(err)
                }
                
            })
            res.render('zj',{title:data})
        }

    })


})

module.exports = router;
