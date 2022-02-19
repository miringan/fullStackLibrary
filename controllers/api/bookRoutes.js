const router = require("express").Router();
const { Book, User } = require("../../models");
const withAuth = require("../../utils/auth");

// router.post("/", async (req, res) => {
//   try {
//     const newBook = await Book.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newBook);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // Still WIP
// // GET route for library search results
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

router.get("/", async (req, res) => {
  try {
    const libraryData = await Book.findAll({
      attributes: ["title", "author", "genre", "checked_in"],
      // include: [{
      //   model: User,
      //   attributes: ["user_name"]
      // }]
    });
    res.status(200).json(libraryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const libraryData = await Book.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(libraryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

// POST route to donate a book to the library
router.post("/", async (req, res) => {
try {
  const dbBookData = await Book.create({

      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      checked_in: true,
      new_arrival: true,
  
  })
res.status(200).json(dbBookData)
} catch(err) {
  res.status(400).json(err)
}


})
module.exports = router;
