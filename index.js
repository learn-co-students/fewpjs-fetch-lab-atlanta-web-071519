const fetchBooks = () => {
  return fetch('https://anapioficeandfire.com/api/books')
  .then((response) => response.json())
  .then((data) => {
    renderBooks(data);
  });
}

function renderBooks(data) {
  const main = document.querySelector('main')
  data.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name; 
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks()
})
