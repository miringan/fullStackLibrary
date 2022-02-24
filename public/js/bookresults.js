const searchBookTitle = async (event) => {
  event.preventDefault();
  const title = document.getElementById("search-input").value.trim();
  console.log("title ", title);

  if (title.length === 0) {
    alert("Please type a book title");
  } else {

    const response = await fetch(`/api/book/${title}`, {
      method: "GET",
      body: JSON.stringify({
        title,
        author,
        genre,
        date,
        checked_in,
        new_arrival
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //if (response.ok) {
      //return;
      // const title = document.querySelector`${title}`.value.trim();
      // const author = document.querySelector`${author}`.value.trim();
      // const genre = document.querySelector`${genre}`.value.trim();
      // const checked_in = document.querySelector`${checked_in}`.value.trim();
      // const new_arrival = document.querySelector`${new_arrival}`.value.trim();

      //document.location.replace('/profile');
    //} else {
      //alert("Book is not in stock");
   // }
  }
};

document.querySelector("#searchBtn").addEventListener("click", searchBookTitle);
