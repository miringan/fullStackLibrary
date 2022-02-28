const reserve = document.getElementById("reserveBtn");

const reserveBook = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#bookTitle");
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const checked_in = document.querySelector("#checkedIn") ? true : false;

  const response = await fetch(`api/book/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      checked_in,
    }),

    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace(`${id}`);
  } else {
    console.log("Failure");
  }
};

reserve.addEventListener("click", reserveBook);
