const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const userId_to_name = require('../utils/helpers');


router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const BlogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const BlogPosts = BlogPostData.map((blog) => blog.get({ plain: true }));

//    console.log(BlogPosts);

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      BlogPosts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/blogpost/:id', async (req, res) => {
  try {
    const blogpostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('blogpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/commentpost/:id', async (req, res) => {
  try {
    const blogpostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('commentpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/commentshow/:id', async (req, res) => {
  try {
    const blogpostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    const allCommentData = await Comment.findAll(
      {where: {blogpost_id: req.params.id}}
    );
    const allComments = allCommentData.map((post) => post.get({ plain: true }));

    console.log(allComments);    

    let CommentList = [];

    for (let i=0; i<allComments.length; i++)      
    {
      let user_id = allComments[i].user_id;
      console.log(user_id);
      let UserData = await User.findByPk(user_id);
      let user = UserData.get({plain: true});

      console.log(user.name);

      CommentList[i] = {
        "user" : user.name,
        "description" : allComments[i].description,
        "date_created" : allComments[i].date_created
      }
    }

    res.render('commentshow', {
      ...blogpost,
      CommentList,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/editpost/:id', async (req, res) => {
  try {
    const blogpostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogpost = blogpostData.get({ plain: true });

    res.render('editpost', {
      ...blogpost,
      logged_in: req.session.logged_in,
      dashboard_in: true      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {

  try {
    // Find the logged in user based on the session ID
    const BlogPostData = await BlogPost.findAll({where: {user_id: req.session.user_id}});

    const BlogPosts = BlogPostData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      BlogPosts,
      logged_in: true,
      dashboard_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }

});



router.get('/newpost', (req, res) => {
  // If the user is already logged in, redirect the request to another route

  res.render('newpost');
});




router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});



router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

router.get('/logout', (req, res) => {

  console.log("logout");

  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
  res.render('logout');

});


module.exports = router;
