const router = require("express").Router();
const { User, Book } = require("../models");
const withAuth = require("../utils/auth");

// GET route for home page
router.get("/", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets all the books for the library page
router.get("/library", async (req, res) => {
  try {
    const bookData = await Book.findAll({});

    const books = bookData.map((book) => book.get({ plain: true }));
    res.render("library", { books });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Still WIP
// GET route for library
// router.get("/", async (req, res) => {
//   try {
//     const libraryData = await Book.findAll({
//       include: [
//         {
//           model: Book,
//           // Need to tie in search result from homepage search bar into attributes
//           attributes: ["title"],
//         },
//       ],
//     });
//     // Serialize data so the template can read it
//     const libraries = libraryData.map((library) =>
//       library.get({ plain: true })
//     );
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// PUT route to checkout a book from the library
router.put("/library", (req, res) => {
  // Calls the update method on the Book model
  Book.update(
    {
      // All the fields you can update and the data attached to the request body.
      checked_in: false,
    },
    {
      // Gets the books based on the title given in the request parameters
      where: {
        // Need to link search result to req
        id: req.params.id,
      },
    }
  )
    .then((updatedBook) => {
      // Sends the updated book as a json response
      res.json(updatedBook);
    })
    .catch((err) => res.json(err));
});


// POST route to create a user
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// If user is logged in, they can donate a book
router.get("/donate", (req, res) => {
  // if (req.session.logged_in) {
    res.render("donate");
    // return;
  // }else
  // {res.render("login");
  // return;}
});

// POST route to add a book to the library
router.post("/donate", async (req, res) => {
  try {
    const dbBookData = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      checked_in: true,
      new_arrival: true,
    });
    res.status(200).json(dbBookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Search for a book by title 
router.get("/book/:title", async (req, res) => {
  try {
    const bookData = await Book.findAll({
      attributes: ["title", "author", "genre", "checked_in", "new_arrival"],

      where: {
        title: req.query.title,
      },
    });

    // Serialize user data so templates can read it
    const books = bookData.get({ plain: true });
    // const books = bookData.map((book) => book.get({plain : true}))

    res.render("homepage", { books });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Search for book by ID
// router.get("/book/:id", async (req, res) => {
//   try {
//     const bookData = await Book.findByPk(req.params.id, {
//       attributes: ["title", "author", "genre", "checked_in", "new_arrival"],

//       where: {
//         id: req.params.id,
//       },
    
//     });

//     const book = bookData.get({ plain: true });
//     res.render("/library", {
//       ...book,
//       // logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// Route to the contact page 
router.get("/contact", (req, res) => {
  res.render("contact");
});


module.exports = router;
