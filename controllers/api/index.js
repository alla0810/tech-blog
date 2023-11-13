const router = require('express').Router();
const userRoutes = require('./userRoutes');
const BlogPostRoutes = require('./BlogPostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blogposts', BlogPostRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
