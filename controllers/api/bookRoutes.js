const router = require('express').Router();
const { Book } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newBook = await Book.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBook);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Still WIP
// GET route for library search results
router.get('/library/:title', async (req,res) => {
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

// POST route to donate a book to the library
router.post('/library', (req,res) => {
    Book.create([
        {
            title: req.params.title,
            author: req.params.author,
            genre: req.params.genre,
            checked_in: true,
            new_arrival: true,
        }
        ]).then(() => {
            res.send('Book donation Success!');
    });
})

module.exports = router;
  