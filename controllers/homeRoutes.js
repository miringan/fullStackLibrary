const router = require('express').Router();
const { User, Book } = require('../models');
const withAuth = require('../utils/auth');

// GET route for home page
router.get('/', async (req, res) => {
    try {
        // Pass serialized data and session flag into template
        res.render('homepage', { 
            projects, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Still WIP
// Get all projects and JOIN with user data
const projectData = await Project.findAll({
    include: [
        {
            model: User,
            attributes: ['name'],
        },
    ],
});
// Serialize data so the template can read it
const projects = projectData.map((project) => project.get({ plain: true }));