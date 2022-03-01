async function reserveBook(event) {
  event.preventDefault();

  const id = document.getElementById("book-id").value;

<<<<<<< HEAD
  // Attempted PUT request to update the status of the checked_in varible 
=======
>>>>>>> 282fed43d6f5c248a8ff5c86208ad697dc8a0337
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

<<<<<<< HEAD
document.querySelector("#reserveBtn").addEventListener("click", reserveBook);
=======
document.querySelector("#reserveBtn").addEventListener("click", reserveBook);
>>>>>>> 282fed43d6f5c248a8ff5c86208ad697dc8a0337
