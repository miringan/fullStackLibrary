const router = require("express").Router();
const { Book, User } = require("../../models");
const withAuth = require("../../utils/auth");

// GET request for all books
router.get("/", async (req, res) => {
  try {
    const bookData = await Book.findAll({});
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Search for books by title
router.get("/", async (req, res) => {
  console.log("bookRoutes",title);
  try {
    const libraryData = await Book.findAll({
      attributes: ["title", "author", "genre", "checked_in", "new_arrival"],
      where: {
        title: req.query.title,
      },
    });
    console.log(libraryData);
    // localStorage.setItem("bookSearch", JSON.stringify(libraryData));
    // const book = libraryData.get({ plain: true });

    res.status(200).json(libraryData);
  }
  
   catch (err) {
     console.log("hello Tony!")
    res.status(500).json(err);
  }
});


// PUT route to checkout a book from the library
router.put("/:id", (req, res) => {
  Book.update(
    {
      checked_in: false,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedBook) => {
      res.json(updatedBook);
    })
    .catch((err) => res.json(err));
});

// return a book someday
// router.put("/:id", (req, res) => {
//   Book.update(
//     {
//       checked_in: true,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((updatedBook) => {
//       res.json(updatedBook);
//     })
//     .catch((err) => res.json(err));
// });
<<<<<<< HEAD

=======
>>>>>>> 282fed43d6f5c248a8ff5c86208ad697dc8a0337
// POST route to donate a book to the library
router.post("/", async (req, res) => {
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
module.exports = router;
