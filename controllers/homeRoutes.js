const router = require('express').Router();
const { User, Book } = require('../models');
const withAuth = require('../utils/auth');

// GET route for home page
// router.get('/', async (req, res) => {
//     try {
//         // Pass serialized data and session flag into template
//         res.render('homepage', { 
//             projects, 
//             logged_in: req.session.logged_in 
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get("/", async (req, res) => {
    const postData = await Post.findAll();
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  });
