async function reserveBook(event) {
  event.preventDefault();

  const id = document.getElementById("book-id").value;

  // Attempted PUT request to update the status of the checked_in varible 
  const checked_in = document.querySelector("#checked_in:checked")
    ? true
    : false;
  console.log(id, checked_in);
  const response = await fetch(`/api/book/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      checked_in: false,
    }),
  });

  if (response.ok) {
    console.log(response, checked_in);
    // document.location.replace(`/library`);
  } else {
    alert("Failure");
  }
}

document.querySelector("#reserveBtn").addEventListener("click", reserveBook);
