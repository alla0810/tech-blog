const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    console.log("555555555555555555555555555555555555555");


    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedBlogPost = await BlogPost.update(
      {
        title: req.body.title,
        description: req.body.description,
//        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        }
      }
    );

    console.log("555555555555555555555555555555555555555");


    res.status(200).json(updatedBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});




router.delete('/:id', withAuth, async (req, res) => {
  try {
    const BlogPostData = await BlogPost.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!BlogPostData) {
      res.status(404).json({ message: 'No BlogPost found with this id!' });
      return;
    }

    res.status(200).json(BlogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
