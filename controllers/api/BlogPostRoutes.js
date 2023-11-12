const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedBlogPost = await BlogPost.update({
      ...req.body,
      user_id: req.session.user_id,
    });

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
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(BlogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
