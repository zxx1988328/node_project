var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Movie = require('./models/movie');
var _ = require('underscore');
var port = process.env.PORT || 3000;
var app = express();

mongoose.connect('mongodb://localhost/myoc');

app.set('views','./views/pages')
app.set('view engine','jade')
// app.use(express.bodyParser())
// app.use(bodyParser.urlencoded({extended:false}))
app.use(require('body-parser').urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'bower_components')))
app.locals.moment = require('moment');
app.listen(port)

console.log('project started on port '+ port)

app.get('/',function(req,res){
  Movie.fetch(function(err,movies){
      if(err){
        console.log(err);
      }

      res.render('index',{
          title:'zxx 首页',
          movies:movies
      });
  });
});

//detail page
app.get('/movie/:id',function(req,res){
  var id = req.params.id;

  Movie.findById(id,function(err,movie){
    res.render('detail',{
      title:'zxx ' + movie.title,
      movies:movie
    });
  });
});


// admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
    title:'后台录入页',
    movie:{
      title:'',
      doctor:'',
      country:'',
      year:'',
      poster:'',
      flash:'',
      summary:'',
      language:''
    }
  })
})


// admin update movies
app.get('/admin/update/:id',function(req,res){
  var id = req.params._id;

  if(id){
    Movie.findById(id,function(err,movie){      
        res.render('admin',{
          title:'zxx 后台更新页面',
          movie:movie
        });
    });
  }
})


// admin post movies
app.post('/admin/movie/new',function(req,res){
  var id = req.body.movie._id;
  var movieObj = req.body.movie;
  var _movie;

  if(id != 'undefined'){
    Movie.findById(id,function(err,movie){      
        if(err){
          console.log(err);
        }
        _movie = _.extend(movie,movieObj);
        _movie.save(function(){ 
          if(err){
            console.log(err);
          }
          res.redirect('/movie/'+ movie._id);          
        });
    });
  }else{
    _movie = new Movie({
      doctor:movieObj.doctor,
      title:movieObj.title,
      country:movieObj.country,
      language:movieObj.language,
      year:movieObj.year,
      poster:movieObj.poster,
      summary:movieObj.summary,
      flash:movieObj.flash
    });
    _movie.save(function(err,movie){      
      if(err){
        console.log(err);
      }
      res.redirect('/movie/'+ movie._id);          
    });
  }

  res.render('admin',{
    title:'后台录入页',
    movie:{}
  })
})


// list page
app.get('/admin/list',function(req,res){
  Movie.fetch(function(err,movies){
      if(err){
        console.log(err);
      }

      res.render('list',{
        title:'zxx 列表页',
        movies:movies
      })
  });
})