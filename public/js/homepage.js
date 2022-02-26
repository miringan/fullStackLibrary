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
      localStorage.setItem("bookSearch", JSON.stringify(response));
      document.location.replace("/bookInformation");
    } else {
      alert("Failure");
    }
    // const bookResponse = await response.json();
      // console.log(bookResponse);
  
  }
};
document
  .querySelector(".search-form")
  .addEventListener("submit", searchBookTitle);
