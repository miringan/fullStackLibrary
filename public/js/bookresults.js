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

    if (response.ok) {
       const bookResponse  =  await response.json();
       console.log(bookResponse)

      // for(var i = 0; i < bookResponse.length; i++) {
      //  document.location.replace("/");
      // }
    }
  }
  // function checkBook(lookup) {
  //   return (lookup === title);
  // }
};
document.querySelector("#searchBtn").addEventListener("click", searchBookTitle);
