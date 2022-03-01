async function reserveBook(event) {
  event.preventDefault();

  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#bookAuthor").value;
  const id = document.querySelector("#book-id").value;

  const checked_in = document.querySelector("#checked_in:checked")
    ? true
    : false;
console.log(title, author, id, checked_in)
  const response = await fetch(`/api/book/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      title,
      author,
      checked_in,
    }),
  });

  if (response.ok) {
    document.location.replace(`/library`);
  } else {
    alert("Failure");
  }
}

document
  .querySelector("#reserveBtn")
  .addEventListener("click", reserveBook);
