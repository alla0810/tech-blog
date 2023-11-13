const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {

  console.log("33333333333333333333333333333333333333333333333333Add Comment!");
  console.log("req.session", req.session);
  console.log("req.body", req.body);
  
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      blogpost_id: req.body.blogpost_id,
      description: req.body.comment,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
