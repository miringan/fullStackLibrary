async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#bookAuthor").value;

  const checked_in = document.querySelector("#checked_in:checked")
    ? true
    : false;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/book/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      author,
      checked_in,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(`/book/${id}`);
  } else {
    alert("Failure");
  }
}

document
  .querySelector(".library")
  .addEventListener("submit", editFormHandler);
