const donateBook = async (event) => {
  event.preventDefault();
};

const donateTitle = document.querySelector("#donate-title").value.trim();
const donateAutor = document.querySelector("#donate-author").value.trim();
const donateGenre = document.querySelector("#donate-genre").value.trim();

if (donateTitle && donateAutor && donateGenre) {
  const response = await fetch("/api/book", {
    method: "POST",
    body: JSON.stringify({
      donateTitle,
      donateAutor,
      donateGenre,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to donate book.");
  }
}

document.querySelector(".donate-form").addEventListener("submit", donateBook);
