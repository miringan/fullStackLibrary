const searchBookTitle = async (event) => {
  event.preventDefault();

  const title = document.getElementById("search-input").value.trim();
  console.log("title ", title);

  if (title.length === 0) {
    alert("Please type a book title");
  } else {
    const response = await fetch(`/api/book/?title=${title}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    function renderBookData() {
      let searchResults = document.getElementById("searchResults").innerHTML;
      let context = {
        title: `${response.title}`,
        author: `${response.author}`,
        genre: `${response.genre}`,
        checked_in: `${response.checked_in}`,
        new_arrival: `${response.new_arrival}`,
      };
      let templateScript = Handlebars.compile(template);
      let html = templateScript(context);
      document.body.append(html);
    }
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
  }
};
// var context = { "title" : "", "author" : "", "genre": "", "checked-in": "", "new-arrival": ""};

// //Compile the template data into a function
// var templateScript = Handlebars.compile(template);

// var html = templateScript(context);
// //html = 'My name is Ritesh Kumar . I am a developer.'

// $(document.body).append(html);

document
  .querySelector(".search-form")
  .addEventListener("submit", searchBookTitle);
