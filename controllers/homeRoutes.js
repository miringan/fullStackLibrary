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
router.put("/:title", (req, res) => {
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

// POST route to create a user

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/bookInformation");
    return;
  }
  res.render("login");
});

router.get("/donate", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("/donate");
  //   return;
  // }
  res.render("donate");
  return;
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

router.get("/bookInformation", async (req, res) => {
  try{
  const users = await userData.map((project) => project.get({ plain: true }));
  res.render('bookInformation', { users });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
