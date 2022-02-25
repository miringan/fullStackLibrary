
const donate = document.getElementById("donate-form");
const donateBook = async (event) => {
  event.preventDefault();

  const title = document.getElementById("donate-title").value.trim();
  const author = document.getElementById("donate-author").value.trim();
  const genre = document.getElementById("donate-genre").value.trim();
  console.log("Donated:", title, author, genre);

  if (title && author && genre) {
    const response = await fetch("/api/book", {
      method: "POST",
      body: JSON.stringify({
        title,
        author,
        genre,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
     alert("Thank you for your donation!");
    } else {
      console.log("Failure")
    }
  }
  
};
donate.addEventListener("submit", donateBook);
