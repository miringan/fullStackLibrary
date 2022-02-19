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
// GET route for library
router.get('/library', async (req,res) => {
    try{ 
        const libraryData = await Project.findAll({
            include: [
                {
                    model: Book,
                        // Need to tie in search result from homepage search bar into attributes
                        attributes: ['title'],
                },
                ],
        });
        // Serialize data so the template can read it
        const libraryData = libraryData.map((library) => library.get({ plain: true }));
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT route to checkout a book from the library
router.put('/library/:title', (req, res) => {
    // Calls the update method on the Book model
    Book.update(
      {
        // All the fields you can update and the data attached to the request body.
        checked_in: false
      },
      {
        // Gets the books based on the title given in the request parameters
        where: {
            // Need to link search result to req 
            title: req.params.title,
        },
      }
    )
      .then((updatedBook) => {
        // Sends the updated book as a json response
        res.json(updatedBook);
      })
      .catch((err) => res.json(err));
  });

// POST route to add a book to the library


// POST route to create a user