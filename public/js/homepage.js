const searchBookTitle = async (event) => {
  event.preventDefault();

  const title = document.getElementById("search-input").value.trim();
  console.log("title", title);

  // Searching for a book by title and checking length requirments
  if (title.length === 0) {
    alert("Please type a book title");
  } else {
    const response = await fetch(`/api/book/?title=${title}`, {
      method: "GET",
    });
  }
};
if (response.ok) {
  const data = await response.json();
  console.log(data);
  
  // localStorage.setItem("bookSearch", JSON.stringify(response));
  // document.location.replace("/homepage");
} else {
  alert("Failure");
  document.location.replace("/homepage");
}

// .then(libraryData => libraryData.json())
// .then(libraryData => console.log(libraryData))
// .catch(err => console.error(err));
//   .then(response => {
//     const data = response.json(data);
//     console.log(data);
//   }
// );

// function renderBookData() {
//   let searchResults = document.getElementById("searchResults").innerHTML;
//   let context = {
//     title: `${response.title}`,
//     author: `${response.author}`,
//     genre: `${response.genre}`,
//     checked_in: `${response.checked_in}`,
//     new_arrival: `${response.new_arrival}`,
//   };
//   let templateScript = Handlebars.compile(template);
//   let html = templateScript(context);
//   document.body.append(html);
// }
// if (response.ok) {
//   localStorage.setItem("bookSearch", JSON.stringify(response));
//   document.location.replace("/bookInfo");
// } else {
//   alert("Failure");
//   document.location.replace("/homepage");
// }
// const bookResponse = await response.json();
// console.log(bookResponse);
// }

document
  .querySelector(".search-form")
  .addEventListener("submit", searchBookTitle);
