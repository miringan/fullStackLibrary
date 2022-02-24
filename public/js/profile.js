const searchBookTitle = async (event) => {
  event.preventDefault();

  const title = document.querySelector`${title}`.value.trim();
  const author = document.querySelector`${author}`.value.trim();
  const genre = document.querySelector`${genre}`.value.trim();
  const checked_in = document.querySelector`${checked_in}`.value.trim();
  if (form && input ) {
    const response = await fetch(`/api/book`, {
      method: 'GET',
      body: JSON.stringify({ title, author, genre, checked_in }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return
        
      //document.location.replace('/profile');
    } else {
      alert('Book is not in stock');
    }
  }
};



document
  .querySelector('.search-form')
  .addEventListener('submit', searchBookTitle);
